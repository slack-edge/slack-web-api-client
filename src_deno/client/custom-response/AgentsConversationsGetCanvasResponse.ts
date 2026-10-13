// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface

import type { SlackAPIResponse } from "../response.ts";

export type AgentsConversationsGetCanvasResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  needed?: string;
  provided?: string;
  warning?: string;

  canvas_id?: string;
  title?: string;
  content?: string;
  comments?: {
    id?: string;
    ts?: string;
    user_id?: string;
    text?: string;
    quoted_text?: string;
    is_resolved?: boolean;
    replies?: { ts?: string; user_id?: string; text?: string }[];
    has_more_replies?: boolean;
  }[];
  has_more_comments?: boolean;
};
