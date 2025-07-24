import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { useUiKitComponents } from "~/components";

import { Flex } from "../flex/Flex";
import { Grid } from "../grid/Grid";
import { Text } from "../text/Text";
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "UI-Kit components/Accordion",

  component: Accordion,
  argTypes: {
    expandedKeys: {
      control: "object",
      description: "Набор ключей открытых элементов",
    },
    onExpandedChange: {
      action: "onExpandedChange",
      description: "Событие изменения состояния открытия элементов",
    },
    isDisabled: {
      control: "boolean",
      description: "Флаг для отключения всех элементов",
    },
  },
} satisfies Meta<typeof Accordion>;
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {},
  render: (args) => {
    const [expandedKeys, setExpandedKeys] = React.useState<Set<ID>>();

    const handleExpandedChange = (keys: Set<ID>): void => {
      setExpandedKeys(keys);
      args.onExpandedChange?.(keys);
    };

    return (
      <Accordion
        {...args}
        onExpandedChange={handleExpandedChange}
        expandedKeys={expandedKeys}
      >
        <Accordion.Item
          id="item-1"
          title=" By using, visiting and/or accessing any part of the jack-poker.com website and/or registering "
        >
          <Text
            content="## 1. Introduction
1.1. By using, visiting and/or accessing any part of the jack-poker.com website and/or registering an account on the Website, you agree to be bound by these Terms and Conditions of Service.
         
1.2. You should read the Terms carefully. If you do not agree with them, please do not use, visit, or access the Website.

## 2. Your Account
### 2.1 Legal requirements
2.1.1 Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.

2.1.2 You are not allowed to register on the Website and use our services if you are a resident of Austria, Aruba, Bonaire, Curacao, France

![welcome-offer-bg](https://jpws-cms-dev-test-test.jack-flush.com/assets/b9a18fab-c61b-440a-8878-cd9c8e57c4da.jpg?width=1240&amp;height=900)
## 3. Multi Accounts
- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.
- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.
"
          />
        </Accordion.Item>
        <Accordion.Item id="item-2" title="Item 2">
          <Text
            content='<ol>
<li style="font-size: 18pt;"><span style="font-size: 18pt;">The Cash Game Leaderboard promotion runs from May 19th, 2025 to June 8th, 2025, spanning three weekly rounds.</span></li>
</ol>
<ol start="2">
<li style="font-size: 14pt;"><span style="font-size: 14pt;">The total prize pool is $1,000,000, split into:</span></li>
</ol>
<ul>
<li>$750,000 in Score-Based Leaderboard Prizes</li>
<li>$250,000 in Random Prizes, awarded throughout the entire promotion</li>
</ul>
<ol start="3">
<li>Players earn leaderboard points in real-money cash games as follows: -1 point for every call or bet that results in a losing hand</li>
</ol>
<ul>
<li>2 points for every all-in that ends in a loss</li>
</ul>
<ol start="4">
<li>The leaderboard is divided into three separate limit groups:</li>
</ol>
<ul>
<li>Low limits: $0.10 &ndash; $0.50</li>
<li>Medium limits: $1 &ndash; $4</li>
<li>High limits: $10 &ndash; $20</li>
</ul>
<ol start="5">
<li>Awarded separately per stake level across the three rounds:</li>
</ol>
<ul>
<li>Low limits: $20,000 total</li>
<li>Medium limits: $50,000 total</li>
<li>High limits: $180,000 total</li>
<li>The $250,000 Random Prize Pool is distributed randomly among participating players</li>
</ul>
<ol start="6">
<li>Eligibility: The promotion is open to all eligible players who meet the platform&rsquo;s age and jurisdictional requirements.</li>
</ol>
<ol start="7">
<li>Leaderboard Updates: The leaderboard rankings are updated in real time, and players can track their positions via the game client or promotions page.</li>
</ol>
<ol start="8">
<li>General Terms: Gift from the Poker Gods: Cash Game Leaderboard promotion is subject to JackPoker&rsquo;s General Terms and Conditions. JackPoker reserves the right to modify, suspend, or cancel the promotion at any time.</li>
</ol>'
          />
        </Accordion.Item>
        <Accordion.Item id="item-3" title="Item 3">
          <Text
            content={
              '<p><img src="https://jpws-cms-dev-test-test.jack-flush.com/assets/b9a18fab-c61b-440a-8878-cd9c8e57c4da.jpg?width=1240&amp;height=900" alt="Bg Slider Desktop" loading="lazy"></p>\n' +
              "<ol>\n" +
              '<li style="font-size: 18pt;"><span style="font-size: 18pt;">The Cash Game Leaderboard promotion runs from May 19th, 2025 to June 8th, 2025, spanning three weekly rounds.</span></li>\n' +
              "</ol>\n" +
              '<ol start="2">\n' +
              '<li style="font-size: 14pt;"><span style="font-size: 14pt;">The total prize pool is $1,000,000, split into:</span></li>\n' +
              "</ol>\n" +
              "<ul>\n" +
              "<li>$750,000 in Score-Based Leaderboard Prizes</li>\n" +
              "<li>$250,000 in Random Prizes, awarded throughout the entire promotion</li>\n" +
              "</ul>\n" +
              '<ol start="3">\n' +
              "<li>Players earn leaderboard points in real-money cash games as follows: -1 point for every call or bet that results in a losing hand</li>\n" +
              "</ol>\n" +
              "<ul>\n" +
              "<li>2 points for every all-in that ends in a loss</li>\n" +
              "</ul>\n" +
              '<ol start="4">\n' +
              "<li>The leaderboard is divided into three separate limit groups:</li>\n" +
              "</ol>\n" +
              "<ul>\n" +
              "<li>Low limits: $0.10 &ndash; $0.50</li>\n" +
              "<li>Medium limits: $1 &ndash; $4</li>\n" +
              "<li>High limits: $10 &ndash; $20</li>\n" +
              "</ul>\n" +
              '<ol start="5">\n' +
              "<li>Awarded separately per stake level across the three rounds:</li>\n" +
              "</ol>\n" +
              "<ul>\n" +
              "<li>Low limits: $20,000 total</li>\n" +
              "<li>Medium limits: $50,000 total</li>\n" +
              "<li>High limits: $180,000 total</li>\n" +
              "<li>The $250,000 Random Prize Pool is distributed randomly among participating players</li>\n" +
              "</ul>\n" +
              '<ol start="6">\n' +
              "<li>Eligibility: The promotion is open to all eligible players who meet the platform&rsquo;s age and jurisdictional requirements.</li>\n" +
              "</ol>\n" +
              '<ol start="7">\n' +
              "<li>Leaderboard Updates: The leaderboard rankings are updated in real time, and players can track their positions via the game client or promotions page.</li>\n" +
              "</ol>\n" +
              '<ol start="8">\n' +
              "<li>General Terms: Gift from the Poker Gods: Cash Game Leaderboard promotion is subject to JackPoker&rsquo;s General Terms and Conditions. JackPoker reserves the right to modify, suspend, or cancel the promotion at any time.</li>\n" +
              "</ol>"
            }
          />
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const SecondaryVariant: Story = {
  args: {},
  render: (args) => {
    const [expandedKeys, setExpandedKeys] = React.useState<Set<ID>>();

    const handleExpandedChange = (keys: Set<ID>): void => {
      setExpandedKeys(keys);
      args.onExpandedChange?.(keys);
    };
    const { Link } = useUiKitComponents();
    return (
      <Accordion
        {...args}
        onExpandedChange={handleExpandedChange}
        expandedKeys={expandedKeys}
      >
        <Accordion.Item
          id="item-1"
          title="Место для заголовка"
          variant="secondary"
        >
          <Text
            content="## 1. Introduction
1.1. By using, visiting and/or accessing any part of the jack-poker.com website and/or registering an account on the Website, you agree to be bound by these Terms and Conditions of Service.
         
1.2. You should read the Terms carefully. If you do not agree with them, please do not use, visit, or access the Website.

## 2. Your Account
### 2.1 Legal requirements
2.1.1 Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.

2.1.2 You are not allowed to register on the Website and use our services if you are a resident of Austria, Aruba, Bonaire, Curacao, France

![welcome-offer-bg](/welcome-offer-bg-desktop.jpg)
## 3. Multi Accounts
- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.
- Reference to the “Account” shall mean an account registered by you on the Website after accepting and agreeing to these Terms.
"
          />
        </Accordion.Item>
        <Accordion.Item id="item-2" title="Например текст" variant="secondary">
          Content for Item 2
        </Accordion.Item>
        <Accordion.Item
          id="item-3"
          title={<Link href="/">Или ссылка на главную</Link>}
          variant="secondary"
        >
          Content for Item 3
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const Disabled: Story = {
  args: {},
  render: (args) => {
    const [expandedKeys, setExpandedKeys] = React.useState<Set<ID>>();

    const handleExpandedChange = (keys: Set<ID>): void => {
      setExpandedKeys(keys);
      args.onExpandedChange?.(keys);
    };

    return (
      <Accordion
        {...args}
        expandedKeys={expandedKeys}
        onExpandedChange={handleExpandedChange}
      >
        <Accordion.Item
          id="item-1"
          title="Disabled"
          variant="primary"
          isDisabled
        >
          {null}
        </Accordion.Item>
      </Accordion>
    );
  },
};
export const CustomDurations: Story = {
  args: {},
  render: (args) => {
    const [expandedKeys, setExpandedKeys] = React.useState<Set<ID>>(
      new Set(["item-1"]),
    );

    const handleExpandedChange = (keys: Set<ID>): void => {
      setExpandedKeys(keys);
      args.onExpandedChange?.(keys);
    };

    return (
      <Accordion
        {...args}
        onExpandedChange={handleExpandedChange}
        expandedKeys={expandedKeys}
      >
        <Accordion.Item
          id="item-1"
          title="500"
          variant="primary"
          duration={500}
        >
          500ms
        </Accordion.Item>
        <Accordion.Item
          id="item-2"
          title="800"
          variant="primary"
          duration={800}
        >
          800ms
        </Accordion.Item>
        <Accordion.Item
          id="item-3"
          title="1500"
          variant="primary"
          duration={1500}
        >
          1500ms
        </Accordion.Item>
      </Accordion>
    );
  },
};
export const CustomHeadingWrapper: Story = {
  args: {},
  render: (args) => {
    const [expandedKeys, setExpandedKeys] = React.useState<Set<ID>>(
      new Set(["item-1"]),
    );

    const handleExpandedChange = (keys: Set<ID>): void => {
      setExpandedKeys(keys);
      args.onExpandedChange?.(keys);
    };

    return (
      <Accordion
        {...args}
        onExpandedChange={handleExpandedChange}
        expandedKeys={expandedKeys}
      >
        <Accordion.Item
          id="item-1"
          title="Grid with 2 columns"
          variant="primary"
          p={{ px: 40 }}
          headingWrapper={(wrapperProps) => (
            <Grid gap={18} cols={2}>
              {wrapperProps.children}
            </Grid>
          )}
        >
          500ms
        </Accordion.Item>
        <Accordion.Item
          id="item-2"
          title="Flex justify-content:center"
          variant="primary"
          headingWrapper={(wrapperProps) => (
            <Flex gap={24} align="center" justify="center" flexDirection="row">
              {wrapperProps.children}
            </Flex>
          )}
        >
          800ms
        </Accordion.Item>
        <Accordion.Item
          headingWrapper={(wrapperProps) => (
            <Flex gap={8} align="end">
              {wrapperProps.children}
            </Flex>
          )}
          id="item-3"
          title="Flex align-items: end"
          variant="primary"
        >
          1500ms
        </Accordion.Item>
      </Accordion>
    );
  },
};
export const MultipleExpanded: Story = {
  render: () => {
    return (
      <Accordion allowsMultipleExpanded={true}>
        <Accordion.Item id="item-1" title="1" variant="primary">
          Content1
        </Accordion.Item>
        <Accordion.Item id="item-2" title="2" variant="primary">
          Content2
        </Accordion.Item>
        <Accordion.Item id="item-3" title="3" variant="primary">
          Content3
        </Accordion.Item>
      </Accordion>
    );
  },
};
