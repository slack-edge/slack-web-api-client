// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface

import type { SlackAPIResponse } from "../response.ts";

// https://docs.slack.dev/reference/methods/functions.workflows.steps.list
export type FunctionsWorkflowsStepsListResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  needed?: string;
  provided?: string;
  warning?: string;
  steps_versions?: FunctionsWorkflowsStepVersion[];
};

export interface FunctionsWorkflowsStepVersion {
  title?: string;
  workflow_id?: string;
  step_id?: string;
  is_deleted?: boolean;
  workflow_version_created?: string;
}
