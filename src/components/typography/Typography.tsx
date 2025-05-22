import type { FC, PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

import type { BoxProps } from "~/components";
import { Box } from "~/components";

type TypographySize = "large" | "medium" | "small";
export type TypographyProps = PropsWithChildren<
  UiKitFC<
    {
      as?: "p" | "span" | "article" | "li";
      size?: TypographySize;
      weight?: "superbold" | "bold" | "semibold" | "normal" | "light";
      className?: string;
      onClick?: () => void;
    } & Partial<Omit<BoxProps, "as" | "onClick" | "display" | "children">>
  >
>;

const typographyStyle = tv({
  variants: {
    size: {
      large:
        "[font-size:var(--fontSize-mobile-large-body)] [line-height:var(--lineHeight-mobile-large-body)]",
      medium:
        "[font-size:var(--fontSize-mobile-medium-body)] [line-height:var(--lineHeight-mobile-medium-body)]",
      small:
        "[font-size:var(--fontSize-mobile-small-body)] [line-height:var(--lineHeight-mobile-small-body)]",
    },
    mdSize: {
      large:
        "md:[font-size:var(--fontSize-desktop-large-body)] md:[line-height:var(--lineHeight-desktop-large-body)]",
      medium:
        "md:[font-size:var(--fontSize-desktop-medium-body)] md:[line-height:var(--lineHeight-desktop-medium-body)]",
      small:
        "md:[font-size:var(--fontSize-desktop-small-body)] md:[line-height:var(--lineHeight-desktop-small-body)]",
    },
    dSize: {
      large:
        "lg:[font-size:var(--fontSize-desktop-large-body)] lg:[line-height:var(--lineHeight-desktop-large-body)]",
      medium:
        "lg:[font-size:var(--fontSize-desktop-medium-body)] lg:[line-height:var(--lineHeight-desktop-medium-body)]",
      small:
        "lg:[font-size:var(--fontSize-desktop-small-body)] lg:[line-height:var(--lineHeight-desktop-small-body)]",
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
  },
});

export const Typography: FC<TypographyProps> = ({
  size = "medium",
  weight = "normal",
  className,
  md,
  d,
  children,
  ...props
}) => {
  return (
    <Box
      {...props}
      d={d}
      md={md}
      className={`${typographyStyle({ size, mdSize: md?.size ?? size, dSize: d?.size ?? md?.size ?? size, weight, mdWeight: md?.weight ?? weight, dWeight: d?.weight ?? md?.weight ?? weight })} ${className ?? ""}`}
      style={props.style}
    >
      {children}
    </Box>
  );
};
