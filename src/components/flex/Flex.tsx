import type {
  ElementType,
  ForwardedRef,
  PropsWithChildren,
  ReactNode,
} from "react";
import { forwardRef } from "react";

import type { UiKitFlexParams } from "~/components";
import { useFlex } from "~/components/use-flex";

import type { BoxProps } from "../box/Box";
import { Box } from "../box/Box";
import type { ElementRef } from "../types";

type DefaultProps = UiKitFlexParams & Partial<Omit<BoxProps, "d" | "md">>;

export type FlexProps = PropsWithChildren<
  DefaultProps & {
    md?: DefaultProps;
    d?: DefaultProps;
  }
>;

export const Flex = forwardRef(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <RootElement extends ElementType = any>(
    props: FlexProps,
    ref: ForwardedRef<ElementRef<RootElement>>,
  ): ReactNode => {
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
      order,
    } = props;

    const flex = useFlex({
      m: { flexWrap, gap, align, flexDirection, justify, order },
      md: { ...md },
      d: { ...d },
    });

    return (
      <Box
        {...props}
        display={display}
        ref={ref}
        className={`${className ?? ""} ${flex.className}`}
        style={{
          ...flex.styles,
          ...style,
        }}
      >
        {children}
      </Box>
    );
  },
);
