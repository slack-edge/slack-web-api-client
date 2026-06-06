import type { AnyOption } from "./options.ts";
import type { AnySlackFile } from "./slack-files.ts";
import type { PlainTextField } from "./text-fields.ts";

export interface MessageMetadata<T extends string = string> {
  event_type: T;
  event_payload: {
    [key: string]:
      | null
      | string
      | number
      | boolean
      | MessageMetadataEventPayload
      | MessageMetadataEventPayload[];
  };
}
export interface MessageMetadataEventPayload {
  [key: string]: null | string | number | boolean;
}

/*
 * Work-object entity metadata, attached to a message via `chat.unfurl`.
 * Mirrors the `EntityMetadata` type tree from @slack/types (message-metadata),
 * mapped onto this package's own block-kit primitives.
 */

/** Known work-object entity types. */
export type EntityType =
  | "slack#/entities/task"
  | "slack#/entities/file"
  | "slack#/entities/item"
  | "slack#/entities/incident"
  | "slack#/entities/content_item"
  | string;

/** Known custom-field value types. */
export type CustomFieldType =
  | "integer"
  | "string"
  | "array"
  | "slack#/types/date"
  | "slack#/types/timestamp"
  | "slack#/types/image"
  | "slack#/types/channel_id"
  | "slack#/types/user"
  | "slack#/types/entity_ref"
  | "boolean"
  | "slack#/types/link"
  | "slack#/types/email"
  | string;

/** Reference (and optional type) used to identify an entity within the developer's system. */
export interface ExternalRef {
  id: string;
  type?: string;
}

/** Slack file reference embedded directly in an entity payload. */
export interface FileEntitySlackFile {
  id: string;
  type?: string;
}

/** Product or field icon, sourced from a URL or a Slack file. */
export interface EntityIconField {
  alt_text: string;
  url?: string;
  slack_file?: {
    id?: string;
    url?: string;
  };
}

/** Inline-edit affordance describing how a field may be modified from the unfurl. */
export interface EntityEditSupport {
  enabled: boolean;
  placeholder?: PlainTextField;
  hint?: PlainTextField;
  optional?: boolean;
  select?: {
    current_value?: string;
    current_values?: string[];
    static_options?: AnyOption[];
    fetch_options_dynamically?: boolean;
    min_query_length?: number;
  };
  number?: {
    is_decimal_allowed?: boolean;
    min_value?: number;
    max_value?: number;
  };
  text?: {
    min_length?: number;
    max_length?: number;
  };
}

/** Full-size preview availability and source for an entity. */
export interface EntityFullSizePreview {
  is_supported: boolean;
  preview_url?: string;
  mime_type?: string;
  error?: {
    code: string;
    message?: string;
  };
}

/** Top-level presentation attributes for an entity (title, icon, locale, etc.). */
export interface EntityAttributes {
  title: {
    text: string;
    edit?: EntityEditSupport;
  };
  display_type?: string;
  display_id?: string;
  product_icon?: EntityIconField;
  product_name?: string;
  locale?: string;
  full_size_preview?: EntityFullSizePreview;
  metadata_last_modified?: number;
}

