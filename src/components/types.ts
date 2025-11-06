import type {
  ComponentPropsWithRef,
  ElementType,
  LinkHTMLAttributes,
  PropsWithChildren,
  Ref,
} from "react";

import type {
  BorderRadiusKeys,
  ColorKeys,
  FontSizeKeys,
  FontWeightKeys,
  LineHeightKeys,
} from "./ui-kit-provider/types";

export type UIKitLinkProps = PropsWithChildren<LinkHTMLAttributes<HTMLElement>>;

export type UIKitIndentations =
  | 0
  | 2
  | 4
  | 8
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 80
  | 96
  | number;
export type UIKitMarginIndentation = UIKitIndentations | "auto";
export type UIKitArrayIndentation = [
  UIKitIndentations,
  UIKitIndentations,
  UIKitIndentations,
  UIKitIndentations,
];
export type UIKitMarginArrayIndentation = [
  UIKitMarginIndentation,
  UIKitMarginIndentation,
  UIKitMarginIndentation,
  UIKitMarginIndentation,
];

export type UIKitAxisIndentationPadding = AtLeastOne<{
  px?: UIKitIndentations;
  py?: UIKitIndentations;
}>;

export type UiKitMixedXAxisIndentationPadding = {
  px: UIKitMarginIndentation;
  pt?: UIKitMarginIndentation;
  pb?: UIKitMarginIndentation;
};

export type UiKitMixedYAxisIndentationPadding = {
  py: UIKitMarginIndentation;
  pl?: UIKitMarginIndentation;
  pr?: UIKitMarginIndentation;
};

export type UiKitMixedXAxisIndentationMargin = {
  mx: UIKitMarginIndentation;
  mt?: UIKitMarginIndentation;
  mb?: UIKitMarginIndentation;
};

export type UiKitMixedYAxisIndentationMargin = {
  my: UIKitMarginIndentation;
  ml?: UIKitMarginIndentation;
  mr?: UIKitMarginIndentation;
};

export type UIKitAxisIndentationMargin = AtLeastOne<{
  mx?: UIKitMarginIndentation;
  my?: UIKitMarginIndentation;
}>;
export type UIKitAnyIndentationPadding = AtLeastOne<{
  pt?: UIKitIndentations;
  pb?: UIKitIndentations;
  pr?: UIKitIndentations;
  pl?: UIKitIndentations;
}>;
export type UIKitAnyIndentationMargin = AtLeastOne<{
  mt?: UIKitMarginIndentation;
  mb?: UIKitMarginIndentation;
  mr?: UIKitMarginIndentation;
  ml?: UIKitMarginIndentation;
}>;
/**
 * Интерфейс описывает внешние и внутренние отступы
 */
export type UIKitIndentationsProps = {
  p:
    | UIKitIndentations
    | UIKitArrayIndentation
    | UIKitAxisIndentationPadding
    | UIKitAnyIndentationPadding
    | UiKitMixedXAxisIndentationPadding
    | UiKitMixedYAxisIndentationPadding;

  m:
    | UIKitMarginIndentation
    | UIKitMarginArrayIndentation
    | UIKitAxisIndentationMargin
    | UIKitAnyIndentationMargin
    | UiKitMixedXAxisIndentationMargin
    | UiKitMixedYAxisIndentationMargin;
};
/**
 * Интерфейс описывает ширину  и высоту блока
 */
export type UIKitDimensionProps = {
  width?:
    | number
    | string
    | "auto"
    | "min-content"
    | "max-content"
    | "fit-content";
  minWidth?:
    | string
    | number
    | "none"
    | "min-content"
    | "max-content"
    | "fit-content";
  maxWidth?:
    | string
    | number
    | "none"
    | "min-content"
    | "max-content"
    | "fit-content";
  height?:
    | number
    | string
    | "auto"
    | "min-content"
    | "max-content"
    | "fit-content";
  minHeight?:
    | string
    | number
    | "none"
    | "min-content"
    | "max-content"
    | "fit-content";
  maxHeight?:
    | string
    | number
    | "none"
    | "min-content"
    | "max-content"
    | "fit-content";
};

/**
 * может быть числом, в таком случае значение приведется к пикселям
 * может быть строкой вида: "30%"
 */
export type PositionValue = number | string;

export type UiKitPositionProps = {
  position: {
    type?: "static" | "absolute" | "fixed" | "relative" | "sticky" | "inherit";
    top?: PositionValue;
    left?: PositionValue;
    right?: PositionValue;
    bottom?: PositionValue;
    zIndex?: number;
  };
};

export type UiKitJustify =
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "start"
  | "space-around"
  | "space-between"
  | "space-evenly"
  | "stretch"
  | "baseline"
  | "normal";

export type UiKitAlign =
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "start"
  | "baseline"
  | "stretch";

