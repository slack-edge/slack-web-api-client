///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts"
export type EmojiListResponse = SlackAPIResponse & {
  cache_ts?: string;
  categories?: Category[];
  categories_version?: string;
  emoji?: { [key: string]: string };
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export interface Category {
  emoji_names?: string[];
  name?: string;
}
