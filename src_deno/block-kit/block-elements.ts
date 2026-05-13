import type { Confirm } from "./confirm.ts";
import type { AnyDescriptionOption, PlainTextOption } from "./options.ts";
import type { RichTextBlock } from "./rich-text-block.ts";
import type { AnySlackFile } from "./slack-files.ts";
import type { PlainTextField } from "./text-fields.ts";
import type { Workflow } from "./workflows.ts";

// -----------------------------
// Basic types
// -----------------------------

export type AnyBlockElementType = "image" | AnyActionBlockElementType;

export type AnyActionBlockElementType =
  | "rich_text_section"
  | "rich_text_list"
  | "rich_text_quote"
  | "rich_text_preformatted"
  | "users_select"
  | "multi_users_select"
  | "static_select"
  | "multi_static_select"
  | "conversations_select"
  | "multi_conversations_select"
  | "channels_select"
  | "multi_channels_select"
  | "external_select"
  | "multi_external_select"
  | "button"
  | "workflow_button"
  | "overflow"
  | "datepicker"
  | "timepicker"
  | "radio_buttons"
  | "datetimepicker"
  | "checkboxes"
  | "rich_text_input"
  | "plain_text_input"
  | "url_text_input"
  | "email_text_input"
  | "number_input"
  | "file_input"
  | "feedback_buttons"
  | "icon_button";

export interface BlockElement<
  T extends AnyBlockElementType = AnyBlockElementType,
> {
  type: T;
}

export interface ActionBlockElement<
  T extends AnyActionBlockElementType = AnyActionBlockElementType,
> extends BlockElement<T> {
  type: T;
  action_id?: string;
}

// -----------------------------
// Union types
// -----------------------------

export declare type AnyBlockElement =
  | ImageElement
  | AnySelectElement
  | AnyMultiSelectElement
  | Datepicker
  | Timepicker
  | DateTimepicker
  | RichTextInput
  | PlainTextInput
  | URLInput
  | EmailInput
  | NumberInput
  | Button
  | WorkflowButton
  | Overflow
  | RadioButtons
  | Checkboxes
  | FeedbackButtons
  | IconButton;

export declare type AnySelectElement =
  | UsersSelect
  | StaticSelect
  | ConversationsSelect
  | ChannelsSelect
  | ExternalSelect;

export declare type AnyMultiSelectElement =
  | MultiUsersSelect
  | MultiStaticSelect
  | MultiConversationsSelect
  | MultiChannelsSelect
  | MultiExternalSelect;

// -----------------------------
// Common traits
// -----------------------------

export interface Confirmable {
  confirm?: Confirm;
}
export interface Focusable {
  focus_on_load?: boolean;
}
export interface Placeholdable {
  placeholder?: PlainTextField;
}
export interface DispatchActionConfig {
  trigger_actions_on?: ("on_enter_pressed" | "on_character_entered")[];
}
export interface Dispatchable {
  dispatch_action_config?: DispatchActionConfig;
}

// -----------------------------
// Elements
// -----------------------------

export interface PublicImageElement extends BlockElement<"image"> {
  type: "image";
  image_url: string;
  alt_text: string;
}
export interface SlackFileImageElement extends BlockElement<"image"> {
  type: "image";
  slack_file: AnySlackFile;
  alt_text: string;
}
export type ImageElement = PublicImageElement | SlackFileImageElement;

