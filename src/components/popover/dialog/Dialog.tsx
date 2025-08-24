import type { AriaDialogProps } from "react-aria";
import { useDialog } from "react-aria";
import type { FC, ReactNode } from "react";
import { useRef } from "react";

export interface DialogProps extends AriaDialogProps {
  title?: ReactNode;
  children: ReactNode;
}

export const Dialog: FC<DialogProps> = ({ title, children, ...props }) => {
  const ref = useRef(null);
  const { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div {...dialogProps} ref={ref} className="p-8">
      {title && (
        <h3 {...titleProps} className="mt-0">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};
