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

export const useCssEffects = (props: UseCssEffectsProps): UseCssOutput => {
  const boxShadow = useBoxShadow(props);
  const hoveredBoxShadow = useBoxShadow(props.hover, "hover");

  const textShadow = useTextShadow(props);
  const hoveredTextShadow = useTextShadow(props.hover, "hover");

  const opacity = useOpacity(props);
  const hoveredOpacity = useOpacity(props.hover, "hover");
  return {
    style: {
      ...boxShadow.style,
      ...hoveredBoxShadow.style,
      ...textShadow.style,
      ...hoveredTextShadow.style,
      ...opacity.style,
      ...hoveredOpacity.style,
    },
    className:
      `${boxShadow.className} ${textShadow.className} ${hoveredBoxShadow.className} ${hoveredTextShadow.className} ${opacity.className} ${hoveredOpacity.className}`.trim(),
  };
};
