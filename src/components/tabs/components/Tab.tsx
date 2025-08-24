import type { TabListState } from "@react-stately/tabs";
import type { ReactNode } from "react";
import { useRef } from "react";
import { useTab } from "react-aria";
import type { Node } from "react-stately";

export type TabProps<T> = {
  item: Node<T>;
  state: TabListState<T>;
};

export const Tab = function <T>({ item, state }: TabProps<T>): ReactNode {
  const { key, rendered } = item;
  const ref = useRef(null);
  const { tabProps } = useTab({ key }, state, ref);

  return (
    <div {...tabProps} ref={ref} className={"cursor-pointer"}>
      {rendered}
    </div>
  );
};
