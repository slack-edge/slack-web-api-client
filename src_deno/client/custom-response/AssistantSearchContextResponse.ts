// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface

import type { SlackAPIResponse } from "../response.ts";

export type AssistantSearchContextResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  results?: AssistantSearchResults;
  response_metadata?: {
    next_cursor?: string;
  };
};

export interface AssistantSearchResults {
  messages?: AssistantSearchMessage[];
  files?: AssistantSearchFile[];
  channels?: AssistantSearchChannel[];
}

export interface AssistantSearchMessage {
  author_name?: string;
  author_user_id?: string;
  team_id?: string;
  channel_id?: string;
  channel_name?: string;
  message_ts?: string;
  content?: string;
  is_author_bot?: boolean;
  permalink?: string;
  // deno-lint-ignore no-explicit-any
  blocks?: any[];
  context_messages?: AssistantSearchMessage[];
}

export interface AssistantSearchFile {
  uploader_user_id?: string;
  author_user_id?: string;
  author_name?: string;
  team_id?: string;
  file_id?: string;
  date_created?: number;
  date_updated?: number;
  title?: string;
  file_type?: string;
  permalink?: string;
  content?: string;
}

export interface AssistantSearchChannel {
  team_id?: string;
  creator_user_id?: string;
  creator_name?: string;
  date_created?: number;
  date_updated?: number;
  name?: string;
  topic?: string;
  purpose?: string;
  permalink?: string;
}
