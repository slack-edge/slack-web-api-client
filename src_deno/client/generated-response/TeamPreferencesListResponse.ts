///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts"
export type TeamPreferencesListResponse = SlackAPIResponse & {
  allow_message_deletion?: boolean;
  disable_file_uploads?: string;
  display_real_names?: boolean;
  error?: string;
  msg_edit_window_mins?: number;
  needed?: string;
  ok: boolean;
  provided?: string;
  who_can_post_general?: string;
};
