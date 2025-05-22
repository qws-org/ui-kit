import type { FC, ReactNode } from "react";
import { tv } from "tailwind-variants";

import type { BoxProps } from "~/components";
import { Box } from "~/components";

export type StripeWrapperProps = {
  children: ReactNode;
  variant: "default" | "secondary" | "tertiary" | "quaternary";
  className?: string;
} & Partial<Omit<BoxProps, "as" | "children" | "onClick" | "display">>;

const wrapperStyles = tv({
  base: "relative",
});

const textureStyles = tv({
  base: "absolute inset-0 bg-cover bg-repeat pointer-events-none opacity-70 mix-blend-soft-light bg-[url('/noise.png')]",
  variants: {
    variant: {
      secondary: "",
      tertiary: "",
      quaternary: "opacity-20",
    },
  },
});

const overlayStyles = tv({
  base: "absolute inset-0 bg-cover bg-repeat pointer-events-none opacity-10 mix-blend-soft-light bg-[url('/texture.png')] bg-[length:750px]",
  variants: {
    variant: {
      secondary: "",
      tertiary: "",
      quaternary: "bg-[length:700px]",
    },
  },
});

const gradientImages = {
  default: {
    image:
      "linear-gradient(68.17deg, #590FD1 8.74%, #FF3D00 64.57%, #FFAE10 102.86%)",
    mdImage:
      "linear-gradient(89.95deg, #590FD1 0.03%, #FF3D00 58.39%, #FFAE10 114.93%)",
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
    image: "linear-gradient(227.31deg, #FF4438 3.43%, #5B00CD 92.79%)",
    mdImage: "linear-gradient(268.91deg, #FF4438 -3.87%, #5B00CD 97.26%)",
  },
};

export const StripeWrapper: FC<StripeWrapperProps> = (props) => {
  const { children, variant, className, ...rest } = props;
  const selectedGradient = gradientImages[variant];

  return (
    <Box
      {...rest}
      bg={selectedGradient.image}
      md={{
        bg: selectedGradient.mdImage,
      }}
      className={`${wrapperStyles()} ${className ?? ""}`}
      style={rest.style}
    >
      {(variant === "secondary" ||
        variant === "tertiary" ||
        variant === "quaternary") && (
        <>
          <div className={textureStyles({ variant })}></div>
          <div className={overlayStyles({ variant })}></div>
        </>
      )}
      <div className="relative z-10">{children}</div>
    </Box>
  );
};
