import type { CSSProperties, FC, ReactNode } from "react";
import { useRef } from "react";
import type { AriaDialogProps } from "react-aria";
import { useDialog } from "react-aria";

export interface DialogProps extends AriaDialogProps {
  title?: ReactNode;
  children: ReactNode;
  dialogStyle?: CSSProperties;
}

export const Dialog: FC<DialogProps> = ({
  title,
  children,
  dialogStyle,
  ...props
}) => {
  const ref = useRef(null);
  const { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div {...dialogProps} ref={ref} className="p-8" style={dialogStyle}>
      {title && (
        <h3 {...titleProps} className="mt-0">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};
