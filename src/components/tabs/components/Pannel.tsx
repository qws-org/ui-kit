import { useTabPanel } from "@react-aria/tabs";
import type { TabListState } from "react-stately";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import type { FlexProps } from "~/components";
import { Flex } from "~/components";

export function Panel({
  state,
  ...rest
}: { state: TabListState<unknown> } & FlexProps): ReactNode {
  const ref = useRef(null);
  const { tabPanelProps } = useTabPanel({}, state, ref);

  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setVisible(true);
  }, [setVisible]);

  return (
    <Flex
      {...tabPanelProps}
      {...rest}
      style={{
        ...tabPanelProps.style,
        ...rest.style,
      }}
      ref={ref}
      className={`w-full transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {state.selectedItem?.props.children}
    </Flex>
  );
}
