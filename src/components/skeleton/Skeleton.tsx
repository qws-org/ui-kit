import type { FC } from "react";

import type { BoxProps } from "~/components";
import { Box } from "~/components";
import { useDimensions } from "~/components/use-dimensions";

export type SkeletonProps = Omit<
  BoxProps,
  "as" | "onClick" | "display" | "children"
> & { radius: number };

export const Skeleton: FC<SkeletonProps> = (props) => {
  const { radius = 0, className = "", md, d, ...rest } = props;

  const dimension = useDimensions({ m: { ...rest }, md, d });

  return (
    <Box
      className={`bg-[var(--colors-text-secondary-default)] animate-pulse ${dimension.className} ${className}`}
      style={{ borderRadius: radius, ...dimension.styles }}
    />
  );
};
