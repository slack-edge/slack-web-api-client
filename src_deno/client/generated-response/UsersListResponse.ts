// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts";
export type UsersListResponse = SlackAPIResponse & {
  arg?: string;
  cache_ts?: number;
  error?: string;
  members?: Member[];
  needed?: string;
  offset?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
};

export interface Member {
  color?: string;
  deleted?: boolean;
  enterprise_user?: EnterpriseUser;
  has_2fa?: boolean;
  id?: string;
  is_admin?: boolean;
  is_app_user?: boolean;
  is_bot?: boolean;
  is_connector_bot?: boolean;
  is_email_confirmed?: boolean;
  is_invited_user?: boolean;
  is_owner?: boolean;
  is_primary_owner?: boolean;
  is_restricted?: boolean;
  is_ultra_restricted?: boolean;
  is_workflow_bot?: boolean;
  locale?: string;
  name?: string;
  profile?: Profile;
  real_name?: string;
  team_id?: string;
  two_factor_type?: string;
  tz?: string;
  tz_label?: string;
  tz_offset?: number;
  updated?: number;
  who_can_share_contact_card?: string;
}

export interface EnterpriseUser {
  enterprise_id?: string;
  enterprise_name?: string;
  id?: string;
  is_admin?: boolean;
  is_owner?: boolean;
  is_primary_owner?: boolean;
  teams?: string[];
}

export interface Profile {
  always_active?: boolean;
  api_app_id?: string;
  avatar_hash?: string;
  bot_id?: string;
  display_name?: string;
  display_name_normalized?: string;
  email?: string;
  fields?: Fields;
  first_name?: string;
  guest_expiration_ts?: number;
  guest_invited_by?: string;
  huddle_state?: string;
  huddle_state_expiration_ts?: number;
  image_1024?: string;
  image_192?: string;
  image_24?: string;
  image_32?: string;
  image_48?: string;
  image_512?: string;
  image_72?: string;
  image_original?: string;
  is_custom_image?: boolean;
  last_name?: string;
  phone?: string;
  pronouns?: string;
  real_name?: string;
  real_name_normalized?: string;
  skype?: string;
  status_emoji?: string;
  status_emoji_display_info?: StatusEmojiDisplayInfo[];
  status_expiration?: number;
  status_text?: string;
  status_text_canonical?: string;
  team?: string;
  title?: string;
}

export interface Fields {}

export interface StatusEmojiDisplayInfo {
  display_alias?: string;
  display_url?: string;
  emoji_name?: string;
  unicode?: string;
}

export interface ResponseMetadata {
  next_cursor?: string;
}
