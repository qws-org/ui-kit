import type { Meta, StoryObj } from "@storybook/react";

import { Grid } from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "UI-Kit layout/Grid",
  component: Grid,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Компонент `Grid` — это универсальный контейнер для построения макетов с использованием возможностей CSS Grid.",
      },
    },
  },
  argTypes: {
    cols: {
      control: { type: "number", min: 1, max: 12 },
      description: "Количество колонок для сетки",
    },
    gap: {
      control: { type: "number", min: 0, step: 4 },
      description: "Отступ между элементами",
    },
    p: {
      control: { type: "number", min: 0, step: 4 },
      description: "Внутренний отступ",
    },
    m: {
      control: { type: "number", min: 0, step: 4 },
      description: "Внешний отступ",
    },
    md: {
      control: { type: "object" },
      description: "Настройки для планшетных экранов (md)",
    },
    d: {
      control: { type: "object" },
      description: "Настройки для десктопных экранов (d)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const DefaultGrid: Story = {
  args: {
    cols: 12,
    gap: 18,
    p: 32,
    md: { m: 32, gap: 4, p: 40 },
    d: { m: 12, gap: 12, p: 96 },
  },
  render: (args) => (
    <Grid {...args}>
      <Grid.Item cSpan={3} className="bg-blue-500 p-4 text-white">
        Item 1
      </Grid.Item>
      <Grid.Item cSpan={3} className="bg-green-500 p-4 text-white">
        Item 2
      </Grid.Item>
    </Grid>
  ),
};

export const MixedColumnsGrid: Story = {
  args: {
    cols: 12,
    gap: 12,
    md: { cols: 6, gap: 16, p: { py: 64, px: 96 } },
    d: { cols: 4, gap: 24, p: { pl: 64, pt: 96 }, m: 64 },
    p: 32,
    m: 96,
  },
  render: (args) => (
    <Grid {...args}>
      <Grid.Item
        cSpan={3}
        md={{ cSpan: 2 }}
        d={{ cSpan: 1 }}
        className="bg-yellow-500 p-4 text-white"
      >
        3 Columns
      </Grid.Item>
      <Grid.Item
        cSpan={6}
        md={{ cSpan: 4 }}
        d={{ cSpan: 2 }}
        className="bg-purple-500 p-4 text-white"
      >
        6 Columns
      </Grid.Item>
      <Grid.Item
        cSpan={3}
        md={{ cSpan: 6 }}
        d={{ cSpan: 3 }}
        className="bg-orange-500 p-4 text-white"
      >
        3 Columns
      </Grid.Item>
    </Grid>
  ),
};

export const ResponsiveGridLayout: Story = {
  args: {
    cols: 2,
    gap: 16,
    md: { cols: 3, gap: 20 },
    d: { cols: 4, gap: 24 },
    p: 96,
    m: 32,
  },
  render: (args) => (
    <Grid {...args}>
      <Grid.Item
        cSpan={1}
        md={{ cSpan: 2 }}
        d={{ cSpan: 1 }}
        className="bg-blue-400 p-4 text-white"
      >
        Responsive Item 1
      </Grid.Item>
      <Grid.Item
        cSpan={1}
        md={{ cSpan: 1 }}
        d={{ cSpan: 3 }}
        className="bg-green-400 p-4 text-white"
      >
        Responsive Item 2
      </Grid.Item>
    </Grid>
  ),
};

export const FullWidthGrid: Story = {
  args: {
    cols: 12,
    gap: 8,
    md: { cols: 12, gap: 12 },
    d: { cols: 12, gap: 16 },
  },
  render: (args) => (
    <Grid {...args}>
      <Grid.Item cSpan={12} className="bg-indigo-500 p-4 text-white">
        Full Width Item 1
      </Grid.Item>
      <Grid.Item cSpan={12} className="bg-pink-500 p-4 text-white">
        Full Width Item 2
      </Grid.Item>
    </Grid>
  ),
};

export const GridWithRowSpans: Story = {
  args: {
    cols: 4,
    gap: 12,
    md: { cols: 6, gap: 16 },
    d: { cols: 8, gap: 24 },
  },
  render: (args) => (
    <Grid {...args}>
      <Grid.Item cSpan={2} rSpan={2} className="bg-red-500 p-4 text-white">
        Row Span 2
      </Grid.Item>
      <Grid.Item cSpan={1} rSpan={1} className="bg-blue-500 p-4 text-white">
        Row Span 1
      </Grid.Item>
      <Grid.Item cSpan={1} rSpan={1} className="bg-green-500 p-4 text-white">
        Row Span 1
      </Grid.Item>
    </Grid>
  ),
};

export const ComplexGridLayout: Story = {
  args: {
    cols: 12,
    gap: 16,
    md: { cols: 6, gap: 12 },
    d: { cols: 4, gap: 24 },
  },
  render: (args) => (
    <Grid {...args}>
      <Grid.Item
        cSpan={4}
        md={{ cSpan: 3 }}
        d={{ cSpan: 2 }}
        className="bg-purple-600 p-4 text-white"
      >
        Left Sidebar
      </Grid.Item>
      <Grid.Item
        cSpan={8}
        md={{ cSpan: 6 }}
        d={{ cSpan: 4 }}
        className="bg-yellow-600 p-4 text-white"
      >
        Main Content
      </Grid.Item>
      <Grid.Item cSpan={12} className="bg-teal-600 p-4 text-white">
        Full Width Footer
      </Grid.Item>
    </Grid>
  ),
};

export const AsymmetricGridLayout: Story = {
  args: {
    cols: 12,
    gap: 8,
    md: { cols: 6, gap: 12 },
    d: { cols: 4, gap: 16 },
  },
  render: (args) => (
    <Grid {...args}>
      <Grid.Item
        cSpan={2}
        md={{ cSpan: 2 }}
        d={{ cSpan: 1 }}
        className="bg-orange-500 p-4 text-white"
      >
        2 Columns
      </Grid.Item>
      <Grid.Item
        cSpan={5}
        md={{ cSpan: 3 }}
        d={{ cSpan: 2 }}
        className="bg-blue-500 p-4 text-white"
      >
        5 Columns
      </Grid.Item>
      <Grid.Item
        cSpan={5}
        md={{ cSpan: 3 }}
        d={{ cSpan: 2 }}
        className="bg-green-500 p-4 text-white"
      >
        5 Columns
      </Grid.Item>
    </Grid>
  ),
};
