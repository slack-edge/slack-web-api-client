// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts";
import { AnyMessageBlock } from "../../block-kit/blocks.ts";
import { MessageAttachment } from "../../block-kit/message-attachment.ts";
export type SearchAllResponse = SlackAPIResponse & {
  error?: string;
  files?: Files;
  messages?: Messages;
  needed?: string;
  ok: boolean;
  posts?: Posts;
  provided?: string;
  query?: string;
};

export interface Files {
  matches?: FilesMatch[];
  pagination?: Pagination;
  paging?: Paging;
  total?: number;
}

export interface FilesMatch {
  attachments?: MessageAttachment[];
  bot_id?: string;
  cc?: Cc[];
  channels?: string[];
  comments_count?: number;
  converted_pdf?: string;
  created?: number;
  display_as_bot?: boolean;
  edit_link?: string;
  editable?: boolean;
  editors?: string[];
  external_id?: string;
  external_type?: string;
  external_url?: string;
  file_access?: string;
  filetype?: string;
  from?: Cc[];
  groups?: string[];
  has_more?: boolean;
  has_more_shares?: boolean;
  has_rich_preview?: boolean;
  headers?: MatchHeaders;
  id?: string;
  image_exif_rotation?: number;
  ims?: string[];
  is_external?: boolean;
  is_public?: boolean;
  is_starred?: boolean;
  last_editor?: LastEditor;
  lines?: number;
  lines_more?: number;
  media_display_type?: string;
  mimetype?: string;
  mode?: string;
  name?: string;
  non_owner_editable?: boolean;
  original_attachment_count?: number;
  original_h?: number;
  original_w?: number;
  permalink?: string;
  permalink_public?: string;
  plain_text?: string;
  pretty_type?: string;
  preview?: string;
  preview_highlight?: string;
  preview_is_truncated?: boolean;
  preview_plain_text?: string;
  public_url_shared?: boolean;
  sent_to_self?: boolean;
  shares?: MatchShares;
  size?: number;
  subject?: string;
  thumb_1024?: string;
  thumb_1024_h?: number;
  thumb_1024_w?: number;
  thumb_160?: string;
  thumb_360?: string;
  thumb_360_h?: number;
  thumb_360_w?: number;
  thumb_480?: string;
  thumb_480_h?: number;
  thumb_480_w?: number;
  thumb_64?: string;
  thumb_720?: string;
  thumb_720_h?: number;
  thumb_720_w?: number;
  thumb_80?: string;
  thumb_800?: string;
  thumb_800_h?: number;
  thumb_800_w?: number;
  thumb_960?: string;
  thumb_960_h?: number;
  thumb_960_w?: number;
  thumb_pdf?: string;
  thumb_pdf_h?: number;
  thumb_pdf_w?: number;
  thumb_tiny?: string;
  thumb_video?: string;
  timestamp?: number;
  title?: string;
  to?: Cc[];
  updated?: number;
  url_private?: string;
  url_private_download?: string;
  user?: LastEditor;
  user_team?: UserTeam;
  username?: string;
}

export interface Attachment {
  actions?: Action[];
  app_id?: string;
  app_unfurl_url?: string;
  author_icon?: string;
  author_id?: string;
  author_link?: string;
  author_name?: string;
  author_subname?: string;
  blocks?: AnyMessageBlock[];
  bot_id?: string;
  callback_id?: string;
  channel_id?: string;
  channel_name?: string;
  channel_team?: string;
  color?: string;
  fallback?: string;
  fields?: Field[];
  filename?: string;
  files?: FileElement[];
  footer?: string;
  footer_icon?: string;
  from_url?: string;
  id?: number;
  image_bytes?: number;
  image_height?: number;
  image_url?: string;
  image_width?: number;
  indent?: boolean;
  is_app_unfurl?: boolean;
  is_msg_unfurl?: boolean;
  is_reply_unfurl?: boolean;
  is_thread_root_unfurl?: boolean;
  message_blocks?: MessageBlock[];
  metadata?: Metadata;
  mimetype?: string;
  mrkdwn_in?: string[];
  msg_subtype?: string;
  original_url?: string;
  pretext?: string;
  preview?: Preview;
  service_icon?: string;
  service_name?: string;
  service_url?: string;
  size?: number;
  text?: string;
  thumb_height?: number;
  thumb_url?: string;
  thumb_width?: number;
  title?: string;
  title_link?: string;
  ts?: string;
  url?: string;
  video_html?: string;
  video_html_height?: number;
  video_html_width?: number;
  video_url?: string;
}

