import { useOption } from "@react-aria/listbox";
import type { ReactNode } from "react";
import { useRef } from "react";
import type { ListState, Node } from "react-stately";

import { Box, Typography } from "~/components";

export type SelectOptionProps<T> = {
  item: Node<T>;
  state: ListState<T>;
};

export const SelectOption = function <T>({
  item,
  state,
}: SelectOptionProps<T>): ReactNode {
  const ref = useRef(null);
  const { optionProps, isDisabled } = useOption({ key: item.key }, state, ref);

  return (
    <Box
      as={"li"}
      ref={ref}
      bg={isDisabled ? "surface-neutral-subtle" : "background-transparent"}
      className={`cursor-pointer outline-none`}
      {...optionProps}
      style={{ padding: 10 }}
      onClick={() => state.selectionManager.toggleSelection(item.key)}
    >
      <Typography color="text-primary-default">{item.rendered}</Typography>
    </Box>
  );
};
