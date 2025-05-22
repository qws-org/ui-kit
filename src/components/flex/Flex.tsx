import type { FC, PropsWithChildren } from "react";

import type { UiKitFlexParams } from "~/components";
import { useFlex } from "~/components/use-flex";

import type { BoxProps } from "../box/Box";
import { Box } from "../box/Box";

type DefaultProps = UiKitFlexParams & Partial<Omit<BoxProps, "d" | "md">>;

export type FlexProps = PropsWithChildren<
  DefaultProps & {
    md?: DefaultProps;
    d?: DefaultProps;
  }
>;

export const Flex: FC<FlexProps> = (props) => {
  const {
    md,
    d,
    className,
    children,
    display = "flex",
    flexDirection,
    flexWrap,
    gap,
    align,
    justify,
    style,
  } = props;

  const flex = useFlex({
    m: { flexWrap, gap, align, flexDirection, justify },
    md: { ...md },
    d: { ...d },
  });

  return (
    <Box
      {...props}
      display={display}
      className={`${className ?? ""} ${flex.className}`}
      style={{
        ...flex.styles,
        ...style,
      }}
    >
      {children}
    </Box>
  );
};
