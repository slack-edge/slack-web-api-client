// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface

import type { SlackAPIResponse } from "../response.ts";

export type AgentsConversationsListViewsResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  needed?: string;
  provided?: string;
  warning?: string;

  views?: {
    view_id?: string;
    file_id?: string;
    view_key?: string;
    label?: string;
    date_added?: number;
    content_version?: number;
  }[];
};
