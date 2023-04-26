///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts"
export type AdminAuthPolicyRemoveEntitiesResponse = SlackAPIResponse & {
  entity_total_count?: number;
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
};
