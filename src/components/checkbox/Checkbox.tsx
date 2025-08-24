import type { AriaCheckboxProps } from "@react-aria/checkbox";
import { useCheckbox } from "@react-aria/checkbox";
import { forwardRef, type PropsWithChildren, useRef } from "react";
import { useToggleState } from "react-stately";
import { tv } from "tailwind-variants";

import { CheckboxIcon } from "~/icons";

import { Flex } from "../flex/Flex";

export type CheckboxProps = PropsWithChildren<
  Omit<AriaCheckboxProps, "value"> & {
    value?: boolean;
    onChange?: (value: boolean) => void;
    className?: string;
    errorMessage?: string;
  }
>;

const labelStyles = tv({
  base: "flex items-center gap-2 cursor-pointer ",
  variants: {
    selected: {
      true: "",
      false: "",
    },
  },
  defaultVariants: {
    selected: false,
  },
});
const checkboxStyles = tv({
  base: " h-6 border-2 rounded transition-all cursor-pointer",
  variants: {
    selected: {
      true: "bg-[var(--colors-surface-primary-default)] border-[var(--colors-surface-primary-default)]  text-[var(--colors-text-primary-default)] ",
      false: "border-[var(--colors-border-primary)]",
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { children, value, onChange, className = "", errorMessage, ...rest },
    ref,
  ) => {
    const localRef = useRef<HTMLInputElement | null>(null);
    const inputRef = ref ?? localRef;
    const state = useToggleState({ isSelected: value, onChange });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const { inputProps } = useCheckbox(rest, state, inputRef);

    return (
      <>
        <label
          className={labelStyles({
            selected: value,
            className,
          })}
        >
          <input
            {...inputProps}
            ref={inputRef}
            type="checkbox"
            className="opacity-0 absolute w-6 h-6"
          />
          <Flex
            as="div"
            align="center"
            justify="center"
            className={checkboxStyles({
              selected: state.isSelected,
            })}
            minWidth={24}
            width={24}
            height={24}
            minHeight={24}
          >
            {state.isSelected && <CheckboxIcon />}
          </Flex>
          {children}
        </label>

        {errorMessage && (
          <span
            className={
              "text-[var(--colors-text-destructive)] [font-size:var(--fontSize-mobile-small-body)] [line-height:var(--lineHeight-mobile-small-body)] [font-weight:var(--fontWeight-mobile-normal)] md:[font-weight:var(--fontWeight-desktop-normal)]"
            }
          >
            {errorMessage}
          </span>
        )}
      </>
    );
  },
);
