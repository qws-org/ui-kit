import type { AriaButtonOptions } from "@react-aria/button";
import { useButton } from "@react-aria/button";
import type { ElementType, PropsWithChildren, ReactNode } from "react";
import { forwardRef, useRef } from "react";
import { tv } from "tailwind-variants";

import type { BoxProps, UIKitArrayIndentation } from "~/components";
import { useDimensions, useSpacing, useUiKitComponents } from "~/components";

const buttonStyles = tv({
  base: "rounded-[4px] outline-none box-border border-0 flex justify-center items-center cursor-pointer transition-all duration-200 text-[var(--colors-text-primary-default)] font-noto-sans-sc",
  variants: {
    size: {
      large: "[font-size:var(--fontSize-mobile-large-button)] ",
      medium: "[font-size:var(--fontSize-mobile-medium-button)]",
      small: "[font-size:var(--fontSize-mobile-small-button)]",
      xsmall: "[font-size:var(--fontSize-mobile-xsmall-button)]",
    },
    mdSize: {
      large: "md:[font-size:var(--fontSize-desktop-large-button)]",
      medium: "md:[font-size:var(--fontSize-desktop-medium-button)]",
      small: "md:[font-size:var(--fontSize-desktop-small-button)]",
      xsmall: "md:[font-size:var(--fontSize-desktop-xsmall-button)]",
    },
    dSize: {
      large: "lg:[font-size:var(--fontSize-desktop-large-button)]",
      medium: "lg:[font-size:var(--fontSize-desktop-medium-button)]",
      small: "lg:[font-size:var(--fontSize-desktop-small-button)]",
      xsmall: "lg:[font-size:var(--fontSize-desktop-xsmall-button)]",
    },
    weight: {
      superbold: "[font-weight:var(--fontWeight-mobile-superbold)]",
      bold: "[font-weight:var(--fontWeight-mobile-bold)]",
      semibold: "[font-weight:var(--fontWeight-mobile-semibold)]",
      normal: "[font-weight:var(--fontWeight-mobile-normal)]",
      light: "[font-weight:var(--fontWeight-mobile-light)]",
    },
    mdWeight: {
      superbold: "md:[font-weight:var(--fontWeight-desktop-superbold)]",
      bold: "md:[font-weight:var(--fontWeight-desktop-bold)]",
      semibold: "md:[font-weight:var(--fontWeight-desktop-semibold)]",
      normal: "md:[font-weight:var(--fontWeight-desktop-normal)]",
      light: "md:[font-weight:var(--fontWeight-desktop-light)]",
    },
    dWeight: {
      superbold: "lg:[font-weight:var(--fontWeight-desktop-superbold)]",
      bold: "lg:[font-weight:var(--fontWeight-desktop-bold)]",
      semibold: "lg:[font-weight:var(--fontWeight-desktop-semibold)]",
      normal: "lg:[font-weight:var(--fontWeight-desktop-normal)]",
      light: "lg:[font-weight:var(--fontWeight-desktop-light)]",
    },
    variant: {
      default:
        "bg-[linear-gradient(-90deg,var(--colors-surface-delete)_0%,var(--colors-surface-primary-dark)_100%,var(--colors-surface-delete)_100%)] shadow-[0px_0px_13px_transparent,0px_4px_8px_var(--colors-surface-disabled),inset_0px_-1px_1px_var(--colors-surface-neutral-subtle),inset_0px_1px_1px_var(--colors-surface-neutral-light)] hover:bg-left hover:shadow-[0px_0px_13px_var(--colors-surface-delete),0px_4px_8px_var(--colors-surface-neutral-subtle),inset_0px_-1px_1px_var(--colors-surface-disabled),inset_0px_1px_1px_var(--colors-surface-neutral-light)] active:bg-left active:shadow-[0px_0px_13px_var(--colors-surface-delete),0px_4px_8px_var(--colors-surface-neutral-subtle),inset_0px_-1px_1px_var(--colors-surface-neutral-subtle),inset_0px_1px_1px_var(--colors-surface-neutral-light)] active:bg-[linear-gradient(0deg,var(--colors-surface-neutral-dark-default),var(--colors-surface-neutral-dark-default)),linear-gradient(90deg,var(--colors-surface-delete)_0%,var(--colors-surface-primary-dark)_100%,var(--colors-surface-delete)_100%)]  hover:bg-[linear-gradient(90deg,var(--colors-surface-delete)_0%,var(--colors-surface-primary-dark)_100%,var(--colors-surface-delete)_100%)]  ",

      transparent:
        "border border-[var(--colors-surface-secondary-default)] hover:bg-[var(--colors-surface-secondary-default)] hover:text-[var(--colors-text-primary-inverted)]",

      accent:
        "border-1 bg-[var(--colors-surface-secondary-default)] text-[var(--colors-text-primary-inverted)] ",

      secondary: "bg-[var(--colors-surface-neutral-light)]",
    },
    isActive: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "secondary",
      isActive: true,
      class: "border-[var(--colors-border-selected)] border",
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
type DisplayButtonProps = {
  display: "block" | "hidden";
};
type ButtonSize = "large" | "medium" | "small" | "xsmall";
export type ButtonProps<Element extends ElementType> = PropsWithChildren<
  Omit<
    AriaButtonOptions<Element> &
      UiKitFC<
        {
          className?: string;
          variant?: "default" | "transparent" | "accent" | "secondary";
          href?: string;
          size?: ButtonSize;
          weight?: "superbold" | "bold" | "semibold" | "normal" | "light";
          onClick?: () => void;
          isActive?: boolean;
        } & Partial<Omit<BoxProps, "display">> &
          Partial<DisplayButtonProps>
      >,
    "onClick"
  >
>;

const displayStyle = (
  value: "block" | "hidden" | undefined,
  breakpoint?: "md" | "lg",
): string => {
  if (!value) return "";

  const displayClass: Record<string, string> = {
    block:
      breakpoint === "md"
        ? "md:block"
        : breakpoint === "lg"
          ? "lg:block"
          : "block",
    hidden:
      breakpoint === "md"
        ? "md:hidden"
        : breakpoint === "lg"
          ? "lg:hidden"
          : "hidden",
  };

  return displayClass[value];
};
export const Button = forwardRef<HTMLButtonElement, ButtonProps<ElementType>>(
  function (
    {
      display,
      className,
      variant = "default",
      children,
      href,
      size = "medium",
      weight = "normal",
      d,
      md,
      isActive = false,
      height,
      minHeight,
      width,
      minWidth,
      maxWidth,
      m,
      p,
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
    const dimension = useDimensions({
      m: {
        height,
        minHeight,
        maxWidth,
        width,
        minWidth,
      },
      md,
      d,
    });
    if (!href) {
      return (
        <>
          <button
            {...props}
            {...buttonProps}
            ref={mergedRef}
            className={buttonStyles({
              variant,
              size,
              isActive,
              mdSize: md?.size ?? size,
              dSize: d?.size ?? md?.size ?? size,
              weight,
              mdWeight: md?.weight ?? weight,
              dWeight: d?.weight ?? md?.weight ?? weight,
              className: `${displayStyle(display)} ${displayStyle(md?.display ?? display, "md")} ${displayStyle(d?.display ?? md?.display ?? display, "lg")} ${spacing.className ?? ""} ${dimension.className} ${className}`,
            })}
            style={{
              ...props.style,
              ...spacing.styles,
              ...dimension.styles,
            }}
          >
            {children}
          </button>
        </>
      );
    }

    if (href.includes("http")) {
      return (
        <a
          className={buttonStyles({
            variant,
            isActive,
            size,
            mdSize: md?.size ?? size,
            dSize: d?.size ?? md?.size ?? size,
            weight,
            mdWeight: md?.weight ?? weight,
            dWeight: d?.weight ?? md?.weight ?? weight,
            className: `${displayStyle(display)} ${displayStyle(md?.display ?? display, "md")} ${displayStyle(d?.display ?? md?.display ?? display, "lg")} ${spacing.className ?? ""} ${dimension.className} ${className}`,
          })}
          href={href}
          target={"_blank"}
          {...props}
          style={{ ...props.style, ...spacing.styles, ...dimension.styles }}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={buttonStyles({
          variant,
          size,
          isActive,
          mdSize: md?.size ?? size,
          dSize: d?.size ?? md?.size ?? size,
          weight,
          mdWeight: md?.weight ?? weight,
          dWeight: d?.weight ?? md?.weight ?? weight,
          className: `${displayStyle(display)} ${displayStyle(md?.display ?? display, "md")} ${displayStyle(d?.display ?? md?.display ?? display, "lg")} ${spacing.className ?? ""} ${dimension.className} ${className}`,
        })}
        {...props}
        style={{ ...props.style, ...spacing.styles, ...dimension.styles }}
      >
        {children}
      </Link>
    );
  },
);
