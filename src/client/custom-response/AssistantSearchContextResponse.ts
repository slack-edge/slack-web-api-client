// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface

import type { SlackAPIResponse } from "../response";
import type { AnyMessageBlock } from "../../block-kit/blocks";

// https://docs.slack.dev/reference/methods/assistant.search.context
export type AssistantSearchContextResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  needed?: string;
  provided?: string;
  warning?: string;
  results?: AssistantSearchContextResults;
  response_metadata?: {
    next_cursor?: string;
    messages?: string[];
    warnings?: string[];
  };
};

export interface AssistantSearchContextResults {
  messages?: AssistantSearchContextMessage[];
  files?: AssistantSearchContextFile[];
  channels?: AssistantSearchContextChannel[];
  users?: AssistantSearchContextUser[];
}

export interface AssistantSearchContextMessage {
  author_name?: string;
  author_user_id?: string;
  team_id?: string;
  channel_id?: string;
  channel_name?: string;
  message_ts?: string;
  thread_ts?: string;
  content?: string;
  is_author_bot?: boolean;
  permalink?: string;
  blocks?: AnyMessageBlock[];
  context_messages?: {
    before?: AssistantSearchContextSurroundingMessage[];
    after?: AssistantSearchContextSurroundingMessage[];
  };
}

export interface AssistantSearchContextSurroundingMessage {
  text?: string;
  user_id?: string;
  author_name?: string;
  ts?: string;
  blocks?: AnyMessageBlock[];
}

export interface AssistantSearchContextFile {
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

export interface AssistantSearchContextChannel {
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

export interface AssistantSearchContextUser {
  user_id?: string;
  permalink?: string;
  full_name?: string;
  title?: string;
  timezone?: string;
  email?: string;
  profile_pic_permalink?: string;
}