export interface Action {
  confirm?: ActionConfirm;
  data_source?: string;
  id?: string;
  min_query_length?: number;
  name?: string;
  option_groups?: ActionOptionGroup[];
  options?: SelectedOptionElement[];
  selected_options?: SelectedOptionElement[];
  style?: string;
  text?: string;
  type?: string;
  url?: string;
  value?: string;
}

export interface ActionConfirm {
  dismiss_text?: string;
  ok_text?: string;
  text?: string;
  title?: string;
}

export interface ActionOptionGroup {
  options?: SelectedOptionElement[];
  text?: string;
}

export interface SelectedOptionElement {
  text?: string;
  value?: string;
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
  description?: DescriptionElement;
  dispatch_action?: boolean;
  element?: Accessory;
  elements?: Accessory[];
  external_id?: string;
  fallback?: string;
  fields?: DescriptionElement[];
  file?: BlockFile;
  file_id?: string;
  function_trigger_id?: string;
  hint?: DescriptionElement;
  image_bytes?: number;
  image_height?: number;
  image_url?: string;
  image_width?: number;
  is_workflow_app?: boolean;
  label?: DescriptionElement;
  optional?: boolean;
  provider_icon_url?: string;
  provider_name?: string;
  source?: string;
  text?: DescriptionElement;
  thumbnail_url?: string;
  title?: DescriptionElement;
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
  confirm?: AccessoryConfirm;
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
  initial_option?: InitialOptionElement;
  initial_options?: InitialOptionElement[];
  initial_time?: string;
  initial_user?: string;
  initial_users?: string[];
  max_selected_items?: number;
  min_query_length?: number;
  offset?: number;
  option_groups?: AccessoryOptionGroup[];
  options?: InitialOptionElement[];
  placeholder?: DescriptionElement;
  response_url_enabled?: boolean;
  style?: string;
  text?: DescriptionElement;
  timezone?: string;
  type?: AccessoryType;
  url?: string;
  value?: string;
  workflow?: Workflow;
}

export interface AccessoryConfirm {
  confirm?: DescriptionElement;
  deny?: DescriptionElement;
  style?: string;
  text?: DescriptionElement;
  title?: DescriptionElement;
}

export interface DescriptionElement {
  emoji?: boolean;
  text?: string;
  type?: DescriptionType;
  verbatim?: boolean;
}

export enum DescriptionType {
  Empty = "",
  Mrkdwn = "mrkdwn",
  PlainText = "plain_text",
}

