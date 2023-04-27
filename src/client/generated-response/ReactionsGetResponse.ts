// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
import { AnyMessageBlock } from "../../block-kit/blocks";
export type ReactionsGetResponse = SlackAPIResponse & {
  channel?: string;
  error?: string;
  message?: Message;
  needed?: string;
  ok: boolean;
  provided?: string;
  type?: string;
};

export interface Message {
  app_id?: string;
  blocks?: AnyMessageBlock[];
  bot_id?: string;
  bot_profile?: BotProfile;
  permalink?: string;
  reactions?: Reaction[];
  team?: string;
  text?: string;
  ts?: string;
  type?: string;
  user?: string;
}

export interface Block {
  accessory?: Accessory;
  alt_text?: string;
  api_decoration_available?: boolean;
  app_collaborators?: string[];
  app_id?: string;
  author_name?: string;
  block_id?: string;
  bot_user_id?: string;
  button_label?: string;
  call?: Call;
  call_id?: string;
  description?: Description;
  dispatch_action?: boolean;
  element?: Accessory;
  elements?: Accessory[];
  external_id?: string;
  fallback?: string;
  fields?: Description[];
  file?: File;
  file_id?: string;
  function_trigger_id?: string;
  hint?: Description;
  image_bytes?: number;
  image_height?: number;
  image_url?: string;
  image_width?: number;
  is_workflow_app?: boolean;
  label?: Description;
  optional?: boolean;
  provider_icon_url?: string;
  provider_name?: string;
  source?: string;
  text?: Description;
  thumbnail_url?: string;
  title?: Description;
  title_url?: string;
  type?: string;
  url?: string;
  video_url?: string;
}

export interface Accessory {
  accessibility_label?: string;
  action_id?: string;
  alt_text?: string;
  border?: number;
  confirm?: Confirm;
  default_to_current_conversation?: boolean;
  elements?: AccessoryElement[];
  fallback?: string;
  filter?: Filter;
  focus_on_load?: boolean;
  image_bytes?: number;
  image_height?: number;
  image_url?: string;
  image_width?: number;
  indent?: number;
  initial_channel?: string;
  initial_channels?: string[];
  initial_conversation?: string;
  initial_conversations?: string[];
  initial_date?: string;
  initial_date_time?: number;
  initial_option?: Option;
  initial_options?: Option[];
  initial_time?: string;
  initial_user?: string;
  initial_users?: string[];
  max_selected_items?: number;
  min_query_length?: number;
  offset?: number;
  option_groups?: OptionGroup[];
  options?: Option[];
  placeholder?: Description;
  response_url_enabled?: boolean;
  style?: string;
  text?: Description;
  timezone?: string;
  type?: string;
  url?: string;
  value?: string;
}

export interface Confirm {
  confirm?: Description;
  deny?: Description;
  style?: string;
  text?: Description;
  title?: Description;
}

export interface Description {
  emoji?: boolean;
  text?: string;
  type?: string;
  verbatim?: boolean;
}

export interface AccessoryElement {
  border?: number;
  elements?: PurpleElement[];
  indent?: number;
  offset?: number;
  style?: string;
  text?: string;
  type?: string;
}

export interface PurpleElement {
  channel_id?: string;
  name?: string;
  range?: string;
  skin_tone?: number;
  style?: Style;
  team_id?: string;
  text?: string;
  timestamp?: string;
  type?: string;
  unicode?: string;
  url?: string;
  user_id?: string;
  usergroup_id?: string;
  value?: string;
}

export interface Style {
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  strike?: boolean;
}

export interface Filter {
  exclude_bot_users?: boolean;
  exclude_external_shared_channels?: boolean;
  include?: string[];
}

export interface Option {
  description?: Description;
  text?: Description;
  url?: string;
  value?: string;
}

export interface OptionGroup {
  label?: Description;
  options?: Option[];
}

export interface Call {
  media_backend_type?: string;
  v1?: V1;
}

export interface V1 {
  active_participants?: Participant[];
  all_participants?: Participant[];
  app_icon_urls?: AppIconUrls;
  app_id?: string;
  channels?: string[];
  created_by?: string;
  date_end?: number;
  date_start?: number;
  desktop_app_join_url?: string;
  display_id?: string;
  has_ended?: boolean;
  id?: string;
  is_dm_call?: boolean;
  join_url?: string;
  name?: string;
  was_accepted?: boolean;
  was_missed?: boolean;
  was_rejected?: boolean;
}

export interface Participant {
  avatar_url?: string;
  display_name?: string;
  external_id?: string;
  slack_id?: string;
}

export interface AppIconUrls {
  image_1024?: string;
  image_128?: string;
  image_192?: string;
  image_32?: string;
  image_36?: string;
  image_48?: string;
  image_512?: string;
  image_64?: string;
  image_72?: string;
  image_96?: string;
  image_original?: string;
}

export interface File {
  id?: string;
}

export interface BotProfile {
  app_id?: string;
  deleted?: boolean;
  icons?: Icons;
  id?: string;
  name?: string;
  team_id?: string;
  updated?: number;
}

export interface Icons {
  image_36?: string;
  image_48?: string;
  image_72?: string;
}

export interface Reaction {
  count?: number;
  name?: string;
  users?: string[];
}
