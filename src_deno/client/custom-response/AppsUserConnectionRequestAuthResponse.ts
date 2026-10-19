// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface

import type { SlackAPIResponse } from "../response.ts";

export type AppsUserConnectionRequestAuthResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  needed?: string;
  provided?: string;
  warning?: string;

  response_metadata?: { messages?: string[]; warnings?: string[] };
};
