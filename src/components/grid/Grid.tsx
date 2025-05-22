import type { FC, PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

import type { BoxProps } from "../box/Box";
import { Box } from "../box/Box";
import { GridItem } from "./GridItem";

export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridDefaultProps = {
  gap: number | string;
  cols?: GridCols;
} & Partial<Omit<BoxProps, "display">> & {
    display?: "grid";
  };

export type GridProps = PropsWithChildren<UiKitFC<GridDefaultProps>>;

const styleTransformer = (value: string | number): string => {
  return typeof value === "string" ? value : `${value}px`;
};

export const Grid: FC<GridProps> & { Item: typeof GridItem } = (props) => {
  const {
    children,
    cols,
    gap,
    md,
    d,
    className = "",
    display = "grid",
  } = props;
  const gridStyles = tv({
    base: `gap-[var(--gap)]   md:gap-[var(--mdGap)] lg:gap-[var(--dGap)] ${className} grid grid-cols-[repeat(var(--cols),1fr)] md:grid-cols-[repeat(var(--mdCols),1fr)] lg:grid-cols-[repeat(var(--dCols),1fr)]`,
  });

  return (
    <Box
      {...props}
      display={display}
      style={{
        "--cols": cols,
        "--mdCols": md?.cols ?? cols,
        "--dCols": d?.cols ?? md?.cols ?? cols,
        "--gap": styleTransformer(gap),
        "--mdGap": styleTransformer(md?.gap ?? gap),
        "--dGap": styleTransformer(d?.gap ?? md?.gap ?? gap),
      }}
      className={gridStyles()}
    >
      {children}
    </Box>
  );
};

Grid.Item = GridItem;
