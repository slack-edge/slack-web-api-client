import { afterAll, afterEach, assert, beforeAll, describe, test } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { SlackAPIClient } from "../src/index";

const server = setupServer();
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("slackbot.skills.*, admin.slackbot.skills.* and canvases.getContent", () => {
  test("calls the right endpoints", async () => {
    const called: string[] = [];
    server.use(
      http.post("https://slack.com/api/:method", ({ params }) => {
        called.push(String(params.method));
        return HttpResponse.json({ ok: true });
      }),
    );
    const client = new SlackAPIClient("xoxb-valid");
    await client.slackbot.skills.create({ display_name: "Skill", instructions: "# Hi", category: "engineering" });
    await client.slackbot.skills.delete({ skill_id: "F1" });
    await client.slackbot.skills.info({ skill_id: "F1" });
    await client.slackbot.skills.list({ filter: "owned" });
    await client.slackbot.skills.update({ skill_id: "F1", description: "" });
    await client.slackbot.skills.library.add({ skill_id: "F1" });
    await client.slackbot.skills.library.remove({ skill_id: "F1" });
    await client.admin.slackbot.skills.list({ publish_status: "published" });
    await client.admin.slackbot.skills.publish({ skill_ids: ["F1"] });
    await client.admin.slackbot.skills.setAutoEnabled({ skill_id: "F1", permission_type: "everyone" });
    await client.admin.slackbot.skills.unpublish({ skill_ids: ["F1"] });
    await client.canvases.getContent({ canvas_id: "F1", content_type: "html" });
    assert.deepEqual(called, [
      "slackbot.skills.create",
      "slackbot.skills.delete",
      "slackbot.skills.info",
      "slackbot.skills.list",
      "slackbot.skills.update",
      "slackbot.skills.library.add",
      "slackbot.skills.library.remove",
      "admin.slackbot.skills.list",
      "admin.slackbot.skills.publish",
      "admin.slackbot.skills.setAutoEnabled",
      "admin.slackbot.skills.unpublish",
      "canvases.getContent",
    ]);
  });
});
