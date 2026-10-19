// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface

import type { SlackAPIResponse } from "../response";

export type AppsUserConnectionBulkUpdateResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  needed?: string;
  provided?: string;
  warning?: string;

  changed_user_ids?: string[];
  failures?: { user_id?: string; error?: string }[];
  response_metadata?: { messages?: string[]; warnings?: string[] };
};
