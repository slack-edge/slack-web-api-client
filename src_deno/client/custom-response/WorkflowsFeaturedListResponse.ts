// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface

import type { SlackAPIResponse } from "../response.ts";

export interface FeaturedWorkflowChannel {
  channel_id?: string;
  trigger_ids?: string[];
}

export type WorkflowsFeaturedListResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  channels?: FeaturedWorkflowChannel[];
};
