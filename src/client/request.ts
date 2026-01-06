import type { EventTriggerSettings, ScheduleTriggerSettings, WebhookTriggerSettings } from "./automation-response/types";
import type { AnyMessageBlock } from "../block-kit/blocks";
import type { LinkUnfurls } from "../block-kit/link-unfurls";
import type { MessageAttachment } from "../block-kit/message-attachment";
import type { MessageMetadata } from "../block-kit/message-metadata";
import type { ModalView, HomeTabView } from "../block-kit/views";
import type { ManifestParams } from "../manifest/manifest-params";

export interface SlackAPIRequest {
  token?: string;
}

export interface LocaleAware {
  include_locale?: boolean;
}

export interface Searchable {
  query: string;
  highlight?: boolean;
  sort: "score" | "timestamp";
  sort_dir: "asc" | "desc";
  team_id?: string;
}

export interface CursorPaginationEnabled {
  limit?: number; // natural integer, max of 1000
  cursor?: string; // find this in a response's `response_metadata.next_cursor`
}

export interface TimelinePaginationEnabled {
  oldest?: string;
  latest?: string;
  inclusive?: boolean;
}

export interface TraditionalPagingEnabled {
  page?: number; // default: 1
  count?: number; // default: 100
}

/*
 * MethodRequest types (no formal relationship other than the generic constraint in Method<>)
 */

/*
 * `admin.*`
 */
export interface AdminAnalyticsGetFileRequest extends SlackAPIRequest {
  type: string;
  date?: string;
  metadata_only?: boolean;
}
export interface AdminAppsApproveRequest extends SlackAPIRequest {
  app_id?: string;
  request_id?: string;
  team_id?: string;
}
export interface AdminAppsApprovedListRequest extends SlackAPIRequest, CursorPaginationEnabled {
  team_id?: string;
  enterprise_id?: string;
}
export interface AdminAppsClearResolutionRequest extends SlackAPIRequest {
  app_id: string;
  enterprise_id?: string;
  team_id?: string;
}
export interface AdminAppsRequestsCancelRequest extends SlackAPIRequest {
  request_id: string;
  enterprise_id?: string;
  team_id?: string;
}
export interface AdminAppsRequestsListRequest extends SlackAPIRequest, CursorPaginationEnabled {
  team_id?: string;
}
export interface AdminAppsRestrictRequest extends SlackAPIRequest {
  app_id?: string;
  request_id?: string;
  team_id?: string;
}
export interface AdminAppsRestrictedListRequest extends SlackAPIRequest, CursorPaginationEnabled {
  team_id?: string;
  enterprise_id?: string;
}
export interface AdminAppsUninstallRequest extends SlackAPIRequest {
  app_id: string;
  enterprise_id?: string;
  team_ids?: string[];
}
export interface AdminAppsActivitiesListRequest extends SlackAPIRequest, CursorPaginationEnabled {
  app_id?: string;
  component_id?: string;
  component_type?: "events_api" | "workflows" | "functions" | "tables";
  log_event_type?: string;
  max_date_created?: number;
  min_date_created?: number;
  min_log_level?: "trace" | "debug" | "info" | "warn" | "error" | "fatal";
  sort_direction?: "asc" | "desc";
  source?: "slack" | "developer";
  team_id?: string;
  trace_id?: string;
}
export interface AdminAppsConfigLookupRequest extends SlackAPIRequest {
  app_ids: string[];
}
export interface AdminAppsConfigSetRequest extends SlackAPIRequest {
  app_id: string;
  domain_restrictions?: {
    urls?: string[];
    emails?: string[];
  };
  workflow_auth_strategy?: "builder_choice" | "end_user_only";
}
export interface AdminAuthPolicyAssignEntitiesRequest extends SlackAPIRequest {
  entity_ids: string[];
  // https://api.slack.com/methods/admin.auth.policy.assignEntities
  entity_type: "USER";
  policy_name: "email_password";
}
export interface AdminAuthPolicyGetEntitiesRequest extends SlackAPIRequest, CursorPaginationEnabled {
  //https://api.slack.com/methods/admin.auth.policy.getEntities
  policy_name: "email_password";
  entity_type?: "USER";
}
export interface AdminAuthPolicyRemoveEntitiesRequest extends SlackAPIRequest {
  entity_ids: string[];
  // https://api.slack.com/methods/admin.auth.policy.removeEntities
  entity_type: "USER";
  policy_name: "email_password";
}
export interface AdminBarriersCreateRequest extends SlackAPIRequest {
  barriered_from_usergroup_ids: string[];
  primary_usergroup_id: string;
  // https://api.slack.com/methods/admin.barriers.create
  restricted_subjects: ["im", "mpim", "call"];
}

export interface AdminBarriersDeleteRequest extends SlackAPIRequest {
  barrier_id: string;
}

export interface AdminBarriersListRequest extends SlackAPIRequest, CursorPaginationEnabled {}

export interface AdminBarriersUpdateRequest extends SlackAPIRequest {
  barrier_id: string;
  barriered_from_usergroup_ids: string[];
  primary_usergroup_id: string;
  // https://api.slack.com/methods/admin.barriers.update
  restricted_subjects: ["im", "mpim", "call"];
}

