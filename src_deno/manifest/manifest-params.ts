import type { AnyManifestEvent } from "./events.ts";
import type { AnyManifestBotScope, AnyManifestUserScope } from "./scopes.ts";

export interface ManifestParams {
  _metadata?: ManifestMetadata;
  display_information: ManifestDisplayInformation;
  features?: ManifestFeatures;
  oauth_config?: ManifestOAuthConfig;
  settings?: ManifestSettings;
  functions?: Record<string, ManifestFunction>;
}

export interface ManifestMetadata {
  major_version?: number;
  minor_version?: number;
}

export interface ManifestDisplayInformation {
  name: string;
  description?: string;
  long_description?: string;
  background_color?: string;
}

export interface ManifestFeatures {
  app_home?: ManifestAppHome;
  bot_user?: ManifestBotUser;
  shortcuts?: ManifestShortcut[];
  slash_commands?: ManifestSlashCommand[];
  unfurl_domains?: string[];
  user_connections?: ManifestUserConnections;
}

export interface ManifestUserConnections {
  is_enabled?: boolean;
  auth_hosts?: string[];
}

export interface ManifestAppHome {
  home_tab_enabled?: boolean;
  messages_tab_enabled?: boolean;
  messages_tab_read_only_enabled?: boolean;
  agent_tasks_enabled?: boolean;
}

export interface ManifestBotUser {
  display_name: string;
  always_online?: boolean;
}

export interface ManifestShortcut {
  type: "global" | "message";
  name: string;
  callback_id: string;
  description: string;
}

export interface ManifestSlashCommand {
  command: string;
  usage_hint: string;
  description: string;
  should_escape?: boolean;
  url?: string; // can be absent when enabling Socket Mode
}

export interface ManifestOAuthConfig {
  scopes: ManifestOAuthScopes;
  redirect_urls?: string[];
  token_management_enabled?: boolean;
}

export interface ManifestOAuthScopes {
  bot?: AnyManifestBotScope[];
  user?: AnyManifestUserScope[];
}

export interface ManifestSettings {
  allowed_ip_address_ranges?: string[];
  background_color?: string;
  description?: string;
  event_subscriptions?: ManifestEventSubscriptions;
  interactivity?: ManifestInteractivity;
  long_description?: string;
  org_deploy_enabled?: boolean;
  socket_mode_enabled?: boolean;
  token_rotation_enabled?: boolean;
  function_runtime?: string;
}

export interface ManifestEventSubscriptions {
  bot_events?: AnyManifestEvent[];
  user_events?: AnyManifestEvent[];
  request_url?: string; // can be absent when enabling Socket Mode
}

export interface ManifestInteractivity {
  is_enabled: boolean;
  message_menu_options_url?: string;
  request_url?: string; // can be absent when enabling Socket Mode
}

export interface ManifestFunction {
  title: string;
  description: string;
  input_parameters: ManifestParameters;
  output_parameters: ManifestParameters;
}

export interface ManifestParameters {
  properties: Record<string, ManifestParameterProperty>;
  required: string[];
}

export type ManifestParameterProperty =
  | CommonManifestParameterProperty
  | StringManifestParameterProperty
  | NumberManifestParameterProperty;

export interface CommonManifestParameterProperty {
  type: string;
  description?: string;
  title?: string;
  hint?: string;
}

export interface StringManifestParameterProperty
  extends CommonManifestParameterProperty {
  type: "string";
  minLength?: number;
  maxLength?: number;
}

export interface NumberManifestParameterProperty
  extends CommonManifestParameterProperty {
  type: "number";
  minimum?: number;
  maximum?: number;
}