export interface AccessoryElement {
  border?: number;
  elements?: PurpleElement[];
  indent?: number;
  offset?: number;
  style?: string;
  type?: AccessoryType;
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
  type?: PurpleType;
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

export enum PurpleType {
  Broadcast = "broadcast",
  Channel = "channel",
  Color = "color",
  Date = "date",
  Emoji = "emoji",
  Empty = "",
  Link = "link",
  Team = "team",
  Text = "text",
  User = "user",
  Usergroup = "usergroup",
}

export enum AccessoryType {
  Button = "button",
  ChannelsSelect = "channels_select",
  Checkboxes = "checkboxes",
  ConversationsSelect = "conversations_select",
  Datepicker = "datepicker",
  Datetimepicker = "datetimepicker",
  Empty = "",
  ExternalSelect = "external_select",
  Image = "image",
  MultiChannelsSelect = "multi_channels_select",
  MultiConversationsSelect = "multi_conversations_select",
  MultiExternalSelect = "multi_external_select",
  MultiStaticSelect = "multi_static_select",
  MultiUsersSelect = "multi_users_select",
  Overflow = "overflow",
  RadioButtons = "radio_buttons",
  RichTextList = "rich_text_list",
  RichTextPreformatted = "rich_text_preformatted",
  RichTextQuote = "rich_text_quote",
  RichTextSection = "rich_text_section",
  StaticSelect = "static_select",
  Timepicker = "timepicker",
  UsersSelect = "users_select",
  WorkflowButton = "workflow_button",
}

export interface Filter {
  exclude_bot_users?: boolean;
  exclude_external_shared_channels?: boolean;
  include?: string[];
}

export interface InitialOptionElement {
  description?: DescriptionElement;
  text?: DescriptionElement;
  url?: string;
  value?: string;
}

export interface AccessoryOptionGroup {
  label?: DescriptionElement;
  options?: InitialOptionElement[];
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

export interface BlockFile {
  access?: string;
  alt_txt?: string;
  app_id?: string;
  app_name?: string;
  bot_id?: string;
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
  editable?: boolean;
  editor?: string;
  external_id?: string;
  external_type?: string;
  external_url?: string;
  file_access?: string;
  filetype?: string;
  from?: Cc[];
  groups?: string[];
  has_more?: boolean;
  has_more_shares?: boolean;
  has_rich_preview?: boolean;
  headers?: FileHeaders;
  hls?: string;
  hls_embed?: string;
  id?: string;
  image_exif_rotation?: number;
  ims?: string[];
  initial_comment?: InitialComment;
  is_channel_space?: boolean;
  is_external?: boolean;
  is_public?: boolean;
  is_starred?: boolean;
  last_editor?: string;
  last_read?: number;
  lines?: number;
  lines_more?: number;
  linked_channel_id?: string;
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
  public_url_shared?: boolean;
  quip_thread_id?: string;
  reactions?: Reaction[];
  saved?: Saved;
  sent_to_self?: boolean;
  shares?: FileShares;
  simplified_html?: string;
  size?: number;
  source_team?: string;
  subject?: string;
  subtype?: string;
  teams_shared_with?: any[];
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
  title_blocks?: TitleBlock[];
  to?: Cc[];
  transcription?: Transcription;
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

export interface FileHeaders {
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

export interface MediaProgress {
  duration_ms?: number;
  max_offset_ms?: number;
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

export interface FileShares {
  private?: { [key: string]: Public[] };
  public?: { [key: string]: Public[] };
}

export interface Public {
  channel_name?: string;
  latest_reply?: string;
  reply_count?: number;
  reply_users?: string[];
  reply_users_count?: number;
  share_user_id?: LastEditor;
  team_id?: UserTeam;
  thread_ts?: string;
  ts?: Ts;
}

export enum LastEditor {
  Empty = "",
  U00000000 = "U00000000",
}

export enum UserTeam {
  Empty = "",
  T00000000 = "T00000000",
}

export enum Ts {
  Empty = "",
  The0000000000000000 = "0000000000.000000",
}

export interface TitleBlock {
  accessory?: Accessory;
  alt_text?: string;
  app_collaborators?: string[];
  app_id?: string;
  author_name?: string;
  block_id?: string;
  bot_user_id?: string;
  button_label?: string;
  description?: DescriptionElement | string;
  elements?: Accessory[];
  fallback?: string;
  fields?: DescriptionElement[];
  function_trigger_id?: string;
  image_bytes?: number;
  image_height?: number;
  image_url?: string;
  image_width?: number;
  is_workflow_app?: boolean;
  provider_icon_url?: string;
  provider_name?: string;
  text?: DescriptionElement;
  thumbnail_url?: string;
  title?: DescriptionElement | string;
  title_url?: string;
  type?: TitleBlockType;
  url?: string;
  video_url?: string;
}

export enum TitleBlockType {
  Actions = "actions",
  Context = "context",
  Divider = "divider",
  Image = "image",
  RichText = "rich_text",
  Section = "section",
  ShareShortcut = "share_shortcut",
  Video = "video",
}

export interface Transcription {
  locale?: string;
  status?: string;
}

export interface Field {
  short?: boolean;
  title?: string;
  value?: string;
}

export interface FileElement {
  access?: string;
  alt_txt?: string;
  app_id?: string;
  app_name?: string;
  bot_id?: string;
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
  editable?: boolean;
  editor?: string;
  external_id?: string;
  external_type?: string;
  external_url?: string;
  file_access?: string;
  filetype?: string;
  from?: Cc[];
  groups?: string[];
  has_more?: boolean;
  has_more_shares?: boolean;
  has_rich_preview?: boolean;
  headers?: FileHeaders;
  hls?: string;
  hls_embed?: string;
  id?: string;
  image_exif_rotation?: number;
  ims?: string[];
  initial_comment?: InitialComment;
  is_channel_space?: boolean;
  is_external?: boolean;
  is_public?: boolean;
  is_starred?: boolean;
  last_editor?: string;
  last_read?: number;
  lines?: number;
  lines_more?: number;
  linked_channel_id?: string;
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
  public_url_shared?: boolean;
  quip_thread_id?: string;
  reactions?: Reaction[];
  saved?: Saved;
  sent_to_self?: boolean;
  shares?: FileShares;
  simplified_html?: string;
  size?: number;
  source_team?: string;
  subject?: string;
  subtype?: string;
  teams_shared_with?: string[];
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
  title_blocks?: AnyMessageBlock[];
  to?: Cc[];
  transcription?: Transcription;
  updated?: number;
  url_private?: string;
  url_private_download?: string;
  url_static_preview?: string;
  user?: string;
  user_team?: string;
  username?: string;
  vtt?: string;
}

export interface MessageBlock {
  accessory?: Accessory;
  alt_text?: string;
  app_collaborators?: string[];
  app_id?: string;
  author_name?: string;
  block_id?: string;
  bot_user_id?: string;
  button_label?: string;
  description?: DescriptionElement;
  elements?: Accessory[];
  fallback?: string;
  fields?: DescriptionElement[];
  function_trigger_id?: string;
  image_bytes?: number;
  image_height?: number;
  image_url?: string;
  image_width?: number;
  is_workflow_app?: boolean;
  provider_icon_url?: string;
  provider_name?: string;
  text?: DescriptionElement;
  thumbnail_url?: string;
  title?: DescriptionElement;
  title_url?: string;
  type?: string;
  url?: string;
  video_url?: string;
}

export interface Metadata {
  extension?: string;
  format?: string;
  original_h?: number;
  original_w?: number;
  rotation?: number;
  thumb_160?: boolean;
  thumb_360_h?: number;
  thumb_360_w?: number;
  thumb_64?: boolean;
  thumb_80?: boolean;
  thumb_tiny?: string;
}

export interface Preview {
  can_remove?: boolean;
  icon_url?: string;
  subtitle?: DescriptionElement;
  title?: DescriptionElement;
  type?: string;
}

export interface MatchHeaders {
  date?: string;
}

export interface MatchShares {
  public?: { [key: string]: Public[] };
}

export interface Pagination {
  first?: number;
  last?: number;
  page?: number;
  page_count?: number;
  per_page?: number;
  total_count?: number;
}

export interface Paging {
  count?: number;
  page?: number;
  pages?: number;
  total?: number;
}

export interface Messages {
  matches?: MessagesMatch[];
  pagination?: Pagination;
  paging?: Paging;
  total?: number;
}

export interface MessagesMatch {
  attachments?: MessageAttachment[];
  blocks?: AnyMessageBlock[];
  channel?: Channel;
  files?: FileElement[];
  iid?: string;
  is_mpim?: boolean;
  no_reactions?: boolean;
  permalink?: string;
  previous?: Previous;
  previous_2?: Previous;
  score?: number;
  team?: UserTeam;
  text?: string;
  ts?: Ts;
  type?: string;
  user?: LastEditor;
  username?: string;
}

export interface Channel {
  id?: string;
  is_channel?: boolean;
  is_ext_shared?: boolean;
  is_file?: boolean;
  is_group?: boolean;
  is_im?: boolean;
  is_mpim?: boolean;
  is_org_shared?: boolean;
  is_pending_ext_shared?: boolean;
  is_private?: boolean;
  is_shared?: boolean;
  name?: string;
  name_normalized?: string;
  pending_shared?: string[];
  user?: LastEditor;
}

export interface Previous {
  attachments?: MessageAttachment[];
  blocks?: AnyMessageBlock[];
  iid?: string;
  permalink?: string;
  text?: string;
  ts?: Ts;
  type?: string;
  user?: LastEditor;
  username?: string;
}

export interface Posts {
  matches?: string[];
  total?: number;
}
