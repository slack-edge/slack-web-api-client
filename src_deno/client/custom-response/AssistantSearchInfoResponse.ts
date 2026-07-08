// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface

import type { SlackAPIResponse } from "../response.ts";

export type AssistantSearchInfoResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  // deno-lint-ignore no-explicit-any
  capabilities?: Record<string, any>;
};
