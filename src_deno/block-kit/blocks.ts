import type {
  AnyMultiSelectElement,
  AnySelectElement,
  Button,
  Checkboxes,
  Datepicker,
  DateTimepicker,
  EmailInput,
  FeedbackButtons,
  FileInput,
  IconButton,
  ImageElement,
  NumberInput,
  Overflow,
  PlainTextInput,
  RadioButtons,
  RichTextInput,
  Timepicker,
  URLInput,
  WorkflowButton,
} from "./block-elements.ts";
import type { RichTextBlock } from "./rich-text-block.ts";
import type { AnySlackFile } from "./slack-files.ts";
import type { AnyTextField, PlainTextField } from "./text-fields.ts";

// -----------------------------
// Basic types
// -----------------------------

export type AnyBlockType =
  | "image"
  | "context"
  | "context_actions"
  | "actions"
  | "divider"
  | "section"
  | "input"
  | "file"
  | "header"
  | "video"
  | "rich_text";

export interface Block<T extends AnyBlockType = AnyBlockType> {
  type: T;
  block_id?: string;
}

// -----------------------------
// Union types
// -----------------------------

export declare type AnyMessageBlock =
  | ActionsBlock
  | ContextBlock
  | ContextActionsBlock
  | DividerBlock
  | FileBlock
  | HeaderBlock
  | ImageBlock
  | MessageInputBlock
  | SectionBlock
  | VideoBlock
  | RichTextBlock;

export declare type AnyModalBlock =
  | ActionsBlock
  | ContextBlock
  | ContextActionsBlock
  | DividerBlock
  | HeaderBlock
  | ImageBlock
  | ViewInputBlock
  | SectionBlock
  | VideoBlock
  | RichTextBlock;

export declare type AnyHomeTabBlock =
  | ActionsBlock
  | ContextBlock
  | ContextActionsBlock
  | DividerBlock
  | HeaderBlock
  | ImageBlock
  | ViewInputBlock
  | SectionBlock
  | VideoBlock
  | RichTextBlock;

// -----------------------------
// Blocks
// -----------------------------

export interface ActionsBlock extends Block<"actions"> {
  type: "actions";
  elements: (
    | Button
    | WorkflowButton
    | Overflow
    | Datepicker
    | Timepicker
    | DateTimepicker
    | AnySelectElement
    | AnyMultiSelectElement
    | RadioButtons
    | Checkboxes
  )[];
}

export interface ContextBlock extends Block<"context"> {
  type: "context";
  elements: (ImageElement | AnyTextField)[];
}

export interface ContextActionsBlock extends Block<"context_actions"> {
  type: "context_actions";
  elements: (FeedbackButtons | IconButton)[];
}

export interface DividerBlock extends Block<"divider"> {
  type: "divider";
}

export interface FileBlock extends Block<"file"> {
  type: "file";
  source: string;
  external_id: string;
}

export interface HeaderBlock extends Block<"header"> {
  type: "header";
  text: PlainTextField;
}

export interface PublicImageBlock extends Block<"image"> {
  type: "image";
  image_url: string;
  alt_text: string;
  title?: PlainTextField;
}
export interface SlackFileImageBlock extends Block<"image"> {
  type: "image";
  slack_file: AnySlackFile;
  alt_text: string;
  title?: PlainTextField;
}
export type ImageBlock = PublicImageBlock | SlackFileImageBlock;

export interface MessageInputBlock extends Block<"input"> {
  type: "input";
  label: PlainTextField;
  hint?: PlainTextField;
  optional?: boolean;
  element:
    | AnySelectElement
    | AnyMultiSelectElement
    | Datepicker
    | Timepicker
    | DateTimepicker
    | PlainTextInput
    | URLInput
    | EmailInput
    | NumberInput
    | RadioButtons
    | Checkboxes;
  dispatch_action?: boolean;
}

export interface ViewInputBlock extends Block<"input"> {
  type: "input";
  label: PlainTextField;
  hint?: PlainTextField;
  optional?: boolean;
  element:
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
    | FileInput
    | RadioButtons
    | Checkboxes;
  dispatch_action?: boolean;
}

export interface SectionBlock extends Block<"section"> {
  type: "section";
  text?: AnyTextField;
  fields?: AnyTextField[];
  accessory?:
    | ImageElement
    | Button
    | WorkflowButton
    | Overflow
    | Datepicker
    | Timepicker
    | AnySelectElement
    | AnyMultiSelectElement
    | RadioButtons
    | Checkboxes;
}

export interface VideoBlock extends Block<"video"> {
  type: "video";
  video_url: string;
  thumbnail_url: string;
  alt_text: string;
  title: PlainTextField;
  title_url?: string;
  author_name?: string;
  provider_name?: string;
  provider_icon_url?: string;
  description?: PlainTextField;
}
