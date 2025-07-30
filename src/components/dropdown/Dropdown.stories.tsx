import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Typography } from "~/components";
import { Grid } from "~/components/grid/Grid";
import { UserCircle } from "~/icons";

import { Flex } from "../flex/Flex";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown.Trigger> = {
  title: "UI-Kit components/Dropdown",
  component: Dropdown.Trigger,
  argTypes: {
    strategy: {
      description:
        "Способ открытия выпадающего списка. Возможные значения: 'click' (по клику), 'hover' (по наведению) и 'mixed' (по клику и по наведению).",
      control: { type: "radio" },
      options: ["click", "hover", "mixed"],
      defaultValue: "click",
    },
    onAction: {
      description:
        "Функция, вызываемая при выборе элемента в выпадающем списке. Возвращает `key` выбранного элемента.",
      action: "onAction",
    },
    triggerElement: {
      description:
        "Пользовательский элемент, который используется для открытия выпадающего списка.",
      control: false,
    },
    children: {
      description: "Содержимое выпадающего списка, включая секции и элементы.",
      control: false,
    },
    offset: {
      description:
        "Смещение поповера относительно его якорного элемента вдоль основной оси. Этот проп определяет расстояние между поповером и элементом-триггером.",
      control: { type: "number" },
    },
    placement: {
      description:
        "Позиционирование выпадающего списка относительно элемента-триггера. Использует значения из библиотеки `@react-aria/overlays`.",
      control: { type: "select" },
      options: [
        "top",
        "top start",
        "top end",
        "bottom",
        "bottom start",
        "bottom end",
        "left",
        "left start",
        "left end",
        "right",
        "right start",
        "right end",
      ],
      defaultValue: "bottom start",
    },
    variant: {
      description:
        "Режим отображения выпадающего списка: " +
        "- `positioned` — через портал с позиционированием; " +
        "- `static` — встроенный в поток документа.",
      control: { type: "radio" },
      options: ["positioned", "static"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown.Trigger>;

export const Default: Story = {
  render: () => (
    <Dropdown.Trigger
      strategy="click"
      onAction={(key) => alert(key)}
      triggerElement={<button>Click to Open</button>}
    >
      <Dropdown.Item key="adobe">Adobe</Dropdown.Item>
      <Dropdown.Item key="apple">Apple</Dropdown.Item>
      <Dropdown.Item key="google">Google</Dropdown.Item>
      <Dropdown.Item key="microsoft">Microsoft</Dropdown.Item>
    </Dropdown.Trigger>
  ),
};

export const Sections: Story = {
  render: () => (
    <Dropdown.Trigger
      offset={20}
      strategy="click"
      onAction={(key) => alert(key)}
      triggerElement={<button type="button">Click to Open</button>}
      dropdownWrapper={(wrapperProps) => (
        <Grid gap={16} cols={2}>
          {wrapperProps.children}
        </Grid>
      )}
    >
      <Dropdown.Section title="Styles">
        <Dropdown.Item key="bold">Bold</Dropdown.Item>
        <Dropdown.Item key="underline">Underline</Dropdown.Item>
      </Dropdown.Section>
      <Dropdown.Section title="Align">
        <Dropdown.Item key="left">Left</Dropdown.Item>
        <Dropdown.Item key="middle">Middle</Dropdown.Item>
        <Dropdown.Item key="right">Right</Dropdown.Item>
      </Dropdown.Section>
    </Dropdown.Trigger>
  ),
};

export const HoverStrategy: Story = {
  render: () => (
    <Dropdown.Trigger
      strategy="hover"
      onAction={(key) => alert(key)}
      triggerElement={<div>Hover to see</div>}
      dropdownWrapper={(wrapperProps) => (
        <Grid gap={32} cols={2}>
          {wrapperProps.children}
        </Grid>
      )}
    >
      <Dropdown.Section title="Styles">
        <Dropdown.Item key="italic">Italic</Dropdown.Item>
        <Dropdown.Item key="strike">Strikethrough</Dropdown.Item>
      </Dropdown.Section>
      <Dropdown.Section title="Alignment">
        <Dropdown.Item key="justify">Justify</Dropdown.Item>
        <Dropdown.Item key="left">Left</Dropdown.Item>
        <Dropdown.Item key="right">Right</Dropdown.Item>
      </Dropdown.Section>
    </Dropdown.Trigger>
  ),
};

export const DynamicItems: Story = {
  render: () => {
    const openWindows = [
      {
        name: "Left Panel",
        id: "left",
        children: [{ id: 1, name: "Final Copy (1)" }],
      },
      {
        name: "Right Panel",
        id: "right",
        children: [
          { id: 2, name: "index.ts" },
          { id: 3, name: "package.json" },
          { id: 4, name: "license.txt" },
        ],
      },
    ];

    return (
      <Dropdown.Trigger
        strategy="hover"
        onAction={(key) => alert(key)}
        triggerElement={<div>Click me</div>}
        items={openWindows}
        dropdownWrapper={(wrapperProps) => (
          <Grid gap={8} cols={2}>
            {wrapperProps.children}
          </Grid>
        )}
      >
        {(item) => (
          <Dropdown.Section items={item.children} title={item.name}>
            {(sectionItem) => <Dropdown.Item>{sectionItem.name}</Dropdown.Item>}
          </Dropdown.Section>
        )}
      </Dropdown.Trigger>
    );
  },
};

export const WithIcon: Story = {
  render: () => (
    <Dropdown.Trigger
      triggerElement={<div>Click to open</div>}
      onAction={alert}
      disabledKeys={["paste"]}
    >
      <Dropdown.Item key="copy">
        <Flex align="center" gap={16}>
          <UserCircle viewBox="0 0 32 32" className="w-6 h-6" />
          <div>Cope</div>
        </Flex>
      </Dropdown.Item>
      <Dropdown.Item key="cut">
        <Flex align="center" gap={16}>
          <UserCircle viewBox="0 0 32 32" className="w-6 h-6" />
          <div>Cut</div>
        </Flex>
      </Dropdown.Item>
      <Dropdown.Item key="paste">
        <Flex align="center" gap={16}>
          <UserCircle viewBox="0 0 32 32" className="w-6 h-6" />
          <div>Paste</div>
        </Flex>
      </Dropdown.Item>
    </Dropdown.Trigger>
  ),
};

export const LinkItems: Story = {
  render: () => (
    <Dropdown.Trigger triggerElement={<button>Click to open</button>}>
      <Dropdown.Item href="https://adobe.com/" target="_blank">
        Adobe
      </Dropdown.Item>
      <Dropdown.Item href="https://apple.com/" target="_blank">
        Apple
      </Dropdown.Item>
      <Dropdown.Item href="https://google.com/" target="_blank">
        Google
      </Dropdown.Item>
      <Dropdown.Item href="https://microsoft.com/" target="_blank">
        Microsoft
      </Dropdown.Item>
    </Dropdown.Trigger>
  ),
};

export const CustomWrapper: Story = {
  render: () => (
    <Dropdown.Trigger
      strategy="hover"
      onAction={(key) => alert(key)}
      triggerElement={<div>Hover to see</div>}
      dropdownWrapper={(wrapperProps) => (
        <Grid gap={8} cols={2}>
          {wrapperProps.children}
        </Grid>
      )}
    >
      <Dropdown.Section title="Styles">
        <Dropdown.Item key="italic">Italic</Dropdown.Item>
        <Dropdown.Item key="strike">Strikethrough</Dropdown.Item>
      </Dropdown.Section>
      <Dropdown.Section title="Alignment">
        <Dropdown.Item key="justify">Justify</Dropdown.Item>
        <Dropdown.Item key="left">Left</Dropdown.Item>
        <Dropdown.Item key="right">Right</Dropdown.Item>
      </Dropdown.Section>
    </Dropdown.Trigger>
  ),
};

export const CustomOffset: Story = {
  render: () => (
    <Dropdown.Trigger
      strategy="hover"
      offset={30}
      onAction={(key) => alert(key)}
      triggerElement={<div>Hover to see</div>}
    >
      <Dropdown.Section title="Alignment">
        <Dropdown.Item key="justify">Justify</Dropdown.Item>
        <Dropdown.Item key="left">Left</Dropdown.Item>
        <Dropdown.Item key="right">Right</Dropdown.Item>
      </Dropdown.Section>
    </Dropdown.Trigger>
  ),
};
export const alwaysRenderMenu: Story = {
  render: () => (
    <Dropdown.Trigger
      alwaysRenderMenu={true}
      strategy="hover"
      offset={30}
      onAction={(key) => alert(key)}
      triggerElement={<div>Hover to see</div>}
    >
      <Dropdown.Section title="Alignment">
        <Dropdown.Item key="season-quests">
          <a href="https://site-jack.jack-flush.com/en/promotions/season-quests/">
            <Typography color="text-selection">season-quests</Typography>
          </a>
        </Dropdown.Item>
        <Dropdown.Item key="match-bonus">
          <a href="https://site-jack.jack-flush.com/en/promotions/match-bonus/">
            <Typography color="text-selection">match-bonus</Typography>
          </a>
        </Dropdown.Item>
        <Dropdown.Item key="bad-beat-jackpot">
          <a href="https://site-jack.jack-flush.com/en/promotions/bad-beat-jackpot/">
            <Typography color="text-selection">bad-beat-jackpot</Typography>
          </a>
        </Dropdown.Item>
      </Dropdown.Section>
    </Dropdown.Trigger>
  ),
};
