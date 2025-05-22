import type { AriaModalOverlayProps } from "@react-aria/overlays";
import { Overlay, useModalOverlay } from "@react-aria/overlays";
import type { FC, ReactNode } from "react";
import { useRef } from "react";
import type { OverlayTriggerState } from "react-stately";

import { Close } from "~/icons";

export type ModalProps = AriaModalOverlayProps & {
  state: OverlayTriggerState;
  children: ReactNode;
};

export const Modal: FC<ModalProps> = ({ state, children, ...props }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { modalProps, underlayProps } = useModalOverlay(props, state, ref);

  return (
    <Overlay>
      <div
        className="fixed inset-0 z-50 bg-[rgba(22,20,25,0.9)] flex items-center justify-center"
        {...underlayProps}
      >
        {props.isDismissable && (
          <Close
            onClick={() => {
              state.close();
            }}
            className="absolute top-3.5 right-4 md:hidden"
          />
        )}
        <div {...modalProps} ref={ref} className="rounded-lg">
          {children}
        </div>
      </div>
    </Overlay>
  );
};
