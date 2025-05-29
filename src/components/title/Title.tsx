import type { FC } from "react";
import { tv } from "tailwind-variants";

import type { BoxProps, FontWeightKeys } from "~/components";
import { Box } from "~/components";

type TitleSize = "large" | "medium" | "small" | "xsmall";

export type TitleProps = UiKitFC<
  Partial<Omit<BoxProps, "as" | "onClick" | "display">> & {
    as?: "h1" | "h2" | "h3" | "h4";
    /**
     * @deprecated Используйте свойство `fontWeight` вместо `weight`.
     */
    weight?: "superbold" | "bold" | "semibold" | "normal" | "light";
  } & { size?: TitleSize }
>;

const titleStyle = tv({
  variants: {
    sizeFont: {
      large:
        "[font-size:var(--fontSize-mobile-large-title)] md:[font-size:var(--fontSize-desktop-large-title)]",
      medium:
        "[font-size:var(--fontSize-mobile-medium-title)] md:[font-size:var(--fontSize-desktop-medium-title)]",
      small:
        "[font-size:var(--fontSize-mobile-small-title)] md:[font-size:var(--fontSize-desktop-small-title)]",
      xsmall:
        "[font-size:var(--fontSize-mobile-xsmall-title)] md:[font-size:var(--fontSize-desktop-xsmall-title)]",
    },
    sizeLineHeight: {
      large:
        "[line-height:var(--lineHeight-mobile-large-title)] md:[line-height:var(--lineHeight-desktop-large-title)]",
      medium:
        "[line-height:var(--lineHeight-mobile-medium-title)] md:[line-height:var(--lineHeight-desktop-medium-title)]",
      small:
        "[line-height:var(--lineHeight-mobile-small-title)] md:[line-height:var(--lineHeight-desktop-small-title)]",
      xsmall:
        "[line-height:var(--lineHeight-mobile-xsmall-title)] md:[line-height:var(--lineHeight-desktop-xsmall-title)]",
    },
  },
});

export const Title: FC<TitleProps> = (props) => {
  const { as, size = "medium", md, d, className, children, weight } = props;

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
      as={as ?? "p"}
      d={{
        ...d,
        fontWeight: d?.fontWeight ?? md?.fontWeight ?? dFontWeight,
      }}
      md={{
        ...md,
        fontWeight: md?.fontWeight ?? props.fontWeight ?? mdFontWeight,
      }}
      fontWeight={props.fontWeight ?? fontWeight}
      className={`${titleStyle({
        sizeFont: props.fontSize ? undefined : size,
        sizeLineHeight: props.lineHeight ? undefined : size,
      })} ${className ?? ""}`}
      style={props.style}
    >
      {children}
    </Box>
  );
};