export type UiKitGap = number | string;

export type UiKitFlexDirection =
  | "column"
  | "column-reverse"
  | "row"
  | "row-reverse";

export type UiKitFlexWrap = "nowrap" | "wrap" | "wrap-reverse";

export type UiKitFlexParams = {
  justify?: UiKitJustify;
  align?: UiKitAlign;
  gap?: UiKitGap;
  flexDirection?: UiKitFlexDirection;
  flexWrap?: UiKitFlexWrap;
};

export type UiKitBackgroundProps = {
  bg?: ColorKeys | string;
  bgSize?: "cover" | "contain" | "auto" | number | string;
  bgRepeat?:
    | "no-repeat"
    | "repeat"
    | "repeat-x"
    | "repeat-y"
    | "repeat-round"
    | "repeat-space";
  bgGroup?: ColorKeys | string;
  bgPosition?:
    | "bottom"
    | "center"
    | "left"
    | "right"
    | "top"
    | "left-bottom"
    | "left-top"
    | "right-bottom"
    | "right-top";
  groupParent?: boolean;
};

export type UiKitDisplayProps = {
  display?:
    | "block"
    | "hidden"
    | "inline"
    | "inline-block"
    | "flex"
    | "inline-flex"
    | "table"
    | "table-cell"
    | "grid"
    | "table-row";
};

export type UiKitTypographyProps = {
  fontSize?: FontSizeKeys | number | string;
  fontWeight?: FontWeightKeys | number;
  lineHeight?: LineHeightKeys | number | string;
  verticalAlign?: "top" | "middle" | "bottom";
  horizontalAlign?: "left" | "center" | "right";
  textTransform?: "uppercase" | "lowercase" | "capitalize" | "normal-case";
  textDecoration?: "underline" | "line-through" | "overline" | "no-underline";
  textOverflow?: "ellipsis" | "clip";
  whiteSpace?: "nowrap" | "pre" | "pre-line" | "pre-wrap";
  color?: ColorKeys | string;
  italic?: boolean;
};

export type BorderColorItem = ColorKeys | string;

export type BorderColorSides = {
  top?: BorderColorItem;
  left?: BorderColorItem;
  right?: BorderColorItem;
  bottom?: BorderColorItem;
};

export type UiKitBorderColor = BorderColorItem | BorderColorSides;
export type BorderWidthItem = string;

export type BorderRadiusItem = string | BorderRadiusKeys;

export type BorderRadiusSides = {
  topLeft?: BorderRadiusItem;
  topRight?: BorderRadiusItem;
  bottomLeft?: BorderRadiusItem;
  bottomRight?: BorderRadiusItem;
};

export type UiKitBorderRadius = BorderRadiusItem | BorderRadiusSides;

export type UiKitBorderProps = {
  radius?: UiKitBorderRadius;
  color?: UiKitBorderColor;
  width?: BorderWidthItem;
  style?: "solid" | "dashed" | "dotted" | "double" | "hidden" | "none";
};

export type UiKitOutlineProps = {
  outlineColor?: ColorKeys | string;
  outlineWidth?: string;
  outlineOffset?: string;
  outlineStyle?: "none" | "solid" | "dashed" | "dotted" | "double";
};

export type UiKitCursorProps = {
  cursor?:
    | "default"
    | "pointer"
    | "wait"
    | "text"
    | "move"
    | "help"
    | "none"
    | "all-scroll"
    | "grabbing"
    | "grab"
    | "col-resize"
    | "row-resize"
    | "n-resize"
    | "e-resize"
    | "s-resize"
    | "w-resize"
    | "ne-resize"
    | "zoom-out"
    | "zoom-in"
    | "nwse-resize"
    | "nesw-resize"
    | "ns-resize"
    | "ew-resize"
    | "sw-resize"
    | "se-resize"
    | "nw-resize"
    | "no-drop"
    | "copy"
    | "alias"
    | "vertical-text"
    | "crosshair"
    | "cell"
    | "progress"
    | "context-menu"
    | "not-allowed";
};

export type UiKitEffectProps = {
  boxShadow?: ColorKeys | string;
  textShadow?: ColorKeys | string;
  opacity?: number;
  overflow?: "visible" | "hidden" | "scroll" | "auto" | "clip";
  backdropBlur?: string | number;
};

export type UiKitAnimationProps = {
  animation?: {
    name: "spin" | "frameAppear" | "none";
    duration?: number;
    transition?: "linear" | "ease-in" | "ease-out" | "ease-in-out" | "ease";
    direction?: "forwards" | "backwards" | "both";
  };
};

export type ElementRef<E extends ElementType> =
  ComponentPropsWithRef<E> extends { ref?: Ref<infer R> } ? R : never;

export type UiKitDataAttributesProps = {
  [key: `data-${string}`]: string;
};
