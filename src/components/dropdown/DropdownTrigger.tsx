import type { AriaMenuProps } from "@react-aria/menu";
import { useMenuTrigger } from "@react-aria/menu";
import type { Placement } from "@react-aria/overlays";
import type { FC, ReactElement, ReactNode } from "react";
import React, { useRef } from "react";
import type { MenuTriggerProps } from "react-stately";
import { useMenuTriggerState } from "react-stately";

import type { UiKitBackgroundProps } from "~/components";
import { Box } from "~/components";

import { Popover } from "../popover/Popover";
import { Dropdown } from "./Dropdown";
import { DropdownTriggerElement } from "./DropdownTriggerElement";

export type CustomWrapper = FC<{ children: ReactNode }>;

export interface DropdownTriggerProps<T>
  extends AriaMenuProps<T>,
    Omit<UiKitBackgroundProps, "groupParent" | "bgGroup">,
    MenuTriggerProps {
  triggerElement: ReactElement;
  strategy?: "click" | "hover" | "mixed";
  placement?: Placement;
  dropdownWrapper?: CustomWrapper;
  offset?: number;
  variant?: "positioned" | "static";
  alwaysRenderMenu?: boolean;
}

export const DropdownTrigger = <T extends object>(
  props: DropdownTriggerProps<T>,
): ReactElement => {
  const state = useMenuTriggerState(props);

  const ref = useRef(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref);

  return (
    <>
      {/* решение для того чтобы краулер видел ссылки в triggerElement и Dropdown */}
      {props.alwaysRenderMenu && (
        <Box position={{ type: "absolute", left: "-9999px", top: "-9999px" }}>
          <>{props.triggerElement}</>
          <Dropdown wrapper={props.dropdownWrapper} {...props} {...menuProps} />
        </Box>
      )}

      <DropdownTriggerElement
        {...menuTriggerProps}
        strategy={props.strategy}
        triggerElement={props.triggerElement}
        ref={ref}
        state={state}
      >
        {state.isOpen && (
          <Popover
            {...props}
            state={state}
            triggerRef={ref}
            placement={props.placement ?? "bottom start"}
            offset={props.offset}
            variant={props.variant}
          >
            <Dropdown
              wrapper={props.dropdownWrapper}
              {...props}
              {...menuProps}
            />
          </Popover>
        )}
      </DropdownTriggerElement>
    </>
  );
};
