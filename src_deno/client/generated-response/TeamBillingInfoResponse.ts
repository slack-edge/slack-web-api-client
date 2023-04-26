///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts"
export type TeamBillingInfoResponse = SlackAPIResponse & {
  error?: string;
  needed?: string;
  ok: boolean;
  plan?: string;
  provided?: string;
};
