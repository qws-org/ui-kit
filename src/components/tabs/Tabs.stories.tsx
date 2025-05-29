import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Box, Button, Container } from "~/components";

import { Tabs } from "./Tabs";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI-Kit components/Tabs",
  component: Tabs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  decorators: [
    (Story) => {
      return (
        <Container className={"w-[700px]"}>
          <Story />
        </Container>
      );
    },
  ],
  args: {},
  render: () => {
    return (
      <Tabs aria-label="History of Ancient Rome">
        <Tabs.Item key="FoR" title="Tab 1">
          <Box p={10}>
            Senatus Populusque Romanus. asdasd 12132131231231231231 Arma
            virumque cano, Troiae qui primus ab oris. | Arma virumque cano,
            Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus
            ab oris. | Arma virumque cano, Troiae qui primus ab oris. | Arma
            virumque cano, Troiae qui primus ab oris. | Arma virumque cano,
            Troiae qui primus ab oris. |
          </Box>
        </Tabs.Item>
        <Tabs.Item key="MaR" title="Tab 2">
          <Box p={10}>Senatus Populusque Romanus. </Box>
        </Tabs.Item>
        <Tabs.Item key="Emp" title="Tab 3">
          <Box p={10}>
            Senatus Populusque Romanus. Arma virumque cano, Troiae qui primus ab
            oris. | Arma virumque cano, Troiae qui primus ab oris. |eeee Arma
            virumque cano, Troiae qui primus ab oris. | Arma virumque cano,
            Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus
            ab oris. |{" "}
          </Box>
        </Tabs.Item>
      </Tabs>
    );
  },
};

export const WithControlledState: Story = {
  ...Default,
  render() {
    const [state, setState] = useState<string>("MaR");

    return (
      <Tabs
        aria-label="History of Ancient Rome"
        selectedKey={state}
        tabPanelProps={{ p: 8 }}
        tabListProps={{
          m: { mb: 8 },
          p: 4,
        }}
      >
        <Tabs.Item
          key="FoR"
          title={
            <Button
              variant="secondary"
              size="xsmall"
              md={{
                fontSize: "button.desktop.small",
                lineHeight: "button.desktop.small",
                p: { px: 24, py: 8 },
              }}
              className={`rounded`}
              isActive={state === "FoR"}
              onPress={() => {
                setState("FoR");
              }}
            >
              Tab 1 state
            </Button>
          }
        >
          Senatus Populusque Romanus. asdasd 12132131231231231231 Arma virumque
          cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae qui
          primus ab oris. | Arma virumque cano, Troiae qui primus ab oris. |
          Arma virumque cano, Troiae qui primus ab oris. | Arma virumque cano,
          Troiae qui primus ab oris. | Arma virumque cano, Troiae qui primus ab
          oris. |
        </Tabs.Item>
        <Tabs.Item
          key="MaR"
          title={
            <Button
              variant="secondary"
              size="xsmall"
              className={`rounded`}
              isActive={state === "MaR"}
              md={{
                fontSize: "button.desktop.small",
                lineHeight: "button.desktop.small",
                p: { px: 24, py: 8 },
              }}
              onPress={() => {
                setState("MaR");
              }}
            >
              Tab 2 state
            </Button>
          }
        >
          Senatus Populusque Romanus. Troiae qui primus ab oris. | Arma virumque
          cano, Troiae qui primus ab oris. | Arma virumque cano, Troiae qui
          primus ab oris. | asdasdas asdasd 2121211 alskdmlaskdmlasknd asd |
          Arma virumque cano, Troiae qui primus ab oris. | asdasdas asdasd
          2121211 alskdmlaskdmlasknd asd a sdasdasdasdasds ss 2121211
          alskdmlaskdmlasknd asd a sdasdasdasdasds ss
        </Tabs.Item>
        <Tabs.Item
          key="Rak"
          title={
            <Button
              variant="secondary"
              isDisabled={true}
              size="xsmall"
              md={{
                fontSize: "button.desktop.small",
                lineHeight: "button.desktop.small",
                p: { px: 24, py: 8 },
              }}
              className={`rounded`}
            >
              Tab disabled
            </Button>
          }
        >
          Senatus Populusque Romanus.
        </Tabs.Item>
      </Tabs>
    );
  },
};
