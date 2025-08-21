import { SlackAPIConnectionError, SlackAPIError } from "../errors";
import type {
  APITestRequest,
  AdminAppsActivitiesListRequest,
  AdminAppsApproveRequest,
  AdminAppsApprovedListRequest,
  AdminAppsClearResolutionRequest,
  AdminAppsRequestsCancelRequest,
  AdminAppsRequestsListRequest,
  AdminAppsRestrictRequest,
  AdminAppsRestrictedListRequest,
  AdminAppsUninstallRequest,
  AdminAuthPolicyAssignEntitiesRequest,
  AdminAuthPolicyGetEntitiesRequest,
  AdminAuthPolicyRemoveEntitiesRequest,
  AdminBarriersCreateRequest,
  AdminBarriersDeleteRequest,
  AdminBarriersListRequest,
  AdminBarriersUpdateRequest,
  AdminConversationsArchiveRequest,
  AdminConversationsBulkArchiveRequest,
  AdminConversationsBulkDeleteRequest,
  AdminConversationsBulkMoveRequest,
  AdminConversationsConvertToPrivateRequest,
  AdminConversationsConvertToPublicRequest,
  AdminConversationsCreateRequest,
  AdminConversationsDeleteRequest,
  AdminConversationsDisconnectSharedRequest,
  AdminConversationsEKMListOriginalConnectedChannelInfoRequest,
  AdminConversationsGetConversationPrefsRequest,
  AdminConversationsGetCustomRetentionRequest,
  AdminConversationsGetTeamsRequest,
  AdminConversationsInviteRequest,
  AdminConversationsLookupRequest,
  AdminConversationsRemoveCustomRetentionRequest,
  AdminConversationsRenameRequest,
  AdminConversationsRestrictAccessAddGroupRequest,
  AdminConversationsRestrictAccessListGroupsRequest,
  AdminConversationsRestrictAccessRemoveGroupRequest,
  AdminConversationsSearchRequest,
  AdminConversationsSetConversationPrefsRequest,
  AdminConversationsSetCustomRetentionRequest,
  AdminConversationsSetTeamsRequest,
  AdminConversationsUnarchiveRequest,
  AdminEmojiAddAliasRequest,
  AdminEmojiAddRequest,
  AdminEmojiListRequest,
  AdminEmojiRemoveRequest,
  AdminEmojiRenameRequest,
  AdminFunctionsListRequest,
  AdminFunctionsPermissionsLookupRequest,
  AdminFunctionsPermissionsSetRequest,
  AdminInviteRequestsApproveRequest,
  AdminInviteRequestsApprovedListRequest,
  AdminInviteRequestsDeniedListRequest,
  AdminInviteRequestsDenyRequest,
  AdminInviteRequestsListRequest,
  AdminRolesAddAssignmentsRequest,
  AdminRolesListAssignmentsRequest,
  AdminRolesRemoveAssignmentsRequest,
  AdminTeamsAdminsListRequest,
  AdminTeamsCreateRequest,
  AdminTeamsListRequest,
  AdminTeamsOwnersListRequest,
  AdminTeamsSettingsInfoRequest,
  AdminTeamsSettingsSetDefaultChannelsRequest,
  AdminTeamsSettingsSetDescriptionRequest,
  AdminTeamsSettingsSetDiscoverabilityRequest,
  AdminTeamsSettingsSetIconRequest,
  AdminTeamsSettingsSetNameRequest,
  AdminUsergroupsAddChannelsRequest,
  AdminUsergroupsAddTeamsRequest,
  AdminUsergroupsListChannelsRequest,
  AdminUsergroupsRemoveChannelsRequest,
  AdminUsersAssignRequest,
  AdminUsersInviteRequest,
  AdminUsersListRequest,
  AdminUsersRemoveRequest,
  AdminUsersSessionClearSettingsRequest,
  AdminUsersSessionGetSettingsRequest,
  AdminUsersSessionInvalidateRequest,
  AdminUsersSessionListRequest,
  AdminUsersSessionResetBulkRequest,
  AdminUsersSessionResetRequest,
  AdminUsersSessionSetSettingsRequest,
  AdminUsersSetAdminRequest,
  AdminUsersSetExpirationRequest,
  AdminUsersSetOwnerRequest,
  AdminUsersSetRegularRequest,
  AdminUsersUnsupportedVersionsExportRequest,
  AdminWorkflowsCollaboratorsAddRequest,
  AdminWorkflowsCollaboratorsRemoveRequest,
  AdminWorkflowsPermissionsLookupRequest,
  AdminWorkflowsSearchRequest,
  AdminWorkflowsUnpublishRequest,
  AppsConnectionsOpenRequest,
  AppsDatastoreDeleteRequest,
  AppsDatastoreGetRequest,
  AppsDatastorePutRequest,
  AppsDatastoreQueryRequest,
  AppsDatastoreUpdateRequest,
  AppsEventAuthorizationsListRequest,
  AppsManifestCreateRequest,
  AppsManifestDeleteRequest,
  AppsManifestExportRequest,
  AppsManifestUpdateRequest,
  AppsManifestValidateRequest,
  AppsUninstallRequest,
  AssistantThreadsSetStatusRequest,
  AssistantThreadsSetSuggestedPromptsRequest,
  AssistantThreadsSetTitleRequest,
  AuthRevokeRequest,
  AuthTeamsListRequest,
  AuthTestRequest,
  BookmarksAddRequest,
  BookmarksEditRequest,
  BookmarksListRequest,
  BookmarksRemoveRequest,
  BotsInfoRequest,
  CanvasesAccessDeleteRequest,
  CanvasesAccessSetRequest,
  CanvasesCreateRequest,
  CanvasesDeleteRequest,
  CanvasesEditRequest,
  CanvasesSectionsLookupRequest,
  ChatDeleteRequest,
  ChatDeleteScheduledMessageRequest,
  ChatGetPermalinkRequest,
  ChatMeMessageRequest,
  ChatPostEphemeralRequest,
  ChatPostMessageRequest,
  ChatScheduleMessageRequest,
  ChatScheduledMessagesListRequest,
  ChatUnfurlRequest,
  ChatUpdateRequest,
  ConversationsAcceptSharedInviteRequest,
  ConversationsApproveSharedInviteRequest,
  ConversationsArchiveRequest,
  ConversationsCanvasesCreateRequest,
  ConversationsCloseRequest,
  ConversationsCreateRequest,
  ConversationsDeclineSharedInviteRequest,
  ConversationsExternalInvitePermissionsSetRequest,
  ConversationsHistoryRequest,
  ConversationsInfoRequest,
  ConversationsInviteRequest,
  ConversationsInviteSharedRequest,
  ConversationsJoinRequest,
  ConversationsKickRequest,
  ConversationsLeaveRequest,
  ConversationsListConnectInvitesRequest,
  ConversationsListRequest,
  ConversationsMarkRequest,
  ConversationsMembersRequest,
  ConversationsOpenRequest,
  ConversationsRenameRequest,
  ConversationsRepliesRequest,
  ConversationsRequestSharedInviteApproveRequest,
  ConversationsRequestSharedInviteDenyRequest,
  ConversationsRequestSharedInviteListRequest,
  ConversationsSetPurposeRequest,
  ConversationsSetTopicRequest,
  ConversationsUnarchiveRequest,
  DndEndDndRequest,
  DndEndSnoozeRequest,
  DndInfoRequest,
  DndSetSnoozeRequest,
  DndTeamInfoRequest,
  EmojiListRequest,
  FileUploadComplete,
  FileUploadV2,
  FilesCompleteUploadExternalRequest,
  FilesDeleteRequest,
  FilesGetUploadURLExternalRequest,
  FilesInfoRequest,
  FilesListRequest,
  FilesRemoteAddRequest,
  FilesRemoteInfoRequest,
  FilesRemoteListRequest,
  FilesRemoteRemoveRequest,
  FilesRemoteShareRequest,
  FilesRemoteUpdateRequest,
  FilesRevokePublicURLRequest,
  FilesSharedPublicURLRequest,
  FilesUploadRequest,
  FilesUploadV2Request,
  FunctionsCompleteErrorRequest,
  FunctionsCompleteSuccessRequest,
  MigrationExchangeRequest,
  OAuthV2AccessRequest,
  OAuthV2ExchangeRequest,
  OpenIDConnectTokenRequest,
  OpenIDConnectUserInfoRequest,
  PinsAddRequest,
  PinsListRequest,
  PinsRemoveRequest,
  ReactionsAddRequest,
  ReactionsGetRequest,
  ReactionsListRequest,
  ReactionsRemoveRequest,
  RemindersAddRequest,
  RemindersCompleteRequest,
  RemindersDeleteRequest,
  RemindersInfoRequest,
  RemindersListRequest,
  SearchAllRequest,
  SearchFilesRequest,
  SearchMessagesRequest,
  SlackAPIRequest,
  StarsAddRequest,
  StarsListRequest,
  StarsRemoveRequest,
  TeamAccessLogsRequest,
  TeamBillableInfoRequest,
  TeamBillingInfoRequest,
  TeamExternalTeamsDisconnectRequest,
  TeamExternalTeamsListRequest,
  TeamInfoRequest,
  TeamIntegrationLogsRequest,
  TeamPreferencesListRequest,
  TeamProfileGetRequest,
  ToolingTokensRotateRequest,
  UsergroupsCreateRequest,
  UsergroupsDisableRequest,
  UsergroupsEnableRequest,
  UsergroupsListRequest,
  UsergroupsUpdateRequest,
  UsergroupsUsersListRequest,
  UsergroupsUsersUpdateRequest,
  UsersConversationsRequest,
  UsersDeletePhotoRequest,
  UsersDiscoverableContactsLookupRequest,
  UsersGetPresenceRequest,
  UsersIdentityRequest,
  UsersInfoRequest,
  UsersListRequest,
  UsersLookupByEmailRequest,
  UsersProfileGetRequest,
  UsersProfileSetRequest,
  UsersSetPhotoRequest,
  UsersSetPresenceRequest,
  ViewsOpenRequest,
  ViewsPublishRequest,
  ViewsPushRequest,
  ViewsUpdateRequest,
  WorkflowsTriggersCreateRequest,
  WorkflowsTriggersDeleteRequest,
  WorkflowsTriggersListRequest,
  WorkflowsTriggersUpdateRequest,
} from "./request";
import type {
  AdminAppsApproveResponse,
  AdminAppsApprovedListResponse,
  AdminAppsClearResolutionResponse,
  AdminAppsRequestsCancelResponse,
  AdminAppsRequestsListResponse,
  AdminAppsRestrictResponse,
  AdminAppsRestrictedListResponse,
  AdminAppsUninstallResponse,
  AdminAuthPolicyAssignEntitiesResponse,
  AdminAuthPolicyGetEntitiesResponse,
  AdminAuthPolicyRemoveEntitiesResponse,
  AdminBarriersCreateResponse,
  AdminBarriersDeleteResponse,
  AdminBarriersListResponse,
  AdminBarriersUpdateResponse,
  AdminConversationsArchiveResponse,
  AdminConversationsBulkArchiveResponse,
  AdminConversationsBulkDeleteResponse,
  AdminConversationsBulkMoveResponse,
  AdminConversationsConvertToPrivateResponse,
  AdminConversationsCreateResponse,
  AdminConversationsDeleteResponse,
  AdminConversationsDisconnectSharedResponse,
  AdminConversationsEkmListOriginalConnectedChannelInfoResponse,
  AdminConversationsGetConversationPrefsResponse,
  AdminConversationsGetTeamsResponse,
  AdminConversationsInviteResponse,
  AdminConversationsRenameResponse,
  AdminConversationsRestrictAccessAddGroupResponse,
  AdminConversationsRestrictAccessListGroupsResponse,
  AdminConversationsRestrictAccessRemoveGroupResponse,
  AdminConversationsGetCustomRetentionResponse,
  AdminConversationsSetCustomRetentionResponse,
  AdminConversationsRemoveCustomRetentionResponse,
  AdminConversationsSearchResponse,
  AdminConversationsSetConversationPrefsResponse,
  AdminConversationsSetTeamsResponse,
  AdminConversationsUnarchiveResponse,
  AdminEmojiAddResponse,
  AdminEmojiAddAliasResponse,
  AdminEmojiListResponse,
  AdminEmojiRemoveResponse,
  AdminEmojiRenameResponse,
  AdminInviteRequestsApproveResponse,
  AdminInviteRequestsApprovedListResponse,
  AdminInviteRequestsDeniedListResponse,
  AdminInviteRequestsDenyResponse,
  AdminInviteRequestsListResponse,
  AdminTeamsAdminsListResponse,
  AdminTeamsCreateResponse,
  AdminTeamsListResponse,
  AdminTeamsOwnersListResponse,
  AdminTeamsSettingsInfoResponse,
  AdminTeamsSettingsSetDefaultChannelsResponse,
  AdminTeamsSettingsSetDescriptionResponse,
  AdminTeamsSettingsSetDiscoverabilityResponse,
  AdminTeamsSettingsSetIconResponse,
  AdminTeamsSettingsSetNameResponse,
  AdminUsergroupsAddChannelsResponse,
  AdminUsergroupsAddTeamsResponse,
  AdminUsergroupsListChannelsResponse,
  AdminUsergroupsRemoveChannelsResponse,
  AdminUsersAssignResponse,
  AdminUsersInviteResponse,
  AdminUsersListResponse,
  AdminUsersRemoveResponse,
  AdminUsersSessionListResponse,
  AdminUsersSessionResetResponse,
  AdminUsersSessionResetBulkResponse,
  AdminUsersSessionInvalidateResponse,
  AdminUsersSessionGetSettingsResponse,
  AdminUsersSessionSetSettingsResponse,
  AdminUsersSessionClearSettingsResponse,
  AdminUsersUnsupportedVersionsExportResponse,
  AdminUsersSetAdminResponse,
  AdminUsersSetExpirationResponse,
  AdminUsersSetOwnerResponse,
  AdminUsersSetRegularResponse,
  ApiTestResponse,
  AppsConnectionsOpenResponse,
  AppsEventAuthorizationsListResponse,
  AppsUninstallResponse,
  AuthRevokeResponse,
  AuthTeamsListResponse,
  AuthTestResponse,
  BotsInfoResponse,
  BookmarksAddResponse,
  BookmarksEditResponse,
  BookmarksListResponse,
  BookmarksRemoveResponse,
  ChatDeleteResponse,
  ChatDeleteScheduledMessageResponse,
  ChatGetPermalinkResponse,
  ChatMeMessageResponse,
  ChatPostEphemeralResponse,
  ChatPostMessageResponse,
  ChatScheduleMessageResponse,
  ChatScheduledMessagesListResponse,
  ChatUnfurlResponse,
  ChatUpdateResponse,
  ConversationsAcceptSharedInviteResponse,
  ConversationsApproveSharedInviteResponse,
  ConversationsArchiveResponse,
  ConversationsCloseResponse,
  ConversationsCreateResponse,
  ConversationsDeclineSharedInviteResponse,
  ConversationsHistoryResponse,
  ConversationsInfoResponse,
  ConversationsInviteResponse,
  ConversationsInviteSharedResponse,
  ConversationsJoinResponse,
  ConversationsKickResponse,
  ConversationsLeaveResponse,
  ConversationsListResponse,
  ConversationsListConnectInvitesResponse,
  ConversationsMarkResponse,
  ConversationsMembersResponse,
  ConversationsOpenResponse,
  ConversationsRenameResponse,
  ConversationsRepliesResponse,
  ConversationsSetPurposeResponse,
  ConversationsSetTopicResponse,
  ConversationsUnarchiveResponse,
  DndEndDndResponse,
  DndEndSnoozeResponse,
  DndInfoResponse,
  DndSetSnoozeResponse,
  DndTeamInfoResponse,
  EmojiListResponse,
  FilesDeleteResponse,
  FilesInfoResponse,
  FilesListResponse,
  FilesRevokePublicURLResponse,
  FilesSharedPublicURLResponse,
  FilesUploadResponse,
  FilesGetUploadURLExternalResponse,
  FilesCompleteUploadExternalResponse,
  FilesRemoteInfoResponse,
  FilesRemoteListResponse,
  FilesRemoteAddResponse,
  FilesRemoteUpdateResponse,
  FilesRemoteRemoveResponse,
  FilesRemoteShareResponse,
  MigrationExchangeResponse,
  OAuthV2AccessResponse,
  OAuthV2ExchangeResponse,
  OpenIDConnectTokenResponse,
  OpenIDConnectUserInfoResponse,
  PinsAddResponse,
  PinsListResponse,
  PinsRemoveResponse,
  ReactionsAddResponse,
  ReactionsGetResponse,
  ReactionsListResponse,
  ReactionsRemoveResponse,
  RemindersAddResponse,
  RemindersCompleteResponse,
  RemindersDeleteResponse,
  RemindersInfoResponse,
  RemindersListResponse,
  SearchAllResponse,
  SearchFilesResponse,
  SearchMessagesResponse,
  StarsAddResponse,
  StarsListResponse,
  StarsRemoveResponse,
  TeamAccessLogsResponse,
  TeamBillableInfoResponse,
  TeamBillingInfoResponse,
  TeamInfoResponse,
  TeamIntegrationLogsResponse,
  TeamPreferencesListResponse,
  TeamProfileGetResponse,
  UsergroupsCreateResponse,
  UsergroupsDisableResponse,
  UsergroupsEnableResponse,
  UsergroupsListResponse,
  UsergroupsUpdateResponse,
  UsergroupsUsersListResponse,
  UsergroupsUsersUpdateResponse,
  UsersConversationsResponse,
  UsersDeletePhotoResponse,
  UsersGetPresenceResponse,
  UsersIdentityResponse,
  UsersInfoResponse,
  UsersListResponse,
  UsersLookupByEmailResponse,
  UsersSetPhotoResponse,
  UsersSetPresenceResponse,
  UsersProfileGetResponse,
  UsersProfileSetResponse,
  ViewsOpenResponse,
  ViewsPublishResponse,
  ViewsPushResponse,
  ViewsUpdateResponse,
  AdminConversationsConvertToPublicResponse,
  AdminConversationsLookupResponse,
  AdminRolesAddAssignmentsResponse,
  AdminRolesListAssignmentsResponse,
  AdminRolesRemoveAssignmentsResponse,
  AdminAppsActivitiesListResponse,
  AdminFunctionsListResponse,
  AdminFunctionsPermissionsLookupResponse,
  AdminFunctionsPermissionsSetResponse,
  AdminWorkflowsSearchResponse,
  AdminWorkflowsUnpublishResponse,
  AdminWorkflowsPermissionsLookupResponse,
  AdminWorkflowsCollaboratorsAddResponse,
  AdminWorkflowsCollaboratorsRemoveResponse,
  AppsManifestCreateResponse,
  AppsManifestDeleteResponse,
  AppsManifestUpdateResponse,
  AppsManifestExportResponse,
  AppsManifestValidateResponse,
  ToolingTokensRotateResponse,
  FunctionsCompleteErrorResponse,
  FunctionsCompleteSuccessResponse,
  CanvasesAccessDeleteResponse,
  CanvasesAccessSetResponse,
  CanvasesCreateResponse,
  CanvasesEditResponse,
  CanvasesDeleteResponse,
  CanvasesSectionsLookupResponse,
  ConversationsCanvasesCreateResponse,
  UsersDiscoverableContactsLookupResponse,
  TeamExternalTeamsListResponse,
  ConversationsExternalInvitePermissionsSetResponse,
  TeamExternalTeamsDisconnectResponse,
  ConversationsRequestSharedInviteApproveResponse,
  ConversationsRequestSharedInviteDenyResponse,
  AssistantThreadsSetStatusResponse,
  AssistantThreadsSetSuggestedPromptsResponse,
  AssistantThreadsSetTitleResponse,
  ConversationsRequestSharedInviteListResponse,
} from "./generated-response/index";

