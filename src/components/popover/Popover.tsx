import type { FC, ReactNode } from "react";
import { useRef } from "react";
import type { AriaPopoverProps, Placement } from "react-aria";
import { DismissButton, Overlay, usePopover } from "react-aria";
import type { OverlayTriggerState } from "react-stately";

import type { UiKitBackgroundProps } from "~/components";
import { Box } from "~/components";
import { useMediaQuery } from "~/helpers/use-media-query";

export type PopoverDefaultProps = Omit<
  AriaPopoverProps,
  "popoverRef" | "placement"
> &
  Omit<UiKitBackgroundProps, "groupParent" | "bgGroup"> & {
    children?: ReactNode;
    state: OverlayTriggerState;
    offset?: number;
    crossOffset?: number;
    variant?: "positioned" | "static";
    placement?: Placement;
  };

export type PopoverProps = PopoverDefaultProps & {
  md?: Pick<PopoverDefaultProps, "placement">;
  d?: Pick<PopoverDefaultProps, "placement">;
};

export const Popover: FC<PopoverProps> = ({
  children,
  state,
  variant = "positioned",
  placement = "bottom",
  d,
  md,
  ...props
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const isMd = useMediaQuery("(min-width: 768px)", {
    defaultValue: false,
  });
  const isLg = useMediaQuery("(min-width: 1024px)", {
    defaultValue: false,
  });

  // If passed d and md will work depends on current window width
  // If passed only md but d is not defined - md will also be used instead of d
  const currentPlacement = isLg
    ? (d?.placement ?? md?.placement)
    : isMd
      ? md?.placement
      : placement;

  const { popoverProps, underlayProps } = usePopover(
    { ...props, popoverRef, placement: currentPlacement ?? placement },
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
      <Overlay>
        <div {...underlayProps} />
        <Box
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
    );
  }
};
