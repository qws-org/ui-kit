import type {
  BorderColorItem,
  BorderColorSides,
  BorderRadiusItem,
  BorderRadiusKeys,
  BorderRadiusSides,
  ColorKeys,
  UiKitBorderColor,
  UiKitBorderProps,
  UiKitBorderRadius,
} from "~/components";
import { useUiKitTheme } from "~/components";
import { useBorderWidth } from "~/components/use-border/useBorderWidth";

type UseBorderBaseProps = {
  m?: UiKitBorderProps;
  md?: UiKitBorderProps;
  d?: UiKitBorderProps;
};

export type UseBorderProps = UseBorderBaseProps & {
  hover: UseBorderBaseProps;
};

export type UseBorderOutput = {
  className?: string;
  style?: Record<string, string | number>;
};

const isSideColors = (props?: UiKitBorderColor): props is BorderColorSides => {
  return (
    typeof props === "object" &&
    ("top" in props || "bottom" in props || "left" in props || "right" in props)
  );
};

const isSingleColor = (props?: UiKitBorderColor): props is BorderColorItem => {
  return typeof props === "string";
};

const transformBorderColor = (item: UiKitBorderColor): BorderColorSides => {
  if (isSideColors(item)) {
    return item;
  }

  return {
    top: item,
    left: item,
    right: item,
    bottom: item,
  };
};

const isSingleRadius = (
  value: UiKitBorderRadius,
): value is BorderRadiusItem => {
  return typeof value === "string";
};

const transformBorderRadius = (item: UiKitBorderRadius): BorderRadiusSides => {
  if (isSingleRadius(item)) {
    return {
      topLeft: item,
      topRight: item,
      bottomLeft: item,
      bottomRight: item,
    };
  }

  return item;
};

