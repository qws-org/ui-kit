import { FocusScope } from "@react-aria/focus";
import type { AriaModalOverlayProps } from "@react-aria/overlays";
import { Overlay, useModalOverlay } from "@react-aria/overlays";
import type { FC, ReactNode } from "react";
import React, { useRef } from "react";
import type { OverlayTriggerState } from "react-stately";

import { Box, Button, Flex } from "~/components";
import type { ModalTriggerProps } from "~/components/modal/ModalTrigger";
import ModalTrigger from "~/components/modal/ModalTrigger";
import { Close } from "~/icons";

export type ModalProps = AriaModalOverlayProps & {
  state: OverlayTriggerState;
  children: ReactNode;
  closeButtonSlot?: (close: () => void) => ReactNode;
};

export const Modal: FC<ModalProps> & { Trigger: FC<ModalTriggerProps> } = ({
  state,
  children,
  closeButtonSlot,
  ...props
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { modalProps, underlayProps } = useModalOverlay(props, state, ref);

  return (
    <Overlay>
      <FocusScope contain autoFocus>
        <Flex
          {...underlayProps}
          style={{ ...underlayProps.style }}
          align="center"
          justify="center"
          bg="background-secondary"
          position={{
            type: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 50,
          }}
        >
          <Box
            {...modalProps}
            style={{ ...underlayProps.style }}
            ref={ref}
            position={{ type: "relative" }}
            width="100%"
            height="100vh"
            p={{ pt: 52, pb: 16, pr: 16, pl: 16 }}
            md={{ p: { pt: 36 } }}
            className="overflow-auto"
          >
            {props.isDismissable &&
              (closeButtonSlot ? (
                closeButtonSlot?.(() => state.close())
              ) : (
                <Button
                  onPress={() => state.close()}
                  autoFocus
                  variant="transparent"
                  border={{ width: "0" }}
                  position={{
                    type: "absolute",
                    top: 14,
                    right: 16,
                  }}
                  md={{ position: { top: 36, right: 40 } }}
                >
                  <Close
                    viewBox="0 0 32 32"
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                </Button>
              ))}
            <Flex justify="center" align="center" height="100%">
              {children}
            </Flex>
          </Box>
        </Flex>
      </FocusScope>
    </Overlay>
  );
};

Modal.Trigger = ModalTrigger;
