import { test, describe, expect, afterAll, afterEach, beforeAll } from "vitest";
import { ServerErrorRetryHandler, SlackAPIClient, SlackAPIConnectionError } from "../src/index";

import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";

const server = setupServer();
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("Retry handlers", () => {
  describe("Ratelimit", async () => {
    test("successful retry", async () => {
      const responses = [
        HttpResponse.text("", {
          status: 429,
          headers: { "Retry-After": "0.01" },
        }),
        HttpResponse.json({ ok: true }),
      ];
      server.use(
        http.post("https://slack.com/api/auth.test", () => {
          return responses.shift();
        }),
      );
      const client = new SlackAPIClient(undefined, { logLevel: "DEBUG" });
      const response = await client.auth.test();
      expect(response.ok).true;
    });
    test("exceeding max attempts", async () => {
      const responses = [
        HttpResponse.text("", {
          status: 429,
          headers: { "Retry-After": "0.01" },
        }),
        HttpResponse.text("", {
          status: 429,
          headers: { "Retry-After": "0.01" },
        }),
        HttpResponse.json({ ok: true }),
      ];
      server.use(
        http.post("https://slack.com/api/auth.test", () => {
          return responses.shift();
        }),
      );
      const client = new SlackAPIClient(undefined, { logLevel: "DEBUG" });
      const rejects = await expect(client.auth.test()).rejects;
      await rejects.toThrowError(SlackAPIConnectionError);
      await rejects.toThrowError(
        "Failed to call auth.test (cause: SlackAPIConnectionError: Failed to call auth.test (status: 429, body: ))",
      );
    });
  });
  describe("ServerError", async () => {
    test("it's not enabled by default", async () => {
      const responses = [HttpResponse.text("foo", { status: 500 }), HttpResponse.json({ ok: true })];
      server.use(
        http.post("https://slack.com/api/auth.test", () => {
          return responses.shift();
        }),
      );
      const client = new SlackAPIClient(undefined, { logLevel: "DEBUG" });
      const rejects = await expect(client.auth.test()).rejects;
      await rejects.toThrowError(SlackAPIConnectionError);
      await rejects.toThrowError("Failed to call auth.test (status: 500, body: foo)");
    });
    test("successful retry", async () => {
      const responses = [HttpResponse.text("", { status: 500 }), HttpResponse.json({ ok: true })];
      server.use(
        http.post("https://slack.com/api/auth.test", () => {
          return responses.shift();
        }),
      );
      const client = new SlackAPIClient(undefined, { logLevel: "DEBUG" });
      client.retryHandlers.push(new ServerErrorRetryHandler());
      const response = await client.auth.test();
      expect(response.ok).true;
    });
  });
});
