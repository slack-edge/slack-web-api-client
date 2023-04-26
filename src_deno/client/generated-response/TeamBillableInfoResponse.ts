///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts"
export type TeamBillableInfoResponse = SlackAPIResponse & {
  billable_info?: { [key: string]: BillableInfo };
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export interface BillableInfo {
  billing_active?: boolean;
}
