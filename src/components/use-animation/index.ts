import { useId } from "react";

import type { UiKitAnimationProps } from "~/components";
import type { UseCssOutput } from "~/components/use-css-effects";

export type UseAnimationOutput = {
  keyFrames?: string;
  className?: string;
  style?: Record<string, string | number>;
};

export type UseAnimationBaseProps = {
  m?: UiKitAnimationProps;
  md?: UiKitAnimationProps;
  d?: UiKitAnimationProps;
};

export type UseAnimationProps = UseAnimationBaseProps & {
  hover?: UseAnimationBaseProps;
  active?: UseAnimationBaseProps;
};

const generateKeyframes = (
  props?: UiKitAnimationProps,
  extraName = "",
): string => {
  if (!props?.animation?.keyframes) {
    return "";
  }

  return `@keyframes ${props.animation.name + extraName} { ${Object.entries(
    props.animation.keyframes,
  )
    .map(([key, css]) => {
      return `${key} {${Object.entries(css ?? {})
        .map(([cssKey, cssValue]) => {
          return `${cssKey}: ${cssValue};`;
        })
        .join(" ")}}`;
    })
    .join(" ")} }; `;
};

const sanitizeId = (id: string): string => {
  return id.replace(/:/g, "");
};

const generateAnimParams = (
  props?: UiKitAnimationProps,
  extraName = "",
): string => {
  if (!props?.animation) {
    return "";
  }
  return `${props.animation.name + extraName} ${props.animation.duration ?? 0.3}s ${props.animation.transition ?? "linear"} ${props.animation.direction ?? "forwards"}`;
};
export const useAnimation = (props: UseAnimationProps): UseAnimationOutput => {
  const id = useId();
  const style: UseCssOutput["style"] = {};
  let className = "";
  const mAnimParams = generateAnimParams(
    props.m,
    props.m?.animation?.keyframes ? sanitizeId(`-m-${id}`) : "",
  );
  const mKeyframes = generateKeyframes(
    props.m,
    props.m?.animation?.keyframes ? sanitizeId(`-m-${id}`) : "",
  );

  if (mAnimParams) {
    style[`--anim`] = mAnimParams;
    className += `[animation:var(--anim)]`;
  }

  const mdAnimParams = generateAnimParams(
    props.md,
    props.md?.animation?.keyframes ? sanitizeId(`-md-${id}`) : "",
  );
  const mdKeyframes = generateKeyframes(
    props.md,
    props.md?.animation?.keyframes ? sanitizeId(`-md-${id}`) : "",
  );

  if (mdAnimParams && mdAnimParams !== mAnimParams) {
    style[`--md-anim`] = mdAnimParams;
    className += ` md:[animation:var(--md-anim)]`;
  }

  const mdAppearAnimation = mdAnimParams ?? mAnimParams;

  const dAnimParams = generateAnimParams(
    props.d,
    props.d?.animation?.keyframes ? sanitizeId(`-d-${id}`) : "",
  );
  const dKeyframes = generateKeyframes(
    props.d,
    props.d?.animation?.keyframes ? sanitizeId(`-d-${id}`) : "",
  );

  if (dAnimParams && dAnimParams !== mdAppearAnimation) {
    style[`--d-anim`] = dAnimParams;
    className += ` lg:[animation:var(--d-anim)]`;
  }

  const keyFrames = `${mKeyframes}${mdKeyframes}${dKeyframes}`;

  // hover

  const mHoverAnimParams = generateAnimParams(props.hover?.m);

  if (mHoverAnimParams) {
    style[`--h-anim`] = mHoverAnimParams;
    className += ` hover:[animation:var(--h-anim)]`;
  }

  const mdHoverAnimParams = generateAnimParams(props.hover?.md);

  if (mdHoverAnimParams && mdHoverAnimParams !== mHoverAnimParams) {
    style[`--h-md-anim`] = mdHoverAnimParams;
    className += ` md:hover:[animation:var(--h-md-anim)]`;
  }

  const mdHoverAppearAnimation = mdHoverAnimParams ?? mHoverAnimParams;

  const dHoverAnimParams = generateAnimParams(props.hover?.d);

  if (dHoverAnimParams && dHoverAnimParams !== mdHoverAppearAnimation) {
    style[`--h-d-anim`] = dHoverAnimParams;
    className += ` lg:hover:[animation:var(--h-d-anim)]`;
  }

  // active

  const mActiveAnimParams = generateAnimParams(props.active?.m);

  if (mActiveAnimParams) {
    style[`--a-anim`] = mActiveAnimParams;
    className += ` active:[animation:var(--a-anim)]`;
  }

  const mdActiveAnimParams = generateAnimParams(props.active?.md);

  if (mdActiveAnimParams && mdActiveAnimParams !== mActiveAnimParams) {
    style[`--a-md-anim`] = mdActiveAnimParams;
    className += ` md:active:[animation:var(--a-md-anim)]`;
  }

  const mdActiveAppearAnimation = mdActiveAnimParams ?? mActiveAnimParams;

  const dActiveAnimParams = generateAnimParams(props.active?.d);

  if (dActiveAnimParams && dActiveAnimParams !== mdActiveAppearAnimation) {
    style[`--a-d-anim`] = dActiveAnimParams;
    className += ` lg:active:[animation:var(--a-d-anim)]`;
  }

  return {
    style,
    className,
    keyFrames,
  };
};
