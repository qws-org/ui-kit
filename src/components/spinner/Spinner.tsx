import type { FC } from "react";

import type { FlexProps } from "~/components";
import { Flex } from "~/components";

export type SpinnerProps = FlexProps;
export const Spinner: FC<SpinnerProps> = (props) => {
  const borderProps = props?.border;
  const borderColor =
    typeof borderProps?.color === "string" ? undefined : borderProps?.color;
  return (
    <Flex
      {...props}
      width={props?.width ?? 32}
      height={props.height ?? 32}
      border={{
        color: {
          top: borderColor?.top ?? "border-primary",
          bottom: borderColor?.bottom ?? "border-subtle",
          left: borderColor?.left ?? "border-subtle",
          right: borderColor?.right ?? "border-subtle",
        },
        radius: borderProps?.radius ?? "50%",
        width: borderProps?.width ?? "2px",
      }}
      className="animate-spin"
    >
      {props.children}
    </Flex>
  );
};
