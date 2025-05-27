import type {
  ComponentPropsWithRef,
  CSSProperties,
  ElementType,
  ForwardedRef,
  MouseEvent,
  PropsWithChildren,
  ReactNode,
  Ref,
} from "react";
import { forwardRef } from "react";

import { useBorder } from "~/components/use-border";
import { useCssEffects } from "~/components/use-css-effects";
import { useOutline } from "~/components/use-outline";

import type {
  UiKitBackgroundProps,
  UiKitBorderProps,
  UIKitDimensionProps,
  UiKitDisplayProps,
  UiKitEffectProps,
  UIKitIndentationsProps,
  UiKitOutlineProps,
  UiKitPositionProps,
  UiKitTypographyProps,
} from "../types";
import { useBackground } from "../use-background";
import { useDimensions } from "../use-dimensions";
import { useDisplay } from "../use-display";
import { usePosition } from "../use-position";
import { useSpacing } from "../use-spacing";
import { useTypography } from "../use-typography";

export type DefaultProps = Partial<
  { fun: boolean } & UIKitIndentationsProps &
    UiKitPositionProps &
    UIKitDimensionProps &
    UiKitDisplayProps &
    UiKitOutlineProps &
    UiKitEffectProps &
    UiKitTypographyProps & { border?: UiKitBorderProps } & Omit<
      UiKitBackgroundProps,
      "bgGroup"
    > & {
      hover: Omit<UiKitBackgroundProps, "groupParent"> &
        UiKitOutlineProps &
        UiKitEffectProps &
        UiKitTypographyProps & { border?: UiKitBorderProps };
    }
>;

type ElementRef<E extends ElementType> =
  ComponentPropsWithRef<E> extends { ref?: Ref<infer R> } ? R : never;

// eslint-disable-next-line
export type BoxProps<RootElement extends ElementType = "div"> =
  PropsWithChildren<
    DefaultProps & {
      className?: string;
      as?:
        | "div"
        | "span"
        | "p"
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "section"
        | "article"
        | "nav"
        | "ul"
        | "ol"
        | "li"
        | "footer"
        | "header"
        | "table"
        | "tr"
        | "td"
        | "th"
        | "picture";
      md?: Omit<DefaultProps, "bgGroup">;
      d?: Omit<DefaultProps, "bgGroup">;
      // eslint-disable-next-line
      onClick?: (e: MouseEvent<any>) => void;
      style?: CSSProperties & Record<string, string | number | undefined>;
    }
  >;

export const Box = forwardRef(
  <RootElement extends ElementType = "div">(
    {
      md,
      d,
      className,
      children,
      as,
      position,
      hover,
      groupParent = false,
      onClick,
      ...rest
    }: BoxProps<RootElement>,
    ref: ForwardedRef<ElementRef<RootElement>>,
  ): ReactNode => {
    // spacing
    const spacing = useSpacing({ m: rest, d, md });

    // dimensions
    const dimension = useDimensions({ m: rest, md, d });

    // position
    const positionStyles = usePosition({
      m: position ? { position } : undefined,
      md: md?.position ? { position: md.position } : undefined,
      d: d?.position ? { position: d.position } : undefined,
    });

    // background
    const background = useBackground({
      m: {
        ...rest,
        bgSize: rest.bgSize ?? "cover",
        bgRepeat: rest.bgRepeat ?? "no-repeat",
        bgPosition: rest.bgPosition ?? "center",
      },
      md: md ?? {},
      d: d ?? {},
      hover: { m: hover ?? {}, md: md?.hover ?? {}, d: d?.hover ?? {} },
    });

    // display
    const display = useDisplay({
      m: { display: rest.display ?? "block" },
      md: { display: md?.display },
      d: { display: d?.display },
    });

    // typography
    const typography = useTypography({
      m: rest,
      md: md ?? {},
      d: d ?? {},
      hover: { m: hover ?? {}, md: md?.hover ?? {}, d: d?.hover ?? {} },
    });

    // border
    const border = useBorder({
      m: rest.border,
      md: md?.border,
      d: d?.border,
      hover: { m: hover?.border, md: md?.hover?.border, d: d?.hover?.border },
    });

    // outline
    const outline = useOutline({
      m: rest,
      md,
      d,
      hover: { m: hover ?? {}, md: md?.hover ?? {}, d: d?.hover ?? {} },
    });

    // effects
    const effects = useCssEffects({
      m: rest,
      md,
      d,
      hover: { m: hover ?? {}, md: md?.hover ?? {}, d: d?.hover ?? {} },
    });

    const Root = as ?? "div";

    return (
      <Root
        ref={ref as never}
        className={
          `${display.classNames} ${effects.className} ${outline.className} ${border.className} ` +
          `${spacing.className} ${positionStyles.className} ${background.className} ` +
          `${dimension.className} ${typography.classNames} ${groupParent ? "group" : ""} ${className ?? ""}`
        }
        onClick={(e) => {
          onClick?.(e);
        }}
        style={{
          ...outline.style,
          ...border.style,
          ...spacing.styles,
          ...dimension.styles,
          ...positionStyles.styles,
          ...background.style,
          ...typography.styles,
          ...effects.style,
          ...(rest.style as object),
        }}
      >
        {children}
      </Root>
    );
  },
);
