// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface

import type { SlackAPIResponse } from "../response.ts";

export interface FunctionDistributionUser {
  user_id?: string;
  username?: string;
  email?: string;
}

export type FunctionsDistributionsPermissionsSetResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  permission_type?: string;
  users?: FunctionDistributionUser[];
};

export type FunctionsDistributionsPermissionsListResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  permission_type?: string;
  user_ids?: string[];
  users?: FunctionDistributionUser[];
};
