// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface

import type { SlackAPIResponse } from "../response";

// All four functions.distributions.permissions.* methods return the same shape:
// https://docs.slack.dev/reference/methods/functions.distributions.permissions.set
type FunctionsDistributionsPermissionsResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  needed?: string;
  provided?: string;
  warning?: string;
  permission_type?: "everyone" | "app_collaborators" | "named_entities" | "system";
  users?: FunctionsDistributionsPermissionsUser[];
};

export interface FunctionsDistributionsPermissionsUser {
  user_id?: string;
  username?: string;
  email?: string;
}

export type FunctionsDistributionsPermissionsAddResponse = FunctionsDistributionsPermissionsResponse;
export type FunctionsDistributionsPermissionsListResponse = FunctionsDistributionsPermissionsResponse;
export type FunctionsDistributionsPermissionsRemoveResponse = FunctionsDistributionsPermissionsResponse;
export type FunctionsDistributionsPermissionsSetResponse = FunctionsDistributionsPermissionsResponse;