export interface UsersSelect
  extends
    ActionBlockElement<"users_select">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "users_select";
  initial_user?: string;
}
export interface MultiUsersSelect
  extends
    ActionBlockElement<"multi_users_select">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "multi_users_select";
  initial_users?: string[];
  max_selected_items?: number;
}
export interface StaticSelect
  extends
    ActionBlockElement<"static_select">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "static_select";
  initial_option?: PlainTextOption;
  options?: PlainTextOption[];
  option_groups?: {
    label: PlainTextField;
    options: PlainTextOption[];
  }[];
}
export interface MultiStaticSelect
  extends
    ActionBlockElement<"multi_static_select">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "multi_static_select";
  initial_options?: PlainTextOption[];
  options?: PlainTextOption[];
  option_groups?: {
    label: PlainTextField;
    options: PlainTextOption[];
  }[];
  max_selected_items?: number;
}
export interface ConversationsSelect
  extends
    ActionBlockElement<"conversations_select">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "conversations_select";
  initial_conversation?: string;
  response_url_enabled?: boolean;
  default_to_current_conversation?: boolean;
  filter?: {
    include?: ("im" | "mpim" | "private" | "public")[];
    exclude_external_shared_channels?: boolean;
    exclude_bot_users?: boolean;
  };
}
export interface MultiConversationsSelect
  extends
    ActionBlockElement<"multi_conversations_select">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "multi_conversations_select";
  initial_conversations?: string[];
  max_selected_items?: number;
  default_to_current_conversation?: boolean;
  filter?: {
    include?: ("im" | "mpim" | "private" | "public")[];
    exclude_external_shared_channels?: boolean;
    exclude_bot_users?: boolean;
  };
}
export interface ChannelsSelect
  extends
    ActionBlockElement<"channels_select">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "channels_select";
  initial_channel?: string;
}
export interface MultiChannelsSelect
  extends
    ActionBlockElement<"multi_channels_select">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "multi_channels_select";
  initial_channels?: string[];
  max_selected_items?: number;
}
export interface ExternalSelect
  extends
    ActionBlockElement<"external_select">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "external_select";
  initial_option?: PlainTextOption;
  min_query_length?: number;
}
export interface MultiExternalSelect
  extends
    ActionBlockElement<"multi_external_select">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "multi_external_select";
  initial_options?: PlainTextOption[];
  min_query_length?: number;
  max_selected_items?: number;
}
export interface Button extends ActionBlockElement<"button">, Confirmable {
  type: "button";
  text: PlainTextField;
  value?: string;
  url?: string;
  style?: "danger" | "primary";
  accessibility_label?: string;
}
export interface WorkflowButton extends ActionBlockElement<"workflow_button"> {
  type: "workflow_button";
  text: PlainTextField;
  workflow: Workflow;
  style?: "danger" | "primary";
  accessibility_label?: string;
}
export interface Overflow extends ActionBlockElement<"overflow">, Confirmable {
  type: "overflow";
  options: PlainTextOption[];
}
export interface Datepicker
  extends
    ActionBlockElement<"datepicker">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "datepicker";
  initial_date?: string;
}
export interface Timepicker
  extends
    ActionBlockElement<"timepicker">,
    Confirmable,
    Focusable,
    Placeholdable {
  type: "timepicker";
  initial_time?: string;
  timezone?: string;
}
export interface RadioButtons
  extends ActionBlockElement<"radio_buttons">, Confirmable, Focusable {
  type: "radio_buttons";
  initial_option?: AnyDescriptionOption;
  options: AnyDescriptionOption[];
}
export interface DateTimepicker
  extends ActionBlockElement<"datetimepicker">, Confirmable, Focusable {
  type: "datetimepicker";
  // The initial date and time that is selected when the element is loaded,
  // represented as a UNIX timestamp (seconds)
  initial_date_time?: number;
}
export interface Checkboxes
  extends ActionBlockElement<"checkboxes">, Confirmable, Focusable {
  type: "checkboxes";
  initial_options?: AnyDescriptionOption[];
  options: AnyDescriptionOption[];
}
export interface RichTextInput
  extends
    ActionBlockElement<"rich_text_input">,
    Dispatchable,
    Focusable,
    Placeholdable {
  type: "rich_text_input";
  initial_value?: RichTextBlock;
  dispatch_action_config?: DispatchActionConfig;
  focus_on_load?: boolean;
}
export interface PlainTextInput
  extends
    ActionBlockElement<"plain_text_input">,
    Dispatchable,
    Focusable,
    Placeholdable {
  type: "plain_text_input";
  initial_value?: string;
  multiline?: boolean;
  min_length?: number;
  max_length?: number;
  dispatch_action_config?: DispatchActionConfig;
  focus_on_load?: boolean;
}
export interface URLInput
  extends
    ActionBlockElement<"url_text_input">,
    Dispatchable,
    Focusable,
    Placeholdable {
  type: "url_text_input";
  initial_value?: string;
}
export interface EmailInput
  extends
    ActionBlockElement<"email_text_input">,
    Dispatchable,
    Focusable,
    Placeholdable {
  type: "email_text_input";
  initial_value?: string;
}
export interface NumberInput
  extends
    ActionBlockElement<"number_input">,
    Dispatchable,
    Focusable,
    Placeholdable {
  type: "number_input";
  is_decimal_allowed: boolean;
  initial_value?: string;
  min_value?: string;
  max_value?: string;
}
export interface FileInput extends ActionBlockElement<"file_input"> {
  type: "file_input";
  filetypes?: string[];
  max_files?: number;
}
export interface FeedbackButton {
  text: PlainTextField;
  value: string;
}
export interface FeedbackButtons extends ActionBlockElement<"feedback_buttons"> {
  type: "feedback_buttons";
  positive_button: FeedbackButton;
  negative_button: FeedbackButton;
}
export interface IconButton extends ActionBlockElement<"icon_button"> {
  type: "icon_button";
  icon: string;
  text: PlainTextField;
  value?: string;
}
// https://docs.slack.dev/reference/block-kit/block-elements/url-source-element
// Used inside `task_card.sources`; cannot appear in other blocks.
export interface UrlSource {
  type: "url";
  url: string;
  text: string;
}

