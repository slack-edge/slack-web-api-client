import { afterAll, afterEach, assert, beforeAll, describe, test } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { SlackAPIClient, type DataTableBlock } from "../src/index";

const server = setupServer();
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("agents.conversations.* and blocks.validate", () => {
  const methods = [
    "agents.conversations.archive",
    "agents.conversations.create",
    "agents.conversations.getCanvas",
    "agents.conversations.listViews",
    "agents.conversations.removeView",
    "agents.conversations.setCanvasContent",
    "agents.conversations.setCommands",
    "agents.conversations.setProperties",
    "agents.conversations.setView",
    "blocks.validate",
  ];
  test("calls the right endpoints", async () => {
    const called: string[] = [];
    server.use(
      http.post("https://slack.com/api/:method", ({ params }) => {
        called.push(String(params.method));
        return HttpResponse.json({ ok: true });
      }),
    );
    const client = new SlackAPIClient("xoxb-valid");
    await client.agents.conversations.archive({ channel_id: "C123" });
    await client.agents.conversations.create({ name: "x" });
    await client.agents.conversations.getCanvas({ channel: "C123" });
    await client.agents.conversations.listViews({ channel_id: "C123" });
    await client.agents.conversations.removeView({ channel_id: "C123", view_key: "k" });
    await client.agents.conversations.setCanvasContent({ channel: "C123", content: "hi" });
    await client.agents.conversations.setCommands({ channel_id: "C123", commands: [{ name: "run" }] });
    await client.agents.conversations.setProperties({ channel_id: "C123", code_channel: { context_bar_items: [{ key: "a" }] } });
    await client.agents.conversations.setView({ channel_id: "C123", type: "canvas", canvas_id: "F1" });
    const table: DataTableBlock = {
      type: "data_table",
      caption: "Tasks",
      rows: [[{ type: "raw_text", text: "Task" }], [{ type: "raw_number", value: 3, text: "3" }]],
    };
    await client.blocks.validate({ blocks: [table] });
    assert.deepEqual(called, methods);
  });
});
