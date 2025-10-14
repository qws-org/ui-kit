import type { FC, ReactNode } from "react";
import { useRef } from "react";
import type { AriaPopoverProps } from "react-aria";
import { DismissButton, Overlay, usePopover } from "react-aria";
import type { OverlayTriggerState } from "react-stately";

import type { UiKitBackgroundProps } from "~/components";
import { Box } from "~/components";

export interface PopoverProps
  extends Omit<AriaPopoverProps, "popoverRef">,
    Omit<UiKitBackgroundProps, "groupParent" | "bgGroup"> {
  children: ReactNode;
  state: OverlayTriggerState;
  offset?: number;
  crossOffset?: number;
  variant?: "positioned" | "static";
}

export const Popover: FC<PopoverProps> = ({
  children,
  state,
  variant = "positioned",
  ...props
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const { popoverProps, underlayProps } = usePopover(
    { ...props, popoverRef },
    state,
  );

  if (variant === "static") {
    return (
      <div {...underlayProps}>
        <Box
          {...props}
          ref={popoverRef}
          bg={props.bg ?? "background-transparent"}
          border={{ radius: "8px" }}
          className={`transition-all duration-300 ease-in-out ${
            state.isOpen ? " visible" : "invisible"
          }`}
          opacity={state.isOpen ? 100 : 0}
        >
          <DismissButton onDismiss={() => state.close()} />
          {children}
          <DismissButton onDismiss={() => state.close()} />
        </Box>
      </div>
    );
  } else {
    return (
      <div data-ui-kit={"ui-kit"}>
        <Overlay>
          <div {...underlayProps} />
          <Box
            data-ui-kit={"ui-kit"}
            {...popoverProps}
            {...props}
            ref={popoverRef}
            style={{
              ...popoverProps.style,
            }}
            bg={props.bg ?? "background-transparent"}
            border={{ radius: "8px" }}
          >
            <DismissButton onDismiss={() => state.close()} />
            {children}
            <DismissButton onDismiss={() => state.close()} />
          </Box>
        </Overlay>
      </div>
    );
  }
};