export interface AdminConversationsArchiveRequest extends SlackAPIRequest {
  channel_id: string;
}
export interface AdminConversationsBulkArchiveRequest extends SlackAPIRequest {
  channel_ids: string[];
}
export interface AdminConversationsBulkDeleteRequest extends SlackAPIRequest {
  channel_ids: string[];
}
export interface AdminConversationsBulkMoveRequest extends SlackAPIRequest {
  channel_ids: string[];
  target_team_id: string;
}
export interface AdminConversationsConvertToPrivateRequest extends SlackAPIRequest {
  channel_id: string;
}
export interface AdminConversationsConvertToPublicRequest extends SlackAPIRequest {
  channel_id: string;
}
export interface AdminConversationsCreateRequest extends SlackAPIRequest {
  is_private: boolean;
  name: string;
  description?: string;
  org_wide?: boolean;
  team_id?: string;
}
export interface AdminConversationsDeleteRequest extends SlackAPIRequest {
  channel_id: string;
}
export interface AdminConversationsDisconnectSharedRequest extends SlackAPIRequest {
  channel_id: string;
  leaving_team_ids?: string[];
}
export interface AdminConversationsEKMListOriginalConnectedChannelInfoRequest extends SlackAPIRequest, CursorPaginationEnabled {
  channel_ids?: string[];
  team_ids?: string[];
}
export interface AdminConversationsGetConversationPrefsRequest extends SlackAPIRequest {
  channel_id: string;
}
export interface AdminConversationsGetTeamsRequest extends SlackAPIRequest, CursorPaginationEnabled {
  channel_id: string;
}
export interface AdminConversationsInviteRequest extends SlackAPIRequest {
  channel_id: string;
  user_ids: string[];
}
export interface AdminConversationsRenameRequest extends SlackAPIRequest {
  channel_id: string;
  name: string;
}
export interface AdminConversationsRestrictAccessAddGroupRequest extends SlackAPIRequest {
  channel_id: string;
  group_id: string;
  team_id?: string;
}
export interface AdminConversationsRestrictAccessListGroupsRequest extends SlackAPIRequest {
  channel_id: string;
  team_id?: string;
}
export interface AdminConversationsRestrictAccessRemoveGroupRequest extends SlackAPIRequest {
  channel_id: string;
  group_id: string;
  team_id: string;
}
export interface AdminConversationsGetCustomRetentionRequest extends SlackAPIRequest {
  channel_id: string;
}
export interface AdminConversationsSetCustomRetentionRequest extends SlackAPIRequest {
  channel_id: string;
  duration_days: number;
}
export interface AdminConversationsRemoveCustomRetentionRequest extends SlackAPIRequest {
  channel_id: string;
}
export interface AdminConversationsLookupRequest extends SlackAPIRequest, CursorPaginationEnabled {
  last_message_activity_before: number;
  team_ids: string[];
  max_member_count?: number;
}
export interface AdminConversationsSearchRequest extends SlackAPIRequest, CursorPaginationEnabled {
  query?: string;
  search_channel_types?: string[];
  sort?: "relevant" | "name" | "member_count" | "created";
  sort_dir?: "asc" | "desc";
  team_ids?: string[];
}
export interface AdminConversationsSetConversationPrefsRequest extends SlackAPIRequest {
  channel_id: string;
  prefs: {
    who_can_post?: string;
    can_thread?: string;
    can_huddle?: string;
    enable_at_channel?: string;
    enable_at_here?: string;
  };
}
export interface AdminConversationsSetTeamsRequest extends SlackAPIRequest {
  channel_id: string;
  team_id?: string;
  target_team_ids?: string[];
  org_channel?: boolean;
}
export interface AdminConversationsUnarchiveRequest extends SlackAPIRequest {
  channel_id: string;
}
export interface AdminEmojiAddRequest extends SlackAPIRequest {
  name: string;
  url: string;
}
export interface AdminEmojiAddAliasRequest extends SlackAPIRequest {
  name: string;
  alias_for: string;
}
export interface AdminEmojiListRequest extends SlackAPIRequest, CursorPaginationEnabled {}
export interface AdminEmojiRemoveRequest extends SlackAPIRequest {
  name: string;
}
export interface AdminEmojiRenameRequest extends SlackAPIRequest {
  name: string;
  new_name: string;
}
export interface AdminFunctionsListRequest extends SlackAPIRequest, CursorPaginationEnabled {
  app_ids: string[];
  team_id?: string;
}
export interface AdminFunctionsPermissionsLookupRequest extends SlackAPIRequest {
  function_ids: string[];
}
export interface AdminFunctionsPermissionsSetRequest extends SlackAPIRequest {
  function_id: string;
  visibility: "everyone" | "app_collaborators" | "named_entities" | "no_one";
  user_ids?: string[];
}
export interface AdminInviteRequestsApproveRequest extends SlackAPIRequest {
  invite_request_id: string;
  team_id: string;
}
export interface AdminInviteRequestsApprovedListRequest extends SlackAPIRequest, CursorPaginationEnabled {
  team_id: string;
}
export interface AdminInviteRequestsDenyRequest extends SlackAPIRequest {
  invite_request_id: string;
  team_id: string;
}
export interface AdminInviteRequestsDeniedListRequest extends SlackAPIRequest, CursorPaginationEnabled {
  team_id: string;
}
export interface AdminInviteRequestsListRequest extends SlackAPIRequest, CursorPaginationEnabled {
  team_id: string;
}
export interface AdminRolesAddAssignmentsRequest extends SlackAPIRequest {
  role_id: string;
  entity_ids: string[];
  user_ids: string[];
}
export interface AdminRolesListAssignmentsRequest extends SlackAPIRequest, CursorPaginationEnabled {
  entity_ids?: string[];
  role_ids?: string[];
  sort_dir?: "ASC" | "DESC";
}
export interface AdminRolesRemoveAssignmentsRequest extends SlackAPIRequest {
  role_id: string;
  entity_ids: string[];
  user_ids: string[];
}
export interface AdminTeamsAdminsListRequest extends SlackAPIRequest, CursorPaginationEnabled {
  team_id: string;
}
export interface AdminTeamsCreateRequest extends SlackAPIRequest {
  team_domain: string;
  team_name: string;
  team_description?: string;
  team_discoverability?: "open" | "closed" | "invite_only" | "unlisted";
}
export interface AdminTeamsListRequest extends SlackAPIRequest, CursorPaginationEnabled {}
export interface AdminTeamsOwnersListRequest extends SlackAPIRequest, CursorPaginationEnabled {
  team_id: string;
}
export interface AdminTeamsSettingsInfoRequest extends SlackAPIRequest {
  team_id: string;
}
export interface AdminTeamsSettingsSetDefaultChannelsRequest extends SlackAPIRequest {
  team_id: string;
  channel_ids: string[];
}
export interface AdminTeamsSettingsSetDescriptionRequest extends SlackAPIRequest {
  team_id: string;
  description: string;
}
export interface AdminTeamsSettingsSetDiscoverabilityRequest extends SlackAPIRequest {
  team_id: string;
  discoverability: "open" | "invite_only" | "closed" | "unlisted";
}
export interface AdminTeamsSettingsSetIconRequest extends SlackAPIRequest {
  team_id: string;
  image_url: string;
}
export interface AdminTeamsSettingsSetNameRequest extends SlackAPIRequest {
  team_id: string;
  name: string;
}
export interface AdminUsergroupsAddChannelsRequest extends SlackAPIRequest {
  usergroup_id: string;
  team_id?: string;
  channel_ids: string | string[];
}
export interface AdminUsergroupsAddTeamsRequest extends SlackAPIRequest {
  usergroup_id: string;
  team_ids: string | string[];
  auto_provision?: boolean;
}
export interface AdminUsergroupsListChannelsRequest extends SlackAPIRequest {
  usergroup_id: string;
  include_num_members?: boolean;
  team_id?: string;
}
export interface AdminUsergroupsRemoveChannelsRequest extends SlackAPIRequest {
  usergroup_id: string;
  channel_ids: string | string[];
}
export interface AdminUsersAssignRequest extends SlackAPIRequest {
  team_id: string;
  user_id: string;
  is_restricted?: boolean;
  is_ultra_restricted?: boolean;
}
export interface AdminUsersGetExpirationRequest extends SlackAPIRequest {
  user_id?: string;
  target_team?: string;
}
export interface AdminUsersInviteRequest extends SlackAPIRequest {
  channel_ids: string | string[];
  email: string;
  team_id: string;
  custom_message?: string;
  email_password_policy_enabled?: boolean;
  guest_expiration_ts?: string;
  is_restricted?: boolean;
  is_ultra_restricted?: boolean;
  real_name?: string;
  resend?: boolean;
}
export interface AdminUsersListRequest extends SlackAPIRequest, CursorPaginationEnabled {
  team_id: string;
  include_deactivated_user_workspaces?: boolean;
  is_active?: boolean;
}
export interface AdminUsersRemoveRequest extends SlackAPIRequest {
  team_id: string;
  user_id: string;
}
export interface AdminUsersSetAdminRequest extends SlackAPIRequest {
  team_id: string;
  user_id: string;
}
export interface AdminUsersSetExpirationRequest extends SlackAPIRequest {
  team_id: string;
  user_id: string;
  expiration_ts: number;
}
export interface AdminUsersSetOwnerRequest extends SlackAPIRequest {
  team_id: string;
  user_id: string;
}
export interface AdminUsersSetRegularRequest extends SlackAPIRequest {
  team_id: string;
  user_id: string;
}
export interface AdminUsersSessionListRequest extends SlackAPIRequest, CursorPaginationEnabled {
  user_id?: string;
  team_id?: string;
}
export interface AdminUsersSessionResetRequest extends SlackAPIRequest {
  user_id: string;
  mobile_only?: boolean;
  web_only?: boolean;
}
export interface AdminUsersSessionResetBulkRequest extends SlackAPIRequest {
  user_ids: string[];
  mobile_only?: boolean;
  web_only?: boolean;
}
export interface AdminUsersSessionInvalidateRequest extends SlackAPIRequest {
  session_id: string;
  team_id: string;
}
export interface AdminUsersSessionGetSettingsRequest extends SlackAPIRequest {
  user_ids: string[];
}
export interface AdminUsersSessionSetSettingsRequest extends SlackAPIRequest {
  user_ids: string[];
  desktop_app_browser_quit?: boolean;
  duration?: number;
}
export interface AdminUsersSessionClearSettingsRequest extends SlackAPIRequest {
  user_ids: string[];
}

