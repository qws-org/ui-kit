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
        <Accordion.Item id="item-1" title="Item 1">
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
        <Accordion.Item id="item-2" title="Item 2">
          Content for Item 2
        </Accordion.Item>
        <Accordion.Item id="item-3" title="Item 3">
          Content for Item 3
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
