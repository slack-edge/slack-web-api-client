// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface

import type { SlackAPIResponse } from "../response";

// https://docs.slack.dev/reference/methods/assistant.search.info
export type AssistantSearchInfoResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  needed?: string;
  provided?: string;
  warning?: string;
  is_ai_search_enabled?: boolean;
};