export interface AdminUsersUnsupportedVersionsExportRequest extends SlackAPIRequest {
  date_end_of_support?: number;
  date_sessions_started?: number;
}

export interface AdminWorkflowsCollaboratorsAddRequest extends SlackAPIRequest {
  collaborator_ids: string[];
  workflow_ids: string[];
}
export interface AdminWorkflowsCollaboratorsRemoveRequest extends SlackAPIRequest {
  collaborator_ids: string[];
  workflow_ids: string[];
}
export interface AdminWorkflowsPermissionsLookupRequest extends SlackAPIRequest {
  workflow_ids: string[];
  max_workflow_triggers?: number;
}
export interface AdminWorkflowsSearchRequest extends SlackAPIRequest, CursorPaginationEnabled {
  app_id?: string;
  collaborator_ids?: string[];
  no_collaborators?: boolean;
  num_trigger_ids?: number;
  query?: string;
  sort?: string;
  sort_dir?: string;
  source?: string;
}
export interface AdminWorkflowsUnpublishRequest extends SlackAPIRequest {
  workflow_ids: string[];
}

/*
 * `api.*`
 */
export type APITestRequest = SlackAPIRequest;

/*
 * `apps.*`
 */
export type AppsConnectionsOpenRequest = SlackAPIRequest;

export interface AppsDatastorePutRequest extends SlackAPIRequest {
  datastore: string;
  // deno-lint-ignore no-explicit-any
  item: Record<string, any>;
}
export interface AppsDatastoreUpdateRequest extends SlackAPIRequest {
  datastore: string;
  // deno-lint-ignore no-explicit-any
  item: Record<string, any>;
}
export interface AppsDatastoreGetRequest extends SlackAPIRequest {
  datastore: string;
  id: string;
}
export interface AppsDatastoreQueryRequest extends SlackAPIRequest {
  datastore: string;
  app_id?: string;
  cursor?: string;
  // deno-lint-ignore no-explicit-any
  expression_attributes?: Record<string, any>;
  // deno-lint-ignore no-explicit-any
  expression_values?: Record<string, any>;
  limit?: number;
}
export interface AppsDatastoreDeleteRequest extends SlackAPIRequest {
  datastore: string;
  id: string;
}

export interface AppsEventAuthorizationsListRequest extends SlackAPIRequest, CursorPaginationEnabled {
  event_context: string;
}

