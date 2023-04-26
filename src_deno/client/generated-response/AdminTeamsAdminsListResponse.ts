///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts"
export type AdminTeamsAdminsListResponse = SlackAPIResponse & {
  admin_ids?: string[];
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
};

export interface ResponseMetadata {
  next_cursor?: string;
}
