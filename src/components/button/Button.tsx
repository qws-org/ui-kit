import type { ElementType, PropsWithChildren, ReactNode } from "react";
import { forwardRef, useRef } from "react";
import type { AriaButtonOptions } from "react-aria";
import { useButton } from "react-aria";
import { tv } from "tailwind-variants";

import type {
  FontWeightKeys,
  UiKitAnimationProps,
  UIKitArrayIndentation,
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
} from "~/components";
import {
  useBackground,
  useDimensions,
  useDisplay,
  usePosition,
  useSpacing,
  useUiKitComponents,
} from "~/components";
import { useAnimation } from "~/components/use-animation";
import { useBorder } from "~/components/use-border";
import { useCursor } from "~/components/use-cursor";
import { useResolvedAttributes } from "~/components/use-resolved-attributes";
import { useTypography } from "~/components/use-typography";

const buttonStyles = tv({
  base: "outline-none box-border border-0 flex justify-center items-center cursor-pointer transition-all duration-200 text-[var(--colors-text-primary-default)] font-noto-sans-sc",
  variants: {
    sizeButtonFontSize: {
      large:
        "[font-size:var(--fontSize-mobile-large-button)] md:[font-size:var(--fontSize-desktop-large-button)]",
      medium:
        "[font-size:var(--fontSize-mobile-medium-button)] md:[font-size:var(--fontSize-desktop-medium-button)]",
      small:
        "[font-size:var(--fontSize-mobile-small-button)] md:[font-size:var(--fontSize-desktop-small-button)]",
      xsmall:
        "[font-size:var(--fontSize-mobile-xsmall-button)] md:[font-size:var(--fontSize-desktop-xsmall-button)]",
    },
    sizeButtonLineHeight: {
      large:
        "[line-height:var(--lineHeight-mobile-large-button)] md:[line-height:var(--lineHeight-desktop-large-button)]",
      medium:
        "[line-height:var(--lineHeight-mobile-medium-button)] md:[line-height:var(--lineHeight-desktop-medium-button)]",
      small:
        "[line-height:var(--lineHeight-mobile-small-button)] md:[line-height:var(--lineHeight-desktop-small-button)]",
      xsmall:
        "[line-height:var(--lineHeight-mobile-xsmall-button)] md:[line-height:var(--lineHeight-desktop-xsmall-button)]",
    },
    variant: {
      default:
        "bg-[image:var(--colors-surface-primary-grad-default)] " +
        "shadow-[0px_1px_1px_0px_var(--colors-surface-neutral-light)_inset,0px_-1px_1px_0px_var(--colors-surface-neutral-subtle)_inset,0px_4px_8px_0px_var(--colors-surface-neutral-dark-default)]" +
        "hover:shadow-[0px_0px_13px_var(--colors-surface-destructive-default),0px_4px_8px_var(--colors-surface-neutral-subtle),inset_0px_-1px_1px_var(--colors-surface-destructive-subtle),inset_0px_1px_1px_var(--colors-surface-neutral-light)]" +
        " active:shadow-[0px_0px_13px_var(--colors-surface-destructive-default),0px_4px_8px_var(--colors-surface-neutral-subtle),inset_0px_-1px_1px_var(--colors-surface-neutral-subtle),inset_0px_1px_1px_var(--colors-surface-neutral-light)]" +
        " active:bg-[image:var(--colors-surface-primary-grad-pressed)] " +
        " hover:bg-[image:var(--colors-surface-primary-grad-hovered)]  ",

      transparent:
        "border border-[var(--colors-surface-secondary-default)] hover:bg-[var(--colors-surface-secondary-hovered)] hover:text-[var(--colors-text-primary-inverted)]",

      accent:
        "border-1 bg-[var(--colors-surface-secondary-default)] text-[var(--colors-text-primary-inverted)] ",

      secondary: "bg-[var(--colors-surface-neutral-light)]",
      disabled:
        "bg-[var(--colors-background-transparent)] text-[var(--colors-text-disabled)] cursor-not-allowed",

      tertiary: "",
      primary:
        "bg-[var(--colors-surface-primary-default)] hover:bg-[var(--colors-surface-primary-hovered)] active:bg-[var(--colors-surface-primary-subtle)]",
    },
    isActive: {
      true: "",
      false: "",
    },
    isDisabled: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "secondary",
      isActive: true,
      class:
        "border-[var(--colors-border-selected)] border text-[var(--colors-text-selection)]",
    },
    {
      variant: "default",
      isDisabled: true,
      class: "cursor-not-allowed pointer-events-none opacity-30",
    },
    {
      variant: "transparent",
      isDisabled: true,
      class: "cursor-not-allowed pointer-events-none opacity-30",
    },
    {
      variant: "accent",
      isDisabled: true,
      class: "cursor-not-allowed pointer-events-none opacity-30",
    },
    {
      variant: "secondary",
      isDisabled: true,
      class: "cursor-not-allowed pointer-events-none opacity-30",
    },

    {
      variant: "tertiary",
      isDisabled: true,
      class: "cursor-not-allowed pointer-events-none opacity-30",
    },
    {
      variant: "primary",
      isDisabled: true,
      class: "cursor-not-allowed pointer-events-none opacity-30",
    },
  ],
  defaultVariants: {
    variant: "default",
    isActive: false,
  },
});

