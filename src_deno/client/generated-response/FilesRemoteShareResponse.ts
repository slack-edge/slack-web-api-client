// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import type { SlackAPIResponse } from "../response.ts";
export type FilesRemoteShareResponse = SlackAPIResponse & {
  error?: string;
  file?: File;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export interface File {
  access?: string;
  alt_txt?: string;
  app_id?: string;
  app_name?: string;
  bot_id?: string;
  can_toggle_canvas_lock?: boolean;
  canvas_printing_enabled?: boolean;
  canvas_template_mode?: string;
  cc?: Cc[];
  channel_actions_count?: number;
  channel_actions_ts?: string;
  channels?: string[];
  comments_count?: number;
  converted_pdf?: string;
  created?: number;
  deanimate?: string;
  deanimate_gif?: string;
  display_as_bot?: boolean;
  dm_mpdm_users_with_file_access?: DmMpdmUsersWithFileAccess[];
  duration_ms?: number;
  edit_link?: string;
  edit_timestamp?: number;
  editable?: boolean;
  editor?: string;
  editors?: string[];
  external_id?: string;
  external_type?: string;
  external_url?: string;
  favorites?: Favorite[];
  file_access?: string;
  filetype?: string;
  from?: Cc[];
  groups?: string[];
  has_more?: boolean;
  has_more_shares?: boolean;
  has_rich_preview?: boolean;
  headers?: Headers;
  hls?: string;
  hls_embed?: string;
  id?: string;
  image_exif_rotation?: number;
  ims?: string[];
  initial_comment?: InitialComment;
  is_channel_space?: boolean;
  is_external?: boolean;
  is_public?: boolean;
  is_restricted_sharing_enabled?: boolean;
  is_starred?: boolean;
  last_editor?: string;
  last_read?: number;
  lines?: number;
  lines_more?: number;
  linked_channel_id?: string;
  list_csv_download_url?: string;
  list_limits?: ListLimits;
  list_metadata?: ListMetadata;
  media_display_type?: string;
  media_progress?: MediaProgress;
  mimetype?: string;
  mode?: string;
  mp4?: string;
  mp4_low?: string;
  name?: string;
  non_owner_editable?: boolean;
  num_stars?: number;
  org_or_workspace_access?: string;
  original_attachment_count?: number;
  original_h?: string;
  original_w?: string;
  permalink?: string;
  permalink_public?: string;
  pinned_to?: string[];
  pjpeg?: string;
  plain_text?: string;
  pretty_type?: string;
  preview?: string;
  preview_highlight?: string;
  preview_is_truncated?: boolean;
  preview_plain_text?: string;
  private_channels_with_file_access_count?: number;
  private_file_with_access_count?: number;
  public_url_shared?: boolean;
  quip_thread_id?: string;
  reactions?: Reaction[];
  saved?: Saved;
  sent_to_self?: boolean;
  shares?: Shares;
  show_badge?: boolean;
  simplified_html?: string;
  size?: number;
  source_team?: string;
  subject?: string;
  subtype?: string;
  team_pref_version_history_enabled?: boolean;
  teams_shared_with?: any[];
  template_conversion_ts?: number;
  template_description?: string;
  template_icon?: string;
  template_name?: string;
  template_title?: string;
  thumb_1024?: string;
  thumb_1024_gif?: string;
  thumb_1024_h?: string;
  thumb_1024_w?: string;
  thumb_160?: string;
  thumb_160_gif?: string;
  thumb_160_h?: string;
  thumb_160_w?: string;
  thumb_360?: string;
  thumb_360_gif?: string;
  thumb_360_h?: string;
  thumb_360_w?: string;
  thumb_480?: string;
  thumb_480_gif?: string;
  thumb_480_h?: string;
  thumb_480_w?: string;
  thumb_64?: string;
  thumb_64_gif?: string;
  thumb_64_h?: string;
  thumb_64_w?: string;
  thumb_720?: string;
  thumb_720_gif?: string;
  thumb_720_h?: string;
  thumb_720_w?: string;
  thumb_80?: string;
  thumb_800?: string;
  thumb_800_gif?: string;
  thumb_800_h?: string;
  thumb_800_w?: string;
  thumb_80_gif?: string;
  thumb_80_h?: string;
  thumb_80_w?: string;
  thumb_960?: string;
  thumb_960_gif?: string;
  thumb_960_h?: string;
  thumb_960_w?: string;
  thumb_gif?: string;
  thumb_pdf?: string;
  thumb_pdf_h?: string;
  thumb_pdf_w?: string;
  thumb_tiny?: string;
  thumb_video?: string;
  thumb_video_h?: number;
  thumb_video_w?: number;
  timestamp?: number;
  title?: string;
  title_blocks?: Block[];
  to?: Cc[];
  transcription?: Transcription;
  update_notification?: number;
  updated?: number;
  url_private?: string;
  url_private_download?: string;
  url_static_preview?: string;
  user?: string;
  user_team?: string;
  username?: string;
  vtt?: string;
}

export interface Cc {
  address?: string;
  name?: string;
  original?: string;
}

export interface DmMpdmUsersWithFileAccess {
  access?: string;
  user_id?: string;
}

export interface Favorite {
  collection_id?: string;
  collection_name?: string;
  position?: string;
}

export interface Headers {
  date?: string;
  in_reply_to?: string;
  message_id?: string;
  reply_to?: string;
}

export interface InitialComment {
  channel?: string;
  comment?: string;
  created?: number;
  id?: string;
  is_intro?: boolean;
  timestamp?: number;
  user?: string;
}

export interface ListLimits {
  column_count?: number;
  column_count_limit?: number;
  max_attachments_per_cell?: number;
  over_column_maximum?: boolean;
  over_row_maximum?: boolean;
  over_view_maximum?: boolean;
  row_count?: number;
  row_count_limit?: number;
  view_count?: number;
  view_count_limit?: number;
}

export interface ListMetadata {
  creation_source?: CreationSource;
  description?: string;
  description_blocks?: Block[];
  icon?: string;
  icon_team_id?: string;
  icon_url?: string;
  integrations?: string[];
  is_trial?: boolean;
  schema?: Schema[];
  views?: View[];
}

export interface CreationSource {
  reference_id?: string;
  type?: string;
  workflow_function_id?: string;
}

export interface Block {
  accessory?: Accessory;
  alt_text?: string;
  app_collaborators?: string[];
  app_id?: string;
  author_name?: string;
  block_id?: string;
  bot_user_id?: string;
  button_label?: string;
  description?: Text | string;
  developer_trace_id?: string;
  elements?: Accessory[];
  expand?: boolean;
  fallback?: string;
  fields?: Text[];
  function_trigger_id?: string;
  image_bytes?: number;
  image_height?: number;
  image_url?: string;
  image_width?: number;
  is_animated?: boolean;
  is_workflow_app?: boolean;
  owning_team_id?: string;
  provider_icon_url?: string;
  provider_name?: string;
  sales_home_workflow_app_type?: number;
  share_url?: string;
  slack_file?: SlackFile;
  text?: Text;
  thumbnail_url?: string;
  title?: Text | string;
  title_url?: string;
  trigger_subtype?: string;
  trigger_type?: string;
  type?: string;
  url?: string;
  video_url?: string;
  workflow_id?: string;
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
  filter?: AccessoryFilter;
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
  placeholder?: Text;
  response_url_enabled?: boolean;
  slack_file?: SlackFile;
  style?: string;
  text?: Text;
  timezone?: string;
  type?: string;
  url?: string;
  value?: string;
  workflow?: Workflow;
}

export interface Confirm {
  confirm?: Text;
  deny?: Text;
  style?: string;
  text?: Text;
  title?: Text;
}

export interface Text {
  emoji?: boolean;
  text?: string;
  type?: TextType;
  verbatim?: boolean;
}

export enum TextType {
  Mrkdwn = "mrkdwn",
  PlainText = "plain_text",
}

export interface AccessoryElement {
  border?: number;
  elements?: PurpleElement[];
  indent?: number;
  offset?: number;
  style?: string;
  type?: FluffyType;
}

export interface PurpleElement {
  channel_id?: string;
  fallback?: string;
  format?: string;
  name?: string;
  range?: string;
  skin_tone?: number;
  style?: Style;
  team_id?: string;
  text?: string;
  timestamp?: number;
  type?: PurpleType;
  unicode?: string;
  unsafe?: boolean;
  url?: string;
  user_id?: string;
  usergroup_id?: string;
  value?: string;
}

export interface Style {
  bold?: boolean;
  client_highlight?: boolean;
  code?: boolean;
  highlight?: boolean;
  italic?: boolean;
  strike?: boolean;
  unlink?: boolean;
}

export enum PurpleType {
  Broadcast = "broadcast",
  Channel = "channel",
  Color = "color",
  Date = "date",
  Emoji = "emoji",
  Link = "link",
  Team = "team",
  Text = "text",
  User = "user",
  Usergroup = "usergroup",
}

export enum FluffyType {
  RichTextList = "rich_text_list",
  RichTextPreformatted = "rich_text_preformatted",
  RichTextQuote = "rich_text_quote",
  RichTextSection = "rich_text_section",
}

export interface AccessoryFilter {
  exclude_bot_users?: boolean;
  exclude_external_shared_channels?: boolean;
  include?: any[];
}

export interface Option {
  description?: Text;
  text?: Text;
  url?: string;
  value?: string;
}

export interface OptionGroup {
  label?: Text;
  options?: Option[];
}

export interface SlackFile {
  id?: string;
  url?: string;
}

export interface Workflow {
  trigger?: Trigger;
}

export interface Trigger {
  customizable_input_parameters?: CustomizableInputParameter[];
  url?: string;
}

export interface CustomizableInputParameter {
  name?: string;
  value?: string;
}

export interface Schema {
  id?: string;
  is_primary_column?: boolean;
  key?: string;
  name?: string;
  options?: Options;
  type?: string;
}

export interface Options {
  canvas_id?: string;
  canvas_placeholder_mapping?: CanvasPlaceholderMapping[];
  choices?: Choice[];
  currency?: string;
  currency_format?: string;
  date_format?: string;
  default_value?: string;
  default_value_typed?: DefaultValueTyped;
  emoji?: string;
  emoji_team_id?: string;
  for_assignment?: boolean;
  format?: string;
  linked_to?: string[];
  mark_as_done_when_checked?: boolean;
  max?: number;
  notify_users?: boolean;
  precision?: number;
  rounding?: string;
  show_member_name?: boolean;
  time_format?: string;
}

export interface CanvasPlaceholderMapping {
  column?: string;
  variable?: string;
}

export interface Choice {
  color?: string;
  label?: string;
  value?: string;
}

export interface DefaultValueTyped {
  select?: string[];
}

export interface View {
  columns?: Column[];
  created_by?: string;
  date_created?: number;
  default_view_key?: string;
  filters?: FilterElement[];
  grouping?: Grouping;
  id?: string;
  is_all_items_view?: boolean;
  is_locked?: boolean;
  name?: string;
  position?: string;
  show_completed_items?: boolean;
  stick_column_left?: boolean;
  type?: string;
}

export interface Column {
  id?: string;
  key?: string;
  position?: string;
  visible?: boolean;
  width?: number;
}

export interface FilterElement {
  column_id?: string;
  key?: string;
  operator?: string;
  typed_values?: any[];
  values?: string[];
}

export interface Grouping {
  group_by?: string;
  group_by_column_id?: string;
}

export interface MediaProgress {
  duration_ms?: number;
  max_offset_ms?: number;
  media_watched?: boolean;
  offset_ms?: number;
}

export interface Reaction {
  count?: number;
  name?: string;
  url?: string;
  users?: string[];
}

export interface Saved {
  date_completed?: number;
  date_due?: number;
  is_archived?: boolean;
  state?: string;
}

export interface Shares {
  private?: { [key: string]: Private[] };
  public?: { [key: string]: Private[] };
}

export interface Private {
  access?: string;
  channel_name?: string;
  date_last_shared?: number;
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

export interface Transcription {
  locale?: string;
  preview?: Preview;
  status?: string;
}

export interface Preview {
  content?: string;
  has_more?: boolean;
}