export interface AppsManifestCreateRequest extends SlackAPIRequest {
  manifest: ManifestParams | string;
}
export interface AppsManifestDeleteRequest extends SlackAPIRequest {
  app_id: string;
}
export interface AppsManifestUpdateRequest extends SlackAPIRequest {
  app_id: string;
  manifest: ManifestParams | string;
}
export interface AppsManifestExportRequest extends SlackAPIRequest {
  app_id: string;
}
export interface AppsManifestValidateRequest extends SlackAPIRequest {
  app_id?: string;
  manifest: ManifestParams | string;
}

export interface AppsUninstallRequest extends SlackAPIRequest {
  client_id: string;
  client_secret: string;
}

/*
 * `assistant.threads.*`
 */

export interface AssistantThreadsSetStatusRequest extends SlackAPIRequest {
  channel_id: string;
  thread_ts: string;
  status: string;
}
export interface AssistantThreadsSetSuggestedPromptsRequest extends SlackAPIRequest {
  channel_id: string;
  thread_ts: string;
  title?: string;
  prompts: {
    title: string;
    message: string;
  }[];
}
export interface AssistantThreadsSetTitleRequest extends SlackAPIRequest {
  channel_id: string;
  thread_ts: string;
  title: string;
}

/*
 * `auth.*`
 */
export interface AuthRevokeRequest extends SlackAPIRequest {
  test?: boolean;
}
export interface AuthTeamsListRequest extends SlackAPIRequest, CursorPaginationEnabled {
  include_icon?: boolean;
}
export type AuthTestRequest = SlackAPIRequest;

/*
 * `bots.*`
 */
export interface BotsInfoRequest extends SlackAPIRequest {
  bot: string;
  team_id?: string;
}

/*
 * `bookmarks.*`
 */
export interface BookmarksAddRequest extends SlackAPIRequest {
  channel_id: string;
  title: string;
  type: string;
  emoji?: string;
  entity_id?: string;
  link?: string;
  parent_id?: string;
}

export interface BookmarksEditRequest extends SlackAPIRequest {
  bookmark_id: string;
  channel_id: string;
  emoji?: string;
  link?: string;
  title?: string;
}

export interface BookmarksListRequest extends SlackAPIRequest {
  channel_id: string;
}

export interface BookmarksRemoveRequest extends SlackAPIRequest {
  bookmark_id: string;
  channel_id: string;
}

/*
 * `canvases.*`
 */

export interface CanvasesAccessDeleteRequest extends SlackAPIRequest {
  canvas_id: string;
  user_ids?: string[];
  channel_ids?: string[];
}

export interface CanvasesAccessSetRequest extends SlackAPIRequest {
  canvas_id: string;
  access_level: "read" | "write";
  user_ids?: string[];
  channel_ids?: string[];
}

export interface CanvasDocumentContent {
  type: "markdown";
  markdown: string;
}

export interface CanvasesCreateRequest extends SlackAPIRequest {
  title?: string;
  document_content: CanvasDocumentContent;
}
export interface CanvasesDeleteRequest extends SlackAPIRequest {
  canvas_id: string;
}

export interface CanvasesEditRequest extends SlackAPIRequest {
  canvas_id: string;
  changes: {
    operation: "insert_after" | "insert_before" | "insert_at_start" | "insert_at_end" | "replace" | "delete";
    section_id: string;
    document_content?: CanvasDocumentContent;
  }[];
}

export interface CanvasesSectionsLookupRequest extends SlackAPIRequest {
  canvas_id: string;
  criteria: {
    section_types?: ("any_header" | "h1" | "h2" | "h3")[];
    contains_text?: string;
  };
}

/*
 * `chat.*`
 */
export interface ChatDeleteRequest extends SlackAPIRequest {
  channel: string;
  ts: string;
  as_user?: boolean;
}
export interface ChatDeleteScheduledMessageRequest extends SlackAPIRequest {
  channel: string;
  scheduled_message_id: string;
  as_user?: boolean;
}
export interface ChatGetPermalinkRequest extends SlackAPIRequest {
  channel: string;
  message_ts: string;
}
export interface ChatMeMessageRequest extends SlackAPIRequest {
  channel: string;
  text: string;
}
export interface ChatPostEphemeralRequest extends SlackAPIRequest {
  channel: string;
  text: string;
  user: string;
  blocks?: AnyMessageBlock[];
  attachments?: MessageAttachment[];
  thread_ts?: string;

  // with chat:write.customize
  icon_emoji?: string;
  icon_url?: string;
  username?: string;

  // legacy ones
  link_names?: boolean;
  parse?: "full" | "none";
  as_user?: boolean;
}
export interface ChatPostMessageRequest extends SlackAPIRequest {
  channel: string;
  text: string;
  blocks?: AnyMessageBlock[];
  attachments?: MessageAttachment[];
  metadata?: MessageMetadata;
  thread_ts?: string;
  reply_broadcast?: boolean; // if specified, thread_ts must be set
  unfurl_links?: boolean;
  unfurl_media?: boolean;

  // with chat:write.customize
  icon_emoji?: string;
  icon_url?: string;
  username?: string;

  // legacy ones
  link_names?: boolean;
  mrkdwn?: boolean;
  parse?: "full" | "none";
  as_user?: boolean;
}
export interface ChatScheduleMessageRequest extends SlackAPIRequest {
  channel: string;
  text: string;
  post_at: string | number;
  blocks?: AnyMessageBlock[];
  attachments?: MessageAttachment[];
  thread_ts?: string;
  metadata?: MessageMetadata;
  reply_broadcast?: boolean; // if specified, thread_ts must be set
  team_id?: string;
  unfurl_links?: boolean;
  unfurl_media?: boolean;

  // legacy ones
  link_names?: boolean;
  as_user?: boolean;
  parse?: "full" | "none";
}
export interface ChatScheduledMessagesListRequest extends SlackAPIRequest, CursorPaginationEnabled {
  channel: string;
  latest: number;
  oldest: number;
  team_id?: string; // required if org token is used
}
// ChannelAndTS and SourceAndUnfurlID are used as either-or mixins for ChatUnfurlRequest
interface ChannelAndTSRequest {
  channel: string;
  ts: string;
}

