import { afterAll, afterEach, assert, beforeAll, describe, test } from "vitest";
import { SlackAPIClient } from "../src/index";

import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

const server = setupServer();
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

/**
 * Responds to a single Slack API method with the given JSON body and captures
 * the urlencoded form body so individual fields can be asserted.
 */
function mockMethod(method: string, responseBody: Record<string, unknown>): { body: Promise<URLSearchParams> } {
  let resolveBody: (params: URLSearchParams) => void;
  const body = new Promise<URLSearchParams>((resolve) => {
    resolveBody = resolve;
  });
  server.use(
    http.post(`https://slack.com/api/${method}`, async ({ request }) => {
      resolveBody(new URLSearchParams(await request.text()));
      return HttpResponse.json(responseBody);
    }),
  );
  return { body };
}

const permissionsResponse = {
  ok: true,
  permission_type: "named_entities",
  users: [{ user_id: "U01565LTEBD", username: "joe_smith", email: "joesmith@example.com" }],
};

describe("assistant.search.*", () => {
  test("assistant.search.context serializes list params as CSV and types context_messages", async () => {
    const { body } = mockMethod("assistant.search.context", {
      ok: true,
      results: {
        messages: [
          {
            author_user_id: "U0123456",
            channel_id: "C0123456",
            message_ts: "123456.7890",
            content: "Kicking off the Gizmo revamp",
            is_author_bot: false,
            context_messages: {
              before: [{ text: "What are we discussing?", user_id: "U098765", ts: "123456.7777" }],
              after: [],
            },
          },
        ],
        users: [{ user_id: "U05KTJUUX5E", full_name: "Jason Chen" }],
      },
      response_metadata: { next_cursor: "Q1VSUkVOVF9QQUdFOjI=" },
    });
    const client = new SlackAPIClient("xoxb-valid");

    const response = await client.assistant.search.context({
      query: "What is project gizmo?",
      action_token: "12345.98765.abcd2358fdea",
      channel_types: ["public_channel", "private_channel"],
      content_types: ["messages", "users"],
      include_context_messages: true,
      sort: "timestamp",
      sort_dir: "asc",
      limit: 5,
    });

    const params = await body;
    assert.equal(params.get("query"), "What is project gizmo?");
    assert.equal(params.get("action_token"), "12345.98765.abcd2358fdea");
    assert.equal(params.get("channel_types"), "public_channel,private_channel");
    assert.equal(params.get("content_types"), "messages,users");
    assert.equal(params.get("include_context_messages"), "true");
    assert.equal(params.get("sort"), "timestamp");
    assert.equal(params.get("limit"), "5");

    const message = response.results?.messages?.[0];
    assert.equal(message?.context_messages?.before?.[0]?.user_id, "U098765");
    assert.equal(response.results?.users?.[0]?.full_name, "Jason Chen");
    assert.equal(response.response_metadata?.next_cursor, "Q1VSUkVOVF9QQUdFOjI=");
  });

  test("assistant.search.info can be called without arguments", async () => {
    mockMethod("assistant.search.info", { ok: true, is_ai_search_enabled: true });
    const client = new SlackAPIClient("xoxb-valid");

    const response = await client.assistant.search.info();

    assert.equal(response.is_ai_search_enabled, true);
  });
});

describe("functions.distributions.permissions.*", () => {
  test("set accepts function_callback_id + function_app_id instead of function_id", async () => {
    const { body } = mockMethod("functions.distributions.permissions.set", permissionsResponse);
    const client = new SlackAPIClient("xoxb-valid");

    const response = await client.functions.distributions.permissions.set({
      function_callback_id: "my_function",
      function_app_id: "A12345",
      permission_type: "named_entities",
      user_ids: ["U1234", "U2345"],
    });

    const params = await body;
    assert.equal(params.get("function_callback_id"), "my_function");
    assert.equal(params.get("function_app_id"), "A12345");
    assert.isNull(params.get("function_id"));
    assert.equal(params.get("permission_type"), "named_entities");
    assert.equal(params.get("user_ids"), "U1234,U2345");
    assert.equal(response.permission_type, "named_entities");
    assert.equal(response.users?.[0]?.user_id, "U01565LTEBD");
  });

  test("add, list, and remove call their own endpoints and return the permission set", async () => {
    const client = new SlackAPIClient("xoxb-valid");

    const add = mockMethod("functions.distributions.permissions.add", permissionsResponse);
    const added = await client.functions.distributions.permissions.add({ function_id: "Fn12345", user_ids: ["U1234"] });
    assert.equal((await add.body).get("user_ids"), "U1234");
    assert.equal(added.users?.[0]?.username, "joe_smith");

    const list = mockMethod("functions.distributions.permissions.list", permissionsResponse);
    const listed = await client.functions.distributions.permissions.list({ function_id: "Fn12345" });
    assert.equal((await list.body).get("function_id"), "Fn12345");
    assert.equal(listed.permission_type, "named_entities");

    const remove = mockMethod("functions.distributions.permissions.remove", permissionsResponse);
    const removed = await client.functions.distributions.permissions.remove({ function_id: "Fn12345", user_ids: ["U1234"] });
    assert.equal((await remove.body).get("user_ids"), "U1234");
    assert.equal(removed.ok, true);
  });
});

describe("functions.workflows.steps.list", () => {
  test("identifies the workflow by app ID and workflow reference", async () => {
    const { body } = mockMethod("functions.workflows.steps.list", {
      ok: true,
      steps_versions: [
        {
          title: "Send a greeting",
          workflow_id: "Wf014H7FCWG2",
          step_id: "0",
          is_deleted: false,
          workflow_version_created: "1677282339978193",
        },
      ],
    });
    const client = new SlackAPIClient("xoxb-valid");

    const response = await client.functions.workflows.steps.list({
      function_id: "Fn010N",
      workflow_app_id: "AABC123",
      workflow: "#/workflows/my_workflow_callback_id",
    });

    const params = await body;
    assert.equal(params.get("function_id"), "Fn010N");
    assert.equal(params.get("workflow_app_id"), "AABC123");
    assert.equal(params.get("workflow"), "#/workflows/my_workflow_callback_id");
    assert.equal(response.steps_versions?.[0]?.workflow_id, "Wf014H7FCWG2");
  });
});
