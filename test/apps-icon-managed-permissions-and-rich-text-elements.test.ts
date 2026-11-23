import { afterAll, afterEach, assert, beforeAll, describe, test } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { SlackAPIClient, type RichTextBlock } from "../src/index";

const server = setupServer();
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("apps.icon.set and apps.managed.permissions.set", () => {
  test("calls the right endpoints with the right params", async () => {
    const calls: { method: string; body: URLSearchParams }[] = [];
    server.use(
      http.post("https://slack.com/api/:method", async ({ params, request }) => {
        calls.push({ method: String(params.method), body: new URLSearchParams(await request.text()) });
        if (params.method === "apps.managed.permissions.set") {
          return HttpResponse.json({ ok: true, permission_type: "app_owner", user_ids: ["U1"] });
        }
        return HttpResponse.json({ ok: true });
      }),
    );
    const client = new SlackAPIClient("xoxp-valid");
    await client.apps.icon.set({ app_id: "A123", url: "https://example.com/icon.png" });
    const res = await client.apps.managed.permissions.set({ app_id: "A123", permissions: "app_owner" });
    assert.deepEqual(
      calls.map((c) => c.method),
      ["apps.icon.set", "apps.managed.permissions.set"],
    );
    assert.equal(calls[0].body.get("app_id"), "A123");
    assert.equal(calls[0].body.get("url"), "https://example.com/icon.png");
    assert.equal(calls[1].body.get("permissions"), "app_owner");
    assert.equal(res.permission_type, "app_owner");
    assert.deepEqual(res.user_ids, ["U1"]);
  });
});

describe("rich text section elements", () => {
  test("accepts all documented rich text section element types", () => {
    const block: RichTextBlock = {
      type: "rich_text",
      elements: [
        {
          type: "rich_text_section",
          elements: [
            { type: "attachment_mention", url: "https://example.com/attachment", app_id: "A1" },
            { type: "canvas", file_id: "F123ABC456", is_skill_invocation: true },
            { type: "canvas_message_unfurl", root_message_ts: "1783613573", root_message_channel: "C1" },
            { type: "canvas_user_mention", user_id: "U123ABC456" },
            {
              type: "citation",
              url: "https://example.com/source",
              text: "Source title",
              index: 1,
              details: { citation_type: "file", descriptor: "Team canvas", file_id: "F0ABCDEFG12" },
            },
            { type: "citation", url: "https://example.com", text: "Web", index: 2, details: { citation_type: "web", title: "t" } },
            { type: "list_record", file_id: "F123ABC456", record_id: "Rec1" },
            { type: "message_mention", channel_id: "C123ABC456", message_ts: "1720710212.123456" },
            { type: "salesforce_data_field", salesforce_record_id: "001ABC456DEF789", salesforce_include_field_label: true },
            { type: "tag", text: "In progress", color: "blue", style: { bold: true } },
            {
              type: "work_object_mention",
              entity_id: "E123ABC456",
              app_id: "A123ABC456",
              text: "Work object",
              url: "https://example.com/work-object",
            },
            { type: "workflow_mention", workflow_id: "Wf123ABC456", function_trigger_id: "Ft123ABC456", text: "Run workflow" },
          ],
        },
      ],
    };
    assert.equal(block.elements[0].elements.length, 12);
  });
});