import type { SlackAPIResponse } from "./response";
import { isDebugLogEnabled } from "../logging/index";
import type { SlackAPIClientLogLevel } from "../logging/index";
import type { SlackAPIClientOptions } from "./api-client-options";
import type {
  AppsDatastoreDeleteResponse,
  AppsDatastoreGetResponse,
  AppsDatastorePutResponse,
  AppsDatastoreQueryResponse,
  AppsDatastoreUpdateResponse,
  WorkflowsTriggersCreateResponse,
  WorkflowsTriggersDeleteResponse,
  WorkflowsTriggersListResponse,
  WorkflowsTriggersUpdateResponse,
} from "./automation-response/index";
import type { FilesUploadV2Response } from "./custom-response/FilesUploadV2Response";
import type { RetryHandler, RetryHandlerState } from "./retry-handler/index";
import { RatelimitRetryHandler } from "./retry-handler/index";

export interface SlackAPI<Req extends SlackAPIRequest, Resp extends SlackAPIResponse> {
  (args: Req): Promise<Resp>;
}

export interface NoArgAllowedSlackAPI<Req extends SlackAPIRequest, Resp extends SlackAPIResponse> extends SlackAPI<Req, Resp> {
  (args?: Req): Promise<Resp>;
}

const defaultOptions: SlackAPIClientOptions = {
  logLevel: "INFO",
  throwSlackAPIError: true,
  baseUrl: "https://slack.com/api/",
};

