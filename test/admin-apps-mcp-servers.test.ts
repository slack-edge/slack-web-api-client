import { afterAll, afterEach, assert, beforeAll, describe, test } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { SlackAPIClient, type ManifestParams } from "../src/index";

const server = setupServer();
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("admin.apps.mcp.servers.* and related request params", () => {
  test("calls the right endpoints with the right params", async () => {
    const called: Record<string, Record<string, string>> = {};
    server.use(
      http.post("https://slack.com/api/:method", async ({ params, request }) => {
        const body = Object.fromEntries(new URLSearchParams(await request.text()));
        called[String(params.method)] = body;
        return HttpResponse.json({ ok: true });
      }),
    );
    const client = new SlackAPIClient("xoxp-valid");
    await client.admin.apps.mcp.servers.list();
    await client.admin.apps.mcp.servers.list({ limit: 10, cursor: "c" });
    await client.admin.apps.mcp.servers.permissions.list({ app_id: "A123" });
    await client.admin.apps.mcp.servers.permissions.set({
      app_id: "A123",
      server_id: "S1",
      permission_type: "named_entities",
      user_ids: ["U1", "U2"],
      usergroup_ids: ["S2"],
    });
    await client.canvases.create({ document_content: { type: "markdown", markdown: "# hi" }, channel_id: "C123" });
    await client.team.info({ include_slackbot_availability: true });
    await client.files.completeUploadExternal({
      files: [{ id: "F1" }],
      channel_id: "C123",
      blocks: [{ type: "section", text: { type: "mrkdwn", text: "hi" } }],
    });

    assert.deepEqual(Object.keys(called).sort(), [
      "admin.apps.mcp.servers.list",
      "admin.apps.mcp.servers.permissions.list",
      "admin.apps.mcp.servers.permissions.set",
      "canvases.create",
      "files.completeUploadExternal",
      "team.info",
    ]);
    assert.equal(called["admin.apps.mcp.servers.list"].limit, "10");
    assert.equal(called["admin.apps.mcp.servers.permissions.set"].permission_type, "named_entities");
    assert.equal(called["admin.apps.mcp.servers.permissions.set"].user_ids, "U1,U2");
    assert.equal(called["canvases.create"].channel_id, "C123");
    assert.equal(called["team.info"].include_slackbot_availability, "true");
    assert.equal(JSON.parse(called["files.completeUploadExternal"].blocks)[0].type, "section");
  });

  test("manifest supports user_connections and app_home.agent_tasks_enabled", () => {
    const manifest: ManifestParams = {
      display_information: { name: "app" },
      features: {
        app_home: { agent_tasks_enabled: false },
        user_connections: { is_enabled: true, auth_hosts: ["auth.example.com"] },
      },
      settings: { event_subscriptions: { bot_events: ["user_connection", "user_connection_status_requested"] } },
    };
    assert.equal(manifest.features?.user_connections?.is_enabled, true);
  });
});
