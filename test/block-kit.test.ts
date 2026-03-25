import { assert, test, describe } from "vitest";
import { AnyMessageBlock, AnyRichTextBlockElement, ContextActionsBlock, MessageInputBlock, RichTextBlock } from "../src/index";

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
                style: { bold: true, italic: true, strike: true, code: true },
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
