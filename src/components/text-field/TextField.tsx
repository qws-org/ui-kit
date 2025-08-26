import type { ReactNode } from "react";
import React, { forwardRef, useRef, useState } from "react";
import type { AriaTextFieldOptions } from "react-aria";
import { useTextField } from "react-aria";

import { Box, type BoxProps } from "~/components";

export interface TextFieldProps extends AriaTextFieldOptions<"input"> {
  label: string;
  icon?: ReactNode;
  errorMessage?: string;
  className?: string;
}
type Props = TextFieldProps & Partial<BoxProps>;

export const TextField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    label,
    icon,
    errorMessage,
    name,
    type,
    className,
    ...indentationProps
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const { inputProps } = useTextField(
    { ...props, inputElementType: "input" },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    ref ?? inputRef,
  );

  return (
    <Box
      {...props}
      style={{
        ...indentationProps.style,
      }}
      className={`relative ${className}`}
      m={{ mb: 32 }}
    >
      <label
        className={`pointer-events-none absolute left-[30px] top-1/2 -translate-y-1/2 text-[var(--colors-text-secondary-default)] [font-size:var(--fontSize-mobile-large-body)] [line-height:var(--lineHeight-mobile-large-body)] transition-all ${
          (isFocused || !!inputProps.value) &&
          "[font-size:var(--fontSize-mobile-small-body)] [line-height:var(--lineHeight-mobile-small-body)] text-[var(--colors-text-secondary-hovered)] opacity-50 top-2.5 translate-y-0"
        }`}
      >
        {label}
      </label>
      <input
        {...inputProps}
        ref={ref}
        name={name}
        type={type}
        className={`w-full [font-size:var(--fontSize-desktop-large-body)] [line-height:var(--lineHeight-desktop-large-body)] text-[var(--colors-text-secondary-hovered)] rounded px-[30px] pt-[26px] pb-[6px] border border-[var(--colors-background-secondary)] bg-[var(--colors-surface-neutral-dark-default)] focus:bg-[var(--colors-background-primary)] focus:border focus:border-[var(--colors-border-primary)] disabled:bg-[var(--colors-text-disabled)] disabled:text-opacity-40
            ${errorMessage && "bg-[var(--colors-background-primary)] border !border-[var(--colors-border-destructive)]"}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {icon && (
        <div
          className={`absolute top-1/2 -translate-y-1/2 right-[30px] cursor-pointer ${
            inputProps.disabled && "!cursor-auto"
          }`}
        >
          {icon}
        </div>
      )}
      <div className="[font-size:var(--fontSize-mobile-small-body)] [line-height:var(--lineHeight-mobile-small-body)] [font-weight:var(--fontWeight-mobile-normal)] md:[font-weight:var(--fontWeight-desktop-normal)] text-[var(--colors-text-destructive)] absolute left-[30px]">
        {errorMessage}
      </div>
    </Box>
  );
});
