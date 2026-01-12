import React, { type ReactElement, useRef } from "react";
import type { Placement } from "react-aria";
import { useOverlayTrigger } from "react-aria";
import type { OverlayTriggerProps, OverlayTriggerState } from "react-stately";
import { useOverlayTriggerState } from "react-stately";

import { Button } from "~/components";

import { Popover } from "./Popover";

export interface PopoverTriggerProps extends OverlayTriggerProps {
  label: string;
  children: ReactElement;
  customTrigger?: ReactElement;
  customPopover?: (
    ref: React.RefObject<null>,
    state: OverlayTriggerState,
  ) => ReactElement;
  offset?: number;
  crossOffset?: number;
  placement?: Placement;
  portalContainer?: Element;
}

export const PopoverTrigger: React.FC<PopoverTriggerProps> = ({
  placement = "bottom",
  label,
  children,
  customTrigger,
  customPopover,
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
      {state.isOpen &&
        (customPopover ? (
          React.cloneElement(customPopover(ref, state), {
            children: React.cloneElement(children, overlayProps),
          })
        ) : (
          <Popover
            triggerRef={ref}
            state={state}
            placement={placement}
            {...props}
          >
            {React.cloneElement(children, overlayProps)}
          </Popover>
        ))}
    </>
  );
};
