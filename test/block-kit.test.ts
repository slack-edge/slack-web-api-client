import { assert, test, describe } from "vitest";
import {
  AlertBlock,
  AnyMessageBlock,
  AnyModalBlock,
  AnyRichTextBlockElement,
  CardBlock,
  CarouselBlock,
  ContextActionsBlock,
  DataVisualizationBlock,
  MarkdownBlock,
  MessageInputBlock,
  PlanBlock,
  RichTextBlock,
  SectionBlock,
  TableBlock,
  TaskCardBlock,
} from "../src/index";

describe("Block Kit types", () => {
  test("parse rich text ones", async () => {
    // Verify if this compiles
    const blocks: RichTextBlock[] = [
      {
        type: "rich_text",
        elements: [
          {
            type: "rich_text_section",
            elements: [
              {
                type: "text",
                text: "Hello world",
                style: { bold: true, italic: true, strike: true, underline: true, code: true },
              },
              {
                type: "channel",
                channel_id: "C0123456789",
                style: {
                  bold: true,
                  italic: true,
                  strike: true,
                },
              },
              {
                type: "user",
                user_id: "U0123456789",
                style: { bold: true, italic: true, strike: true },
              },
              {
                type: "emoji",
                name: "+1",
                style: { bold: true, italic: true, strike: true },
              },
              {
                type: "link",
                url: "https:///www.slack.com",
                text: "Link here",
                style: { bold: true, italic: true, strike: true, code: true },
              },
              {
                type: "team",
                team_id: "T0123456789",
                style: { bold: true, italic: true, strike: true },
              },
              {
                type: "usergroup",
                usergroup_id: "S0123456789",
                style: { bold: true, italic: true, strike: true },
              },
              {
                type: "date",
                timestamp: 1703908656,
                format: "YYYY-MM-DD",
                style: { bold: true, italic: true, strike: true, code: true },
              },
              {
                type: "broadcast",
                range: "here",
                style: { bold: true, italic: true, strike: true },
              },
              {
                type: "color",
                value: "red",
                style: { bold: true, italic: true, strike: true },
              },
            ],
          },
        ],
      },
    ];
    assert.equal(blocks.length, 1);
  });
  test("parse image blocks/elements", async () => {
    // Verify if this compiles
    const blocks: AnyMessageBlock[] = [
      {
        type: "image",
        image_url: "https://example.com",
        alt_text: "alt",
      },
      {
        type: "image",
        slack_file: { url: "https://slack.com" },
        alt_text: "alt",
      },
      {
        type: "image",
        slack_file: { id: "F111" },
        alt_text: "alt",
      },
      {
        type: "section",
        accessory: {
          type: "image",
          image_url: "https://example.com",
          alt_text: "alt",
        },
      },
      {
        type: "section",
        accessory: {
          type: "image",
          slack_file: { url: "https://slack.com" },
          alt_text: "alt",
        },
      },
      {
        type: "section",
        accessory: {
          type: "image",
          slack_file: { id: "F111" },
          alt_text: "alt",
        },
      },
    ];
    assert.equal(blocks.length, 6);
  });

  test("parse description for an option", async () => {
    // Verify if this compiles
    const blocks: MessageInputBlock[] = [
      {
        type: "input",
        block_id: "1",
        label: { type: "plain_text", text: "Checkbox" },
        element: {
          type: "checkboxes",
          options: [
            {
              text: { type: "plain_text", text: "1-p-p" },
              description: { type: "plain_text", text: "1-p-p" },
            },
            {
              text: { type: "plain_text", text: "1-p-m" },
              description: { type: "mrkdwn", text: "1-p-m" },
            },
            {
              text: { type: "mrkdwn", text: "1-m-p" },
              description: { type: "plain_text", text: "1-m-p" },
            },
            {
              text: { type: "mrkdwn", text: "1-m-m" },
              description: { type: "mrkdwn", text: "1-m-m" },
            },
          ],
        },
      },
      {
        type: "input",
        block_id: "2",
        label: { type: "plain_text", text: "Radio Buttons" },
        element: {
          type: "radio_buttons",
          options: [
            {
              text: { type: "plain_text", text: "2-p-p" },
              description: { type: "plain_text", text: "2-p-p" },
            },
            {
              text: { type: "plain_text", text: "2-p-m" },
              description: { type: "mrkdwn", text: "2-p-m" },
            },
            {
              text: { type: "mrkdwn", text: "2-m-p" },
              description: { type: "plain_text", text: "2-m-p" },
            },
            {
              text: { type: "mrkdwn", text: "2-m-m" },
              description: { type: "mrkdwn", text: "2-m-m" },
            },
          ],
        },
      },
      {
        type: "input",
        block_id: "3",
        label: { type: "plain_text", text: "Static Select" },
        element: {
          type: "radio_buttons",
          options: [
            {
              text: { type: "plain_text", text: "3-p-p" },
              description: { type: "plain_text", text: "3-p-p" },
            },
            {
              text: { type: "mrkdwn", text: "3-m-p" },
              description: { type: "plain_text", text: "3-m-p" },
            },
          ],
        },
      },
    ];
    assert.isTrue(blocks.length > 0);
  });

  test("parse markdown blocks", async () => {
    const block: MarkdownBlock = {
      type: "markdown",
      text: "**Lots of information here!!**",
    };
    const blocks: AnyMessageBlock[] = [block];
    const modalBlocks: AnyModalBlock[] = [block];
    assert.equal(blocks.length, 1);
    assert.equal(modalBlocks.length, 1);
  });

  test("parse alert blocks", async () => {
    const blocks: AlertBlock[] = [
      {
        type: "alert",
        text: { type: "mrkdwn", text: "Heads up!" },
      },
      {
        type: "alert",
        block_id: "a1",
        text: { type: "plain_text", text: "Something went wrong" },
        level: "error",
      },
      {
        type: "alert",
        text: { type: "mrkdwn", text: "FYI" },
        level: "info",
      },
      {
        type: "alert",
        text: { type: "mrkdwn", text: "Be careful" },
        level: "warning",
      },
      {
        type: "alert",
        text: { type: "mrkdwn", text: "Nice!" },
        level: "success",
      },
    ];
    const messageBlocks: AnyMessageBlock[] = blocks;
    assert.equal(messageBlocks.length, 5);
  });

  test("parse card blocks", async () => {
    const block: CardBlock = {
      type: "card",
      icon: {
        type: "image",
        image_url: "https://picsum.photos/36/36",
        alt_text: "Icon",
      },
      title: { type: "mrkdwn", text: "Lumon Industries" },
      subtitle: { type: "mrkdwn", text: "Committed to work-life balance" },
      hero_image: {
        type: "image",
        image_url: "https://picsum.photos/400/300",
        alt_text: "Sample hero image",
      },
      body: { type: "mrkdwn", text: "Please enjoy each card equally." },
      actions: [
        {
          type: "button",
          text: { type: "plain_text", text: "Action Button" },
          action_id: "button_action",
        },
      ],
    };
    const messageBlocks: AnyMessageBlock[] = [block];
    assert.equal(messageBlocks.length, 1);
    assert.equal(block.actions?.length, 1);
  });

  test("parse carousel blocks", async () => {
    const block: CarouselBlock = {
      type: "carousel",
      elements: [
        {
          type: "card",
          title: { type: "plain_text", text: "First card" },
          body: { type: "mrkdwn", text: "Body 1" },
        },
        {
          type: "card",
          title: { type: "plain_text", text: "Second card" },
          body: { type: "mrkdwn", text: "Body 2" },
        },
      ],
    };
    const messageBlocks: AnyMessageBlock[] = [block];
    assert.equal(messageBlocks.length, 1);
    assert.equal(block.elements.length, 2);
  });

  test("parse task_card blocks", async () => {
    const block: TaskCardBlock = {
      type: "task_card",
      task_id: "task-1",
      title: "Investigate failure",
      status: "in_progress",
      details: {
        type: "rich_text",
        elements: [
          {
            type: "rich_text_section",
            elements: [{ type: "text", text: "Looking into the logs" }],
          },
        ],
      },
      output: {
        type: "rich_text",
        elements: [
          {
            type: "rich_text_section",
            elements: [{ type: "text", text: "Found a stack trace" }],
          },
        ],
      },
      sources: [{ type: "url", url: "https://example.com/", text: "Reference" }],
    };
    const messageBlocks: AnyMessageBlock[] = [block];
    assert.equal(messageBlocks.length, 1);
    assert.equal(block.sources?.length, 1);
    assert.equal(block.sources?.[0].type, "url");
  });

  test("parse plan blocks", async () => {
    const block: PlanBlock = {
      type: "plan",
      title: { type: "plain_text", text: "Release plan" },
      tasks: [
        {
          type: "task_card",
          task_id: "t1",
          title: "Run tests",
          status: "complete",
        },
        {
          type: "task_card",
          task_id: "t2",
          title: "Deploy",
          status: "pending",
        },
      ],
    };
    const messageBlocks: AnyMessageBlock[] = [block];
    assert.equal(messageBlocks.length, 1);
    assert.equal(block.tasks?.length, 2);
  });

  test("parse table blocks", async () => {
    const block: TableBlock = {
      type: "table",
      rows: [
        [
          { type: "raw_text", text: "Name" },
          { type: "raw_text", text: "Score" },
        ],
        [
          { type: "raw_text", text: "Alice" },
          {
            type: "rich_text",
            elements: [
              {
                type: "rich_text_section",
                elements: [{ type: "text", text: "100", style: { bold: true } }],
              },
            ],
          },
        ],
      ],
      column_settings: [{ align: "left", is_wrapped: false }, { align: "right" }],
    };
    const messageBlocks: AnyMessageBlock[] = [block];
    assert.equal(messageBlocks.length, 1);
    assert.equal(block.rows.length, 2);
    assert.equal(block.column_settings?.length, 2);
  });

  test("parse data visualization blocks", async () => {
    const blocks: DataVisualizationBlock[] = [
      {
        type: "data_visualization",
        block_id: "viz-line-multi",
        title: "Weekly active users by platform",
        chart: {
          type: "line",
          series: [
            {
              name: "Desktop",
              data: [
                { label: "Mon", value: 800 },
                { label: "Tue", value: 920 },
              ],
            },
            {
              name: "Mobile",
              data: [
                { label: "Mon", value: 400 },
                { label: "Tue", value: 530 },
              ],
            },
          ],
          axis_config: {
            categories: ["Mon", "Tue"],
            x_label: "Day",
            y_label: "Users",
          },
        },
      },
      {
        type: "data_visualization",
        block_id: "viz-bar-negative",
        title: "Net headcount change",
        chart: {
          type: "bar",
          series: [
            {
              name: "Delta",
              data: [
                { label: "Mon", value: 4 },
                { label: "Tue", value: -2 },
              ],
            },
          ],
          axis_config: { x_label: "Day", y_label: "People (delta)" },
        },
      },
      {
        type: "data_visualization",
        title: "Concurrent users by platform",
        chart: {
          type: "area",
          series: [
            {
              name: "Desktop",
              data: [{ label: "Mon", value: 2800 }],
            },
          ],
        },
      },
      {
        type: "data_visualization",
        block_id: "viz-pie-multi",
        title: "Plan distribution by tier",
        chart: {
          type: "pie",
          segments: [
            { label: "Free", value: 4200 },
            { label: "Pro", value: 2300 },
            { label: "Enterprise", value: 480 },
          ],
        },
      },
    ];
    const messageBlocks: AnyMessageBlock[] = blocks;
    assert.equal(messageBlocks.length, 4);
    assert.equal(blocks[0].chart.type, "line");
    const pie = blocks[3].chart;
    if (pie.type === "pie") {
      assert.equal(pie.segments.length, 3);
    }
  });

  test("section block supports expand", async () => {
    const block: SectionBlock = {
      type: "section",
      text: { type: "mrkdwn", text: "long content..." },
      expand: true,
    };
    assert.equal(block.expand, true);
  });

  test("parse context actions blocks", async () => {
    const block: ContextActionsBlock = {
      type: "context_actions",
      block_id: "block1",
      elements: [
        {
          type: "feedback_buttons",
          action_id: "feedback_1",
          positive_button: {
            text: { type: "plain_text", text: "\ud83d\udc4d" },
            value: "positive",
          },
          negative_button: {
            text: { type: "plain_text", text: "\ud83d\udc4e" },
            value: "negative",
          },
        },
        {
          type: "icon_button",
          action_id: "delete_1",
          icon: "trash",
          text: { type: "plain_text", text: "Delete" },
          value: "delete_item",
        },
      ],
    };
    assert.equal(block.elements.length, 2);

    // Verify context_actions works in AnyMessageBlock
    const blocks: AnyMessageBlock[] = [block];
    assert.equal(blocks.length, 1);
  });

  describe("parse rich text block elements", async () => {
    test("pattern 1", async () => {
      const elements: AnyRichTextBlockElement[] = [
        {
          type: "rich_text_section",
          elements: [
            { type: "text", text: "This is my friend " },
            { type: "user", user_id: "U060JP64TQF" },
            { type: "text", text: "." },
          ],
        },
        {
          type: "rich_text_section",
          elements: [
            {
              type: "text",
              text: "This is a rich text section with regular text. ",
            },
            { type: "text", text: "This is bold", style: { bold: true } },
            { type: "text", text: ". " },
            { type: "text", text: "This is italics.", style: { italic: true } },
            { type: "text", text: " ", style: { bold: true, italic: true } },
            {
              type: "text",
              text: "This is strikethrough.",
              style: { strike: true },
            },
            { type: "text", text: " " },
            { type: "text", text: "This is code.", style: { code: true } },
            { type: "text", text: "\n\n" },
          ],
        },
        {
          type: "rich_text_list",
          elements: [
            {
              type: "rich_text_section",
              elements: [{ type: "text", text: "This is an" }],
            },
            {
              type: "rich_text_section",
              elements: [{ type: "text", text: "ordered" }],
            },
            {
              type: "rich_text_section",
              elements: [{ type: "text", text: "list" }],
            },
          ],
          style: "ordered",
          indent: 0,
          border: 0,
        },
        { type: "rich_text_section", elements: [{ type: "text", text: "\n" }] },
        {
          type: "rich_text_list",
          elements: [
            {
              type: "rich_text_section",
              elements: [{ type: "text", text: "This is an" }],
            },
            {
              type: "rich_text_section",
              elements: [{ type: "text", text: "unordered" }],
            },
            {
              type: "rich_text_section",
              elements: [{ type: "text", text: "list" }],
            },
          ],
          style: "bullet",
          indent: 0,
          border: 0,
        },
        {
          type: "rich_text_section",
          elements: [{ type: "text", text: "\n" }],
        },
        {
          type: "rich_text_quote",
          elements: [{ type: "text", text: "This is a \ntext quote" }],
        },
        {
          type: "rich_text_section",
          elements: [{ type: "text", text: "\n" }],
        },
        {
          type: "rich_text_preformatted",
          elements: [{ type: "text", text: "This is a\nmulti-line \ncode block" }],
          border: 0,
        },
        {
          type: "rich_text_section",
          elements: [
            { type: "text", text: "\nThis is a " },
            { type: "link", url: "https://www.google.com/", text: "link" },
            { type: "text", text: " to google.\n\n" },
          ],
        },
        {
          type: "rich_text_list",
          elements: [
            {
              type: "rich_text_section",
              elements: [
                {
                  type: "text",
                  text: "We should also support nested styling like this bolded text",
                  style: { bold: true },
                },
              ],
            },
            {
              type: "rich_text_section",
              elements: [{ type: "text", text: "in an unordered list", style: { bold: true } }],
            },
            {
              type: "rich_text_section",
              elements: [{ type: "text", text: "on a text quote.", style: { bold: true } }],
            },
          ],
          style: "bullet",
          indent: 0,
          border: 1,
        },
        {
          type: "rich_text_section",
          elements: [
            { type: "text", text: "Or this " },
            { type: "text", text: "bolded", style: { bold: true, code: true } },
            { type: "text", text: " code", style: { code: true } },
            { type: "text", text: ".\n\n\n\nAnd preserve whitespace/newlines?" },
          ],
        },
      ];
      assert.isTrue(elements.length > 0);
    });

    test("pattern 2", async () => {
      const elements: AnyRichTextBlockElement[] = [
        {
          type: "rich_text_section",
          elements: [
            { type: "text", text: "This is my friend " },
            { type: "user", user_id: "U060JP64TQF" },
            { type: "text", text: "." },
          ],
        },
        {
          type: "rich_text_section",
          elements: [
            { type: "text", text: "This is a rich text section with regular text. " },
            { type: "text", text: "This is bold", style: { bold: true } },
            { type: "text", text: ". " },
            { type: "text", text: "This is italics.", style: { italic: true } },
            { type: "text", text: " ", style: { bold: true, italic: true } },
            { type: "text", text: "This is strikethrough.", style: { strike: true } },
            { type: "text", text: " " },
            { type: "text", text: "This is code.", style: { code: true } },
            { type: "text", text: "\n\n" },
          ],
        },
        {
          type: "rich_text_list",
          elements: [
            { type: "rich_text_section", elements: [{ type: "text", text: "This is an" }] },
            { type: "rich_text_section", elements: [{ type: "text", text: "ordered" }] },
            { type: "rich_text_section", elements: [{ type: "text", text: "list" }] },
          ],
          style: "ordered",
          indent: 0,
          border: 0,
        },
        { type: "rich_text_section", elements: [{ type: "text", text: "\n" }] },
        {
          type: "rich_text_list",
          elements: [
            { type: "rich_text_section", elements: [{ type: "text", text: "This is an" }] },
            { type: "rich_text_section", elements: [{ type: "text", text: "unordered" }] },
            { type: "rich_text_section", elements: [{ type: "text", text: "list" }] },
          ],
          style: "bullet",
          indent: 0,
          border: 0,
        },
        { type: "rich_text_section", elements: [{ type: "text", text: "\n" }] },
        { type: "rich_text_quote", elements: [{ type: "text", text: "This is a \ntext quote" }] },
        { type: "rich_text_section", elements: [{ type: "text", text: "\n" }] },
        {
          type: "rich_text_preformatted",
          elements: [{ type: "text", text: "This is a\nmulti-line \ncode block" }],
          border: 0,
        },
        {
          type: "rich_text_section",
          elements: [
            { type: "text", text: "\nThis is a " },
            { type: "link", url: "https://www.google.com/", text: "link" },
            { type: "text", text: " to google.\n\n" },
          ],
        },
        {
          type: "rich_text_list",
          elements: [
            {
              type: "rich_text_section",
              elements: [
                {
                  type: "text",
                  text: "We should also support nested styling like this bolded text",
                  style: { bold: true },
                },
              ],
            },
            {
              type: "rich_text_section",
              elements: [{ type: "text", text: "in an unordered list", style: { bold: true } }],
            },
            {
              type: "rich_text_section",
              elements: [{ type: "text", text: "on a text quote.", style: { bold: true } }],
            },
          ],
          style: "bullet",
          indent: 0,
          border: 1,
        },
        {
          type: "rich_text_section",
          elements: [
            { type: "text", text: "Or this " },
            { type: "text", text: "bolded", style: { bold: true, code: true } },
            { type: "text", text: " code", style: { code: true } },
            { type: "text", text: ".\n\n\n\nAnd preserve whitespace/newlines?" },
          ],
        },
      ];
      assert.isTrue(elements.length > 0);
    });
  });
});
