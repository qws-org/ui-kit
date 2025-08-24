import React, { type ReactElement, useRef } from "react";
import type { Placement } from "react-aria";
import { useOverlayTrigger } from "react-aria";
import type { OverlayTriggerProps } from "react-stately";
import { useOverlayTriggerState } from "react-stately";

import { Button } from "~/components";

import { Popover } from "./Popover";

export interface PopoverTriggerProps extends OverlayTriggerProps {
  label: string;
  children: ReactElement;
  offset?: number;
  crossOffset?: number;
  placement?: Placement;
}

export const PopoverTrigger: React.FC<PopoverTriggerProps> = ({
  placement = "bottom",
  label,
  children,
  ...props
}) => {
  const ref = useRef(null);
  const state = useOverlayTriggerState(props);
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    state,
  );

  return (
    <>
      <Button ref={ref} {...triggerProps}>
        {label}
      </Button>
      {state.isOpen && (
        <Popover
          triggerRef={ref}
          state={state}
          placement={placement}
          {...props}
        >
          {React.cloneElement(children, overlayProps)}
        </Popover>
      )}
    </>
  );
};
