import { assert, test, describe } from "vitest";
import { AnyManifestEvent } from "../src/index";

describe("Manifest", () => {
  test("Events", async () => {
    function validateEvents(e: AnyManifestEvent) {
      return true;
    }
    assert.isTrue(validateEvents("app_deleted"));
    assert.isTrue(validateEvents("app_context_changed"));
    assert.isTrue(validateEvents("entity_comments_requested"));

    // compile error
    // validateEvents("app_rate_limited");
  });
});
