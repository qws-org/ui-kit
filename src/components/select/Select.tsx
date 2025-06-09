import { HiddenSelect, useSelect } from "@react-aria/select";
import type { ReactNode } from "react";
import { useRef } from "react";
import { Item, useSelectState } from "react-stately";

import {
  Button,
  type UIKitDimensionProps,
  type UIKitIndentationsProps,
} from "~/components";
import { Flex } from "~/components/flex/Flex";
import { Popover } from "~/components/popover/Popover";
import { SelectOptionList } from "~/components/select/SelectOptionList";
import { ArrowDown } from "~/icons";

type Elem = string | number | Record<string, unknown>;

export type SelectProps<Value extends Elem> = {
  value?: Value;
  onChange: (value: Value) => void;
  getOptionLabel?: (value: Value) => string | ReactNode;
  items: Array<Value>;
  emptyText?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
} & Partial<UIKitDimensionProps> &
  Partial<UIKitIndentationsProps>;

export const Select = function <T extends Elem>(
  props: SelectProps<T>,
): ReactNode {
  let items: Array<T> = props.items;

  const isElementary =
    typeof items[0] === "string" || typeof items[0] === "number";
  if (isElementary) {
    items = items.map((item) => ({ id: item })) as unknown as Array<T>;
  }

  const onSelectionChange = (key: string | number): void => {
    const value: T = JSON.parse(String(key));
    props.onChange(value);
  };
  const opts = {
    ...props,
    items,
    onSelectionChange,
    children: (item: T) => {
      const value = isElementary
        ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          item.id
        : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          (props.getOptionLabel?.(item) ?? String(item.name));

      return <Item key={JSON.stringify(item)}>{String(value)}</Item>;
    },
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const state = useSelectState(opts);

  const ref = useRef(null);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const { triggerProps, menuProps } = useSelect(opts, state, ref);

  return (
    <>
      <HiddenSelect
        isDisabled={props.disabled}
        state={state}
        triggerRef={ref}
        label={props.emptyText}
        name={props.name}
      />
      <Button
        className={`${props.className}`}
        size="small"
        variant="secondary"
        {...triggerProps}
        ref={ref}
        p={{ px: 12, py: 10 }}
        minWidth={props.minWidth}
        maxWidth={props.maxWidth}
        onPress={() => {
          if (!state.isOpen) {
            state.toggle();
          }
        }}
      >
        <Flex width="100%" gap={10} align="center" justify="space-between">
          {state.selectedItem
            ? state.selectedItem.rendered
            : (props.emptyText ?? "Select an option")}
          <ArrowDown width="12" height="8" viewBox="0 0 12 8" />
        </Flex>
      </Button>
      {state.isOpen && (
        <Popover
          state={state}
          triggerRef={ref}
          placement="bottom start"
          variant="static"
        >
          <SelectOptionList minWidth={162} {...menuProps} state={state} />
        </Popover>
      )}
    </>
  );
};
