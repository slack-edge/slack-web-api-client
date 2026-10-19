import { afterAll, afterEach, assert, beforeAll, describe, test } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { SlackAPIClient } from "../src/index";

const server = setupServer();
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("apps.user.connection.*", () => {
  test("calls the right endpoints", async () => {
    const called: string[] = [];
    server.use(
      http.post("https://slack.com/api/:method", ({ params }) => {
        called.push(String(params.method));
        return HttpResponse.json({ ok: true, changed_user_ids: ["U1"] });
      }),
    );
    const client = new SlackAPIClient("xoxb-valid");
    const bulk = await client.apps.user.connection.bulkUpdate({ connected_user_ids: ["U1"], disconnected_user_ids: ["U2"] });
    assert.deepEqual(bulk.changed_user_ids, ["U1"]);
    await client.apps.user.connection.requestAuth({
      trigger_id: "123.abc",
      primary_provider: { value: "github", name: { type: "plain_text", text: "GitHub" }, is_connected: false },
    });
    assert.deepEqual(called, ["apps.user.connection.bulkUpdate", "apps.user.connection.requestAuth"]);
  });
});
