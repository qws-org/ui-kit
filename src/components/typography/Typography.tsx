import type { FC, PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

import type { BoxProps, FontWeightKeys } from "~/components";
import { Box } from "~/components";

type TypographySize = "large" | "medium" | "small" | "xsmall";
export type TypographyProps = PropsWithChildren<
  UiKitFC<
    {
      as?: "p" | "span" | "article" | "li" | "label";
      /**
       * @deprecated Используйте свойство `fontWeight` вместо `weight`.
       */
      weight?: "superbold" | "bold" | "semibold" | "normal" | "light";
      className?: string;
      onClick?: () => void;
    } & Partial<Omit<BoxProps, "as" | "onClick" | "children">> & {
        size?: TypographySize;
      }
  >
>;

const typographyStyle = tv({
  variants: {
    sizeFont: {
      large:
        "[font-size:var(--fontSize-mobile-large-body)] md:[font-size:var(--fontSize-desktop-large-body)]",
      medium:
        "[font-size:var(--fontSize-mobile-medium-body)] md:[font-size:var(--fontSize-desktop-medium-body)]",
      small:
        "[font-size:var(--fontSize-mobile-small-body)] md:[font-size:var(--fontSize-desktop-small-body)]",
      xsmall:
        "[font-size:var(--fontSize-mobile-xsmall-body)] md:[font-size:var(--fontSize-desktop-xsmall-body)]",
    },
    sizeLineHeight: {
      large:
        "[line-height:var(--lineHeight-mobile-large-body)] md:[line-height:var(--lineHeight-desktop-large-body)]",
      medium:
        "[line-height:var(--lineHeight-mobile-medium-body)] md:[line-height:var(--lineHeight-desktop-medium-body)]",
      small:
        "[line-height:var(--lineHeight-mobile-small-body)] md:[line-height:var(--lineHeight-desktop-small-body)]",
      xsmall:
        "[line-height:var(--lineHeight-mobile-xsmall-body)] md:[line-height:var(--lineHeight-desktop-xsmall-body)]",
    },
  },
});

export const Typography: FC<TypographyProps> = ({
  size = "medium",
  weight,
  className,
  md,
  d,
  children,
  as = "p",
  ...props
}) => {
  // Font-Weight
  const fontWeight: FontWeightKeys | undefined = weight
    ? `mobile.${weight}`
    : undefined;

  const mdFontWeight: FontWeightKeys | undefined =
    md?.weight !== weight && md?.weight ? `desktop.${md?.weight}` : undefined;

  const dFontWeight: FontWeightKeys | undefined =
    d?.weight !== md?.weight && d?.weight !== weight && d?.weight
      ? `desktop.${d.weight}`
      : undefined;

  return (
    <Box
      {...props}
      d={{
        ...d,
        fontWeight: d?.fontWeight ?? md?.fontWeight ?? dFontWeight,
      }}
      md={{
        ...md,
        fontWeight: md?.fontWeight ?? props.fontWeight ?? mdFontWeight,
      }}
      fontWeight={props.fontWeight ?? fontWeight}
      className={`${typographyStyle({
        sizeFont: props.fontSize ? undefined : size,
        sizeLineHeight: props.lineHeight ? undefined : size,
      })} ${className ?? ""}`}
      style={props.style}
      as={as}
    >
      {children}
    </Box>
  );
};
