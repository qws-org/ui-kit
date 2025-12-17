import type { FC, ReactNode } from "react";
import { Overlay } from "react-aria";

import type { BoxProps } from "~/components";
import { Box } from "~/components";

type UIKitOverlayProps = {
  children: ReactNode;
  portalContainer?: Element;
} & BoxProps;

export const UIKitOverlay: FC<UIKitOverlayProps> = ({
  children,
  portalContainer,
  ...props
}) => {
  return (
    <Overlay portalContainer={portalContainer}>
      <Box {...props} data-ui-kit="ui-kit">
        {children}
      </Box>
    </Overlay>
  );
};