interface SourceAndUnfurlIDRequest {
  source: "composer" | "conversations_history";
  unfurl_id: string;
}
export type ChatUnfurlRequest = (ChannelAndTSRequest | SourceAndUnfurlIDRequest) &
  SlackAPIRequest & {
    unfurls: LinkUnfurls;
    user_auth_message?: string;
    user_auth_required?: boolean;
    user_auth_url?: string;
    user_auth_blocks?: AnyMessageBlock[];
  };
export interface ChatUpdateRequest extends SlackAPIRequest {
  channel: string;
  text: string;
  ts: string;
  blocks?: AnyMessageBlock[];
  attachments?: MessageAttachment[];
  metadata?: MessageMetadata;
  file_ids?: string[];
  reply_broadcast?: boolean;

  // legacy ones
  link_names?: boolean;
  parse?: "full" | "none";
  as_user?: boolean;
}

export interface ChatAppendStreamRequest extends SlackAPIRequest {
  channel: string;
  ts: string;
  markdown_text: string;
}
export interface ChatStartStreamRequest extends SlackAPIRequest {
  channel: string;
  thread_ts: string;
  markdown_text?: string;
  recipient_user_id?: string;
  recipient_team_id?: string;
}
export interface ChatStopStreamRequest extends SlackAPIRequest {
  channel: string;
  ts: string;
  markdown_text?: string;
  blocks?: AnyMessageBlock[];
  metadata?: MessageMetadata;
}

/*
 * `conversations.*`
 */
export interface ConversationsAcceptSharedInviteRequest extends SlackAPIRequest {
  channel_name: string;
  channel_id?: string;
  free_trial_accepted?: boolean;
  invite_id?: string;
  is_private?: boolean;
  team_id?: string;
}
export interface ConversationsApproveSharedInviteRequest extends SlackAPIRequest {
  invite_id: string;
  target_team?: string;
}
export interface ConversationsArchiveRequest extends SlackAPIRequest {
  channel: string;
}
export interface ConversationsCloseRequest extends SlackAPIRequest {
  channel: string;
}
export interface ConversationsCreateRequest extends SlackAPIRequest {
  name: string;
  is_private?: boolean;
  team_id?: string;
}
export interface ConversationsDeclineSharedInviteRequest extends SlackAPIRequest {
  invite_id: string;
  target_team?: string;
}
export interface ConversationsHistoryRequest extends SlackAPIRequest, CursorPaginationEnabled, TimelinePaginationEnabled {
  channel: string;
  include_all_metadata?: boolean;
}
export interface ConversationsInfoRequest extends SlackAPIRequest, LocaleAware {
  channel: string;
  include_num_members?: boolean;
}
export interface ConversationsInviteRequest extends SlackAPIRequest {
  channel: string;
  users: string | string[];
  force?: boolean;
}
export interface ConversationsInviteSharedRequest extends SlackAPIRequest {
  channel: string;
  emails?: string[];
  user_ids?: string[];
}
export interface ConversationsJoinRequest extends SlackAPIRequest {
  channel: string;
}
export interface ConversationsKickRequest extends SlackAPIRequest {
  channel: string;
  user: string;
}
export interface ConversationsLeaveRequest extends SlackAPIRequest {
  channel: string;
}
export interface ConversationsListRequest extends SlackAPIRequest, CursorPaginationEnabled {
  exclude_archived?: boolean;
  types?: ("public_channel" | "private_channel" | "mpim" | "im")[];
  team_id?: string;
}
export interface ConversationsListConnectInvitesRequest extends SlackAPIRequest {
  count?: number;
  cursor?: string;
  team_id?: string;
}
export interface ConversationsMarkRequest extends SlackAPIRequest {
  channel: string;
  ts: string;
}
export interface ConversationsMembersRequest extends SlackAPIRequest, CursorPaginationEnabled {
  channel: string;
}
export interface ConversationsOpenRequest extends SlackAPIRequest {
  channel?: string;
  users?: string | string[];
  prevent_creation?: boolean;
  return_im?: boolean;
}
export interface ConversationsRenameRequest extends SlackAPIRequest {
  channel: string;
  name: string;
}
export interface ConversationsRepliesRequest extends SlackAPIRequest, CursorPaginationEnabled, TimelinePaginationEnabled {
  channel: string;
  ts: string;
  include_all_metadata?: boolean;
}
export interface ConversationsSetPurposeRequest extends SlackAPIRequest {
  channel: string;
  purpose: string;
}
export interface ConversationsSetTopicRequest extends SlackAPIRequest {
  channel: string;
  topic: string;
}
export interface ConversationsUnarchiveRequest extends SlackAPIRequest {
  channel: string;
}
export interface ConversationsCanvasesCreateRequest extends SlackAPIRequest {
  channel_id: string;
  document_content: CanvasDocumentContent;
}
export interface ConversationsExternalInvitePermissionsSetRequest extends SlackAPIRequest {
  action: "upgrade" | "downgrade";
  channel: string;
  target_team: string;
}
export interface ConversationsRequestSharedInviteApproveRequest extends SlackAPIRequest {
  invite_id: string;
  team_id?: string;
  is_external_limited?: boolean;
  message?: {
    text: string;
    is_override: boolean;
  };
}
export interface ConversationsRequestSharedInviteDenyRequest extends SlackAPIRequest {
  invite_id: string;
  message: string;
}
export interface ConversationsRequestSharedInviteListRequest extends SlackAPIRequest, CursorPaginationEnabled {
  include_approved?: boolean;
  include_denied?: boolean;
  include_expired?: boolean;
  invite_ids?: string[];
  user_id?: string;
}

/*
 * `dnd.*`
 */
export type DndEndDndRequest = SlackAPIRequest;
export type DndEndSnoozeRequest = SlackAPIRequest;
export interface DndInfoRequest extends SlackAPIRequest {
  user: string;
}
export interface DndSetSnoozeRequest extends SlackAPIRequest {
  num_minutes: number;
}
export interface DndTeamInfoRequest extends SlackAPIRequest {
  users?: string | string[];
}

/*
 * `emoji.*`
 */
export interface EmojiListRequest extends SlackAPIRequest {
  include_categories?: boolean;
}

/**
 * `entity.*`
 */
