import { assert, test, describe, expect, afterAll, afterEach, beforeAll } from "vitest";
import { SlackAPIClient, SlackAPIConnectionError, SlackAPIError } from "../src/index";

import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";

const server = setupServer();
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("SlackAPIClient", () => {
  test("api.test", async () => {
    server.use(
      http.post("https://slack.com/api/api.test", () => {
        return HttpResponse.json({ ok: true });
      }),
    );
    const client = new SlackAPIClient(undefined, { logLevel: "DEBUG" });
    const response = await client.api.test();
    assert.equal(response.error, undefined);
  });

  describe("auth.test w/ {throwSlackAPIError: true}", async () => {
    test("invalid_auth error as a SlackAPIError", async () => {
      server.use(
        http.post("https://slack.com/api/auth.test", () => {
          return HttpResponse.json({ ok: false, error: "invalid_auth" });
        }),
      );
      const client = new SlackAPIClient("xoxb-invalid", {
        logLevel: "DEBUG",
      });
      const rejects = await expect(client.auth.test()).rejects;
      await rejects.toThrowError(SlackAPIError);
      await rejects.toThrowError('Failed to call auth.test due to invalid_auth: {"ok":false,"error":"invalid_auth","headers":{}}');
    });
  });

  describe("auth.test w/ {throwSlackAPIError: false}", async () => {
    test("invalid_auth error", async () => {
      server.use(
        http.post("https://slack.com/api/auth.test", () => {
          return HttpResponse.json({ ok: false, error: "invalid_auth" });
        }),
      );
      const client = new SlackAPIClient(undefined, {
        logLevel: "DEBUG",
        throwSlackAPIError: false,
      });
      const response = await client.auth.test();
      assert.equal(response.error, "invalid_auth");
    });
  });

  describe("files.uploadV2 w/ {throwSlackAPIError: true}", async () => {
    test("invalid_auth error as a SlackAPIError", async () => {
      server.use(
        http.post("https://slack.com/api/files.getUploadURLExternal", () => {
          return HttpResponse.json({ ok: false, error: "invalid_auth" });
        }),
      );
      const client = new SlackAPIClient("xoxb-invalid", {
        logLevel: "DEBUG",
      });
      const rejects = expect(
        client.files.uploadV2({
          content: "foo",
          filename: "foo.txt",
        }),
      ).rejects;
      await rejects.toThrowError(SlackAPIError);
      await rejects.toThrowError(
        'Failed to call files.getUploadURLExternal due to invalid_auth: {"ok":false,"error":"invalid_auth","headers":{}}',
      );
    });
  });
  describe("files.uploadV2 w/ {throwSlackAPIError: false}", async () => {
    test("invalid_auth error as a SlackAPIError", async () => {
      server.use(
        http.post("https://slack.com/api/files.getUploadURLExternal", () => {
          return HttpResponse.json({ ok: false, error: "invalid_auth" });
        }),
      );
      const client = new SlackAPIClient("xoxb-invalid", {
        logLevel: "DEBUG",
        throwSlackAPIError: false,
      });
      const response = await client.files.uploadV2({
        content: "foo",
        filename: "foo.txt",
      });
      assert.equal(response.error, "invalid_auth");
    });
  });

  test("conversations.list", async () => {
    server.use(
      http.post("https://slack.com/api/conversations.list", async ({ request }) => {
        const params = await request.formData();
        const expected = params.get("types") === "mpim,private_channel";
        if (expected) {
          return HttpResponse.json({ ok: true });
        } else {
          return HttpResponse.json({
            ok: false,
            error: "invalid_request_format",
          });
        }
      }),
    );
    const client = new SlackAPIClient("xoxb-valid", { logLevel: "DEBUG" });
    const response = await client.conversations.list({
      types: ["mpim", "private_channel"],
    });
    assert.equal(response.error, undefined);
  });

  test("users.profile.set", async () => {
    server.use(
      http.post("https://slack.com/api/users.profile.set", async ({ request }) => {
        const params = await request.formData();
        const expected = params.get("profile") === '{"first_name":"John","age":95}';
        if (expected) {
          return HttpResponse.json({ ok: true });
        } else {
          return HttpResponse.json({
            ok: false,
            error: "invalid_request_format",
          });
        }
      }),
    );
    const client = new SlackAPIClient("xoxb-valid", { logLevel: "DEBUG" });
    const response = await client.users.profile.set({
      profile: { first_name: "John", age: 95 },
      user: "W12345",
    });
    assert.equal(response.error, undefined);
  });

  test("chat.postMessage", async () => {
    server.use(
      http.post("https://slack.com/api/chat.postMessage", async ({ request }) => {
        const params = await request.formData();
        const expected = params.get("text") === "Hi there" && params.get("attachments") === '[{"color":"#36a64f","blocks":[]}]';
        if (expected) {
          return HttpResponse.json({ ok: true });
        } else {
          return HttpResponse.json({
            ok: false,
            error: "invalid_request_format",
          });
        }
      }),
    );
    const client = new SlackAPIClient("xoxb-valid", { logLevel: "DEBUG" });
    const response = await client.chat.postMessage({
      channel: "C12345",
      text: "Hi there",
      attachments: [{ color: "#36a64f", blocks: [] }],
    });
    assert.equal(response.error, undefined);
  });

  test("conversations.open", async () => {
    server.use(
      http.post("https://slack.com/api/conversations.open", async ({ request }) => {
        const params = await request.formData();
        const expected = params.get("users") === "W11111,W22222";
        if (expected) {
          return HttpResponse.json({ ok: true });
        } else {
          return HttpResponse.json({
            ok: false,
            error: "invalid_request_format",
          });
        }
      }),
    );
    const client = new SlackAPIClient("xoxb-valid", { logLevel: "DEBUG" });
    const response = await client.conversations.open({
      users: ["W11111", "W22222"],
    });
    assert.equal(response.error, undefined);
  });

  test("connection error (status: 404)", async () => {
    server.use(
      http.post("https://localhost:9999/no-host/auth.test", () => {
        return HttpResponse.text("foo", { status: 404 });
      }),
    );
    const client = new SlackAPIClient("xoxb-invalid", {
      logLevel: "DEBUG",
      baseUrl: "https://localhost:9999/no-host",
    });
    const rejects = expect(client.auth.test()).rejects;
    await rejects.toThrowError(SlackAPIConnectionError);
    await rejects.toThrowError("Failed to call auth.test (status: 404, body: foo)");
  });

  test("connection error (type error)", async () => {
    server.use(
      http.post("https://localhost:9999/xxx/auth.test", () => {
        return HttpResponse.text("not found", { status: 404 });
      }),
    );
    const client = new SlackAPIClient("xoxb-invalid", {
      logLevel: "DEBUG",
      baseUrl: "https://localhost:9999/xxx/",
    });
    const rejects = await expect(client.auth.test()).rejects;
    await rejects.toThrowError(SlackAPIConnectionError);
  });
});
