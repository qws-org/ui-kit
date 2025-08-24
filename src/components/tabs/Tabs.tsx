import { useTabList } from "@react-aria/tabs";
import type { TabListStateOptions } from "@react-stately/tabs";
import { useTabListState } from "@react-stately/tabs";
import type { ReactNode } from "react";
import { useRef } from "react";
import { Item } from "react-stately";

import type { BoxProps, FlexProps } from "~/components";
import { Box, Flex } from "~/components";

import { Panel } from "./components/Pannel";
import { Tab } from "./components/Tab";

export type TabProps<T extends string | number> = Omit<
  TabListStateOptions<object> & BoxProps,
  "as" | "items" | "selectedItem" | "onSelectionChange" | "selectedKey"
> & {
  selectedKey?: T;
  onSelectionChange?: (selectedItem: T) => void;
  tabListProps?: FlexProps;
  tabPanelProps?: FlexProps;
};
export const Tabs = function <T extends string | number>(
  props: TabProps<T>,
): ReactNode {
  // eslint-disable-next-line
  // @ts-expect-error
  const state = useTabListState<unknown>(props);
  const ref = useRef(null);
  // eslint-disable-next-line
  // @ts-expect-error
  const { tabListProps } = useTabList(props, state, ref);
  return (
    <Box {...props} width={props?.width ?? "100%"}>
      <Flex
        {...tabListProps}
        {...props.tabListProps}
        style={{
          ...tabListProps.style,
        }}
        justify={props.tabListProps?.justify ?? "center"}
        className={props?.tabListProps?.className ?? "overflow-x-auto"}
        ref={ref}
        p={props?.tabListProps?.p ?? 4}
        gap={props?.tabListProps?.gap ?? 6}
      >
        {[...state.collection].map((item) => (
          <Tab key={item.key} item={item} state={state} />
        ))}
      </Flex>
      <Panel
        key={state.selectedItem?.key}
        state={state}
        {...props.tabPanelProps}
      />
    </Box>
  );
};

Tabs.Item = Item;
