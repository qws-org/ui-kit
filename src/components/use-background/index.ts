import type { ColorKeys, UiKitBackgroundProps } from "~/components";
import { useUiKitTheme } from "~/components";

export type UseBackgroundOutput = {
  className: string;
  style: Record<string, string | number>;
};
export type BaseUseBackgroundProps = {
  m: UiKitBackgroundProps;
  md: UiKitBackgroundProps;
  d: UiKitBackgroundProps;
};
export type UseBackgroundProps = BaseUseBackgroundProps & {
  hover: BaseUseBackgroundProps;
};

const isGradient = (value: string): boolean => value.includes("gradient(");

const isImage = (value: string): boolean => {
  return (
    /\.(jpe?g|png|gif|webp|avif|svg|bmp|ico|tiff?)$/i.test(value) ||
    /^(https?:\/\/)/.test(value)
  );
};

const formatBackgroundValue = (value: string): string => {
  if (!value) return "";

  if (isImage(value)) {
    return `url(${value})`;
  }

  return value;
};

export const useBackground = (
  props: UseBackgroundProps,
): UseBackgroundOutput => {
  const style: UseBackgroundOutput["style"] = {};
  let className = "";

  const { colors } = useUiKitTheme();
  // background
  if (props.m.bg) {
    const value = colors[props.m.bg as ColorKeys] ?? props.m.bg;
    style["--bg"] = formatBackgroundValue(value);
    className +=
      isImage(value) || isGradient(value)
        ? "bg-[image:var(--bg)] "
        : "bg-[color:var(--bg)] ";
  }

  if (props.md.bg && props.m.bg !== props.md.bg) {
    const value = colors[props.md.bg as ColorKeys] ?? props.md.bg;
    style["--md-bg"] = formatBackgroundValue(value);
    className +=
      isImage(value) || isGradient(value)
        ? "md:bg-[image:var(--md-bg)] "
        : "md:bg-none md:bg-[color:var(--md-bg)] ";
  }

  const mdValue = props.md.bg ?? props.m.bg;

  if (props.d.bg && props.d.bg !== mdValue) {
    const value = colors[props.d.bg as ColorKeys] ?? props.d.bg;
    style["--d-bg"] = formatBackgroundValue(value);
    className +=
      isImage(value) || isGradient(value)
        ? "lg:bg-[image:var(--d-bg)] "
        : "lg:bg-none lg:bg-[color:var(--d-bg)] ";
  }

  // hover bg
  if (props.hover.m.bg) {
    const value = colors[props.hover.m.bg as ColorKeys] ?? props.hover.m.bg;

    style["--h-bg"] = formatBackgroundValue(props.hover.m.bg);
    className +=
      isImage(value) || isGradient(value)
        ? "hover:bg-[image:var(--h-bg)] "
        : "hover:bg-none hover:bg-[color:var(--h-bg)] ";
  }

  if (props.hover.md.bg && props.hover.md.bg !== props.hover.m.bg) {
    const value = colors[props.hover.md.bg as ColorKeys] ?? props.hover.md.bg;
    style["--md-h-bg"] = formatBackgroundValue(props.hover.md.bg);
    className +=
      isImage(value) || isGradient(value)
        ? "md:hover:bg-[image:var(--md-h-bg)] "
        : "md:hover:bg-none md:hover:bg-[color:var(--md-h-bg)] ";
  }

  const mdHoverValue = props.hover.md.bg ?? props.hover.m.bg;

  if (props.hover.d.bg && props.hover.d.bg !== mdHoverValue) {
    const value = colors[props.hover.d.bg as ColorKeys] ?? props.hover.d.bg;

    style["--d-h-bg"] = formatBackgroundValue(value);
    className +=
      isImage(value) || isGradient(value)
        ? "lg:hover:bg-[image:var(--d-h-bg)] "
        : "lg:hover:bg-none lg:hover:bg-[color:var(--d-h-bg)] ";
  }

  // bg hover group
  if (props.hover.m.bgGroup) {
    const value =
      colors[props.hover.m.bgGroup as ColorKeys] ?? props.hover.m.bgGroup;

    style["--bg-group"] = formatBackgroundValue(value);
    className +=
      isImage(value) || isGradient(value)
        ? "group-hover:bg-[image:var(--bg-group)] "
        : "group-hover:bg-none hover:bg-none group-hover:bg-[color:var(--bg-group)] ";
  }

  if (
    props.hover.md.bgGroup &&
    props.hover.md.bgGroup !== props.hover.m.bgGroup
  ) {
    const value =
      colors[props.hover.md.bgGroup as ColorKeys] ?? props.hover.md.bgGroup;

    style["--md-bg-group"] = formatBackgroundValue(value);
    className +=
      isImage(value) || isGradient(value)
        ? "md:group-hover:bg-[image:var(--md-bg-group)] "
        : "md:group-hover:bg-none md:hover:bg-none md:group-hover:bg-[color:var(--md-bg-group)] ";
  }

  const mdGroupValue = props.hover.md.bgGroup ?? props.hover.m.bgGroup;
  if (props.hover.d.bgGroup && props.hover.d.bgGroup !== mdGroupValue) {
    const value =
      colors[props.hover.d.bgGroup as ColorKeys] ?? props.hover.d.bgGroup;

    style["--d-bg-group"] = formatBackgroundValue(value);
    className +=
      isImage(value) || isGradient(value)
        ? "lg:group-hover:bg-[image:var(--d-bg-group)] "
        : "lg:group-hover:bg-none md:hover:bg-none lg:group-hover:bg-[color:var(--d-bg-group)] ";
  }

  if (!/bg-\[(?:color|image):var\(--[a-zA-Z0-9\-_]+\)\]/.test(className)) {
    return {
      className: "",
      style: {},
    };
  }

  // repeat
  if (props.m.bgRepeat) {
    className += `bg-${props.m.bgRepeat} `;
  }

  if (props.md.bgRepeat && props.m.bgRepeat !== props.md.bgRepeat) {
    className += `md:bg-${props.md.bgRepeat} `;
  }

  const mdRepeat = props.md.bgRepeat ?? props.m.bgRepeat;

  if (props.d.bgRepeat && props.d.bgRepeat !== mdRepeat) {
    className += `lg:bg-${props.d.bgRepeat} `;
  }

  // size
  if (props.m.bgSize) {
    className += `bg-${props.m.bgSize} `;
  }

  if (props.md.bgSize && props.m.bgSize !== props.md.bgSize) {
    className += `md:bg-${props.md.bgSize} `;
  }
  const mdSize = props.md.bgSize ?? props.m.bgSize;

  if (props.d.bgSize && props.d.bgSize !== mdSize) {
    className += `lg:bg-${props.d.bgSize} `;
  }

  // position
  if (props.m.bgPosition) {
    className += `bg-${props.m.bgPosition} `;
  }

  if (props.md.bgPosition && props.m.bgPosition !== props.md.bgPosition) {
    className += `md:bg-${props.md.bgPosition} `;
  }

  const mdPosition = props.md.bgPosition ?? props.m.bgPosition;

  if (props.d.bgPosition && props.d.bgPosition !== mdPosition) {
    className += `lg:bg-${props.d.bgPosition} `;
  }

  // bg hover size
  if (props.hover.m.bgSize) {
    className += `hover:bg-${props.hover.m.bgSize} `;
  }
  if (props.hover.md.bgSize && props.hover.md.bgSize !== props.hover.m.bgSize) {
    className += `md:hover:bg-${props.hover.md.bgSize} `;
  }

  const mdHoverSize = props.hover.md.bgSize ?? props.hover.m.bgSize;
  if (props.hover.d.bgSize && props.hover.d.bgSize !== mdHoverSize) {
    className += `lg:hover:bg-${props.hover.d.bgSize} `;
  }

  // hover bg position
  if (props.hover.m.bgPosition) {
    className += `hover:bg-${props.hover.m.bgPosition} `;
  }

  if (
    props.hover.md.bgPosition &&
    props.hover.md.bgPosition !== props.hover.m.bgPosition
  ) {
    className += `md:hover:bg-${props.hover.md.bgPosition} `;
  }

  const mdHoverPosition = props.hover.md.bgPosition ?? props.hover.m.bgPosition;
  if (
    props.hover.d.bgPosition &&
    props.hover.d.bgPosition !== mdHoverPosition
  ) {
    className += `lg:hover:bg-${props.hover.d.bgPosition} `;
  }

  // hover bg repeat
  if (props.hover.m.bgRepeat) {
    className += `hover:bg-${props.hover.m.bgRepeat} `;
  }

  if (
    props.hover.md.bgRepeat &&
    props.hover.md.bgRepeat !== props.hover.m.bgRepeat
  ) {
    className += `md:hover:bg-${props.hover.md.bgRepeat} `;
  }

  const mdHoverRepeat = props.hover.md.bgRepeat ?? props.hover.m.bgRepeat;

  if (props.hover.d.bgRepeat && props.hover.d.bgRepeat !== mdHoverRepeat) {
    className += `lg:hover:bg-${props.hover.d.bgRepeat} `;
  }

  return {
    className,
    style,
  };
};
