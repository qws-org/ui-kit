import type { UiKitAnimationProps } from "~/components";
import type { UseCssOutput } from "~/components/use-css-effects";

export type UseAnimationOutput = {
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

const generateAnimParams = (props?: UiKitAnimationProps): string => {
  if (!props?.animation) {
    return "";
  }
  return `${props.animation.name} ${props.animation.duration ?? 0.3}s ${props.animation.transition ?? "linear"} ${props.animation.direction ?? "forwards"}`;
};
export const useAnimation = (props: UseAnimationProps): UseAnimationOutput => {
  const style: UseCssOutput["style"] = {};
  let className = "";
  const mAnimParams = generateAnimParams(props.m);

  if (mAnimParams) {
    style[`--anim`] = mAnimParams;
    className += `[animation:var(--anim)]`;
  }

  const mdAnimParams = generateAnimParams(props.md);

  if (mdAnimParams && mdAnimParams !== mAnimParams) {
    style[`--md-anim`] = mdAnimParams;
    className += ` md:[animation:var(--md-anim)]`;
  }

  const mdAppearAnimation = mdAnimParams ?? mAnimParams;

  const dAnimParams = generateAnimParams(props.d);

  if (dAnimParams && dAnimParams !== mdAppearAnimation) {
    style[`--d-anim`] = dAnimParams;
    className += ` lg:[animation:var(--d-anim)]`;
  }

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
  };
};