// entity.presentDetails
export interface EntityPresentDetailsRequest extends SlackAPIRequest {
  trigger_id: string;
  // deno-lint-ignore no-explicit-any
  metadata?: any;
  user_auth_required?: boolean;
  user_auth_url?: string;
}

/*
 * `files.*`
 */
export interface FilesDeleteRequest extends SlackAPIRequest {
  file: string; // file id
}
export interface FilesInfoRequest extends SlackAPIRequest, CursorPaginationEnabled {
  file: string; // file id
  count?: number;
  page?: number;
}
export interface FilesListRequest extends SlackAPIRequest, TraditionalPagingEnabled {
  channel?: string;
  user?: string;
  ts_from?: string;
  ts_to?: string;
  types?: string | string[];
  show_files_hidden_by_limit?: boolean;
  team_id?: string;
}
export interface FilesRevokePublicURLRequest extends SlackAPIRequest {
  file: string; // file id
}
export interface FilesSharedPublicURLRequest extends SlackAPIRequest {
  file: string; // file id
}
/**
 * Legacy files.upload API files upload Request
 * @deprecated use files.uploadV2 instead
 * */
interface FileUpload {
  channels?: string | string[];
  content?: string; // if omitted, must provide `file`
  file?: Blob | ArrayBuffer; // if omitted, must provide `content`
  filename?: string;
  filetype?: string;
  initial_comment?: string;
  thread_ts?: string; // if specified, `channels` must be set
  title?: string;
}
/**
 * @deprecated use files.uploadV2 instead
 */
export type FilesUploadRequest = FileUpload & SlackAPIRequest;

/**
 * files.upload V2 API files upload Request
 * */
export interface FileUploadV2 {
  filename: string;
  title?: string;
  alt_text?: string; // Description of image for screen-reader
  snippet_type?: string; // Syntax type of the snippet being uploaded. E.g. `python`
  content?: string; // if omitted, must provide `file`
  file?: Blob | ArrayBuffer; // if omitted, must provide `content`
  filetype?: string;
}
export interface FileUploadV2Share {
  channel_id?: string;
  thread_ts?: string; // if specified, `channel_id` must be set
  initial_comment?: string; // if specified, `channel_id` must be set
}
export interface FilesUploadV2Request1 extends SlackAPIRequest, FileUploadV2, FileUploadV2Share {}
export interface FilesUploadV2RequestN extends SlackAPIRequest, FileUploadV2Share {
  files: FileUploadV2[];
}
export type FilesUploadV2Request = FilesUploadV2Request1 | FilesUploadV2RequestN;

/**
 * Gets a URL for an edge external file upload. Method:
 * {@link https://api.slack.com/methods/files.getUploadURLExternal files.getUploadURLExternal}
 */
export interface FilesGetUploadURLExternalRequest extends SlackAPIRequest {
  filename: string;
  length: number;
  alt_text?: string;
  snippet_type?: string;
}
/**
 * Finishes an upload started with files.getUploadURLExternal. Method:
 * {@link https://api.slack.com/methods/files.completeUploadExternal files.completeUploadExternal}
 * */
export interface FilesCompleteUploadExternalRequest extends SlackAPIRequest {
  files: FileUploadComplete[];
  channel_id?: string; // if omitted, file will be private
  initial_comment?: string;
  thread_ts?: string;
}
export interface FileUploadComplete {
  id: string; // file id
  title?: string; // filename
}
// either file or external_id is required
export interface FilesRemoteInfoRequest extends SlackAPIRequest {
  // either one of the file or external_id Request are required
  file?: string;
  external_id?: string;
}
export interface FilesRemoteListRequest extends SlackAPIRequest, CursorPaginationEnabled {
  ts_from?: string;
  ts_to?: string;
  channel?: string;
}
export interface FilesRemoteAddRequest extends SlackAPIRequest {
  title: string;
  external_url: string;
  external_id: string; // a unique identifier for the file in your system
  filetype: string; // possible values (except for 'auto'): https://api.slack.com/types/file#file_types
  preview_image?: Uint8Array;
  indexable_file_contents?: Uint8Array;
}
export interface FilesRemoteUpdateRequest extends SlackAPIRequest {
  title?: string;
  external_url?: string;
  filetype?: string; // possible values (except for 'auto'): https://api.slack.com/types/file#file_types
  preview_image?: Uint8Array;
  indexable_file_contents?: Uint8Array;

  // either one of the file or external_id Request are required
  file?: string;
  external_id?: string;
}
export interface FilesRemoteRemoveRequest extends SlackAPIRequest {
  // either one of the file or external_id Request are required
  file?: string;
  external_id?: string;
}
export interface FilesRemoteShareRequest extends SlackAPIRequest {
  channels: string | string[];
  // either one of the file or external_id Request are required
  file?: string;
  external_id?: string;
}

/*
 * `functions.*`
 */
export interface FunctionsCompleteSuccessRequest extends SlackAPIRequest {
  // deno-lint-ignore no-explicit-any
  outputs: Record<string, any>;
  function_execution_id: string;
}
export interface FunctionsCompleteErrorRequest extends SlackAPIRequest {
  error: string;
  function_execution_id: string;
}

/*
 * `migration.*`
 */
export interface MigrationExchangeRequest extends SlackAPIRequest {
  users: string | string[];
  to_old?: boolean;
  team_id?: string;
}

/*
 * `oauth.*`
 */
export interface OAuthV2AccessRequest extends SlackAPIRequest {
  client_id: string;
  client_secret: string;
  code?: string; // not required for token rotation
  redirect_uri?: string;
  grant_type?: string;
  refresh_token?: string;
}
export interface OAuthV2ExchangeRequest extends SlackAPIRequest {
  client_id: string;
  client_secret: string;
}

/*
 * `openid.connect.*`
 */
export interface OpenIDConnectTokenRequest extends SlackAPIRequest {
  client_id: string;
  client_secret: string;
  code?: string;
  redirect_uri?: string;
  grant_type?: "authorization_code" | "refresh_token";
  refresh_token?: string;
}
export type OpenIDConnectUserInfoRequest = SlackAPIRequest;

