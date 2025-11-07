import React, { type ReactElement, useRef } from "react";
import type { Placement } from "react-aria";
import { useOverlayTrigger } from "react-aria";
import type { OverlayTriggerProps } from "react-stately";
import { useOverlayTriggerState } from "react-stately";

import { Button } from "~/components";

import { Popover, type PopoverProps } from "./Popover";

export interface PopoverTriggerProps extends OverlayTriggerProps {
  label: string;
  children: ReactElement;
  customTrigger?: ReactElement;
  offset?: number;
  crossOffset?: number;
  placement?: Placement;
  popoverProps?: Omit<PopoverProps, "triggerRef" | "state" | "children">;
}

export const PopoverTrigger: React.FC<PopoverTriggerProps> = ({
  placement = "bottom",
  label,
  children,
  customTrigger,
  popoverProps,
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
      {customTrigger ? (
        React.cloneElement(customTrigger, {
          ref,
          ...triggerProps,
          onClick: triggerProps.onPress,
        })
      ) : (
        <Button ref={ref} {...triggerProps}>
          {label}
        </Button>
      )}
      {state.isOpen && (
        <Popover
          triggerRef={ref}
          state={state}
          placement={placement}
          {...props}
          {...popoverProps}
        >
          {React.cloneElement(children, overlayProps)}
        </Popover>
      )}
    </>
  );
};
