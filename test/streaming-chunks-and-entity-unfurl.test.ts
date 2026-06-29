import { afterAll, afterEach, assert, beforeAll, describe, test } from "vitest";
import { SlackAPIClient } from "../src/index";

import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

const server = setupServer();
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

/**
 * Captures the urlencoded form body of a single Slack API call so individual
 * fields can be asserted against their serialized wire representation.
 */
function captureFormBody(method: string): { body: Promise<URLSearchParams> } {
  let resolveBody: (params: URLSearchParams) => void;
  const body = new Promise<URLSearchParams>((resolve) => {
    resolveBody = resolve;
  });
  server.use(
    http.post(`https://slack.com/api/${method}`, async ({ request }) => {
      const text = await request.text();
      resolveBody(new URLSearchParams(text));
      return HttpResponse.json({ ok: true });
    }),
  );
  return { body };
}

describe("chat streaming chunks", () => {
  test("chat.startStream serializes chunks as JSON and passes task_display_mode through", async () => {
    const { body } = captureFormBody("chat.startStream");
    const client = new SlackAPIClient("xoxb-valid", { logLevel: "DEBUG" });

    const response = await client.chat.startStream({
      channel: "C12345",
      thread_ts: "1700000000.000100",
      task_display_mode: "timeline",
      chunks: [
        { type: "plan_update", title: "Researching" },
        {
          type: "task_update",
          id: "task-1",
          title: "Search the docs",
          status: "in_progress",
          sources: [{ type: "url", url: "https://example.com", text: "Example" }],
        },
      ],
    });

    assert.equal(response.error, undefined);
    const params = await body;
    assert.equal(params.get("task_display_mode"), "timeline");
    assert.equal(
      params.get("chunks"),
      '[{"type":"plan_update","title":"Researching"},{"type":"task_update","id":"task-1","title":"Search the docs","status":"in_progress","sources":[{"type":"url","url":"https://example.com","text":"Example"}]}]',
    );
  });

  test("chat.appendStream accepts chunks without markdown_text", async () => {
    const { body } = captureFormBody("chat.appendStream");
    const client = new SlackAPIClient("xoxb-valid", { logLevel: "DEBUG" });

    const response = await client.chat.appendStream({
      channel: "C12345",
      ts: "1700000000.000200",
      chunks: [{ type: "markdown_text", text: "Partial answer" }],
    });

    assert.equal(response.error, undefined);
    const params = await body;
    // markdown_text is now optional and was omitted, so it must not be sent.
    assert.equal(params.get("markdown_text"), null);
    assert.equal(params.get("chunks"), '[{"type":"markdown_text","text":"Partial answer"}]');
  });

  test("chat.stopStream serializes a final blocks chunk", async () => {
    const { body } = captureFormBody("chat.stopStream");
    const client = new SlackAPIClient("xoxb-valid", { logLevel: "DEBUG" });

    const response = await client.chat.stopStream({
      channel: "C12345",
      ts: "1700000000.000300",
      chunks: [{ type: "blocks", blocks: [{ type: "divider" }] }],
    });

    assert.equal(response.error, undefined);
    const params = await body;
    assert.equal(params.get("chunks"), '[{"type":"blocks","blocks":[{"type":"divider"}]}]');
  });
});

describe("chat.unfurl entity metadata", () => {
  test("serializes metadata.entities as JSON when unfurls is omitted", async () => {
    const { body } = captureFormBody("chat.unfurl");
    const client = new SlackAPIClient("xoxb-valid", { logLevel: "DEBUG" });

    const response = await client.chat.unfurl({
      channel: "C12345",
      ts: "1700000000.000400",
      metadata: {
        entities: [
          {
            entity_type: "slack#/entities/task",
            entity_payload: {
              attributes: { title: { text: "Ticket #42" } },
              fields: { status: { value: "Open" } },
            },
            external_ref: { id: "TICKET-42", type: "ticket" },
            url: "https://example.com/tickets/42",
          },
        ],
      },
    });

    assert.equal(response.error, undefined);
    const params = await body;
    // unfurls is now optional; an entity-only unfurl must not send an empty unfurls field.
    assert.equal(params.get("unfurls"), null);
    assert.equal(
      params.get("metadata"),
      '{"entities":[{"entity_type":"slack#/entities/task","entity_payload":{"attributes":{"title":{"text":"Ticket #42"}},"fields":{"status":{"value":"Open"}}},"external_ref":{"id":"TICKET-42","type":"ticket"},"url":"https://example.com/tickets/42"}]}',
    );
  });
});

describe("assistant.threads.setStatus loading_messages", () => {
  test("serializes loading_messages as a comma-joined string", async () => {
    const { body } = captureFormBody("assistant.threads.setStatus");
    const client = new SlackAPIClient("xoxb-valid", { logLevel: "DEBUG" });

    const response = await client.assistant.threads.setStatus({
      channel_id: "C12345",
      thread_ts: "1700000000.000500",
      status: "is thinking...",
      loading_messages: ["Reading the thread", "Drafting a reply"],
    });

    assert.equal(response.error, undefined);
    const params = await body;
    assert.equal(params.get("status"), "is thinking...");
    // String arrays are comma-joined by the client, not JSON-encoded.
    assert.equal(params.get("loading_messages"), "Reading the thread,Drafting a reply");
  });
});
