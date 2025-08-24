import { type AriaModalOverlayProps, useOverlayTrigger } from "react-aria";
import type { FC, ReactElement, ReactNode } from "react";
import React from "react";
import type { OverlayTriggerProps } from "react-stately";
import { useOverlayTriggerState } from "react-stately";

import type { ButtonProps } from "~/components";
import { Button } from "~/components";

import { Modal } from "./Modal";

export interface ModalTriggerProps
  extends OverlayTriggerProps,
    Omit<ButtonProps<"button">, "children">,
    AriaModalOverlayProps {
  label: string;
  children: (close: () => void) => ReactElement;
  closeButtonSlot?: (close: () => void) => ReactNode;
}

export const ModalTrigger: FC<ModalTriggerProps> = ({
  label,
  children,
  ...props
}) => {
  const state = useOverlayTriggerState(props);
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    state,
  );

  return (
    <>
      <Button
        {...props}
        {...triggerProps}
        onPress={(e) => {
          props?.onPress?.(e);
          triggerProps?.onPress?.(e);
        }}
      >
        {label}
      </Button>
      {state.isOpen && (
        <Modal {...props} state={state}>
          {React.cloneElement(
            children(() => state.close()),
            overlayProps,
          )}
        </Modal>
      )}
    </>
  );
};

export default ModalTrigger;
