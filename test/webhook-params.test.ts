import { assert, test, describe } from "vitest";
import { WebhookParams } from "../src/index";

describe("WebhookParams", () => {
  test("support all patterns", async () => {
    const post: WebhookParams = {
      text: "Hi there!",
    };
    assert(post.replace_original === undefined);
    const update: WebhookParams = {
      text: "Hi there!",
      replace_original: true,
    };
    assert(update.replace_original === true);
    const inThread: WebhookParams = {
      text: "Hi there!",
      replace_original: false,
      thread_ts: "111.222",
    };
    assert(inThread.replace_original === false);
    assert(inThread.thread_ts !== undefined);
    const del: WebhookParams = {
      delete_original: true,
    };
    assert(del.delete_original);
  });
});
