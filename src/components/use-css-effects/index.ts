import type { ColorKeys, UiKitEffectProps } from "~/components";
import { useUiKitTheme } from "~/components";

export type UseCssEffectsBaseProps = {
  m?: UiKitEffectProps;
  md?: UiKitEffectProps;
  d?: UiKitEffectProps;
};

export type UseCssEffectsProps = UseCssEffectsBaseProps & {
  hover?: UseCssEffectsBaseProps;
};

export type UseCssOutput = {
  className?: string;
  style?: Record<string, string | number>;
};

const useBoxShadow = (
  props?: UseCssEffectsProps,
  pseudoClass?: "hover",
): UseCssOutput => {
  if (!props) {
    return {
      style: {},
      className: "",
    };
  }

  const style: UseCssOutput["style"] = {};
  let className = "";
  const { colors } = useUiKitTheme();

  if (props.m?.boxShadow) {
    style[`--box-${pseudoClass ?? ""}sh`] =
      colors[props.m?.boxShadow as ColorKeys] ?? props.m?.boxShadow;
    className += `${pseudoClass ? pseudoClass + ":" : ""}[box-shadow:var(--box-${pseudoClass ?? ""}sh)]`;
  }

  if (props.md?.boxShadow && props.md?.boxShadow !== props.m?.boxShadow) {
    style[`--md-box-${pseudoClass ?? ""}sh`] =
      colors[props.md?.boxShadow as ColorKeys] ?? props.md?.boxShadow;
    className += `md:${pseudoClass ? pseudoClass + ":" : ""}[box-shadow:var(--md-box-${pseudoClass ?? ""}sh)]`;
  }

  const mdShadow = props.md?.boxShadow ?? props.m?.boxShadow;

  if (props?.d?.boxShadow && props.d?.boxShadow !== mdShadow) {
    style[`--d-box-${pseudoClass ?? ""}sh`] =
      colors[props.d?.boxShadow as ColorKeys] ?? props.d?.boxShadow;
    className += `lg:${pseudoClass ? pseudoClass + ":" : ""}[box-shadow:var(--d-box-${pseudoClass ?? ""}sh)]`;
  }

  return {
    style,
    className,
  };
};

const useTextShadow = (
  props?: UseCssEffectsProps,
  pseudoClass?: "hover",
): UseCssOutput => {
  if (!props) {
    return {
      style: {},
      className: "",
    };
  }

  const style: UseCssOutput["style"] = {};
  let className = "";
  const { colors } = useUiKitTheme();

  if (props.m?.textShadow) {
    style[`--text-${pseudoClass ?? ""}sh`] =
      colors[props.m?.textShadow as ColorKeys] ?? props.m?.textShadow;
    className += `${pseudoClass ? pseudoClass + ":" : ""}[text-shadow:var(--text-${pseudoClass ?? ""}sh)]`;
  }

  if (props.md?.textShadow && props.md?.boxShadow !== props.m?.textShadow) {
    style[`--md-text-${pseudoClass ?? ""}sh`] =
      colors[props.md?.textShadow as ColorKeys] ?? props.md?.textShadow;
    className += `md:${pseudoClass ? pseudoClass + ":" : ""}[text-shadow:var(--md-text-${pseudoClass ?? ""}sh)]`;
  }

  const mdShadow = props.md?.textShadow ?? props.m?.textShadow;

  if (props?.d?.textShadow && props.d?.boxShadow !== mdShadow) {
    style[`--d-text-${pseudoClass ?? ""}sh`] =
      colors[props.d?.textShadow as ColorKeys] ?? props.d?.textShadow;
    className += `lg:${pseudoClass ? pseudoClass + ":" : ""}[text-shadow:var(--d-text-${pseudoClass ?? ""}sh)]`;
  }

  return {
    style,
    className,
  };
};

export const useOpacity = (
  props?: UseCssEffectsProps,
  pseudoClass?: "hover",
): UseCssOutput => {
  if (!props) {
    return {
      style: {},
      className: "",
    };
  }

  const style: UseCssOutput["style"] = {};
  let className = "";

  if (typeof props.m?.opacity !== "undefined") {
    style[`--opty-${pseudoClass ?? ""}d`] = props.m?.opacity;
    className += `${pseudoClass ? pseudoClass + ":" : ""}[opacity:var(--opty-${pseudoClass ?? ""}d)] `;
  }

  if (
    typeof props.md?.opacity !== "undefined" &&
    props.md.opacity !== props.m?.opacity
  ) {
    style[`--md-opty-${pseudoClass ?? ""}d`] = props.md.opacity;
    className += `md:${pseudoClass ? pseudoClass + ":" : ""}[opacity:var(--md-opty-${pseudoClass ?? ""}d)] `;
  }

  const mdOpacity = props.md?.opacity ?? props.m?.opacity;

  if (
    typeof props.d?.opacity !== "undefined" &&
    props?.d?.opacity !== mdOpacity
  ) {
    style[`--d-opty-${pseudoClass ?? ""}d`] = props.d.opacity;
    className += `lg:${pseudoClass ? pseudoClass + ":" : ""}[opacity:var(--d-opty-${pseudoClass ?? ""}d)] `;
  }

  return {
    style,
    className,
  };
};

