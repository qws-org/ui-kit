import type { FC, PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

import { Box, type UIKitDimensionProps } from "~/components";

type Span = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type GridItemDefaultProps = {
  className?: string;
  cSpan?: Span;
  rSpan?: Span;
};
const spanVariants: Record<Span | "default", string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
  default: "col-auto",
};
export type GridItemProps = PropsWithChildren<
  UiKitFC<GridItemDefaultProps & Partial<UIKitDimensionProps>>
>;
export const GridItem: FC<GridItemProps> = (props) => {
  const {
    cSpan = "default" as const,
    rSpan,
    md,
    d,
    className,
    children,
  } = props;

  const gridItemStyles = tv({
    base: `${className ?? ""} ${spanVariants[cSpan]}  md:${spanVariants[md?.cSpan ?? cSpan]}`,
  });
  return (
    <Box
      style={{
        "--rowSpan": String(rSpan),
        "--mdRowSpan": String(md?.rSpan ?? rSpan),
        "--dRowSpan": String(d?.rSpan ?? md?.rSpan ?? rSpan),
        "--colSpan": cSpan,
        "--mdColSpan": md?.cSpan ?? cSpan,
        "--dColSpan": d?.cSpan ?? md?.cSpan ?? cSpan,
      }}
      className={gridItemStyles()}
      {...props}
    >
      {children}
    </Box>
  );
};
