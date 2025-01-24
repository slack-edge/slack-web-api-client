## Slack Web API Client for TypeScript

The **slack-web-api-client** library is a type-safe Slack Web API client that
provides several key benefits, including:

- **A fetch-based implementation**, which is compatible with most runtimes
- **Strong types for Web API responses and Block Kit**, which make coding
  enjoyable and predictable
- **Zero additional dependencies**, allowing developers to integrate this
  library into their projects without any obstacles

### Getting Started

The **slack-web-api-client** library also offers a native package for the
[Deno runtime](https://deno.com/). To import the module for
[Slack's automation platform](https://api.slack.com/automation), use the
following syntax:

```typescript
import { SlackFunction } from "deno-slack-sdk/mod.ts";

export const def = DefineFunction({
  callback_id: "hello",
  title: "Hello World",
  source_file: "functions/hello.ts",
  input_parameters: { properties: {}, required: [] },
  output_parameters: { properties: {}, required: [] },
});

import { SlackAPIClient } from "https://deno.land/x/slack_web_api_client@1.1.5/mod.ts";

export default SlackFunction(def, async ({ token }) => {
  const client = new SlackAPIClient(token, {
    throwSlackAPIError: false, // for the compatibility with deno-slack-api library
  });
  const response = await client.chat.postMessage({
    channel: "#random",
    text: ":wave: what's up?",
  });

  // ....
});
```

This allows you to use the powerful features of the **slack-web-api-client**
library in your Deno projects with ease.

<img width="600" src="https://user-images.githubusercontent.com/19658/252261924-75522081-0ceb-47c3-9d0a-2cc99772ff7f.png">

An alternative way is to use skypack CDN. If you prefer this way, you need to
add `"cdn.skypack.dev"` to `outgoingDomains` in `manifest.ts`.

An alternative way to use the **slack-web-api-client** library is through the
skypack CDN. To do this, simply add `"cdn.skypack.dev"` to the `outgoingDomains`
section in your `manifest.ts` file. This allows you to use the library within
your project:

```typescript
import { SlackAPIClient } from "https://cdn.skypack.dev/slack-web-api-client?dts";
```

Lastly, Slack's automation platform doesn't support jsr.io yet, though this
library can be accessed there as well:
https://jsr.io/@seratch/slack-web-api-client

```typescript
// deno add @seratch/slack-web-api-client
import { SlackAPIClient } from "@seratch/slack-web-api-client.ts";
```

When you need this library for Deno apps outside the automation platform,
relying on jsr.io could be a simpler approach for resolving dependencies.