export class SlackAPIClient {
  #token: string | undefined;
  #options: SlackAPIClientOptions;
  #logLevel: SlackAPIClientLogLevel;
  #throwSlackAPIError: boolean;
  #baseUrl: string;
  retryHandlers: RetryHandler[];

  constructor(token: string | undefined = undefined, options: SlackAPIClientOptions = defaultOptions) {
    this.#token = token;
    this.#options = options;
    this.#logLevel = this.#options.logLevel ?? defaultOptions.logLevel!;
    this.#throwSlackAPIError = this.#options.throwSlackAPIError ?? true;
    this.#baseUrl = this.#options.baseUrl
      ? this.#options.baseUrl.endsWith("/")
        ? this.#options.baseUrl
        : this.#options.baseUrl + "/"
      : defaultOptions.baseUrl!;
    this.retryHandlers = this.#options.retryHandlers ?? [new RatelimitRetryHandler()];
  }

  // --------------------------------------
  // Internal methods
  // --------------------------------------

  async call(
    name: string,
    // deno-lint-ignore no-explicit-any
    params: Record<string, any> = {},
    retryHandlerState: RetryHandlerState | undefined = undefined,
  ): Promise<SlackAPIResponse> {
    const url = `${this.#baseUrl}${name}`;
    const token = params ? (params.token ?? this.#token) : this.#token;
    // deno-lint-ignore no-explicit-any
    const _params: any = {};
    Object.assign(_params, params);
    if (_params && _params.token) {
      delete _params.token;
    }
    for (const [key, value] of Object.entries(_params)) {
      if (typeof value === "object") {
        if (Array.isArray(value) && value.length > 0 && typeof value[0] !== "object") {
          _params[key] = value.map((v) => v.toString()).join(",");
        } else {
          _params[key] = JSON.stringify(value);
        }
      }
      if (value === undefined || value === null) {
        delete _params[key];
      }
    }
    const headers: Record<string, string> = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const body = new URLSearchParams(_params);
    if (isDebugLogEnabled(this.#logLevel)) {
      console.log(`Slack API request (${name}): ${body}`);
    }
    if (retryHandlerState) {
      retryHandlerState.currentAttempt += 1;
    }
    const state: RetryHandlerState = retryHandlerState ?? {
      currentAttempt: 0,
      logLevel: this.#logLevel,
    };
    const request: Request = new Request(url, {
      method: "POST",
      headers,
      body,
    });
    let response: Response;
    try {
      response = await fetch(request);
      for (const rh of this.retryHandlers) {
        if (await rh.shouldRetry({ state, request, response })) {
          if (isDebugLogEnabled(this.#logLevel)) {
            console.log(`Retrying ${name} API call (params: ${JSON.stringify(params)})`);
          }
          return await this.call(name, params, state);
        }
      }
    } catch (e) {
      const error = new SlackAPIConnectionError(name, -1, "", undefined, e as Error);
      for (const rh of this.retryHandlers) {
        if (await rh.shouldRetry({ state, request, error })) {
          if (isDebugLogEnabled(this.#logLevel)) {
            console.log(`Retrying ${name} API call (params: ${JSON.stringify(params)})`);
          }
          return await this.call(name, params, state);
        }
      }
      throw error;
    }
    if (response.status != 200) {
      const body = await response.text();
      throw new SlackAPIConnectionError(name, response.status, body, response.headers, undefined);
    }
    const responseBody = await response.json();
    const result: SlackAPIResponse = {
      ...responseBody,
      headers: response.headers,
    } as SlackAPIResponse;
    if (isDebugLogEnabled(this.#logLevel)) {
      console.log(`Slack API response (${name}): ${JSON.stringify(result)}}`);
    }
    if (this.#throwSlackAPIError && result.error) {
      throw new SlackAPIError(name, result.error, result);
    }
    return result;
  }

  async #sendMultipartData(
    name: string,
    // deno-lint-ignore no-explicit-any
    params: Record<string, any> = {},
    retryHandlerState: RetryHandlerState | undefined = undefined,
  ): Promise<SlackAPIResponse> {
    const url = `${this.#baseUrl}${name}`;
    const token = params ? (params.token ?? this.#token) : this.#token;
    const body = new FormData();
    for (const [key, value] of Object.entries(params)) {
      if (value === undefined || value === null || key === "token") {
        continue;
      }
      if (typeof value === "object") {
        if (value instanceof Blob) {
          body.append(key, value);
        } else {
          body.append(key, new Blob([value]));
        }
      } else {
        body.append(key, value);
      }
    }
    const headers: Record<string, string> = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    if (isDebugLogEnabled(this.#logLevel)) {
      const bodyParamNames = Array.from(body.keys()).join(", ");
      console.log(`Slack API request (${name}): Sending ${bodyParamNames}`);
    }
    if (retryHandlerState) {
      retryHandlerState.currentAttempt += 1;
    }
    const state: RetryHandlerState = retryHandlerState ?? {
      currentAttempt: 0,
      logLevel: this.#logLevel,
    };
    const request: Request = new Request(url, {
      method: "POST",
      headers,
      body,
    });
    let response: Response;
    try {
      response = await fetch(request);
      for (const rh of this.retryHandlers) {
        if (await rh.shouldRetry({ state, request, response })) {
          if (isDebugLogEnabled(this.#logLevel)) {
            console.log(`Retrying ${name} API call`);
          }
          return await this.#sendMultipartData(name, params, state);
        }
      }
    } catch (e) {
      const error = new SlackAPIConnectionError(name, -1, "", undefined, e as Error);
      for (const rh of this.retryHandlers) {
        if (await rh.shouldRetry({ state, request, error })) {
          if (isDebugLogEnabled(this.#logLevel)) {
            console.log(`Retrying ${name} API call`);
          }
          return await this.#sendMultipartData(name, params, state);
        }
      }
      throw error;
    }
    if (response.status != 200) {
      const body = await response.text();
      throw new SlackAPIConnectionError(name, response.status, body, response.headers, undefined);
    }
    const responseBody = await response.json();
    const result: SlackAPIResponse = {
      ...responseBody,
      headers: response.headers,
    } as SlackAPIResponse;
    if (isDebugLogEnabled(this.#logLevel)) {
      console.log(`Slack API response (${name}): ${JSON.stringify(result)}}`);
    }
    if (this.#throwSlackAPIError && result.error) {
      throw new SlackAPIError(name, result.error, result);
    }
    return result;
  }

  async #uploadFilesV2(params: FilesUploadV2Request): Promise<FilesUploadV2Response> {
    const files = "files" in params ? params.files! : [{ ...(params as FileUploadV2) }];
    const completes: Promise<FileUploadComplete>[] = [];
    const uploadErrors: string[] = [];
    const client = new SlackAPIClient(params.token ?? this.#token, {
      logLevel: this.#options.logLevel,
      throwSlackAPIError: true, // intentionally set to true for uploadAsync()
    });
    for (const f of files) {
      // deno-lint-ignore no-inner-declarations
      async function uploadAsync(): Promise<FileUploadComplete> {
        const bodyLength = (
          f.file ? new Uint8Array(f.file instanceof Blob ? await f.file.arrayBuffer() : f.file) : new TextEncoder().encode(f.content)
        ).length;
        const getUrl = await client.files.getUploadURLExternal({
          token: params.token,
          filename: f.filename,
          length: bodyLength,
          snippet_type: f.snippet_type,
        });
        const { upload_url, file_id } = getUrl;
        let response: Response;
        try {
          response = await fetch(upload_url!, {
            method: "POST",
            body: f.file ? f.file : new TextEncoder().encode(f.content),
          });
        } catch (e) {
          throw new SlackAPIConnectionError("files.slack.com", -1, "", undefined, e as Error);
        }
        const uploadBody = await response.text();
        if (isDebugLogEnabled(client.#logLevel)) {
          console.log(`Slack file upload result: (file ID: ${file_id}, status: ${response.status}, body: ${uploadBody})`);
        }
        if (response.status !== 200) {
          uploadErrors.push(uploadBody);
        }
        if (uploadErrors.length > 0) {
          const errorResponse: FilesUploadV2Response = {
            ok: false,
            error: "upload_failure",
            uploadErrors,
            headers: response.headers,
          };
          throw new SlackAPIError("files.slack.com", "upload_error", errorResponse);
        }
        return { id: file_id!, title: f.title ?? f.filename };
      }
      completes.push(uploadAsync());
    }
    try {
      const completion = await this.files.completeUploadExternal({
        token: params.token,
        files: await Promise.all(completes),
        channel_id: params.channel_id,
        initial_comment: params.initial_comment,
        thread_ts: params.thread_ts,
      });
      return {
        ok: true,
        files: completion.files!,
        headers: completion.headers,
      };
    } catch (e) {
      if (e instanceof SlackAPIError && !this.#throwSlackAPIError) {
        return e.result as FilesUploadV2Response;
      }
      throw e;
    }
  }

  #bindApiCall<A extends SlackAPIRequest, R extends SlackAPIResponse>(self: SlackAPIClient, method: string): SlackAPI<A, R> {
    return self.call.bind(self, method) as SlackAPI<A, R>;
  }

  #bindNoArgAllowedApiCall<A extends SlackAPIRequest, R extends SlackAPIResponse>(
    self: SlackAPIClient,
    method: string,
  ): NoArgAllowedSlackAPI<A, R> {
    return self.call.bind(self, method) as NoArgAllowedSlackAPI<A, R>;
  }

  #bindMultipartApiCall<A extends SlackAPIRequest, R extends SlackAPIResponse>(self: SlackAPIClient, method: string): SlackAPI<A, R> {
    return self.#sendMultipartData.bind(self, method) as SlackAPI<A, R>;
  }

  #bindFilesUploadV2(self: SlackAPIClient): SlackAPI<FilesUploadV2Request, FilesUploadV2Response> {
    return self.#uploadFilesV2.bind(self) as SlackAPI<FilesUploadV2Request, FilesUploadV2Response>;
  }

  // --------------------------------------
  // API definition
  // --------------------------------------

  public readonly admin = {
    apps: {
      approve: this.#bindNoArgAllowedApiCall<AdminAppsApproveRequest, AdminAppsApproveResponse>(this, "admin.apps.approve"),
      approved: {
        list: this.#bindNoArgAllowedApiCall<AdminAppsApprovedListRequest, AdminAppsApprovedListResponse>(this, "admin.apps.approved.list"),
      },
      clearResolution: this.#bindApiCall<AdminAppsClearResolutionRequest, AdminAppsClearResolutionResponse>(
        this,
        "admin.apps.clearResolution",
      ),
      requests: {
        cancel: this.#bindApiCall<AdminAppsRequestsCancelRequest, AdminAppsRequestsCancelResponse>(this, "admin.apps.requests.cancel"),
        list: this.#bindNoArgAllowedApiCall<AdminAppsRequestsListRequest, AdminAppsRequestsListResponse>(this, "admin.apps.requests.list"),
      },
      restrict: this.#bindNoArgAllowedApiCall<AdminAppsRestrictRequest, AdminAppsRestrictResponse>(this, "admin.apps.restrict"),
      restricted: {
        list: this.#bindNoArgAllowedApiCall<AdminAppsRestrictedListRequest, AdminAppsRestrictedListResponse>(
          this,
          "admin.apps.restricted.list",
        ),
      },
      uninstall: this.#bindApiCall<AdminAppsUninstallRequest, AdminAppsUninstallResponse>(this, "admin.apps.uninstall"),
      activities: {
        list: this.#bindNoArgAllowedApiCall<AdminAppsActivitiesListRequest, AdminAppsActivitiesListResponse>(
          this,
          "admin.apps.activities.list",
        ),
      },
    },
    auth: {
      policy: {
        assignEntities: this.#bindApiCall<AdminAuthPolicyAssignEntitiesRequest, AdminAuthPolicyAssignEntitiesResponse>(
          this,
          "admin.auth.policy.assignEntities",
        ),
        getEntities: this.#bindApiCall<AdminAuthPolicyGetEntitiesRequest, AdminAuthPolicyGetEntitiesResponse>(
          this,
          "admin.auth.policy.getEntities",
        ),
        removeEntities: this.#bindApiCall<AdminAuthPolicyRemoveEntitiesRequest, AdminAuthPolicyRemoveEntitiesResponse>(
          this,
          "admin.auth.policy.removeEntities",
        ),
      },
    },
    barriers: {
      create: this.#bindApiCall<AdminBarriersCreateRequest, AdminBarriersCreateResponse>(this, "admin.barriers.create"),
      delete: this.#bindApiCall<AdminBarriersDeleteRequest, AdminBarriersDeleteResponse>(this, "admin.barriers.delete"),
      list: this.#bindNoArgAllowedApiCall<AdminBarriersListRequest, AdminBarriersListResponse>(this, "admin.barriers.list"),
      update: this.#bindApiCall<AdminBarriersUpdateRequest, AdminBarriersUpdateResponse>(this, "admin.barriers.update"),
    },
    conversations: {
      archive: this.#bindApiCall<AdminConversationsArchiveRequest, AdminConversationsArchiveResponse>(this, "admin.conversations.archive"),
      bulkArchive: this.#bindApiCall<AdminConversationsBulkArchiveRequest, AdminConversationsBulkArchiveResponse>(
        this,
        "admin.conversations.bulkArchive",
      ),
      bulkDelete: this.#bindApiCall<AdminConversationsBulkDeleteRequest, AdminConversationsBulkDeleteResponse>(
        this,
        "admin.conversations.bulkDelete",
      ),
      bulkMove: this.#bindApiCall<AdminConversationsBulkMoveRequest, AdminConversationsBulkMoveResponse>(
        this,
        "admin.conversations.bulkMove",
      ),
      convertToPrivate: this.#bindApiCall<AdminConversationsConvertToPrivateRequest, AdminConversationsConvertToPrivateResponse>(
        this,
        "admin.conversations.convertToPrivate",
      ),
      convertToPublic: this.#bindApiCall<AdminConversationsConvertToPublicRequest, AdminConversationsConvertToPublicResponse>(
        this,
        "admin.conversations.convertToPublic",
      ),
      create: this.#bindApiCall<AdminConversationsCreateRequest, AdminConversationsCreateResponse>(this, "admin.conversations.create"),
      delete: this.#bindApiCall<AdminConversationsDeleteRequest, AdminConversationsDeleteResponse>(this, "admin.conversations.delete"),
      disconnectShared: this.#bindApiCall<AdminConversationsDisconnectSharedRequest, AdminConversationsDisconnectSharedResponse>(
        this,
        "admin.conversations.disconnectShared",
      ),
      ekm: {
        listOriginalConnectedChannelInfo: this.#bindNoArgAllowedApiCall<
          AdminConversationsEKMListOriginalConnectedChannelInfoRequest,
          AdminConversationsEkmListOriginalConnectedChannelInfoResponse
        >(this, "admin.conversations.ekm.listOriginalConnectedChannelInfo"),
      },
      getConversationPrefs: this.#bindApiCall<
        AdminConversationsGetConversationPrefsRequest,
        AdminConversationsGetConversationPrefsResponse
      >(this, "admin.conversations.getConversationPrefs"),
      getTeams: this.#bindApiCall<AdminConversationsGetTeamsRequest, AdminConversationsGetTeamsResponse>(
        this,
        "admin.conversations.getTeams",
      ),
      invite: this.#bindApiCall<AdminConversationsInviteRequest, AdminConversationsInviteResponse>(this, "admin.conversations.invite"),
      rename: this.#bindApiCall<AdminConversationsRenameRequest, AdminConversationsRenameResponse>(this, "admin.conversations.rename"),
      restrictAccess: {
        addGroup: this.#bindApiCall<AdminConversationsRestrictAccessAddGroupRequest, AdminConversationsRestrictAccessAddGroupResponse>(
          this,
          "admin.conversations.restrictAccess.addGroup",
        ),
        listGroups: this.#bindApiCall<
          AdminConversationsRestrictAccessListGroupsRequest,
          AdminConversationsRestrictAccessListGroupsResponse
        >(this, "admin.conversations.restrictAccess.listGroups"),
        removeGroup: this.#bindApiCall<
          AdminConversationsRestrictAccessRemoveGroupRequest,
          AdminConversationsRestrictAccessRemoveGroupResponse
        >(this, "admin.conversations.restrictAccess.removeGroup"),
      },
      requestSharedInvite: {
        approve: this.#bindApiCall<ConversationsRequestSharedInviteApproveRequest, ConversationsRequestSharedInviteApproveResponse>(
          this,
          "conversations.requestSharedInvite.approve",
        ),
        deny: this.#bindApiCall<ConversationsRequestSharedInviteDenyRequest, ConversationsRequestSharedInviteDenyResponse>(
          this,
          "conversations.requestSharedInvite.deny",
        ),
        list: this.#bindApiCall<ConversationsRequestSharedInviteListRequest, ConversationsRequestSharedInviteListResponse>(
          this,
          "conversations.requestSharedInvite.list",
        ),
      },
      getCustomRetention: this.#bindApiCall<AdminConversationsGetCustomRetentionRequest, AdminConversationsGetCustomRetentionResponse>(
        this,
        "admin.conversations.getCustomRetention",
      ),
      setCustomRetention: this.#bindApiCall<AdminConversationsSetCustomRetentionRequest, AdminConversationsSetCustomRetentionResponse>(
        this,
        "admin.conversations.setCustomRetention",
      ),
      removeCustomRetention: this.#bindApiCall<
        AdminConversationsRemoveCustomRetentionRequest,
        AdminConversationsRemoveCustomRetentionResponse
      >(this, "admin.conversations.removeCustomRetention"),
      lookup: this.#bindApiCall<AdminConversationsLookupRequest, AdminConversationsLookupResponse>(this, "admin.conversations.lookup"),
      search: this.#bindNoArgAllowedApiCall<AdminConversationsSearchRequest, AdminConversationsSearchResponse>(
        this,
        "admin.conversations.search",
      ),
      setConversationPrefs: this.#bindApiCall<
        AdminConversationsSetConversationPrefsRequest,
        AdminConversationsSetConversationPrefsResponse
      >(this, "admin.conversations.setConversationPrefs"),
      setTeams: this.#bindApiCall<AdminConversationsSetTeamsRequest, AdminConversationsSetTeamsResponse>(
        this,
        "admin.conversations.setTeams",
      ),
      unarchive: this.#bindApiCall<AdminConversationsUnarchiveRequest, AdminConversationsUnarchiveResponse>(
        this,
        "admin.conversations.unarchive",
      ),
    },
    emoji: {
      add: this.#bindApiCall<AdminEmojiAddRequest, AdminEmojiAddResponse>(this, "admin.emoji.add"),
      addAlias: this.#bindApiCall<AdminEmojiAddAliasRequest, AdminEmojiAddAliasResponse>(this, "admin.emoji.addAlias"),
      list: this.#bindApiCall<AdminEmojiListRequest, AdminEmojiListResponse>(this, "admin.emoji.list"),
      remove: this.#bindApiCall<AdminEmojiRemoveRequest, AdminEmojiRemoveResponse>(this, "admin.emoji.remove"),
      rename: this.#bindApiCall<AdminEmojiRenameRequest, AdminEmojiRenameResponse>(this, "admin.emoji.rename"),
    },
    functions: {
      list: this.#bindApiCall<AdminFunctionsListRequest, AdminFunctionsListResponse>(this, "admin.functions.list"),
      permissions: {
        lookup: this.#bindApiCall<AdminFunctionsPermissionsLookupRequest, AdminFunctionsPermissionsLookupResponse>(
          this,
          "admin.functions.permissions.lookup",
        ),
        set: this.#bindApiCall<AdminFunctionsPermissionsSetRequest, AdminFunctionsPermissionsSetResponse>(
          this,
          "admin.functions.permissions.set",
        ),
      },
    },
    inviteRequests: {
      approve: this.#bindApiCall<AdminInviteRequestsApproveRequest, AdminInviteRequestsApproveResponse>(
        this,
        "admin.inviteRequests.approve",
      ),
      approved: {
        list: this.#bindApiCall<AdminInviteRequestsApprovedListRequest, AdminInviteRequestsApprovedListResponse>(
          this,
          "admin.inviteRequests.approved.list",
        ),
      },
      denied: {
        list: this.#bindApiCall<AdminInviteRequestsDeniedListRequest, AdminInviteRequestsDeniedListResponse>(
          this,
          "admin.inviteRequests.denied.list",
        ),
      },
      deny: this.#bindApiCall<AdminInviteRequestsDenyRequest, AdminInviteRequestsDenyResponse>(this, "admin.inviteRequests.deny"),
      list: this.#bindApiCall<AdminInviteRequestsListRequest, AdminInviteRequestsListResponse>(this, "admin.inviteRequests.list"),
    },
    roles: {
      addAssignments: this.#bindApiCall<AdminRolesAddAssignmentsRequest, AdminRolesAddAssignmentsResponse>(
        this,
        "admin.roles.addAssignments",
      ),
      listAssignments: this.#bindNoArgAllowedApiCall<AdminRolesListAssignmentsRequest, AdminRolesListAssignmentsResponse>(
        this,
        "admin.roles.listAssignments",
      ),
      removeAssignments: this.#bindApiCall<AdminRolesRemoveAssignmentsRequest, AdminRolesRemoveAssignmentsResponse>(
        this,
        "admin.roles.removeAssignments",
      ),
    },
    teams: {
      admins: {
        list: this.#bindApiCall<AdminTeamsAdminsListRequest, AdminTeamsAdminsListResponse>(this, "admin.teams.admins.list"),
      },
      create: this.#bindApiCall<AdminTeamsCreateRequest, AdminTeamsCreateResponse>(this, "admin.teams.create"),
      list: this.#bindNoArgAllowedApiCall<AdminTeamsListRequest, AdminTeamsListResponse>(this, "admin.teams.list"),
      owners: {
        list: this.#bindApiCall<AdminTeamsOwnersListRequest, AdminTeamsOwnersListResponse>(this, "admin.teams.owners.list"),
      },
      settings: {
        info: this.#bindApiCall<AdminTeamsSettingsInfoRequest, AdminTeamsSettingsInfoResponse>(this, "admin.teams.settings.info"),
        setDefaultChannels: this.#bindApiCall<AdminTeamsSettingsSetDefaultChannelsRequest, AdminTeamsSettingsSetDefaultChannelsResponse>(
          this,
          "admin.teams.settings.setDefaultChannels",
        ),
        setDescription: this.#bindApiCall<AdminTeamsSettingsSetDescriptionRequest, AdminTeamsSettingsSetDescriptionResponse>(
          this,
          "admin.teams.settings.setDescription",
        ),
        setDiscoverability: this.#bindApiCall<AdminTeamsSettingsSetDiscoverabilityRequest, AdminTeamsSettingsSetDiscoverabilityResponse>(
          this,
          "admin.teams.settings.setDiscoverability",
        ),
        setIcon: this.#bindApiCall<AdminTeamsSettingsSetIconRequest, AdminTeamsSettingsSetIconResponse>(
          this,
          "admin.teams.settings.setIcon",
        ),
        setName: this.#bindApiCall<AdminTeamsSettingsSetNameRequest, AdminTeamsSettingsSetNameResponse>(
          this,
          "admin.teams.settings.setName",
        ),
      },
    },
    usergroups: {
      addChannels: this.#bindApiCall<AdminUsergroupsAddChannelsRequest, AdminUsergroupsAddChannelsResponse>(
        this,
        "admin.usergroups.addChannels",
      ),
      addTeams: this.#bindApiCall<AdminUsergroupsAddTeamsRequest, AdminUsergroupsAddTeamsResponse>(this, "admin.usergroups.addTeams"),
      listChannels: this.#bindApiCall<AdminUsergroupsListChannelsRequest, AdminUsergroupsListChannelsResponse>(
        this,
        "admin.usergroups.listChannels",
      ),
      removeChannels: this.#bindApiCall<AdminUsergroupsRemoveChannelsRequest, AdminUsergroupsRemoveChannelsResponse>(
        this,
        "admin.usergroups.removeChannels",
      ),
    },
    users: {
      assign: this.#bindApiCall<AdminUsersAssignRequest, AdminUsersAssignResponse>(this, "admin.users.assign"),
      invite: this.#bindApiCall<AdminUsersInviteRequest, AdminUsersInviteResponse>(this, "admin.users.invite"),
      list: this.#bindApiCall<AdminUsersListRequest, AdminUsersListResponse>(this, "admin.users.list"),
      remove: this.#bindApiCall<AdminUsersRemoveRequest, AdminUsersRemoveResponse>(this, "admin.users.remove"),
      session: {
        list: this.#bindNoArgAllowedApiCall<AdminUsersSessionListRequest, AdminUsersSessionListResponse>(this, "admin.users.session.list"),
        reset: this.#bindApiCall<AdminUsersSessionResetRequest, AdminUsersSessionResetResponse>(this, "admin.users.session.reset"),
        resetBulk: this.#bindApiCall<AdminUsersSessionResetBulkRequest, AdminUsersSessionResetBulkResponse>(
          this,
          "admin.users.session.resetBulk",
        ),
        invalidate: this.#bindApiCall<AdminUsersSessionInvalidateRequest, AdminUsersSessionInvalidateResponse>(
          this,
          "admin.users.session.invalidate",
        ),
        getSettings: this.#bindApiCall<AdminUsersSessionGetSettingsRequest, AdminUsersSessionGetSettingsResponse>(
          this,
          "admin.users.session.getSettings",
        ),
        setSettings: this.#bindApiCall<AdminUsersSessionSetSettingsRequest, AdminUsersSessionSetSettingsResponse>(
          this,
          "admin.users.session.setSettings",
        ),
        clearSettings: this.#bindApiCall<AdminUsersSessionClearSettingsRequest, AdminUsersSessionClearSettingsResponse>(
          this,
          "admin.users.session.clearSettings",
        ),
      },
      unsupportedVersions: {
        export: this.#bindNoArgAllowedApiCall<AdminUsersUnsupportedVersionsExportRequest, AdminUsersUnsupportedVersionsExportResponse>(
          this,
          "admin.users.unsupportedVersions.export",
        ),
      },
      setAdmin: this.#bindApiCall<AdminUsersSetAdminRequest, AdminUsersSetAdminResponse>(this, "admin.users.setAdmin"),
      setExpiration: this.#bindApiCall<AdminUsersSetExpirationRequest, AdminUsersSetExpirationResponse>(this, "admin.users.setExpiration"),
      setOwner: this.#bindApiCall<AdminUsersSetOwnerRequest, AdminUsersSetOwnerResponse>(this, "admin.users.setOwner"),
      setRegular: this.#bindApiCall<AdminUsersSetRegularRequest, AdminUsersSetRegularResponse>(this, "admin.users.setRegular"),
    },
    workflows: {
      search: this.#bindNoArgAllowedApiCall<AdminWorkflowsSearchRequest, AdminWorkflowsSearchResponse>(this, "admin.workflows.search"),
      unpublish: this.#bindApiCall<AdminWorkflowsUnpublishRequest, AdminWorkflowsUnpublishResponse>(this, "admin.workflows.unpublish"),
      collaborators: {
        add: this.#bindApiCall<AdminWorkflowsCollaboratorsAddRequest, AdminWorkflowsCollaboratorsAddResponse>(
          this,
          "admin.workflows.collaborators.add",
        ),
        remove: this.#bindApiCall<AdminWorkflowsCollaboratorsRemoveRequest, AdminWorkflowsCollaboratorsRemoveResponse>(
          this,
          "admin.workflows.collaborators.remove",
        ),
      },
      permissions: {
        lookup: this.#bindApiCall<AdminWorkflowsPermissionsLookupRequest, AdminWorkflowsPermissionsLookupResponse>(
          this,
          "admin.workflows.permissions.lookup",
        ),
      },
    },
  };

  public readonly api = {
    test: this.#bindNoArgAllowedApiCall<APITestRequest, ApiTestResponse>(this, "api.test"),
  };

  public readonly apps = {
    connections: {
      open: this.#bindNoArgAllowedApiCall<AppsConnectionsOpenRequest, AppsConnectionsOpenResponse>(this, "apps.connections.open"),
    },
    datastore: {
      put: this.#bindApiCall<AppsDatastorePutRequest, AppsDatastorePutResponse>(this, "apps.datastore.put"),
      update: this.#bindApiCall<AppsDatastoreUpdateRequest, AppsDatastoreUpdateResponse>(this, "apps.datastore.update"),
      get: this.#bindApiCall<AppsDatastoreGetRequest, AppsDatastoreGetResponse>(this, "apps.datastore.get"),
      query: this.#bindApiCall<AppsDatastoreQueryRequest, AppsDatastoreQueryResponse>(this, "apps.datastore.query"),
      delete: this.#bindApiCall<AppsDatastoreDeleteRequest, AppsDatastoreDeleteResponse>(this, "apps.datastore.delete"),
    },
    event: {
      authorizations: {
        list: this.#bindApiCall<AppsEventAuthorizationsListRequest, AppsEventAuthorizationsListResponse>(
          this,
          "apps.event.authorizations.list",
        ),
      },
    },
    manifest: {
      create: this.#bindApiCall<AppsManifestCreateRequest, AppsManifestCreateResponse>(this, "apps.manifest.create"),
      delete: this.#bindApiCall<AppsManifestDeleteRequest, AppsManifestDeleteResponse>(this, "apps.manifest.delete"),
      update: this.#bindApiCall<AppsManifestUpdateRequest, AppsManifestUpdateResponse>(this, "apps.manifest.update"),
      export: this.#bindApiCall<AppsManifestExportRequest, AppsManifestExportResponse>(this, "apps.manifest.export"),
      validate: this.#bindApiCall<AppsManifestValidateRequest, AppsManifestValidateResponse>(this, "apps.manifest.validate"),
    },
    uninstall: this.#bindApiCall<AppsUninstallRequest, AppsUninstallResponse>(this, "apps.uninstall"),
  };

  public readonly assistant = {
    threads: {
      setStatus: this.#bindApiCall<AssistantThreadsSetStatusRequest, AssistantThreadsSetStatusResponse>(
        this,
        "assistant.threads.setStatus",
      ),
      setSuggestedPrompts: this.#bindApiCall<AssistantThreadsSetSuggestedPromptsRequest, AssistantThreadsSetSuggestedPromptsResponse>(
        this,
        "assistant.threads.setSuggestedPrompts",
      ),
      setTitle: this.#bindApiCall<AssistantThreadsSetTitleRequest, AssistantThreadsSetTitleResponse>(this, "assistant.threads.setTitle"),
    },
  };

  public readonly auth = {
    revoke: this.#bindNoArgAllowedApiCall<AuthRevokeRequest, AuthRevokeResponse>(this, "auth.revoke"),
    teams: {
      list: this.#bindNoArgAllowedApiCall<AuthTeamsListRequest, AuthTeamsListResponse>(this, "auth.teams.list"),
    },
    test: this.#bindNoArgAllowedApiCall<AuthTestRequest, AuthTestResponse>(this, "auth.test"),
  };

  public readonly bots = {
    info: this.#bindApiCall<BotsInfoRequest, BotsInfoResponse>(this, "bots.info"),
  };

  public readonly bookmarks = {
    add: this.#bindApiCall<BookmarksAddRequest, BookmarksAddResponse>(this, "bookmarks.add"),
    edit: this.#bindApiCall<BookmarksEditRequest, BookmarksEditResponse>(this, "bookmarks.edit"),
    list: this.#bindApiCall<BookmarksListRequest, BookmarksListResponse>(this, "bookmarks.list"),
    remove: this.#bindApiCall<BookmarksRemoveRequest, BookmarksRemoveResponse>(this, "bookmarks.remove"),
  };

  public readonly canvases = {
    access: {
      delete: this.#bindApiCall<CanvasesAccessDeleteRequest, CanvasesAccessDeleteResponse>(this, "canvases.access.delete"),
      set: this.#bindApiCall<CanvasesAccessSetRequest, CanvasesAccessSetResponse>(this, "canvases.access.set"),
    },
    create: this.#bindApiCall<CanvasesCreateRequest, CanvasesCreateResponse>(this, "canvases.create"),
    edit: this.#bindApiCall<CanvasesEditRequest, CanvasesEditResponse>(this, "canvases.edit"),
    delete: this.#bindApiCall<CanvasesDeleteRequest, CanvasesDeleteResponse>(this, "canvases.delete"),
    sections: {
      lookup: this.#bindApiCall<CanvasesSectionsLookupRequest, CanvasesSectionsLookupResponse>(this, "canvases.sections.lookup"),
    },
  };

  public readonly chat = {
    delete: this.#bindApiCall<ChatDeleteRequest, ChatDeleteResponse>(this, "chat.delete"),
    deleteScheduledMessage: this.#bindApiCall<ChatDeleteScheduledMessageRequest, ChatDeleteScheduledMessageResponse>(
      this,
      "chat.deleteScheduledMessage",
    ),
    getPermalink: this.#bindApiCall<ChatGetPermalinkRequest, ChatGetPermalinkResponse>(this, "chat.getPermalink"),
    meMessage: this.#bindApiCall<ChatMeMessageRequest, ChatMeMessageResponse>(this, "chat.meMessage"),
    postEphemeral: this.#bindApiCall<ChatPostEphemeralRequest, ChatPostEphemeralResponse>(this, "chat.postEphemeral"),
    postMessage: this.#bindApiCall<ChatPostMessageRequest, ChatPostMessageResponse>(this, "chat.postMessage"),
    scheduleMessage: this.#bindApiCall<ChatScheduleMessageRequest, ChatScheduleMessageResponse>(this, "chat.scheduleMessage"),
    scheduledMessages: {
      list: this.#bindApiCall<ChatScheduledMessagesListRequest, ChatScheduledMessagesListResponse>(this, "chat.scheduledMessages.list"),
    },
    unfurl: this.#bindApiCall<ChatUnfurlRequest, ChatUnfurlResponse>(this, "chat.unfurl"),
    update: this.#bindApiCall<ChatUpdateRequest, ChatUpdateResponse>(this, "chat.update"),
  };

  public readonly conversations = {
    acceptSharedInvite: this.#bindApiCall<ConversationsAcceptSharedInviteRequest, ConversationsAcceptSharedInviteResponse>(
      this,
      "conversations.acceptSharedInvite",
    ),
    approveSharedInvite: this.#bindApiCall<ConversationsApproveSharedInviteRequest, ConversationsApproveSharedInviteResponse>(
      this,
      "conversations.approveSharedInvite",
    ),
    archive: this.#bindApiCall<ConversationsArchiveRequest, ConversationsArchiveResponse>(this, "conversations.archive"),
    close: this.#bindApiCall<ConversationsCloseRequest, ConversationsCloseResponse>(this, "conversations.close"),
    create: this.#bindApiCall<ConversationsCreateRequest, ConversationsCreateResponse>(this, "conversations.create"),
    declineSharedInvite: this.#bindApiCall<ConversationsDeclineSharedInviteRequest, ConversationsDeclineSharedInviteResponse>(
      this,
      "conversations.declineSharedInvite",
    ),
    history: this.#bindApiCall<ConversationsHistoryRequest, ConversationsHistoryResponse>(this, "conversations.history"),
    info: this.#bindApiCall<ConversationsInfoRequest, ConversationsInfoResponse>(this, "conversations.info"),
    invite: this.#bindApiCall<ConversationsInviteRequest, ConversationsInviteResponse>(this, "conversations.invite"),
    inviteShared: this.#bindApiCall<ConversationsInviteSharedRequest, ConversationsInviteSharedResponse>(
      this,
      "conversations.inviteShared",
    ),
    join: this.#bindApiCall<ConversationsJoinRequest, ConversationsJoinResponse>(this, "conversations.join"),
    kick: this.#bindApiCall<ConversationsKickRequest, ConversationsKickResponse>(this, "conversations.kick"),
    leave: this.#bindApiCall<ConversationsLeaveRequest, ConversationsLeaveResponse>(this, "conversations.leave"),
    list: this.#bindNoArgAllowedApiCall<ConversationsListRequest, ConversationsListResponse>(this, "conversations.list"),
    listConnectInvites: this.#bindNoArgAllowedApiCall<ConversationsListConnectInvitesRequest, ConversationsListConnectInvitesResponse>(
      this,
      "conversations.listConnectInvites",
    ),
    mark: this.#bindApiCall<ConversationsMarkRequest, ConversationsMarkResponse>(this, "conversations.mark"),
    members: this.#bindApiCall<ConversationsMembersRequest, ConversationsMembersResponse>(this, "conversations.members"),
    open: this.#bindNoArgAllowedApiCall<ConversationsOpenRequest, ConversationsOpenResponse>(this, "conversations.open"),
    rename: this.#bindApiCall<ConversationsRenameRequest, ConversationsRenameResponse>(this, "conversations.rename"),
    replies: this.#bindApiCall<ConversationsRepliesRequest, ConversationsRepliesResponse>(this, "conversations.replies"),
    setPurpose: this.#bindApiCall<ConversationsSetPurposeRequest, ConversationsSetPurposeResponse>(this, "conversations.setPurpose"),
    setTopic: this.#bindApiCall<ConversationsSetTopicRequest, ConversationsSetTopicResponse>(this, "conversations.setTopic"),
    unarchive: this.#bindApiCall<ConversationsUnarchiveRequest, ConversationsUnarchiveResponse>(this, "conversations.unarchive"),
    canvases: {
      create: this.#bindApiCall<ConversationsCanvasesCreateRequest, ConversationsCanvasesCreateResponse>(
        this,
        "conversations.canvases.create",
      ),
    },
    externalInvitePermissions: {
      set: this.#bindApiCall<ConversationsExternalInvitePermissionsSetRequest, ConversationsExternalInvitePermissionsSetResponse>(
        this,
        "conversations.externalInvitePermissions.set",
      ),
    },
  };

  public readonly dnd = {
    endDnd: this.#bindNoArgAllowedApiCall<DndEndDndRequest, DndEndDndResponse>(this, "dnd.endDnd"),
    endSnooze: this.#bindNoArgAllowedApiCall<DndEndSnoozeRequest, DndEndSnoozeResponse>(this, "dnd.endSnooze"),
    info: this.#bindApiCall<DndInfoRequest, DndInfoResponse>(this, "dnd.info"),
    setSnooze: this.#bindApiCall<DndSetSnoozeRequest, DndSetSnoozeResponse>(this, "dnd.setSnooze"),
    teamInfo: this.#bindNoArgAllowedApiCall<DndTeamInfoRequest, DndTeamInfoResponse>(this, "dnd.teamInfo"),
  };

  public readonly emoji = {
    list: this.#bindNoArgAllowedApiCall<EmojiListRequest, EmojiListResponse>(this, "emoji.list"),
  };

  public readonly files = {
    delete: this.#bindApiCall<FilesDeleteRequest, FilesDeleteResponse>(this, "files.delete"),
    info: this.#bindApiCall<FilesInfoRequest, FilesInfoResponse>(this, "files.info"),
    list: this.#bindNoArgAllowedApiCall<FilesListRequest, FilesListResponse>(this, "files.list"),
    revokePublicURL: this.#bindApiCall<FilesRevokePublicURLRequest, FilesRevokePublicURLResponse>(this, "files.revokePublicURL"),
    sharedPublicURL: this.#bindApiCall<FilesSharedPublicURLRequest, FilesSharedPublicURLResponse>(this, "files.sharedPublicURL"),
    /**
     * @deprecated use files.uploadV2 instead
     */
    upload: this.#bindMultipartApiCall<FilesUploadRequest, FilesUploadResponse>(this, "files.upload"),
    uploadV2: this.#bindFilesUploadV2(this),
    getUploadURLExternal: this.#bindApiCall<FilesGetUploadURLExternalRequest, FilesGetUploadURLExternalResponse>(
      this,
      "files.getUploadURLExternal",
    ),
    completeUploadExternal: this.#bindApiCall<FilesCompleteUploadExternalRequest, FilesCompleteUploadExternalResponse>(
      this,
      "files.completeUploadExternal",
    ),
    remote: {
      info: this.#bindNoArgAllowedApiCall<FilesRemoteInfoRequest, FilesRemoteInfoResponse>(this, "files.remote.info"),
      list: this.#bindNoArgAllowedApiCall<FilesRemoteListRequest, FilesRemoteListResponse>(this, "files.remote.list"),
      add: this.#bindApiCall<FilesRemoteAddRequest, FilesRemoteAddResponse>(this, "files.remote.add"),
      update: this.#bindNoArgAllowedApiCall<FilesRemoteUpdateRequest, FilesRemoteUpdateResponse>(this, "files.remote.update"),
      remove: this.#bindNoArgAllowedApiCall<FilesRemoteRemoveRequest, FilesRemoteRemoveResponse>(this, "files.remote.remove"),
      share: this.#bindApiCall<FilesRemoteShareRequest, FilesRemoteShareResponse>(this, "files.remote.share"),
    },
  };

  public readonly functions = {
    completeSuccess: this.#bindApiCall<FunctionsCompleteSuccessRequest, FunctionsCompleteSuccessResponse>(
      this,
      "functions.completeSuccess",
    ),
    completeError: this.#bindApiCall<FunctionsCompleteErrorRequest, FunctionsCompleteErrorResponse>(this, "functions.completeError"),
  };

  public readonly migration = {
    exchange: this.#bindApiCall<MigrationExchangeRequest, MigrationExchangeResponse>(this, "migration.exchange"),
  };

  public readonly oauth = {
    v2: {
      access: this.#bindApiCall<OAuthV2AccessRequest, OAuthV2AccessResponse>(this, "oauth.v2.access"),
      exchange: this.#bindApiCall<OAuthV2ExchangeRequest, OAuthV2ExchangeResponse>(this, "oauth.v2.exchange"),
    },
  };

  public readonly openid = {
    connect: {
      token: this.#bindApiCall<OpenIDConnectTokenRequest, OpenIDConnectTokenResponse>(this, "openid.connect.token"),
      userInfo: this.#bindNoArgAllowedApiCall<OpenIDConnectUserInfoRequest, OpenIDConnectUserInfoResponse>(this, "openid.connect.userInfo"),
    },
  };

  public readonly pins = {
    add: this.#bindApiCall<PinsAddRequest, PinsAddResponse>(this, "pins.add"),
    list: this.#bindApiCall<PinsListRequest, PinsListResponse>(this, "pins.list"),
    remove: this.#bindApiCall<PinsRemoveRequest, PinsRemoveResponse>(this, "pins.remove"),
  };

  public readonly reactions = {
    add: this.#bindNoArgAllowedApiCall<ReactionsAddRequest, ReactionsAddResponse>(this, "reactions.add"),
    get: this.#bindNoArgAllowedApiCall<ReactionsGetRequest, ReactionsGetResponse>(this, "reactions.get"),
    list: this.#bindNoArgAllowedApiCall<ReactionsListRequest, ReactionsListResponse>(this, "reactions.list"),
    remove: this.#bindApiCall<ReactionsRemoveRequest, ReactionsRemoveResponse>(this, "reactions.remove"),
  };

  public readonly reminders = {
    add: this.#bindApiCall<RemindersAddRequest, RemindersAddResponse>(this, "reminders.add"),
    complete: this.#bindApiCall<RemindersCompleteRequest, RemindersCompleteResponse>(this, "reminders.complete"),
    delete: this.#bindApiCall<RemindersDeleteRequest, RemindersDeleteResponse>(this, "reminders.delete"),
    info: this.#bindApiCall<RemindersInfoRequest, RemindersInfoResponse>(this, "reminders.info"),
    list: this.#bindApiCall<RemindersListRequest, RemindersListResponse>(this, "reminders.list"),
  };

  public readonly search = {
    all: this.#bindApiCall<SearchAllRequest, SearchAllResponse>(this, "search.all"),
    files: this.#bindApiCall<SearchFilesRequest, SearchFilesResponse>(this, "search.files"),
    messages: this.#bindApiCall<SearchMessagesRequest, SearchMessagesResponse>(this, "search.messages"),
  };

  public readonly stars = {
    add: this.#bindNoArgAllowedApiCall<StarsAddRequest, StarsAddResponse>(this, "stars.add"),
    list: this.#bindNoArgAllowedApiCall<StarsListRequest, StarsListResponse>(this, "stars.list"),
    remove: this.#bindNoArgAllowedApiCall<StarsRemoveRequest, StarsRemoveResponse>(this, "stars.remove"),
  };

  public readonly team = {
    accessLogs: this.#bindNoArgAllowedApiCall<TeamAccessLogsRequest, TeamAccessLogsResponse>(this, "team.accessLogs"),
    billableInfo: this.#bindNoArgAllowedApiCall<TeamBillableInfoRequest, TeamBillableInfoResponse>(this, "team.billableInfo"),
    billing: {
      info: this.#bindNoArgAllowedApiCall<TeamBillingInfoRequest, TeamBillingInfoResponse>(this, "team.billing.info"),
    },
    info: this.#bindNoArgAllowedApiCall<TeamInfoRequest, TeamInfoResponse>(this, "team.info"),
    integrationLogs: this.#bindNoArgAllowedApiCall<TeamIntegrationLogsRequest, TeamIntegrationLogsResponse>(this, "team.integrationLogs"),
    preferences: {
      list: this.#bindNoArgAllowedApiCall<TeamPreferencesListRequest, TeamPreferencesListResponse>(this, "team.preferences.list"),
    },
    profile: {
      get: this.#bindNoArgAllowedApiCall<TeamProfileGetRequest, TeamProfileGetResponse>(this, "team.profile.get"),
    },
    externalTeams: {
      list: this.#bindApiCall<TeamExternalTeamsListRequest, TeamExternalTeamsListResponse>(this, "team.externalTeams.list"),
      disconnect: this.#bindApiCall<TeamExternalTeamsDisconnectRequest, TeamExternalTeamsDisconnectResponse>(
        this,
        "team.externalTeams.disconnect",
      ),
    },
  };

  public readonly tooling = {
    tokens: {
      rotate: this.#bindApiCall<ToolingTokensRotateRequest, ToolingTokensRotateResponse>(this, "tooling.tokens.rotate"),
    },
  };

  public readonly usergroups = {
    create: this.#bindApiCall<UsergroupsCreateRequest, UsergroupsCreateResponse>(this, "usergroups.create"),
    disable: this.#bindApiCall<UsergroupsDisableRequest, UsergroupsDisableResponse>(this, "usergroups.disable"),
    enable: this.#bindApiCall<UsergroupsEnableRequest, UsergroupsEnableResponse>(this, "usergroups.enable"),
    list: this.#bindNoArgAllowedApiCall<UsergroupsListRequest, UsergroupsListResponse>(this, "usergroups.list"),
    update: this.#bindApiCall<UsergroupsUpdateRequest, UsergroupsUpdateResponse>(this, "usergroups.update"),
    users: {
      list: this.#bindApiCall<UsergroupsUsersListRequest, UsergroupsUsersListResponse>(this, "usergroups.users.list"),
      update: this.#bindApiCall<UsergroupsUsersUpdateRequest, UsergroupsUsersUpdateResponse>(this, "usergroups.users.update"),
    },
  };

  public readonly users = {
    conversations: this.#bindNoArgAllowedApiCall<UsersConversationsRequest, UsersConversationsResponse>(this, "users.conversations"),
    deletePhoto: this.#bindNoArgAllowedApiCall<UsersDeletePhotoRequest, UsersDeletePhotoResponse>(this, "users.deletePhoto"),
    getPresence: this.#bindNoArgAllowedApiCall<UsersGetPresenceRequest, UsersGetPresenceResponse>(this, "users.getPresence"),
    identity: this.#bindNoArgAllowedApiCall<UsersIdentityRequest, UsersIdentityResponse>(this, "users.identity"),
    info: this.#bindApiCall<UsersInfoRequest, UsersInfoResponse>(this, "users.info"),
    list: this.#bindNoArgAllowedApiCall<UsersListRequest, UsersListResponse>(this, "users.list"),
    lookupByEmail: this.#bindApiCall<UsersLookupByEmailRequest, UsersLookupByEmailResponse>(this, "users.lookupByEmail"),
    setPhoto: this.#bindApiCall<UsersSetPhotoRequest, UsersSetPhotoResponse>(this, "users.setPhoto"),
    setPresence: this.#bindApiCall<UsersSetPresenceRequest, UsersSetPresenceResponse>(this, "users.setPresence"),
    profile: {
      get: this.#bindNoArgAllowedApiCall<UsersProfileGetRequest, UsersProfileGetResponse>(this, "users.profile.get"),
      set: this.#bindNoArgAllowedApiCall<UsersProfileSetRequest, UsersProfileSetResponse>(this, "users.profile.set"),
    },
    discoverableContacts: {
      lookup: this.#bindApiCall<UsersDiscoverableContactsLookupRequest, UsersDiscoverableContactsLookupResponse>(
        this,
        "users.discoverableContacts.lookup",
      ),
    },
  };

  public readonly views = {
    open: this.#bindApiCall<ViewsOpenRequest, ViewsOpenResponse>(this, "views.open"),
    publish: this.#bindApiCall<ViewsPublishRequest, ViewsPublishResponse>(this, "views.publish"),
    push: this.#bindApiCall<ViewsPushRequest, ViewsPushResponse>(this, "views.push"),
    update: this.#bindApiCall<ViewsUpdateRequest, ViewsUpdateResponse>(this, "views.update"),
  };

  public readonly workflows = {
    triggers: {
      create: this.#bindApiCall<WorkflowsTriggersCreateRequest, WorkflowsTriggersCreateResponse>(this, "workflows.triggers.create"),
      update: this.#bindApiCall<WorkflowsTriggersUpdateRequest, WorkflowsTriggersUpdateResponse>(this, "workflows.triggers.update"),
      delete: this.#bindApiCall<WorkflowsTriggersDeleteRequest, WorkflowsTriggersDeleteResponse>(this, "workflows.triggers.delete"),
      list: this.#bindNoArgAllowedApiCall<WorkflowsTriggersListRequest, WorkflowsTriggersListResponse>(this, "workflows.triggers.list"),
    },
  };
}
