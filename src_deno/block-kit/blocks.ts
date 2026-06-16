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
  UrlSource,
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
  | "rich_text"
  | "markdown"
  | "alert"
  | "card"
  | "carousel"
  | "plan"
  | "table"
  | "task_card"
  | "data_visualization";

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
  | RichTextBlock
  | MarkdownBlock
  | AlertBlock
  | CardBlock
  | CarouselBlock
  | PlanBlock
  | TableBlock
  | TaskCardBlock
  | DataVisualizationBlock;

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
  | RichTextBlock
  | MarkdownBlock;

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
  | RichTextBlock
  | MarkdownBlock;

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
  expand?: boolean;
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

// https://docs.slack.dev/reference/block-kit/blocks/markdown-block
export interface MarkdownBlock extends Block<"markdown"> {
  type: "markdown";
  text: string;
}

// https://docs.slack.dev/reference/block-kit/blocks/alert-block
export interface AlertBlock extends Block<"alert"> {
  type: "alert";
  text: AnyTextField;
  level?: "default" | "info" | "warning" | "error" | "success";
}

// https://docs.slack.dev/reference/block-kit/blocks/card-block
export interface CardBlock extends Block<"card"> {
  type: "card";
  hero_image?: ImageElement;
  icon?: ImageElement;
  title?: AnyTextField;
  subtitle?: AnyTextField;
  body?: AnyTextField;
  actions?: Button[];
}

// https://docs.slack.dev/reference/block-kit/blocks/carousel-block
export interface CarouselBlock extends Block<"carousel"> {
  type: "carousel";
  elements: CardBlock[];
}

// https://docs.slack.dev/reference/block-kit/blocks/plan-block
export interface PlanBlock extends Block<"plan"> {
  type: "plan";
  title: PlainTextField;
  tasks?: TaskCardBlock[];
}

// https://docs.slack.dev/reference/block-kit/blocks/table-block
export interface TableRawTextCell {
  type: "raw_text";
  text: string;
}
export type TableCell = TableRawTextCell | RichTextBlock;
export interface TableColumnSetting {
  align?: "left" | "center" | "right";
  is_wrapped?: boolean;
}
export interface TableBlock extends Block<"table"> {
  type: "table";
  rows: TableCell[][];
  column_settings?: TableColumnSetting[];
}

// https://docs.slack.dev/reference/block-kit/blocks/task-card-block
export interface TaskCardBlock extends Block<"task_card"> {
  type: "task_card";
  task_id: string;
  title: string;
  details?: RichTextBlock;
  output?: RichTextBlock;
  sources?: UrlSource[];
  status?: "pending" | "in_progress" | "complete" | "error";
}

// https://docs.slack.dev/reference/block-kit/blocks/data-visualization-block
export interface DataVisualizationDataPoint {
  label: string;
  value: number;
}
export interface DataVisualizationSeries {
  name: string;
  data: DataVisualizationDataPoint[];
}
export interface DataVisualizationAxisConfig {
  categories?: string[];
  x_label?: string;
  y_label?: string;
}
// Used by line, bar, and area charts
export interface DataVisualizationSeriesChart {
  type: "line" | "bar" | "area";
  series: DataVisualizationSeries[];
  axis_config?: DataVisualizationAxisConfig;
}
export interface DataVisualizationPieChart {
  type: "pie";
  segments: DataVisualizationDataPoint[];
}
export type DataVisualizationChart =
  | DataVisualizationSeriesChart
  | DataVisualizationPieChart;
export interface DataVisualizationBlock extends Block<"data_visualization"> {
  type: "data_visualization";
  title: string;
  chart: DataVisualizationChart;
}
