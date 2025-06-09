import type { Meta, StoryObj } from "@storybook/react";

import { StripeWrapper } from "./StripeWrapper";

const meta: Meta<typeof StripeWrapper> = {
  title: "UI-Kit Layout/StripeWrapper",
  component: StripeWrapper,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Обёртка с градиентной подложкой для разделов. В зависимости от `variant` меняется фон и наложения текстур. Используется для декоративных блоков.",
      },
    },
  },
  args: {
    variant: "default",
  },
};

export default meta;
type Story = StoryObj<typeof StripeWrapper>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: "40px", color: "#fff", fontSize: "18px" }}>
        Это пример содержимого внутри StripeWrapper с вариантом `default`.
      </div>
    ),
  },
};