export interface EntityUserIDField {
  user_id: string;
}
export interface EntityUserField {
  text: string;
  url?: string;
  email?: string;
  icon?: EntityIconField;
}
export interface EntityRefField {
  entity_url: string;
  external_ref: ExternalRef;
  title: string;
  display_type?: string;
  icon?: EntityIconField;
}
export interface EntityTypedField {
  type: string;
  label?: string;
  value?: string | number;
  link?: string;
  icon?: EntityIconField;
  long?: boolean;
  format?: string;
  image_url?: string;
  slack_file?: AnySlackFile;
  alt_text?: string;
  edit?: EntityEditSupport;
  tag_color?: string;
  user?: EntityUserIDField | EntityUserField;
  entity_ref?: EntityRefField;
}
export interface EntityArrayItemField extends Omit<EntityTypedField, "type"> {
  type?: string;
}
export interface EntityStringField {
  value: string;
  label?: string;
  format?: string;
  link?: string;
  icon?: EntityIconField;
  long?: boolean;
  type?: string;
  tag_color?: string;
  edit?: EntityEditSupport;
}
export interface EntityTimestampField {
  value: number;
  label?: string;
  type?: string;
  edit?: EntityEditSupport;
}
export interface EntityImageField {
  alt_text: string;
  label?: string;
  image_url?: string;
  slack_file?: AnySlackFile;
  title?: string;
  type?: string;
}
export interface EntityBooleanCheckboxField {
  type: string;
  text: string;
  description?: string;
}
export interface EntityBooleanTextField {
  type: string;
  true_text: string;
  false_text: string;
  true_description?: string;
  false_description?: string;
}

/** Per-entity-type field bundles. Only one applies for a given `entity_type`. */
export interface FileEntityFields {
  preview?: EntityImageField;
  created_by?: EntityTypedField;
  date_created?: EntityTimestampField;
  date_updated?: EntityTimestampField;
  last_modified_by?: EntityTypedField;
  file_size?: EntityStringField;
  mime_type?: EntityStringField;
  full_size_preview?: EntityFullSizePreview;
}
export interface TaskEntityFields {
  description?: EntityStringField;
  created_by?: EntityTypedField;
  date_created?: EntityTimestampField;
  date_updated?: EntityTimestampField;
  assignee?: EntityTypedField;
  status?: EntityStringField;
  due_date?: EntityTypedField;
  priority?: EntityStringField;
}
export interface IncidentEntityFields {
  status?: EntityStringField;
  priority?: EntityStringField;
  urgency?: EntityStringField;
  created_by?: EntityTypedField;
  assigned_to?: EntityTypedField;
  date_created?: EntityTimestampField;
  date_updated?: EntityTimestampField;
  description?: EntityStringField;
  service?: EntityStringField;
}
export interface ContentItemEntityFields {
  preview?: EntityImageField;
  description?: EntityStringField;
  created_by?: EntityTypedField;
  date_created?: EntityTimestampField;
  date_updated?: EntityTimestampField;
  last_modified_by?: EntityTypedField;
}

/** Developer-defined custom field rendered on the entity unfurl. */
export interface EntityCustomField {
  label: string;
  key: string;
  type: CustomFieldType;
  value?: string | number | EntityArrayItemField[];
  link?: string;
  icon?: EntityIconField;
  long?: boolean;
  format?: string;
  image_url?: string;
  slack_file?: AnySlackFile;
  alt_text?: string;
  tag_color?: string;
  edit?: EntityEditSupport;
  item_type?: string;
  user?: EntityUserIDField | EntityUserField;
  entity_ref?: EntityRefField;
  boolean?: EntityBooleanCheckboxField | EntityBooleanTextField;
}

/** Action button rendered in an entity's primary or overflow action group. */
export interface EntityActionButton {
  text: string;
  action_id: string;
  value?: string;
  style?: string;
  url?: string;
  accessibility_label?: string;
  processing_state?: {
    enabled: boolean;
    interstitial_text?: string;
  };
}

/** Metadata that represents a work-object entity, attached to a message via `chat.unfurl`. */
export interface EntityMetadata {
  entity_type: EntityType;
  entity_payload: {
    attributes: EntityAttributes;
    fields?:
      | ContentItemEntityFields
      | FileEntityFields
      | IncidentEntityFields
      | TaskEntityFields;
    custom_fields?: EntityCustomField[];
    slack_file?: FileEntitySlackFile;
    display_order?: string[];
    actions?: {
      primary_actions?: EntityActionButton[];
      overflow_actions?: EntityActionButton[];
    };
  };
  external_ref: ExternalRef;
  url: string;
  app_unfurl_url?: string;
}
