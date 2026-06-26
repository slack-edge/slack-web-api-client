// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface

import type { SlackAPIResponse } from "../response";

export interface WorkflowStepVersion {
  title?: string;
  workflow_id?: string;
  step_id?: string;
  is_deleted?: boolean;
  workflow_version_created?: string;
}

export type FunctionsWorkflowsStepsListResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  steps_versions?: WorkflowStepVersion[];
  response_metadata?: {
    next_cursor?: string;
  };
};
