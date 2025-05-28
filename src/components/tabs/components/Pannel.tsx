import { useTabPanel } from "@react-aria/tabs";
import type { TabListState } from "@react-stately/tabs";
import type { ReactNode } from "react";
import { useRef } from "react";

export function Panel({ state }: { state: TabListState<unknown> }): ReactNode {
  const ref = useRef(null);
  const { tabPanelProps } = useTabPanel({}, state, ref);
  return (
    <div {...tabPanelProps} ref={ref} className={"w-full"}>
      {state.selectedItem?.props.children}
    </div>
  );
}
