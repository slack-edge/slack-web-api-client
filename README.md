## Slack Web API Client for TypeScript

[![npm version](https://badge.fury.io/js/slack-web-api-client.svg)](https://badge.fury.io/js/slack-web-api-client) 
[![deno module](https://shield.deno.dev/x/slack_web_api_client)](https://deno.land/x/slack_web_api_client)
[![JSR](https://jsr.io/badges/@seratch/slack-web-api-client)](https://jsr.io/@seratch/slack-web-api-client)

The **slack-web-api-client** library is a type-safe Slack Web API client that provides several key benefits, including:
* **A fetch-based implementation**, which is compatible with most runtimes
* **Strong types for Web API responses and Block Kit**, which make coding enjoyable and predictable
* **Zero additional dependencies**, allowing developers to integrate this library into their projects without any obstacles

If you're looking for a solution to utilize the full features of the Slack platform, [**slack-edge**](https://github.com/slack-edge/slack-edge) is the one for you. The **slack-edge** library uses this **slack-web-api-client** internally, making it compatible with most JavaScript/TypeScript runtimes.

### Getting Started

#### Working with the npm package

To install the **slack-web-api-client** library, simply use the standard npm/yarn command:
```
npm i slack-web-api-client@latest
```

Once you have added the **slack-web-api-client** library to your project's dependencies using the npm/yarn command, you can easily import any functionality you need from `"slack-web-api-client"` in your TypeScript code:

```typescript
import { SlackAPIClient } from "slack-web-api-client";

const client = new SlackAPIClient(process.env.SLACK_BOT_TOKEN);
const response = await client.chat.postMessage({
  channel: "#random",
  text: ":wave: what's up?",
});
```

The second argument of the constructor allows for optional customizations:

```typescript
const client = new SlackAPIClient(process.env.SLACK_BOT_TOKEN, {
  logLevel: "DEBUG", // default: "INFO"
  throwSlackAPIError: false,  // default: true
});
```

This argument, if provided, allows for further configuration of **SlackAPIClient** instance to fit your specific needs.

#### Working with the Deno module

Please refer to [README for the Deno module](https://github.com/slack-edge/slack-web-api-client/blob/main/src_deno/README.md).