/*
 * `pins.*`
 */
export interface PinsAddRequest extends SlackAPIRequest {
  channel: string;
  timestamp: string;
}
export interface PinsListRequest extends SlackAPIRequest {
  channel: string;
}
export interface PinsRemoveRequest extends SlackAPIRequest {
  channel: string;
  timestamp: string;
}

/*
 * `reactions.*`
 */
export interface ReactionsAddRequest extends SlackAPIRequest {
  name: string;
  // must supply one of:
  channel?: string; // paired with timestamp
  timestamp?: string; // paired with channel
  file?: string; // file id
  file_comment?: string;
}
export interface ReactionsGetRequest extends SlackAPIRequest {
  full?: boolean;
  // must supply one of:
  channel?: string; // paired with timestamp
  timestamp?: string; // paired with channel
  file?: string; // file id
  file_comment?: string;
}
export interface ReactionsListRequest extends SlackAPIRequest, TraditionalPagingEnabled, CursorPaginationEnabled {
  user?: string;
  full?: boolean;
  team_id?: string;
}
export interface ReactionsRemoveRequest extends SlackAPIRequest {
  name: string;
  // must supply one of:
  channel?: string; // paired with timestamp
  timestamp?: string; // paired with channel
  file?: string; // file id
  file_comment?: string;
}

/*
 * `reminders.*`
 */
export interface RemindersAddRequest extends SlackAPIRequest {
  text: string;
  time: string | number;
  user?: string;
}
export interface RemindersCompleteRequest extends SlackAPIRequest {
  reminder: string;
}
export interface RemindersDeleteRequest extends SlackAPIRequest {
  reminder: string;
}
export interface RemindersInfoRequest extends SlackAPIRequest {
  reminder: string;
}
export type RemindersListRequest = SlackAPIRequest;

/*
 * `search.*`
 */
export interface SearchAllRequest extends SlackAPIRequest, TraditionalPagingEnabled, Searchable {}
export interface SearchFilesRequest extends SlackAPIRequest, TraditionalPagingEnabled, Searchable {}
export interface SearchMessagesRequest extends SlackAPIRequest, TraditionalPagingEnabled, Searchable {}

/*
 * `slackLists.*`
 */
export interface SlackListsAccessDeleteRequest extends SlackAPIRequest {
  list_id: string;
  channel_ids?: string[];
  user_ids?: string[];
}
export interface SlackListsAccessSetRequest extends SlackAPIRequest {
  list_id: string;
  access_level: string;
  channel_ids?: string[];
  user_ids?: string[];
}
export interface SlackListsCreateRequest extends SlackAPIRequest {
  name: string;
  description_block?: AnyMessageBlock[];
  // deno-lint-ignore no-explicit-any
  schema?: any;
  copy_from_list_id?: string;
  include_copied_list_records?: boolean;
  todo_mode?: boolean;
}
export interface SlackListsDownloadGetRequest extends SlackAPIRequest {
  list_id: string;
  job_id: string;
}
export interface SlackListsDownloadStartRequest extends SlackAPIRequest {
  list_id: string;
  include_archived?: boolean;
}
export interface SlackListsItemsCreateRequest extends SlackAPIRequest {
  list_id: string;
  duplicated_item_id?: string;
  parent_item_id?: string;
  // deno-lint-ignore no-explicit-any
  initial_fields?: any;
}
export interface SlackListsItemsDeleteMultipleRequest extends SlackAPIRequest {
  list_id: string;
  id: string;
}
export interface SlackListsItemsDeleteRequest extends SlackAPIRequest {
  list_id: string;
  ids: string[];
}
export interface SlackListsItemsInfoRequest extends SlackAPIRequest {
  list_id: string;
  id: string;
  include_is_subscribed?: boolean;
}
export interface SlackListsItemsListRequest extends SlackAPIRequest {
  list_id: string;
  limit?: number;
  cursor?: string;
  archived?: boolean;
}
export interface SlackListsItemsUpdateRequest extends SlackAPIRequest {
  list_id: string;
  // deno-lint-ignore no-explicit-any
  cells: any;
}
export interface SlackListsUpdateRequest extends SlackAPIRequest {
  id: string;
  name?: string;
  description_block?: AnyMessageBlock[];
  // deno-lint-ignore no-explicit-any
  schema?: any;
  todo_mode?: boolean;
}

/*
 * `stars.*`
 */
export interface StarsAddRequest extends SlackAPIRequest {
  // must supply one of:
  channel?: string; // paired with `timestamp`
  timestamp?: string; // paired with `channel`
  file?: string; // file id
  file_comment?: string;
}
export interface StarsListRequest extends SlackAPIRequest, TraditionalPagingEnabled, CursorPaginationEnabled {}
export interface StarsRemoveRequest extends SlackAPIRequest {
  // must supply one of:
  channel?: string; // paired with `timestamp`
  timestamp?: string; // paired with `channel`
  file?: string; // file id
  file_comment?: string;
}

/*
 * `team.*`
 */
export interface TeamAccessLogsRequest extends SlackAPIRequest {
  before?: number;
  count?: number;
  page?: number;
  team_id?: string;
}
export interface TeamBillableInfoRequest extends SlackAPIRequest, CursorPaginationEnabled {
  user?: string;
  team_id?: string;
}
export type TeamBillingInfoRequest = SlackAPIRequest;
export interface TeamInfoRequest extends SlackAPIRequest {
  // Team to get info on, if omitted, will return information about the current team.
  // Will only return team that the authenticated token is allowed to see through external shared channels
  team?: string;
  domain?: string; // available only for Enterprise Grid
}
export interface TeamIntegrationLogsRequest extends SlackAPIRequest {
  app_id?: string;
  change_type?: "added" | "removed" | "enabled" | "disabled" | "updated";
  count?: number;
  page?: number;
  service_id?: string;
  user?: string;
  team_id?: string;
}
export interface TeamProfileGetRequest extends SlackAPIRequest {
  visibility?: "all" | "visible" | "hidden";
  team_id?: string;
}
export type TeamPreferencesListRequest = SlackAPIRequest;

