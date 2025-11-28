import type { FC, ReactNode } from "react";
import { Overlay } from "react-aria";

import type { BoxProps } from "~/components";
import { Box } from "~/components";

type UIKitOverlayProps = {
  children: ReactNode;
} & BoxProps;

export const UIKitOverlay: FC<UIKitOverlayProps> = ({ children, ...props }) => {
  return (
    <Overlay>
      <Box {...props} data-ui-kit="ui-kit">
        {children}
      </Box>
    </Overlay>
  );
};
