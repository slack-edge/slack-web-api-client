///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts"
export type AdminInviteRequestsListResponse = SlackAPIResponse & {
  error?: string;
  invite_requests?: string[];
  needed?: string;
  ok: boolean;
  provided?: string;
};
