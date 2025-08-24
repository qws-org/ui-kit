import type { ForwardedRef, ReactNode } from "react";
import { forwardRef, useRef } from "react";
import type { AriaListBoxOptions } from "react-aria";
import { useListBox } from "react-aria";
import type { ListState } from "react-stately";

import { SelectOption } from "~/components/select/SelectOption";

export type SelectOptionListProps<T> = AriaListBoxOptions<T> & {
  state: ListState<T>;
  className?: string;
  minWidth?: number;
  maxWidth?: number;
};

export const SelectOptionList = forwardRef(function <T>(
  props: SelectOptionListProps<T>,
  ref: ForwardedRef<HTMLUListElement>,
): ReactNode {
  const localRef = useRef<HTMLUListElement>(null);
  const listBoxRef = ref ?? localRef;

  const { state, minWidth = "auto", maxWidth = "auto" } = props;
  const { listBoxProps } = useListBox(
    props,
    state,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    listBoxRef,
  );

  return (
    <ul
      {...listBoxProps}
      ref={listBoxRef}
      style={{ width: "100%", padding: 0, margin: 0, minWidth, maxWidth }}
      className={`bg-[var(--colors-background-transparent)] rounded overflow-hidden ${props.className}`}
    >
      {[...state.collection].map((item) => (
        <SelectOption key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
});
