///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts"
export type AdminEmojiListResponse = SlackAPIResponse & {
  emoji?: { [key: string]: Emoji };
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
};

export interface Emoji {
  date_created?: number;
  uploaded_by?: string;
  url?: string;
}

export interface ResponseMetadata {
  next_cursor?: string;
}
