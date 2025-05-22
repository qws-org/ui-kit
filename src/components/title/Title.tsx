import type { FC } from "react";
import { tv } from "tailwind-variants";

import type { BoxProps } from "~/components";
import { Box } from "~/components";

type TitleSize = "large" | "medium" | "small" | "xsmall";
type TitleAlignment = "left" | "center" | "right" | "justify";

export type TitleProps = UiKitFC<
  Partial<Omit<BoxProps, "as" | "onClick" | "display">> & {
    as?: "h1" | "h2" | "h3" | "h4";
    size?: TitleSize;
    weight?: "superbold" | "bold" | "semibold" | "normal" | "light";
    alignment?: TitleAlignment;
  }
>;

const titleStyle = tv({
  variants: {
    size: {
      large:
        "[font-size:var(--fontSize-mobile-large-title)] [line-height:var(--lineHeight-mobile-large-title)]",
      medium:
        "[font-size:var(--fontSize-mobile-medium-title)] [line-height:var(--lineHeight-mobile-medium-title)]",
      small:
        "[font-size:var(--fontSize-mobile-small-title)] [line-height:var(--lineHeight-mobile-small-title)]",
      xsmall:
        "[font-size:var(--fontSize-mobile-xsmall-title)] [line-height:var(--lineHeight-mobile-xsmall-title)]",
    },
    mdSize: {
      large:
        "md:[font-size:var(--fontSize-desktop-large-title)] md:[line-height:var(--lineHeight-desktop-large-title)]",
      medium:
        "md:[font-size:var(--fontSize-desktop-medium-title)] md:[line-height:var(--lineHeight-desktop-medium-title)]",
      small:
        "md:[font-size:var(--fontSize-desktop-small-title)] md:[line-height:var(--lineHeight-desktop-small-title)]",
      xsmall:
        "md:[font-size:var(--fontSize-desktop-xsmall-title)] md:[line-height:var(--lineHeight-desktop-xsmall-title)]",
    },
    dSize: {
      large:
        "lg:[font-size:var(--fontSize-desktop-large-title)] lg:[line-height:var(--lineHeight-desktop-large-title)]",
      medium:
        "lg:[font-size:var(--fontSize-desktop-medium-title)] lg:[line-height:var(--lineHeight-desktop-medium-title)]",
      small:
        "lg:[font-size:var(--fontSize-desktop-small-title)] lg:[line-height:var(--lineHeight-desktop-small-title)]",
      xsmall:
        "lg:[font-size:var(--fontSize-desktop-xsmall-title)] lg:[line-height:var(--lineHeight-desktop-xsmall-title)]",
    },
    weight: {
      superbold: "[font-weight:var(--fontWeight-mobile-superbold)]",
      bold: "[font-weight:var(--fontWeight-mobile-bold)]",
      semibold: "[font-weight:var(--fontWeight-mobile-semibold)]",
      normal: "[font-weight:var(--fontWeight-mobile-normal)]",
      light: "[font-weight:var(--fontWeight-mobile-light)]",
    },
    mdWeight: {
      superbold: "md:[font-weight:var(--fontWeight-desktop-superbold)]",
      bold: "md:[font-weight:var(--fontWeight-desktop-bold)]",
      semibold: "md:[font-weight:var(--fontWeight-desktop-semibold)]",
      normal: "md:[font-weight:var(--fontWeight-desktop-normal)]",
      light: "md:[font-weight:var(--fontWeight-desktop-light)]",
    },
    dWeight: {
      superbold: "lg:[font-weight:var(--fontWeight-desktop-superbold)]",
      bold: "lg:[font-weight:var(--fontWeight-desktop-bold)]",
      semibold: "lg:[font-weight:var(--fontWeight-desktop-semibold)]",
      normal: "lg:[font-weight:var(--fontWeight-desktop-normal)]",
      light: "lg:[font-weight:var(--fontWeight-desktop-light)]",
    },
    alignment: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    mdAlignment: {
      left: "md:text-left",
      center: "md:text-center",
      right: "md:text-right",
      justify: "md:text-justify",
    },
    dAlignment: {
      left: "lg:text-left",
      center: "lg:text-center",
      right: "lg:text-right",
      justify: "lg:text-justify",
    },
  },
});

export const Title: FC<TitleProps> = (props) => {
  const {
    as,
    size = "medium",
    weight = "normal",
    alignment = "center",
    md,
    d,
    className,
    children,
    ...rest
  } = props;

  return (
    <Box
      {...rest}
      d={d}
      md={md}
      as={as ?? "p"}
      className={`${titleStyle({
        size,
        mdSize: md?.size ?? size,
        dSize: d?.size ?? md?.size ?? size,
        weight,
        mdWeight: md?.weight ?? weight,
        dWeight: d?.weight ?? md?.weight ?? weight,
        alignment,
        mdAlignment: md?.alignment ?? alignment,
        dAlignment: d?.alignment ?? md?.alignment ?? alignment,
      })} ${className ?? ""}`}
    >
      {children}
    </Box>
  );
};