export const useOverflow = (
  props?: UseCssEffectsProps,
  pseudoClass?: "hover",
): UseCssOutput => {
  if (!props) {
    return {
      style: {},
      className: "",
    };
  }

  const style: UseCssOutput["style"] = {};
  let className = "";

  if (props.m?.overflow) {
    style[`--oflow-${pseudoClass ?? ""}ed`] = props.m.overflow;
    className += `${pseudoClass ? pseudoClass + ":" : ""}[overflow:var(--oflow-${pseudoClass ?? ""}ed)] `;
  }

  const baseOverflow = props.m?.overflow;

  if (props.md?.overflow && props.md.overflow !== baseOverflow) {
    style[`--md-oflow-${pseudoClass ?? ""}ed`] = props.md.overflow;
    className += `md:${pseudoClass ? pseudoClass + ":" : ""}[overflow:var(--md-oflow-${pseudoClass ?? ""}ed)] `;
  }

  const mdOverflow = props.md?.overflow ?? baseOverflow;

  if (props.d?.overflow && props.d.overflow !== mdOverflow) {
    style[`--d-oflow-${pseudoClass ?? ""}ed`] = props.d.overflow;
    className += `lg:${pseudoClass ? pseudoClass + ":" : ""}[overflow:var(--d-oflow-${pseudoClass ?? ""}ed)] `;
  }

  return {
    style,
    className,
  };
};

export const useBackdropBlur = (
  props?: UseCssEffectsProps,
  pseudoClass?: "hover",
): UseCssOutput => {
  if (!props) {
    return {
      style: {},
      className: "",
    };
  }

  const style: UseCssOutput["style"] = {};
  let className = "";

  const formatValue = (val: string | number): string =>
    typeof val === "number" ? `${val}px` : val;

  if (props.m?.backdropBlur !== undefined) {
    style[`--bb-${pseudoClass ?? ""}l`] = formatValue(props.m.backdropBlur);
    className += `${pseudoClass ? pseudoClass + ":" : ""}[backdrop-filter:blur(var(--bb-${pseudoClass ?? ""}l))] `;
  }

  if (
    props.md?.backdropBlur !== undefined &&
    props.md.backdropBlur !== props.m?.backdropBlur
  ) {
    style[`--md-bb-${pseudoClass ?? ""}l`] = formatValue(props.md.backdropBlur);
    className += `md:${pseudoClass ? pseudoClass + ":" : ""}[backdrop-filter:blur(var(--md-bb-${pseudoClass ?? ""}l))] `;
  }

  const mdBlur = props.md?.backdropBlur ?? props.m?.backdropBlur;

  if (props.d?.backdropBlur !== undefined && props.d.backdropBlur !== mdBlur) {
    style[`--d-bb-${pseudoClass ?? ""}l`] = formatValue(props.d.backdropBlur);
    className += `lg:${pseudoClass ? pseudoClass + ":" : ""}[backdrop-filter:blur(var(--d-bb-${pseudoClass ?? ""}l))] `;
  }

  return { style, className };
};

export const useCssEffects = (props: UseCssEffectsProps): UseCssOutput => {
  const boxShadow = useBoxShadow(props);
  const hoveredBoxShadow = useBoxShadow(props.hover, "hover");

  const textShadow = useTextShadow(props);
  const hoveredTextShadow = useTextShadow(props.hover, "hover");

  const opacity = useOpacity(props);
  const hoveredOpacity = useOpacity(props.hover, "hover");

  const overflow = useOverflow(props);
  const hoveredOverflow = useOverflow(props.hover, "hover");

  const backdropBlur = useBackdropBlur(props);
  const hoveredBackdropBlur = useBackdropBlur(props.hover, "hover");

  return {
    style: {
      ...boxShadow.style,
      ...hoveredBoxShadow.style,
      ...textShadow.style,
      ...hoveredTextShadow.style,
      ...opacity.style,
      ...hoveredOpacity.style,
      ...overflow.style,
      ...hoveredOverflow.style,
      ...backdropBlur.style,
      ...hoveredBackdropBlur.style,
    },
    className:
      `${boxShadow.className} ${textShadow.className} ${hoveredBoxShadow.className} ${hoveredTextShadow.className} ${opacity.className} ${hoveredOpacity.className} ${overflow.className} ${hoveredOverflow.className} ${backdropBlur.className} ${hoveredBackdropBlur.className}`.trim(),
  };
};
