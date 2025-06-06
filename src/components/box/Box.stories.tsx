import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import type { UIKitIndentations } from "~/components";
import { Flex } from "~/components";

import { Box } from "./Box";

const meta: Meta<typeof Box> = {
  title: "UI-Kit layout/Box",
  component: Box,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Компонент `Box` — это универсальный контейнер для построения макетов с использованием возможностей CSS Box.",
      },
    },
  },
  argTypes: {
    className: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    p: { py: 64, px: 96 },
    children: (
      <Flex
        width={350}
        height={200}
        textOverflow={"ellipsis"}
        p={10}
        verticalAlign="bottom"
        textTransform={"uppercase"}
        textDecoration={"underline"}
        color={"text-primary-inverted"}
        horizontalAlign={"right"}
      >
        Так я начал ходить в воду. Я не буду лгать вам, мальчики, я был в ужасе.
        Но я шел дальше, и когда я пробирался мимо прибоя, на меня снизошло
        странное спокойствие. Я не знаю, было ли это божественным вмешательством
        или родством всех живых существ, но скажу тебе, Джерри, что в тот момент
        я был морским биологом.
      </Flex>
    ),
  },
};

export const WithCustomClass: Story = {
  args: {
    className: "bg-green-100 p-4",
    children: <div className="bg-green-300 p-4">Custom Item</div>,
  },
};
export const DynamicMargin: Story = {
  args: {
    className: "bg-green-100",
  },
  render: (args) => {
    const [margin, setMargin] = useState<UIKitIndentations>(32);
    const increment = (): void => {
      setMargin((prev) => prev + 12);
    };

    return (
      <>
        <Box {...args} m={margin} d={{ m: { mr: 10 } }}>
          {margin}
        </Box>

        <button onClick={increment}>Increase margin +</button>
      </>
    );
  },
};

export const Positioning: Story = {
  args: {
    className: "bg-green-100 p-4",
  },
  render: (args) => {
    const [top, setTop] = useState<number | string>(0);
    const increment = (): void => {
      setTop((prev) => (typeof prev === "string" ? 0 : prev + 12));
    };

    return (
      <Flex
        align={"end"}
        position={{ type: "relative" }}
        className={"w-full h-[200px]"}
      >
        <Box
          {...args}
          position={{ type: "absolute", top, left: top }}
          md={{
            position: {
              top: 0,
              left: 0,
            },
          }}
          p={{ px: 200 }}
          className={"bg-amber-400 px-4"}
        >
          top value: {top}
        </Box>

        <button className={"mt-auto"} onClick={increment}>
          Increase margin +
        </button>
      </Flex>
    );
  },
};
export const Dimension: Story = {
  render: () => {
    return (
      <Box
        p={{ px: 200 }}
        bg={"background-primary"}
        width={444}
        height={222}
        className={"bg-amber-400 "}
        md={{ width: 441 }}
        d={{ width: 441 }}
      >
        content
      </Box>
    );
  },
};

export const Background: Story = {
  args: {
    bg: "surface-accent2-default",
    hover: { bg: "surface-accent2-hovered" },
    className: "h-[200px]",
    bgRepeat: "no-repeat",
    bgSize: "cover",
    md: {
      bg: "linear-gradient(to right, #ff7e5f, #feb47b)",
      hover: { bg: "surface-accent1-hovered" },
      bgSize: "600",
    },
    d: {
      bg: "surface-accent1-default",
      hover: { bg: "surface-accent2-hovered" },
      bgSize: "40rem",
    },
  },
};

export const BackgroundHover: Story = {
  args: {
    bg: "/main-page-bg-mobile.jpg",
    className: "h-[200px]",
    bgRepeat: "no-repeat",
    bgSize: "auto",
    hover: {
      bg: "#ccc",
    },
    md: {
      bg: "#ccc",
      hover: {
        bg: "/main-page-bg-mobile.jpg",
        bgRepeat: "repeat-x",
      },
    },
  },
};

export const BackgroundHoverGroup: Story = {
  args: {
    bg: "/main-page-bg-mobile.jpg",
    className: "h-[100px] w-[100px]",
    bgRepeat: "no-repeat",
    hover: {
      bgGroup: "#ccc",
    },
    md: {
      bg: "#ccc",
      hover: {
        bgGroup: "linear-gradient(to right, #ff7e5f, #feb47b)",
      },
    },
  },
  render(args) {
    return (
      <Flex
        groupParent
        className={"w-[500px] h-500px border-2 border-cyan-300"}
        align={"center"}
        justify={"center"}
        p={50}
      >
        <Box {...args} />
      </Flex>
    );
  },
};

export const borderColor: Story = {
  args: {
    children: "Border color",
    hover: {
      border: {
        color: "border-destructive",
      },
    },
    md: {
      hover: {
        border: {
          color: {
            top: "border-primary",
          },
        },
      },
    },
    d: {
      hover: {
        border: {
          color: {
            bottom: "border-accent",
          },
        },
      },
    },
  },
};

export const BorderRadius: Story = {
  args: {
    children: "Border radius",
    p: 10,
    border: {
      radius: "15px",
      width: "1px",
      style: "double",
      color: "#fff",
    },
    hover: {
      border: {
        radius: {
          topLeft: "5px",
          bottomRight: "5px",
        },
      },
    },
  },
};

export const shadows: Story = {
  args: {
    children: "Shadow color",
    color: "#000",
    boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
    hover: {
      boxShadow: "none",
    },
  },
  render(args) {
    return (
      <Box bg={"#fff"} p={20}>
        <Box {...args} />
      </Box>
    );
  },
};

export const opacity: Story = {
  args: {
    children: "Shadow color",
    p: 20,
    bg: "#e80505",
    opacity: 1,
    hover: {
      opacity: 0.3,
    },
  },
  render(args) {
    return <Box {...args}></Box>;
  },
};
