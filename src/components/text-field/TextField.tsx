import type { ReactNode } from "react";
import React, { forwardRef, useRef, useState } from "react";
import type { AriaTextFieldOptions } from "react-aria";
import { useTextField } from "react-aria";
import InputMask from "react-input-mask";

import { Box, type BoxProps, Typography, useBackground } from "~/components";
import { useBorder } from "~/components/use-border";

export interface TextFieldProps extends AriaTextFieldOptions<"input"> {
  label: string;
  icon?: ReactNode;
  errorMessage?: string;
  className?: string;
  /**
   * https://www.npmjs.com/package/react-input-mask
   */
  mask?: string;
  maskChar?: string;
}
type Props = TextFieldProps & Partial<BoxProps>;
/**
 * @deprecated Используйте компонент TextFieldV2.
 */
export const TextField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    label,
    icon,
    errorMessage,
    name,
    type,
    className,
    mask,
    maskChar,
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

  const InputComponent = mask ? InputMask : "input";

  // border
  const border = useBorder({
    m: {
      color: props.border?.color ?? "border-secondary",
      radius: props.border?.radius ?? "form",
      width: props.border?.width ?? "1px",
      ...props.border,
    },
    md: props.md?.border,
    d: props.d?.border,
    hover: {
      m: props.hover?.border,
      md: props.md?.hover?.border,
      d: props.d?.hover?.border,
    },
  });

  const background = useBackground({
    m: {
      // цвет внутри инпута
      bg: props.bg ?? "surface-neutral-dark-default",
      bgSize: props.bgSize ?? "cover",
      bgRepeat: props.bgRepeat ?? "no-repeat",
      bgPosition: props.bgPosition ?? "center",
      ...props,
    },
    md: props?.md ?? {},
    d: props.d ?? {},
    hover: {
      m: props.hover ?? {},
      md: props.md?.hover ?? {},
      d: props.d?.hover ?? {},
    },
  });

  return (
    <Box
      style={{
        ...indentationProps.style,
      }}
      position={{ type: "relative" }}
      border={{
        radius: props.border?.radius ?? "form",
      }}
      className={`${className}`}
      m={{ mb: 32 }}
      {...props}
    >
      <Typography
        as="label"
        className={`pointer-events-none transition-all -translate-y-1/2 ${(isFocused || !!inputProps.value) && "opacity-50 translate-y-0"} `}
        position={{
          type: "absolute",
          left: "30px",
          top: isFocused || !!inputProps.value ? "10px" : "50%",
        }}
        color={
          isFocused || !!inputProps.value
            ? "text-secondary-hovered"
            : "text-secondary-default"
        }
        fontSize={
          isFocused || !!inputProps.value
            ? "body.mobile.small"
            : "body.mobile.large"
        }
        lineHeight={
          isFocused || !!inputProps.value
            ? "body.mobile.small"
            : "body.mobile.large"
        }
      >
        {label}
      </Typography>

      <InputComponent
        {...inputProps}
        // eslint-disable-next-line
        // @ts-ignore
        mask={mask}
        maskChar={maskChar}
        ref={ref}
        inputRef={ref}
        name={name}
        type={type}
        className={`focus:bg-[var(--colors-background-primary)] focus:border focus:border-[var(--colors-border-primary)]  w-full  px-[30px] pt-[26px] pb-[6px]
          ${errorMessage && "bg-[var(--colors-background-primary)] !border-[var(--colors-border-destructive)]"} ${border.className} ${background.className}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        // повторение радиуса как у контейнера
        style={{ ...border.style, ...background.style }}
      />
      {icon && (
        <Box
          className={"-translate-y-1/2 "}
          position={{ type: "absolute", top: "50%", right: "30px" }}
          cursor={inputProps.disabled ? "auto" : "pointer"}
        >
          {icon}
        </Box>
      )}

      <Typography
        position={{ type: "absolute", left: 30 }}
        fontSize="body.mobile.small"
        lineHeight="body.mobile.small"
        fontWeight="mobile.normal"
        md={{ fontWeight: "desktop.normal" }}
        color="text-destructive"
      >
        {errorMessage}
      </Typography>
    </Box>
  );
});
