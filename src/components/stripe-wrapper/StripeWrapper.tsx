import type { FC, ReactNode } from "react";

import type { BoxProps } from "~/components";
import { Box } from "~/components";

export type StripeWrapperProps = {
  children: ReactNode;
  variant: "default" | "secondary" | "tertiary" | "quaternary";
  className?: string;
} & BoxProps;

const gradientImages = {
  default: {
    image: "background-accent1",
    mdImage: "",
  },
  secondary: {
    image:
      "linear-gradient(321.9deg, #4A1290 -54.36%, #F9766E 12.84%, #4A1290 82.37%)",
    mdImage:
      "linear-gradient(269.87deg, #4A1291 0.26%, #F9766E 48.47%, #4A1290 98.36%)",
  },
  tertiary: {
    image:
      "linear-gradient(321.9deg, #4A1291 -54.36%, #F9766E 12.84%, #4A1290 82.37%)",
    mdImage: "linear-gradient(269.83deg, #F9766E 0.29%, #4A1290 100%)",
  },
  quaternary: {
    image: "surface-primary-grad-default",
    mdImage: "",
  },
};
/**
 * @deprecated
 */
export const StripeWrapper: FC<StripeWrapperProps> = (props) => {
  const { children, variant, className, ...rest } = props;
  const selectedGradient = gradientImages[variant];

  return (
    <Box
      {...rest}
      bg={selectedGradient.image}
      md={{
        bg: selectedGradient.mdImage,
        ...rest.md,
      }}
      position={{ type: "relative" }}
      className={className}
      style={rest.style}
    >
      {(variant === "secondary" ||
        variant === "tertiary" ||
        variant === "quaternary") && (
        <>
          <Box
            position={{
              type: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              right: 0,
            }}
            opacity={variant === "quaternary" ? 0.2 : 0.7}
            bg="/noise.png"
            bgSize="contain"
            bgRepeat="repeat"
            className="pointer-events-none mix-blend-soft-light"
          />
          <Box
            position={{
              type: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              right: 0,
            }}
            opacity={0.1}
            bg="/texture.png"
            bgSize={variant === "quaternary" ? 700 : 750}
            bgRepeat="repeat"
            className="pointer-events-none mix-blend-soft-light"
          />
        </>
      )}
      <Box position={{ type: "relative", zIndex: 10 }}>{children}</Box>
    </Box>
  );
};