export interface TeamExternalTeamsListRequest extends SlackAPIRequest {
  connection_status_filter?: "CONNECTED" | "DISCONNECTED" | "BLOCKED" | "IN_REVIEW";
  limit?: number;
  slack_connect_pref_filter?: string[];
  sort_direction?: "asc" | "desc";
  sort_field?: "team_name" | "last_active_timestamp" | "connection_status";
  workspace_filter?: string[];
}

export interface TeamExternalTeamsDisconnectRequest extends SlackAPIRequest {
  target_team: string;
}

export interface ToolingTokensRotateRequest extends SlackAPIRequest {
  refresh_token: string;
}

/*
 * `usergroups.*`
 */
export interface UsergroupsCreateRequest extends SlackAPIRequest {
  name: string;
  channels?: string | string[];
  description?: string;
  handle?: string;
  include_count?: boolean;
}
export interface UsergroupsDisableRequest extends SlackAPIRequest {
  usergroup: string;
  include_count?: boolean;
}
export interface UsergroupsEnableRequest extends SlackAPIRequest {
  usergroup: string;
  include_count?: boolean;
}
export interface UsergroupsListRequest extends SlackAPIRequest {
  include_count?: boolean;
  include_disabled?: boolean;
  include_users?: boolean;
}
export interface UsergroupsUpdateRequest extends SlackAPIRequest {
  usergroup: string;
  channels?: string | string[];
  description?: string;
  handle?: string;
  include_count?: boolean;
  name?: string;
}
export interface UsergroupsUsersListRequest extends SlackAPIRequest {
  usergroup: string;
  include_disabled?: boolean;
}
export interface UsergroupsUsersUpdateRequest extends SlackAPIRequest {
  usergroup: string;
  users: string | string[];
  include_count?: boolean;
}

/*
 * `users.*`
 */
export interface UsersConversationsRequest extends SlackAPIRequest, CursorPaginationEnabled {
  exclude_archived?: boolean;
  types?: ("public_channel" | "private_channel" | "mpim" | "im")[];
  user?: string;
  team_id?: string;
}
export type UsersDeletePhotoRequest = SlackAPIRequest;
export interface UsersGetPresenceRequest extends SlackAPIRequest {
  user: string;
}
export type UsersIdentityRequest = SlackAPIRequest;
export interface UsersInfoRequest extends SlackAPIRequest, LocaleAware {
  user: string;
}
export interface UsersListRequest extends SlackAPIRequest, CursorPaginationEnabled, LocaleAware {
  presence?: boolean; // deprecated, defaults to false
  team_id?: string;
}
export interface UsersLookupByEmailRequest extends SlackAPIRequest {
  email: string;
}
export interface UsersSetPhotoRequest extends SlackAPIRequest {
  image: Uint8Array;
  crop_w?: number;
  crop_x?: number;
  crop_y?: number;
}
export interface UsersSetPresenceRequest extends SlackAPIRequest {
  presence: "auto" | "away";
}
export interface UsersProfileGetRequest extends SlackAPIRequest {
  include_labels?: boolean;
  user?: string;
}
export interface UsersProfileSetRequest extends SlackAPIRequest {
  profile?: Record<string, unknown> | string;
  user?: string;
  name?: string; // usable if `profile` is not passed
  value?: string; // usable if `profile` is not passed
}
export interface UsersDiscoverableContactsLookupRequest extends SlackAPIRequest {
  email: string;
}

/*
 * `views.*`
 */

export type ViewsOpenRequest = ViewsOpenAppPlatformRequest | ViewsOpenAutomationPlatformRequest;

export interface ViewsOpenAppPlatformRequest extends SlackAPIRequest {
  trigger_id: string;
  view: ModalView;
}
export interface ViewsOpenAutomationPlatformRequest extends SlackAPIRequest {
  interactivity_pointer: string;
  view: ModalView;
}

export type ViewsPushRequest = ViewsPushAppPlatformRequest | ViewsPushAutomationPlatformRequest;

export interface ViewsPushAppPlatformRequest extends SlackAPIRequest {
  trigger_id: string;
  view: ModalView;
}
export interface ViewsPushAutomationPlatformRequest extends SlackAPIRequest {
  interactivity_pointer: string;
  view: ModalView;
}

export interface ViewsPublishRequest extends SlackAPIRequest {
  user_id: string;
  view: HomeTabView;
  hash?: string;
}

export interface ViewsUpdateRequest extends SlackAPIRequest {
  view_id?: string;
  view: ModalView;
  external_id?: string;
  hash?: string;
}

export interface CommonTriggerParameters {
  type: string;
  name: string;
  description?: string;
  workflow: string; // "#/workflows/myWorkflow"
  // deno-lint-ignore no-explicit-any
  inputs: Record<string, { value: any }>;
}
// https://api.slack.com/automation/triggers/link
export interface LinkTriggerParameters extends CommonTriggerParameters {
  type: "shortcut";
}
// https://api.slack.com/automation/triggers/scheduled
export interface ScheduledTriggerParameters extends CommonTriggerParameters {
  type: "scheduled";
  schedule: ScheduleTriggerSettings;
}
// https://api.slack.com/automation/triggers/webhook
export interface WebhookTriggerParameters extends CommonTriggerParameters {
  type: "webhook";
  webhook?: WebhookTriggerSettings;
}
// https://api.slack.com/automation/triggers/event
export interface EventTriggerParameters extends CommonTriggerParameters {
  type: "event";
  event: EventTriggerSettings;
}

export type AnyTriggerParameters = LinkTriggerParameters | ScheduledTriggerParameters | WebhookTriggerParameters | EventTriggerParameters;

export type WorkflowsTriggersCreateRequest = SlackAPIRequest & AnyTriggerParameters;
export type WorkflowsTriggersUpdateRequest = SlackAPIRequest &
  AnyTriggerParameters & {
    trigger_id: string;
  };
export interface WorkflowsTriggersDeleteRequest extends SlackAPIRequest {
  trigger_id: string;
}
export interface WorkflowsTriggersListRequest extends SlackAPIRequest, CursorPaginationEnabled {
  is_owner?: boolean;
  is_published?: boolean;
}
