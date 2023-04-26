///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts"
export type ApiTestResponse = SlackAPIResponse & {
  args?: Args;
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export interface Args {
  error?: string;
  foo?: string;
}
