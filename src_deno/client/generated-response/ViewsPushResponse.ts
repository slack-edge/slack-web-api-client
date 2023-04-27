// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts";
import { AnyHomeTabBlock } from "../../block-kit/blocks.ts";
export type ViewsPushResponse = SlackAPIResponse & {
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
  view?: View;
  warning?: string;
};

export interface ResponseMetadata {
  messages?: string[];
}

export interface View {
  app_id?: string;
  app_installed_team_id?: string;
  blocks?: AnyHomeTabBlock[];
  bot_id?: string;
  callback_id?: string;
  clear_on_close?: boolean;
  close?: Close;
  external_id?: string;
  hash?: string;
  id?: string;
  notify_on_close?: boolean;
  previous_view_id?: string;
  private_metadata?: string;
  root_view_id?: string;
  state?: State;
  submit?: Close;
  submit_disabled?: boolean;
  team_id?: string;
  title?: Close;
  type?: string;
}

export interface Block {
  accessory?: Accessory;
  alt_text?: string;
  author_name?: string;
  block_id?: string;
  description?: Close;
  dispatch_action?: boolean;
  element?: PurpleElement;
  elements?: ElementElement[];
  fallback?: string;
  fields?: Close[];
  hint?: Close;
  image_bytes?: number;
  image_height?: number;
  image_url?: string;
  image_width?: number;
  label?: Close;
  optional?: boolean;
  provider_icon_url?: string;
  provider_name?: string;
  text?: Close;
  thumbnail_url?: string;
  title?: Close;
  title_url?: string;
  type?: string;
  video_url?: string;
}

export interface Accessory {
  alt_text?: string;
  fallback?: string;
  image_bytes?: number;
  image_height?: number;
  image_url?: string;
  image_width?: number;
  type?: string;
}

export interface Close {
  emoji?: boolean;
  text?: string;
  type?: Type;
  verbatim?: boolean;
}

export enum Type {
  Empty = "",
  Mrkdwn = "mrkdwn",
  PlainText = "plain_text",
}

export interface PurpleElement {
  accessibility_label?: string;
  action_id?: string;
  alt_text?: string;
  confirm?: Confirm;
  default_to_current_conversation?: boolean;
  dispatch_action_config?: DispatchActionConfig;
  fallback?: string;
  filter?: Filter;
  focus_on_load?: boolean;
  image_bytes?: number;
  image_height?: number;
  image_url?: string;
  image_width?: number;
  initial_channel?: string;
  initial_conversation?: string;
  initial_date?: string;
  initial_date_time?: number;
  initial_option?: Option;
  initial_time?: string;
  initial_user?: string;
  initial_value?: string;
  max_length?: number;
  min_length?: number;
  min_query_length?: number;
  multiline?: boolean;
  option_groups?: OptionGroup[];
  options?: Option[];
  placeholder?: Close;
  response_url_enabled?: boolean;
  style?: string;
  text?: Close;
  timezone?: string;
  type?: string;
  url?: string;
  value?: string;
}

export interface Confirm {
  confirm?: Close;
  deny?: Close;
  style?: string;
  text?: Close;
  title?: Close;
}

export interface DispatchActionConfig {
  trigger_actions_on?: string[];
}

export interface Filter {
  exclude_bot_users?: boolean;
  exclude_external_shared_channels?: boolean;
  include?: any[];
}

export interface Option {
  description?: Close;
  text?: Close;
  url?: string;
  value?: string;
}

export interface OptionGroup {
  label?: Close;
  options?: Option[];
}

export interface ElementElement {
  accessibility_label?: string;
  action_id?: string;
  alt_text?: string;
  confirm?: Confirm;
  default_to_current_conversation?: boolean;
  fallback?: string;
  filter?: Filter;
  focus_on_load?: boolean;
  image_bytes?: number;
  image_height?: number;
  image_url?: string;
  image_width?: number;
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
  option_groups?: OptionGroup[];
  options?: Option[];
  placeholder?: Close;
  response_url_enabled?: boolean;
  style?: string;
  text?: Close;
  timezone?: string;
  type?: string;
  url?: string;
  value?: string;
}

export interface State {}
