// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface

import type { SlackAPIResponse } from "../response.ts";

export type BlocksValidateResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  needed?: string;
  provided?: string;
  warning?: string;

  errors?: {
    pointer?: string;
    code?: string;
    message?: string;
    constraint?: { type?: string; expected?: any; got?: any };
  }[];
};