export const useBorder = (props: UseBorderProps): UseBorderOutput => {
  const style: UseBorderOutput["style"] = {};
  let classNames = "";
  const { borderRadius } = useUiKitTheme();

  // radius
  const mRadius = props.m?.radius
    ? transformBorderRadius(props.m.radius)
    : undefined;
  const mdRadius = props.md?.radius
    ? transformBorderRadius(props.md?.radius)
    : mRadius;
  const dRadius = props.d?.radius
    ? transformBorderRadius(props.d?.radius)
    : undefined;

  const universalMRadiusValue =
    typeof props.m?.radius !== "undefined" && isSingleRadius(props.m?.radius)
      ? (borderRadius[props.m?.radius as BorderRadiusKeys] ?? props.m?.radius)
      : undefined;

  if (
    mRadius?.topLeft ??
    mRadius?.topRight ??
    mRadius?.bottomLeft ??
    mRadius?.bottomRight
  ) {
    if (typeof universalMRadiusValue !== "undefined") {
      style["--br"] = universalMRadiusValue;
      classNames += `rounded-[var(--br)] `;
    } else {
      if (typeof mRadius?.topLeft !== "undefined") {
        style["--tl-br"] =
          borderRadius[mRadius?.topLeft as BorderRadiusKeys] ??
          mRadius?.topLeft;
        classNames += `rounded-tl-[var(--tl-br)] `;
      }
      if (typeof mRadius?.topRight !== "undefined") {
        style["--tr-br"] =
          borderRadius[mRadius?.topRight as BorderRadiusKeys] ??
          mRadius?.topRight;
        classNames += `rounded-tr-[var(--tr-br)] `;
      }
      if (typeof mRadius?.bottomLeft !== "undefined") {
        style["--bl-br"] =
          borderRadius[mRadius?.bottomLeft as BorderRadiusKeys] ??
          mRadius?.bottomLeft;
        classNames += `rounded-bl-[var(--bl-br)] `;
      }
      if (typeof mRadius?.bottomRight !== "undefined") {
        style["--br-br"] =
          borderRadius[mRadius?.bottomRight as BorderRadiusKeys] ??
          mRadius?.bottomRight;
        classNames += `rounded-br-[var(--br-br)] `;
      }
    }
  }

  const universalMdRadiusValue =
    typeof props?.md?.radius !== "undefined" && isSingleRadius(props.md.radius)
      ? (borderRadius[props.md?.radius as BorderRadiusKeys] ?? props.md.radius)
      : undefined;

  if (
    mdRadius?.topLeft ??
    mdRadius?.topRight ??
    mdRadius?.bottomLeft ??
    mdRadius?.bottomRight
  ) {
    if (typeof universalMdRadiusValue !== "undefined") {
      style["--md-br"] = universalMdRadiusValue;
      classNames += `md:rounded-[var(--md-br)] `;
    } else {
      if (typeof mdRadius?.topLeft !== "undefined") {
        style["--md-tl-br"] =
          borderRadius[mdRadius?.topLeft as BorderRadiusKeys] ??
          mdRadius?.topLeft;
        classNames += `md:rounded-tl-[var(--md-tl-br)] `;
      }
      if (typeof mdRadius?.topRight !== "undefined") {
        style["--md-tr-br"] =
          borderRadius[mdRadius?.topRight as BorderRadiusKeys] ??
          mdRadius?.topRight;
        classNames += `md:rounded-tr-[var(--md-tr-br)] `;
      }
      if (typeof mdRadius?.bottomLeft !== "undefined") {
        style["--md-bl-br"] =
          borderRadius[mdRadius?.bottomLeft as BorderRadiusKeys] ??
          mdRadius?.bottomLeft;
        classNames += `md:rounded-bl-[var(--md-bl-br)] `;
      }
      if (typeof mdRadius?.bottomRight !== "undefined") {
        style["--md-br-br"] =
          borderRadius[mdRadius?.bottomRight as BorderRadiusKeys] ??
          mdRadius?.bottomRight;
        classNames += `md:rounded-br-[var(--md-br-br)] `;
      }
    }
  }

  const universalDRadiusValue =
    typeof props?.d?.radius !== "undefined" && isSingleRadius(props.d.radius)
      ? (borderRadius[props.d?.radius as BorderRadiusKeys] ?? props.d.radius)
      : undefined;

  if (
    dRadius?.topLeft ??
    dRadius?.topRight ??
    dRadius?.bottomLeft ??
    dRadius?.bottomRight
  ) {
    if (typeof universalDRadiusValue !== "undefined") {
      style["--d-br"] = universalDRadiusValue;
      classNames += `lg:rounded-[var(--d-br)] `;
    } else {
      if (typeof dRadius?.topLeft !== "undefined") {
        style["--d-tl-br"] =
          borderRadius[dRadius.topLeft as BorderRadiusKeys] ?? dRadius?.topLeft;
        classNames += `lg:rounded-tl-[var(--d-tl-br)] `;
      }
      if (typeof dRadius?.topRight !== "undefined") {
        style["--d-tr-br"] =
          borderRadius[dRadius.topRight as BorderRadiusKeys] ??
          dRadius?.topRight;
        classNames += `lg:rounded-tr-[var(--d-tr-br)] `;
      }
      if (typeof dRadius?.bottomLeft !== "undefined") {
        style["--d-bl-br"] =
          borderRadius[dRadius.bottomLeft as BorderRadiusKeys] ??
          dRadius?.bottomLeft;
        classNames += `lg:rounded-bl-[var(--d-bl-br)] `;
      }
      if (typeof dRadius?.bottomRight !== "undefined") {
        style["--d-br-br"] =
          borderRadius[dRadius.bottomRight as BorderRadiusKeys] ??
          dRadius?.bottomRight;
        classNames += `lg:rounded-br-[var(--d-br-br)] `;
      }
    }
  }
  const mHoverRadius = props?.hover?.m?.radius
    ? transformBorderRadius(props.hover.m.radius)
    : undefined;

  const mdHoverRadius = props?.hover?.md?.radius
    ? transformBorderRadius(props.hover.md.radius)
    : mHoverRadius;

  const dHoverRadius = props?.hover?.d?.radius
    ? transformBorderRadius(props.hover.d?.radius)
    : undefined;

  const universalMRadiusHoverValue =
    props.hover.m?.radius && isSingleRadius(props.hover.m.radius)
      ? (borderRadius[props.hover?.m?.radius as BorderRadiusKeys] ??
        props.hover.m.radius)
      : undefined;

  if (
    mHoverRadius?.topLeft ??
    mHoverRadius?.topRight ??
    mHoverRadius?.bottomLeft ??
    mHoverRadius?.bottomRight
  ) {
    if (typeof universalMRadiusHoverValue !== "undefined") {
      style["--h-br"] = universalMRadiusHoverValue;
      classNames += `hover:rounded-[var(--h-br)] `;
    } else {
      if (typeof mHoverRadius?.topLeft !== "undefined") {
        style["--h-tl-br"] =
          borderRadius[mHoverRadius?.topLeft as BorderRadiusKeys] ??
          mHoverRadius?.topLeft;
        classNames += `hover:rounded-tl-[var(--h-tl-br)] `;
      }
      if (typeof mHoverRadius?.topRight !== "undefined") {
        style["--h-tr-br"] =
          borderRadius[mHoverRadius?.topRight as BorderRadiusKeys] ??
          mHoverRadius?.topRight;
        classNames += `hover:rounded-tr-[var(--h-tr-br)] `;
      }
      if (typeof mHoverRadius?.bottomLeft !== "undefined") {
        style["--h-bl-br"] =
          borderRadius[mHoverRadius?.bottomLeft as BorderRadiusKeys] ??
          mHoverRadius?.bottomLeft;
        classNames += `hover:rounded-bl-[var(--h-bl-br)] `;
      }
      if (typeof mHoverRadius?.bottomRight !== "undefined") {
        style["--h-br-br"] =
          borderRadius[mHoverRadius?.bottomRight as BorderRadiusKeys] ??
          mHoverRadius?.bottomRight;
        classNames += `hover:rounded-br-[var(--h-br-br)] `;
      }
    }
  }

  const universalMdRadiusHoverValue =
    typeof props?.hover?.md?.radius !== "undefined" &&
    isSingleRadius(props.hover?.md.radius)
      ? (borderRadius[props.hover.md.radius as BorderRadiusKeys] ??
        props.hover.md.radius)
      : undefined;

  if (
    mdHoverRadius?.topLeft ??
    mdHoverRadius?.topRight ??
    mdHoverRadius?.bottomLeft ??
    mdHoverRadius?.bottomRight
  ) {
    if (typeof universalMdRadiusHoverValue !== "undefined") {
      style["--h-md-br"] = universalMdRadiusHoverValue;
      classNames += `md:hover:rounded-[var(--h-md-br)] `;
    } else {
      if (typeof mdHoverRadius?.topLeft !== "undefined") {
        style["--h-md-tl-br"] =
          borderRadius[mdHoverRadius?.topLeft as BorderRadiusKeys] ??
          mdHoverRadius?.topLeft;
        classNames += `md:hover:rounded-tl-[var(--h-md-tl-br)] `;
      }
      if (typeof mdHoverRadius?.topRight !== "undefined") {
        style["--h-md-tr-br"] =
          borderRadius[mdHoverRadius?.topRight as BorderRadiusKeys] ??
          mdHoverRadius?.topRight;
        classNames += `md:hover:rounded-tr-[var(--h-md-tr-br)] `;
      }
      if (typeof mdHoverRadius?.bottomLeft !== "undefined") {
        style["--h-md-bl-br"] =
          borderRadius[mdHoverRadius?.bottomLeft as BorderRadiusKeys] ??
          mdHoverRadius?.bottomLeft;
        classNames += `md:hover:rounded-bl-[var(--h-md-bl-br)] `;
      }
      if (typeof mdHoverRadius?.bottomRight !== "undefined") {
        style["--h-md-br-br"] =
          borderRadius[mdHoverRadius?.bottomRight as BorderRadiusKeys] ??
          mdHoverRadius?.bottomRight;
        classNames += `md:hover:rounded-br-[var(--h-md-br-br)] `;
      }
    }
  }

  const universalDRadiusHoverValue =
    props.hover?.d?.radius && isSingleRadius(props.hover.d.radius)
      ? (borderRadius[props.hover.d.radius as BorderRadiusKeys] ??
        props.hover.d.radius)
      : undefined;

  const mdHoverRadiusValue =
    universalMdRadiusHoverValue ?? universalDRadiusHoverValue;

  if (
    typeof universalDRadiusHoverValue !== "undefined" &&
    mdHoverRadiusValue !== universalDRadiusHoverValue
  ) {
    style["--h-d-br"] = universalDRadiusHoverValue;
    classNames += `lg:hover:rounded-[var(--h-d-br)] `;
  } else if (typeof universalDRadiusHoverValue === "undefined") {
    if (typeof dHoverRadius?.topLeft !== "undefined") {
      style["--h-d-tl-br"] =
        borderRadius[dHoverRadius?.topLeft as BorderRadiusKeys] ??
        dHoverRadius?.topLeft;
      classNames += `lg:hover:rounded-tl-[var(--h-d-tl-br)] `;
    }
    if (typeof dHoverRadius?.topRight !== "undefined") {
      style["--h-d-tr-br"] =
        borderRadius[dHoverRadius?.topRight as BorderRadiusKeys] ??
        dHoverRadius?.topRight;
      classNames += `lg:hover:rounded-tr-[var(--h-d-tr-br)] `;
    }
    if (typeof dHoverRadius?.bottomLeft !== "undefined") {
      style["--h-d-bl-br"] =
        borderRadius[dHoverRadius?.bottomLeft as BorderRadiusKeys] ??
        dHoverRadius?.bottomLeft;
      classNames += `lg:hover:rounded-bl-[var(--h-d-bl-br)] `;
    }
    if (typeof dHoverRadius?.bottomRight !== "undefined") {
      style["--h-d-br-br"] =
        borderRadius[dHoverRadius?.bottomRight as BorderRadiusKeys] ??
        dHoverRadius?.bottomRight;
      classNames += `lg:hover:rounded-br-[var(--h-d-br-br)] `;
    }
  }

  // ---------------------------------------------------------------------------
  const { colors } = useUiKitTheme();

  // colors
  const m = props.m?.color ? transformBorderColor(props.m?.color) : undefined;
  const md = props.md?.color ? transformBorderColor(props.md?.color) : m;
  const d = props.d?.color ? transformBorderColor(props.d?.color) : undefined;

  const mHover = props.hover.m?.color
    ? transformBorderColor(props.hover.m?.color)
    : undefined;
  const mdHover = props.hover.md?.color
    ? transformBorderColor(props.hover.md?.color)
    : mHover;
  const dHover = props.hover.d?.color
    ? transformBorderColor(props.hover.d?.color)
    : undefined;

  if (typeof m !== "undefined") {
    classNames += "border ";
  }

  if (typeof md !== "undefined") {
    classNames += "md:border ";
  }

  if (typeof d !== "undefined") {
    classNames += "lg:border ";
  }

  if (typeof mHover !== "undefined") {
    classNames += "hover:border ";
  }

  if (typeof mdHover !== "undefined") {
    classNames += "md:hover:border ";
  }

  if (typeof dHover !== "undefined") {
    classNames += "lg:hover:border ";
  }

  const universalMColorValue =
    props.m?.color && isSingleColor(props.m.color) ? props.m.color : undefined;

  if (m?.top ?? m?.left ?? m?.right ?? m?.bottom) {
    if (universalMColorValue) {
      style["--b-color"] =
        colors[universalMColorValue as ColorKeys] ?? universalMColorValue;
      classNames += `[border-color:var(--b-color)] `;
    } else {
      if (m?.top) {
        style["--top-b-color"] = colors[m.top as ColorKeys] ?? m.top;
        classNames += `[border-top-color:var(--top-b-color)] `;
      }
      if (m?.bottom) {
        style["--bottom-b-color"] = colors[m.bottom as ColorKeys] ?? m.bottom;
        classNames += `[border-bottom-color:var(--bottom-b-color)] `;
      }
      if (m?.left) {
        style["--bottom-l-color"] = colors[m.left as ColorKeys] ?? m.left;
        classNames += `[border-left-color:var(--bottom-l-color)] `;
      }
      if (m?.right) {
        style["--bottom-r-color"] = colors[m.right as ColorKeys] ?? m.right;
        classNames += `[border-right-color:var(--bottom-r-color)] `;
      }
    }
  }

  const universalMdColorValue =
    props.md?.color && isSingleColor(props.md.color)
      ? props.md.color
      : undefined;

  if (md?.top ?? md?.left ?? md?.right ?? md?.bottom) {
    if (
      universalMdColorValue &&
      universalMColorValue !== universalMdColorValue
    ) {
      style["--md-b-color"] =
        colors[universalMdColorValue as ColorKeys] ?? universalMdColorValue;
      classNames += `md:[border-color:var(--md-b-color)] `;
    } else if (!universalMdColorValue) {
      if (md.top && md.top !== m?.top) {
        style["--md-top-b-color"] = colors[md.top as ColorKeys] ?? md.top;
        classNames += `md:[border-top-color:var(--md-top-b-color)] `;
      }

      if (md.bottom && md?.bottom !== m?.bottom) {
        style["--md-bottom-b-color"] =
          colors[md.bottom as ColorKeys] ?? md.bottom;
        classNames += `md:[border-bottom-color:var(--md-bottom-b-color)] `;
      }

      if (md?.left && md?.left !== m?.left) {
        style["--md-left-b-color"] = colors[md.left as ColorKeys] ?? md.left;
        classNames += `md:[border-left-color:var(--md-left-b-color)] `;
      }

      if (md?.right && md?.right !== m?.right) {
        style["--md-right-b-color"] = colors[md.right as ColorKeys] ?? md.right;
        classNames += `md:[border-right-color:var(--md-right-b-color)] `;
      }
    }
  }

  const universalDValue =
    props.d?.color && isSingleColor(props.d.color) ? props.d.color : undefined;

  const mdColorUniversal = universalMdColorValue ?? universalMColorValue;

  if (universalDValue && mdColorUniversal !== universalDValue) {
    style["--d-b-color"] =
      colors[universalDValue as ColorKeys] ?? universalDValue;
    classNames += `lg:[border-color:var(--d-b-color)] `;
  } else if (!universalDValue) {
    if (d?.top && d?.top !== md?.top) {
      style["--d-top-b-color"] = colors[d.top as ColorKeys] ?? d.top;
      classNames += `lg:[border-top-color:var(--d-top-b-color)] `;
    }

    if (d?.bottom && d?.bottom !== md?.bottom) {
      style["--d-bottom-b-color"] = colors[d.bottom as ColorKeys] ?? d.bottom;
      classNames += `lg:[border-bottom-color:var(--d-bottom-b-color)] `;
    }

    if (d?.left && d?.left !== md?.left) {
      style["--d-left-b-color"] = colors[d.left as ColorKeys] ?? d.left;
      classNames += `lg:[border-left-color:var(--d-left-b-color)] `;
    }

    if (d?.right && d?.right !== md?.right) {
      style["--d-right-b-color"] = colors[d.right as ColorKeys] ?? d.right;
      classNames += `lg:[border-right-color:var(--d-right-b-color)] `;
    }
  }

  const universalMHoverColorValue =
    props.hover.m?.color && isSingleColor(props.hover.m.color)
      ? props.hover.m.color
      : undefined;

  if (mHover?.top ?? mHover?.left ?? mHover?.right ?? mHover?.bottom) {
    if (universalMHoverColorValue) {
      style["--hover-b-color"] =
        colors[universalMHoverColorValue as ColorKeys] ??
        universalMHoverColorValue;
      classNames += `hover:[border-color:var(--hover-b-color)] `;
    } else {
      if (mHover?.top) {
        style["--hover-top-b-color"] =
          colors[mHover.top as ColorKeys] ?? mHover.top;
        classNames += `hover:[border-top-color:var(--hover-top-b-color)] `;
      }
      if (mHover?.bottom) {
        style["--hover-bottom-b-color"] =
          colors[mHover.bottom as ColorKeys] ?? mHover.bottom;
        classNames += `hover:[border-bottom-color:var(--hover-bottom-b-color)] `;
      }
      if (mHover?.left) {
        style["--hover-left-b-color"] =
          colors[mHover.left as ColorKeys] ?? mHover.left;
        classNames += `hover:[border-left-color:var(--hover-left-b-color)] `;
      }
      if (mHover?.right) {
        style["--hover-right-b-color"] =
          colors[mHover.right as ColorKeys] ?? mHover.right;
        classNames += `hover:[border-right-color:var(--hover-right-b-color)] `;
      }
    }
  }

  const universalMdHoverColorValue =
    props.hover.md?.color && isSingleColor(props.hover.md.color)
      ? props.hover.md.color
      : undefined;

  if (mdHover?.top ?? mdHover?.left ?? mdHover?.right ?? mdHover?.bottom) {
    if (
      universalMdHoverColorValue &&
      universalMHoverColorValue !== universalMdHoverColorValue
    ) {
      style["--hover-md-b-color"] =
        colors[universalMdHoverColorValue as ColorKeys] ??
        universalMdHoverColorValue;
      classNames += `hover:md:[border-color:var(--hover-md-b-color)] `;
    } else if (!universalMdHoverColorValue) {
      if (mdHover.top && mdHover.top !== mHover?.top) {
        style["--hover-md-top-b-color"] =
          colors[mdHover.top as ColorKeys] ?? mdHover.top;
        classNames += `hover:md:[border-top-color:var(--hover-md-top-b-color)] `;
      }
      if (mdHover.bottom && mdHover?.bottom !== mHover?.bottom) {
        style["--hover-md-bottom-b-color"] =
          colors[mdHover.bottom as ColorKeys] ?? mdHover.bottom;
        classNames += `hover:md:[border-bottom-color:var(--hover-md-bottom-b-color)] `;
      }
      if (mdHover?.left && mdHover?.left !== mHover?.left) {
        style["--hover-md-left-b-color"] =
          colors[mdHover.left as ColorKeys] ?? mdHover.left;
        classNames += `hover:md:[border-left-color:var(--hover-md-left-b-color)] `;
      }
      if (mdHover?.right && mdHover?.right !== mHover?.right) {
        style["--hover-md-right-b-color"] =
          colors[mdHover.right as ColorKeys] ?? mdHover.right;
        classNames += `hover:md:[border-right-color:var(--hover-md-right-b-color)] `;
      }
    }
  }

  const universalDHoverValue =
    props.hover.d?.color && isSingleColor(props.hover.d.color)
      ? props.hover.d.color
      : undefined;

  const mdHoverColorUniversal =
    universalMdHoverColorValue ?? universalMHoverColorValue;

  if (universalDHoverValue && mdHoverColorUniversal !== universalDHoverValue) {
    style["--hover-d-b-color"] =
      colors[universalDHoverValue as ColorKeys] ?? universalDHoverValue;
    classNames += `hover:lg:[border-color:var(--hover-d-b-color)] `;
  } else if (!universalDHoverValue) {
    if (dHover?.top && dHover?.top !== mdHover?.top) {
      style["--hover-d-top-b-color"] =
        colors[dHover.top as ColorKeys] ?? dHover.top;
      classNames += `hover:lg:[border-top-color:var(--hover-d-top-b-color)] `;
    }
    if (dHover?.bottom && dHover?.bottom !== mdHover?.bottom) {
      style["--hover-d-bottom-b-color"] =
        colors[dHover.bottom as ColorKeys] ?? dHover.bottom;
      classNames += `hover:lg:[border-bottom-color:var(--hover-d-bottom-b-color)] `;
    }
    if (dHover?.left && dHover?.left !== mdHover?.left) {
      style["--hover-d-left-b-color"] =
        colors[dHover.left as ColorKeys] ?? dHover.left;
      classNames += `hover:lg:[border-left-color:var(--hover-d-left-b-color)] `;
    }
    if (dHover?.right && dHover?.right !== mdHover?.right) {
      style["--hover-d-right-b-color"] =
        colors[dHover.right as ColorKeys] ?? dHover.right;
      classNames += `hover:lg:[border-right-color:var(--hover-d-right-b-color)] `;
    }
  }

  // width
  const widthStyles = useBorderWidth(props);
  classNames += `${widthStyles.className} `;

  // style
  if (props.m?.style) {
    classNames += `border-${props.m.style} `;
  }

  if (props.md?.style && props.md.style !== props.m?.style) {
    classNames += `md:border-${props.md.style} `;
  }

  const mdStyle = props.md?.style ?? props.m?.style;

  if (props.d?.style && props.d.style !== mdStyle) {
    classNames += `lg:border-${props.d.style} `;
  }

  // radius

  return {
    className: classNames.trim(),
    style: { ...style, ...widthStyles.style },
  };
};
