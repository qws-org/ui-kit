import type { FC } from "react";

import type { BoxProps } from "~/components";
import { Box, useBackground } from "~/components";
import { useDimensions } from "~/components/use-dimensions";

export type SkeletonProps = Omit<
  BoxProps,
  "as" | "onClick" | "display" | "children"
> & { radius: number };

export const Skeleton: FC<SkeletonProps> = (props) => {
  const { radius = 0, className = "", md, d, ...rest } = props;

  const dimension = useDimensions({ m: { ...rest }, md, d });
  const background = useBackground({
    m: {
      ...props,
      bg: props.bg ?? "var(--colors-text-secondary-default)",
      bgSize: props.bgSize ?? "cover",
      bgRepeat: props.bgRepeat ?? "no-repeat",
      bgPosition: props.bgPosition ?? "center",
    },
    md: { ...md },
    d: { ...d },
    hover: {
      m: {
        ...props.hover,
      },
      md: { ...md?.hover },
      d: { ...d?.hover },
    },
  });

  return (
    <Box
      className={`animate-pulse ${dimension.className} ${background.className} ${className}`}
      style={{ borderRadius: radius, ...dimension.styles, ...background.style }}
    />
  );
};