const DEFAULT_SPACINGS: {
  padding: Record<ButtonSize, UIKitArrayIndentation>;
} = {
  padding: {
    large: [16, 16, 16, 16],
    medium: [8, 8, 8, 8],
    small: [4, 4, 4, 4],
    xsmall: [2, 2, 2, 2],
  },
};

type ButtonSize = "large" | "medium" | "small" | "xsmall";

export type ButtonVariants =
  | "default"
  | "transparent"
  | "accent"
  | "secondary"
  | "tertiary"
  | "primary";

export type ButtonProps<Element extends ElementType> = PropsWithChildren<
  Omit<
    AriaButtonOptions<Element> &
      UiKitFC<
        {
          className?: string;
          variant?: ButtonVariants;
          href?: string;

          onClick?: () => void;
          /**
           * @deprecated
           */
          weight?: "superbold" | "bold" | "semibold" | "normal" | "light";
          isActive?: boolean;
        } & Partial<
          UiKitTypographyProps &
            UiKitDisplayProps &
            UiKitPositionProps &
            UIKitIndentationsProps &
            UiKitDataAttributesProps &
            UIKitDimensionProps &
            UiKitCursorProps &
            UiKitAnimationProps &
            Omit<UiKitBackgroundProps, "bgGroup" | "groupParent"> & {
              hover: Omit<UiKitBackgroundProps, "groupParent"> &
                UiKitOutlineProps &
                UiKitEffectProps &
                UiKitAnimationProps &
                UiKitTypographyProps & { border?: UiKitBorderProps };
              active: UiKitAnimationProps;
            } & { border?: UiKitBorderProps }
        >
      >,
    "onClick"
  > & { size?: ButtonSize }
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps<ElementType>>(
  function (
    {
      className,
      variant = "default",
      children,
      href,
      size = "medium",
      weight = "normal",
      p,
      m,
      d,
      md,
      hover,
      active,
      isActive = false,
      isDisabled = false,
      onPress,
      position,
      ...props
    },
    ref,
  ): ReactNode {
    const innerRef = useRef<HTMLButtonElement | null>(null);
    const mergedRef =
      ref && typeof ref === "object" && "current" in ref ? ref : innerRef;

    const { buttonProps } = useButton(props, mergedRef);

    const { Link } = useUiKitComponents();
    const DEFAULT_SPACING_PADDING: UIKitArrayIndentation =
      DEFAULT_SPACINGS.padding[size ?? "medium"];

    const spacing = useSpacing({
      m: { p, m },
      d,
      md,
      defaultPadding: DEFAULT_SPACING_PADDING,
    });

    // display
    const display = useDisplay({
      m: { display: props.display ?? "block" },
      md: { display: md?.display },
      d: { display: d?.display },
    });

    // dimension
    const dimension = useDimensions({ m: props, md, d });

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

    // typography
    const typography = useTypography({
      m: { ...props, fontWeight: props.fontWeight ?? fontWeight },
      md:
        {
          ...md,
          fontWeight: md?.fontWeight ?? props.fontWeight ?? mdFontWeight,
        } ?? {},
      d:
        { ...d, fontWeight: d?.fontWeight ?? md?.fontWeight ?? dFontWeight } ??
        {},
      hover: { m: hover ?? {}, md: md?.hover ?? {}, d: d?.hover ?? {} },
    });

    // background
    const background = useBackground({
      m: {
        ...props,
        bgSize: props.bgSize ?? "cover",
        bgRepeat: props.bgRepeat ?? "no-repeat",
        bgPosition: props.bgPosition ?? "center",
      },
      md: { ...md },
      d: { ...d },
      hover: {
        m: {
          ...hover,
        },
        md: { ...md?.hover },
        d: { ...d?.hover },
      },
    });

    // border
    const border = useBorder({
      m: { radius: props.border?.radius ?? "button", ...props.border },
      md: md?.border,
      d: d?.border,
      hover: { m: hover?.border, md: md?.hover?.border, d: d?.hover?.border },
    });

    // animation
    const animation = useAnimation({
      m: props,
      md,
      d,
      hover: { m: hover ?? {}, md: md?.hover ?? {}, d: d?.hover ?? {} },
      active: { m: active ?? {}, md: md?.active ?? {}, d: d?.active ?? {} },
    });

    const positionStyles = usePosition({
      m: position ? { position } : undefined,
      md: md?.position ? { position: md.position } : undefined,
      d: d?.position ? { position: d.position } : undefined,
    });

    // cursor
    const cursor = useCursor({ m: props, md, d });
    const resolvedProps = useResolvedAttributes(props);

    if (!href) {
      return (
        <>
          {animation.keyFrames && <style>{animation.keyFrames}</style>}
          <button
            {...props}
            {...buttonProps}
            {...resolvedProps}
            ref={mergedRef}
            disabled={isDisabled}
            className={buttonStyles({
              variant,
              isDisabled,
              isActive,
              sizeButtonFontSize: props.fontSize ? undefined : size,
              sizeButtonLineHeight: props.lineHeight ? undefined : size,
              className: `${display.classNames} ${spacing.className ?? ""} ${dimension.className} ${background.className} ${border.className} ${typography.classNames} ${cursor.className} ${animation.className} ${positionStyles.className} ${className ?? ""}`,
            })}
            onClick={(e) => onPress?.(e as never)}
            style={{
              ...spacing.styles,
              ...dimension.styles,
              ...background.style,
              ...typography.styles,
              ...border.style,
              ...cursor.style,
              ...animation.style,
              ...positionStyles.styles,
            }}
          >
            {children}
          </button>
        </>
      );
    }

    if (href.includes("http")) {
      return (
        <>
          {animation.keyFrames && <style>{animation.keyFrames}</style>}
          <a
            {...props}
            {...resolvedProps}
            className={buttonStyles({
              variant,
              isDisabled,
              isActive,
              sizeButtonFontSize: props.fontSize ? undefined : size,
              sizeButtonLineHeight: props.lineHeight ? undefined : size,
              className: `${display.classNames} ${spacing.className ?? ""} ${dimension.className} ${background.className} ${border.className} ${typography.classNames} ${cursor.className} ${animation.className} ${positionStyles.className} ${className ?? ""}`,
            })}
            style={{
              ...spacing.styles,
              ...dimension.styles,
              ...background.style,
              ...typography.styles,
              ...border.style,
              ...cursor.style,
              ...animation.style,
              ...positionStyles.styles,
            }}
            href={href}
            target={"_blank"}
            onClick={(e) => onPress?.(e as never)}
          >
            {children}
          </a>
        </>
      );
    }

    return (
      <>
        {animation.keyFrames && <style>{animation.keyFrames}</style>}
        <Link
          {...props}
          {...resolvedProps}
          href={href}
          className={buttonStyles({
            variant,
            isDisabled,
            isActive,
            sizeButtonFontSize: props.fontSize ? undefined : size,
            sizeButtonLineHeight: props.lineHeight ? undefined : size,
            className: `${display.classNames} ${spacing.className ?? ""} ${dimension.className} ${border.className} ${background.className} ${typography.classNames} ${cursor.className} ${animation.className} ${positionStyles.className} ${className ?? ""}`,
          })}
          style={{
            ...spacing.styles,
            ...dimension.styles,
            ...background.style,
            ...typography.styles,
            ...border.style,
            ...cursor.style,
            ...animation.style,
            ...positionStyles.styles,
          }}
          onClick={(e) => onPress?.(e as never)}
        >
          {children}
        </Link>
      </>
    );
  },
);
