// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts";
export type FilesCompleteUploadExternalResponse = SlackAPIResponse & {
  error?: string;
  files?: File[];
  needed?: string;
  ok: boolean;
  provided?: string;
};

export interface File {
  channels?: string[];
  comments_count?: number;
  created?: number;
  display_as_bot?: boolean;
  edit_link?: string;
  editable?: boolean;
  external_type?: string;
  file_access?: string;
  filetype?: string;
  groups?: string[];
  has_more_shares?: boolean;
  has_rich_preview?: boolean;
  id?: string;
  ims?: string[];
  is_external?: boolean;
  is_public?: boolean;
  is_starred?: boolean;
  lines?: number;
  lines_more?: number;
  media_display_type?: string;
  mimetype?: string;
  mode?: string;
  name?: string;
  permalink?: string;
  permalink_public?: string;
  pretty_type?: string;
  preview?: string;
  preview_highlight?: string;
  preview_is_truncated?: boolean;
  public_url_shared?: boolean;
  shares?: Shares;
  size?: number;
  timestamp?: number;
  title?: string;
  url_private?: string;
  url_private_download?: string;
  user?: string;
  user_team?: string;
  username?: string;
}

export interface Shares {
  public?: { [key: string]: Public[] };
}

export interface Public {
  channel_name?: string;
  latest_reply?: string;
  reply_count?: number;
  reply_users?: string[];
  reply_users_count?: number;
  share_user_id?: string;
  source?: string;
  team_id?: string;
  thread_ts?: string;
  ts?: string;
}
