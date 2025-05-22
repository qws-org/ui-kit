import type { AriaPopoverProps } from "@react-aria/overlays";
import { DismissButton, Overlay, usePopover } from "@react-aria/overlays";
import type { FC, ReactNode } from "react";
import { useRef } from "react";
import type { OverlayTriggerState } from "react-stately";

export interface PopoverProps extends Omit<AriaPopoverProps, "popoverRef"> {
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
        <div
          ref={popoverRef}
          className={`bg-dark-overlay rounded-lg transition-all duration-300 ease-in-out ${
            state.isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <DismissButton onDismiss={() => state.close()} />
          {children}
          <DismissButton onDismiss={() => state.close()} />
        </div>
      </div>
    );
  } else {
    return (
      <Overlay>
        <div {...underlayProps} />
        <div
          {...popoverProps}
          ref={popoverRef}
          style={{
            ...popoverProps.style,
          }}
          className="bg-dark-overlay rounded-lg"
        >
          <DismissButton onDismiss={() => state.close()} />
          {children}
          <DismissButton onDismiss={() => state.close()} />
        </div>
      </Overlay>
    );
  }
};
