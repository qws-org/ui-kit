import type { FC, ReactNode } from "react";
import React, { useRef } from "react";
import type { AriaModalOverlayProps } from "react-aria";
import { FocusScope, useModalOverlay } from "react-aria";
import type { OverlayTriggerState } from "react-stately";

import type { BoxProps, FlexProps, UIKitArrayIndentation } from "~/components";
import { Box, Button, Flex } from "~/components";
import type { ModalTriggerProps } from "~/components/modal/ModalTrigger";
import ModalTrigger from "~/components/modal/ModalTrigger";
import { UIKitOverlay } from "~/components/ui-kit-overlay";
import { Close } from "~/icons";

export type ModalProps = AriaModalOverlayProps & {
  state: OverlayTriggerState;
  children: ReactNode;
  closeButtonSlot?: (close: () => void) => ReactNode;
  overlayBackground?: string;
  overlayBlur?: string | number;
  contentWrapperProps?: FlexProps;
} & Partial<BoxProps>;

const DEFAULT_SPACING_PADDING: UIKitArrayIndentation = [52, 16, 16, 16];
const MD_DEFAULT_SPACING_PADDING: UIKitArrayIndentation = [36, 16, 16, 16];
export const Modal: FC<ModalProps> & { Trigger: FC<ModalTriggerProps> } = ({
  state,
  children,
  closeButtonSlot,
  overlayBackground = "background-transparent",
  overlayBlur = 4,
  md,
  contentWrapperProps,
  ...props
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { modalProps, underlayProps } = useModalOverlay(props, state, ref);

  return (
    <UIKitOverlay>
      <FocusScope contain autoFocus>
        <Flex
          {...underlayProps}
          style={{ ...underlayProps.style }}
          align="center"
          justify="center"
          bg={overlayBackground}
          backdropBlur={overlayBlur}
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
            p={props.p ?? DEFAULT_SPACING_PADDING}
            md={{ p: md?.p ?? MD_DEFAULT_SPACING_PADDING, ...md }}
            className="overflow-auto"
            {...props}
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
            <Flex
              justify="center"
              align="center"
              height="100%"
              {...contentWrapperProps}
            >
              {children}
            </Flex>
          </Box>
        </Flex>
      </FocusScope>
    </UIKitOverlay>
  );
};

Modal.Trigger = ModalTrigger;
