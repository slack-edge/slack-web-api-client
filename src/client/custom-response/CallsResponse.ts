// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface

import type { SlackAPIResponse } from "../response";

export interface Call {
  id?: string;
  date_start?: number;
  external_unique_id?: string;
  join_url?: string;
  desktop_app_join_url?: string;
  external_display_id?: string;
  title?: string;
  // deno-lint-ignore no-explicit-any
  users?: any[];
}

export type CallsAddResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  call?: Call;
};

export type CallsInfoResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  call?: Call;
};

export type CallsUpdateResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  call?: Call;
};
