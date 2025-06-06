import { assert, test, describe } from "vitest";
import { AnyManifestEvent } from "../src/index";

describe("Manifest", () => {
  test("Events", async () => {
    function validateEvents(e: AnyManifestEvent) {
      return true;
    }
    assert.isTrue(validateEvents("app_deleted"));

    // compile error
    // validateEvents("app_rate_limited");
  });
});
