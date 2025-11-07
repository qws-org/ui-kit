import type { FC, PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

import type { BoxProps } from "~/components";
import { Flex } from "~/components/flex/Flex";

export type CardProps = PropsWithChildren<{
  variant?: "primary" | "secondary" | "tertiary" | "default";
}> &
  Partial<Omit<BoxProps, "display">> & {
    display?: "flex" | "inline-flex" | "hidden";
  };
type Props = PropsWithChildren<UiKitFC<CardProps>>;
const cardStyles = tv({
  base: "",
  variants: {
    variant: {
      primary:
        "md:bg-[var(--colors-text-disabled)] border-0 md:border md:border-[var(--colors-border-subtle)]",
      secondary:
        "bg-[var(--colors-surface-primary-dark)] shadow-[0px_0px_44px_0px_var(--colors-surface-neutral-dark-default)] backdrop-blur-[32px] border border-[var(--colors-border-selected)] ",
      tertiary:
        "bg-gradient-to-b from-[var(--colors-surface-primary-dark)] to-[var(--colors-surface-primary-dark)] items-center",
      default: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const Card: FC<Props> = (props) => {
  const { className = "", children, variant } = props;

  return (
    <Flex
      as="div"
      flexDirection="column"
      border={{ radius: props.border?.radius ?? "card" }}
      className={cardStyles({ variant, className })}
      {...props}
    >
      {children}
    </Flex>
  );
};
