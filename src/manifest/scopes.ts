// https://api.slack.com/scopes?filter=granular_bot
// var scopes = [].slice.call(document.getElementsByClassName('apiReferenceFilterableList__listItemLink')).map(e => '"' + e.innerText + '"').join(' | '); console.log("export type AnyManifestBotScope = " + scopes + ";");
export type AnyManifestBotScope =
  | "app_configurations:read"
  | "app_configurations:write"
  | "app_mentions:read"
  | "assistant:write"
  | "bookmarks:read"
  | "bookmarks:write"
  | "calls:read"
  | "calls:write"
  | "canvases:read"
  | "canvases:write"
  | "channels:history"
  | "channels:join"
  | "channels:manage"
  | "channels:read"
  | "channels:write.invites"
  | "channels:write.topic"
  | "chat:write"
  | "chat:write.customize"
  | "chat:write.public"
  | "commands"
  | "conversations.connect:manage"
  | "conversations.connect:read"
  | "conversations.connect:write"
  | "datastore:read"
  | "datastore:write"
  | "dnd:read"
  | "emoji:read"
  | "files:read"
  | "files:write"
  | "groups:history"
  | "groups:read"
  | "groups:write"
  | "groups:write.invites"
  | "groups:write.topic"
  | "im:history"
  | "im:read"
  | "im:write"
  | "im:write.topic"
  | "incoming-webhook"
  | "links.embed:write"
  | "links:read"
  | "links:write"
  | "metadata.message:read"
  | "mpim:history"
  | "mpim:read"
  | "mpim:write"
  | "mpim:write.invites"
  | "mpim:write.topic"
  | "none"
  | "pins:read"
  | "pins:write"
  | "reactions:read"
  | "reactions:write"
  | "reminders:read"
  | "reminders:write"
  | "remote_files:read"
  | "remote_files:share"
  | "remote_files:write"
  | "team.billing:read"
  | "team.preferences:read"
  | "team:read"
  | "tokens.basic"
  | "triggers:read"
  | "triggers:write"
  | "usergroups:read"
  | "usergroups:write"
  | "users.profile:read"
  | "users:read"
  | "users:read.email"
  | "users:write"
  | "workflow.steps:execute";

// https://api.slack.com/scopes?filter=user
// var scopes = [].slice.call(document.getElementsByClassName('apiReferenceFilterableList__listItemLink')).map(e => '"' + e.innerText + '"').join(' | '); console.log("export type AnyManifestUserScope = " + scopes + ";");
export type AnyManifestUserScope =
  | "admin"
  | "admin.analytics:read"
  | "admin.app_activities:read"
  | "admin.apps:read"
  | "admin.apps:write"
  | "admin.barriers:read"
  | "admin.barriers:write"
  | "admin.conversations:read"
  | "admin.conversations:write"
  | "admin.invites:read"
  | "admin.invites:write"
  | "admin.roles:read"
  | "admin.roles:write"
  | "admin.teams:read"
  | "admin.teams:write"
  | "admin.usergroups:read"
  | "admin.usergroups:write"
  | "admin.users:read"
  | "admin.users:write"
  | "admin.workflows:read"
  | "admin.workflows:write"
  | "app_configurations:read"
  | "app_configurations:write"
  | "apps.requests:write"
  | "auditlogs:read"
  | "bookmarks:read"
  | "bookmarks:write"
  | "calls:read"
  | "calls:write"
  | "canvases:read"
  | "canvases:write"
  | "channels:history"
  | "channels:read"
  | "channels:write"
  | "channels:write.invites"
  | "channels:write.topic"
  | "chat:write"
  | "chat:write:bot"
  | "chat:write:user"
  | "commands"
  | "dnd:read"
  | "dnd:write"
  | "email"
  | "emoji:read"
  | "files:read"
  | "files:write"
  | "files:write:user"
  | "groups:history"
  | "groups:read"
  | "groups:write"
  | "groups:write.invites"
  | "groups:write.topic"
  | "hosting:read"
  | "hosting:write"
  | "identity.avatar"
  | "identity.basic"
  | "identity.email"
  | "identity.team"
  | "im:history"
  | "im:read"
  | "im:write"
  | "im:write.topic"
  | "incoming-webhook"
  | "links.embed:write"
  | "links:read"
  | "links:write"
  | "mpim:history"
  | "mpim:read"
  | "mpim:write"
  | "mpim:write.invites"
  | "mpim:write.topic"
  | "openid"
  | "pins:read"
  | "pins:write"
  | "profile"
  | "reactions:read"
  | "reactions:write"
  | "reminders:read"
  | "reminders:write"
  | "remote_files:read"
  | "remote_files:share"
  | "search:read"
  | "stars:read"
  | "stars:write"
  | "team.billing:read"
  | "team.preferences:read"
  | "team:read"
  | "tokens.basic"
  | "triggers:read"
  | "triggers:write"
  | "usergroups:read"
  | "usergroups:write"
  | "users.profile:read"
  | "users.profile:write"
  | "users:read"
  | "users:read.email"
  | "users:write";

// https://api.slack.com/scopes?query=Configuration
// var scopes = [].slice.call(document.getElementsByClassName('apiReferenceFilterableList__listItemLink')).map(e => '"' + e.innerText + '"').join(' | '); console.log("export type AnyConfigurationScope = " + scopes + ";");
export type AnyManifestConfigurationScope = "app_configurations:read" | "app_configurations:write";

export type AppManifestLevelScopes = "authorizations:read" | "connections:write";
