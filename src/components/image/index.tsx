import type { FC } from "react";

import type { BoxProps } from "~/components";
import { Box } from "~/components";

export type ImageProps = {
  value: string;
  mdValue?: string;
  dValue?: string;
  className?: string;
} & Partial<BoxProps>;

export const Image: FC<ImageProps> = (props) => {
  const { value, mdValue, dValue, className = "", ...rest } = props;

  return (
    <Box className={`${className ?? ""}`} {...rest} as={"picture"}>
      <source media="(min-width: 1024px)" srcSet={dValue} type="image/webp" />
      <source media="(min-width: 768px)" srcSet={mdValue} type="image/webp" />

      <img className="w-full" alt="image" src={value} />
    </Box>
  );
};
