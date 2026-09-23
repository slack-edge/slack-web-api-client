// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface

import type { AgentSessionStatus } from "../request";
import type { SlackAPIResponse } from "../response";

export type AgentsSessionsSetStatusResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  needed?: string;
  provided?: string;
  /** e.g. `missing_agent_session_stopped_event_subscription` when the app does not subscribe to `agent_session_stopped`. */
  warning?: string;

  /** Session-wide status across every agent present, with precedence suspended > processing > active > closed. */
  status?: AgentSessionStatus;
  /** The calling agent's own status, the value this call just wrote. */
  agent_status?: AgentSessionStatus;
  title?: string;
};
