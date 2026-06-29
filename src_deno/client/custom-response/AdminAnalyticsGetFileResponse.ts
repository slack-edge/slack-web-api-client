// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface

import type { SlackAPIResponse } from "../response.ts";

// admin.analytics.getFile returns a gzipped JSON file as the response body.
export type AdminAnalyticsGetFileResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  // deno-lint-ignore no-explicit-any
  file_data?: any[];
};
