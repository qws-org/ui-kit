import { useOption } from "@react-aria/listbox";
import type { ReactNode } from "react";
import { useRef } from "react";
import type { ListState, Node } from "react-stately";

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
    <li
      {...optionProps}
      ref={ref}
      style={{ padding: 10 }}
      className={`cursor-pointer  outline-none  ${isDisabled ? "bg-[var(--colors-surface-neutral-subtle)]" : "bg-[var(--colors-background-transparent)]"}`}
    >
      {item.rendered}
    </li>
  );
};