// https://api.slack.com/changelog/2019-09-what-they-see-is-what-you-get-and-more-and-less

export type RichTextBlockSubElement = BlockElement<
  | "rich_text_list"
  | "rich_text_preformatted"
  | "rich_text_quote"
  | "rich_text_section"
>;

export interface RichTextList extends RichTextBlockSubElement {
  type: "rich_text_list";
  style?: "bullet" | "ordered";
  indent?: number;
  offset?: number;
  border?: number;
  elements: RichTextSection[];
}
export interface RichTextPreformatted extends RichTextBlockSubElement {
  type: "rich_text_preformatted";
  elements: AnyRichTextSectionElement[];
  border?: number;
}
export interface RichTextQuote extends RichTextBlockSubElement {
  type: "rich_text_quote";
  elements: AnyRichTextSectionElement[];
  border?: number;
}
export interface RichTextSection extends RichTextBlockSubElement {
  type: "rich_text_section";
  elements: AnyRichTextSectionElement[];
}

export type AnyRichTextBlockElement =
  | RichTextList
  | RichTextPreformatted
  | RichTextQuote
  | RichTextSection;

export type AnyRichTextSectionElement =
  | RichTextSectionText
  | RichTextSectionChannel
  | RichTextSectionUser
  | RichTextSectionEmoji
  | RichTextSectionLink
  | RichTextSectionTeam
  | RichTextSectionUsergroup
  | RichTextSectionDate
  | RichTextSectionBroadcast
  | RichTextSectionColor;

export interface RichTextSectionElement {
  type:
    | "text"
    | "channel"
    | "user"
    | "emoji"
    | "link"
    | "team"
    | "usergroup"
    | "date"
    | "broadcast"
    | "color";
  style?: RichTextSectionElementStyle;
}
export interface RichTextSectionText extends RichTextSectionElement {
  type: "text";
  text: string;
  style?: RichTextSectionElementStyleWithCode;
}
export interface RichTextSectionChannel extends RichTextSectionElement {
  type: "channel";
  channel_id: string;
}
export interface RichTextSectionUser extends RichTextSectionElement {
  type: "user";
  user_id: string;
}
export interface RichTextSectionEmoji extends RichTextSectionElement {
  type: "emoji";
  name: string;
  skin_tone?: number;
  unicode?: string;
}
export interface RichTextSectionLink extends RichTextSectionElement {
  type: "link";
  url: string;
  text?: string;
  unsafe?: boolean;
  style?: RichTextSectionElementStyleWithCode;
}
export interface RichTextSectionTeam extends RichTextSectionElement {
  type: "team";
  team_id: string;
}
export interface RichTextSectionUsergroup extends RichTextSectionElement {
  type: "usergroup";
  usergroup_id: string;
}
export interface RichTextSectionDate extends RichTextSectionElement {
  type: "date";
  timestamp: number;
  format: string;
  style?: RichTextSectionElementStyleWithCode;
  url?: string;
  fallback?: string;
}
export interface RichTextSectionBroadcast extends RichTextSectionElement {
  type: "broadcast";
  range: "channel" | "here" | "everyone";
}
export interface RichTextSectionColor extends RichTextSectionElement {
  type: "color";
  value: string;
}

export interface RichTextSectionElementStyle {
  bold?: boolean;
  italic?: boolean;
  strike?: boolean;
  highlight?: boolean;
  client_highlight?: boolean;
  unlink?: boolean;
}
export interface RichTextSectionElementStyleWithCode
  extends RichTextSectionElementStyle {
  code?: boolean;
}
