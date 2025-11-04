import type {
  CSSProperties,
  ElementType,
  ForwardedRef,
  MouseEvent,
  PropsWithChildren,
  ReactNode,
} from "react";
import { forwardRef } from "react";

import { useAnimation } from "~/components/use-animation";
import { useBorder } from "~/components/use-border";
import { useCssEffects } from "~/components/use-css-effects";
import { useCursor } from "~/components/use-cursor";
import { useOutline } from "~/components/use-outline";
import { useResolvedAttributes } from "~/components/use-resolved-attributes";

import type {
  ElementRef,
  UiKitAnimationProps,
  UiKitBackgroundProps,
  UiKitBorderProps,
  UiKitCursorProps,
  UiKitDataAttributesProps,
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
  UIKitIndentationsProps &
    UiKitPositionProps &
    UIKitDimensionProps &
    UiKitDisplayProps &
    UiKitOutlineProps &
    UiKitEffectProps &
    UiKitAnimationProps &
    UiKitCursorProps &
    UiKitDataAttributesProps &
    UiKitTypographyProps & { border?: UiKitBorderProps } & Omit<
      UiKitBackgroundProps,
      "bgGroup"
    > & {
      hover: Omit<UiKitBackgroundProps, "groupParent"> &
        UiKitOutlineProps &
        UiKitEffectProps &
        UiKitAnimationProps &
        UiKitTypographyProps & { border?: UiKitBorderProps };
      active: UiKitAnimationProps;
    }
>;

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
        | "picture"
        | "main"
        | "hr"
        | "label";
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
      active,
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
    // animation
    const animation = useAnimation({
      m: rest,
      md,
      d,
      hover: { m: hover ?? {}, md: md?.hover ?? {}, d: d?.hover ?? {} },
      active: { m: active ?? {}, md: md?.active ?? {}, d: d?.active ?? {} },
    });
    // cursor
    const cursor = useCursor({ m: rest, md, d });
    const resolvedProps = useResolvedAttributes(rest);
    const Root = as ?? "div";
    return (
      <>
        {animation.keyFrames && <style>{animation.keyFrames}</style>}
        <Root
          // eslint-disable-next-line
          // @ts-ignore
          {...resolvedProps}
          ref={ref as never}
          className={
            `${display.classNames} ${effects.className} ${outline.className} ${border.className} ` +
            `${spacing.className} ${positionStyles.className} ${background.className} ` +
            `${dimension.className} ${typography.classNames} ${groupParent ? "group" : ""} ${cursor.className} ${animation.className} ${className ?? ""}`
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
            ...cursor.style,
            ...animation.style,
            ...(rest.style as object),
          }}
        >
          {children}
        </Root>
      </>
    );
  },
);
