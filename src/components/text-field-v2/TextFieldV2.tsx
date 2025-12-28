import type { ReactElement, ReactNode } from "react";
import React, { forwardRef, useRef, useState } from "react";
import type { AriaTextFieldOptions } from "react-aria";
import { useTextField } from "react-aria";

import {
  Box,
  type BoxProps,
  Typography,
  useBackground,
  useDimensions,
  useSpacing,
} from "~/components";
import {
  DEFAULT_SPACINGS,
  getBackgroundProps,
  getBorderProps,
  getDimensionProps,
  getErrorMessageProps,
  getLabelProps,
  getOutlineProps,
} from "~/components/text-field-v2/TextFieldV2.helper";
import { useBorder } from "~/components/use-border";
import { useOutline } from "~/components/use-outline";
import { useTypography } from "~/components/use-typography";

export type TextFieldV2Variant = "primary" | "secondary";
export interface TextFieldV2Props
  extends Omit<AriaTextFieldOptions<"input">, "label"> {
  label?:
    | string
    | ((args: {
        isFocused: boolean;
        value?: string | ReadonlyArray<string> | number;
      }) => ReactNode);
  icon?: (args: { isDisabled?: boolean }) => ReactNode;
  errorMessage?: string | ReactNode;
  className?: string;
  customInput?: ReactElement;
  variant?: TextFieldV2Variant;
}
type Props = TextFieldV2Props & Partial<BoxProps>;

export const TextFieldV2 = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    label,
    icon,
    errorMessage,
    name,
    type,
    className,
    customInput,
    onChange: _onChange,
    spellCheck: _spellCheck,
    variant = "primary",
    ...rest
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const { inputProps } = useTextField(
    { ...props, label: null, inputElementType: "input" },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    ref ?? inputRef,
  );

  const spacing = useSpacing({
    m: {
      p: rest.p,
      m: rest.m,
    },
    md: rest.md,
    d: rest.d,
    defaultPadding: DEFAULT_SPACINGS?.padding?.[variant],
  });

  const border = useBorder({
    m: {
      ...getBorderProps({ variant, isError: !!errorMessage, isFocused }).m,
      ...rest.border,
    },

    md: rest?.md?.border,
    d: rest?.d?.border,
    hover: {
      m: rest?.hover?.border,
      md: rest?.md?.hover?.border,
      d: rest?.d?.hover?.border,
    },
  });

  const background = useBackground({
    m: {
      ...getBackgroundProps({ variant }).m,
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
  const dimension = useDimensions({
    m: {
      ...getDimensionProps({ variant }).m,
      ...rest,
    },
    md: rest.md,
    d: rest.d,
  });
  const typography = useTypography({
    m: {
      fontSize: rest.fontSize ?? "body.mobile.medium",
      lineHeight: rest?.lineHeight ?? "body.mobile.medium",
      ...rest,
    },
    md: rest?.md ?? {},
    d: rest?.d ?? {},
    hover: {
      m: rest?.hover ?? {},
      md: rest?.md?.hover ?? {},
      d: rest?.d?.hover ?? {},
    },
  });
  const outline = useOutline({
    m: {
      ...getOutlineProps({ variant, isError: !!errorMessage, isFocused }).m,
      ...rest,
    },
    md: rest?.md,
    d: rest?.d,
    hover: {
      m: rest?.hover ?? {},
      md: rest?.md?.hover ?? {},
      d: rest?.d?.hover ?? {},
    },
  });

  const Label =
    label && typeof label !== "string" ? (
      label({ isFocused, value: inputProps.value })
    ) : (
      <></>
    );

  const Icon = icon ? (
    icon?.({ isDisabled: inputProps?.disabled ?? false })
  ) : (
    <></>
  );
  return (
    <Box position={{ type: "relative" }}>
      {typeof label === "string" ? (
        <Typography
          {...getLabelProps({
            variant,
            isFocused,
            value: inputProps.value,
          })}
        >
          {label}
        </Typography>
      ) : (
        Label
      )}

      {customInput ? (
        React.cloneElement(customInput, {
          ...rest,
          ...inputProps,
          ref,
          onClick: inputProps.onClick,
          className: `${border.className} ${background.className} ${spacing.className} ${dimension.className} ${typography.classNames} ${outline.className} ${className}`,
          style: {
            ...border.style,
            ...background.style,
            ...spacing.styles,
            ...dimension.styles,
            ...typography.styles,
            ...outline.style,
          },
          onFocus: () => setIsFocused(true),
          onBlur: () => setIsFocused(false),
        })
      ) : (
        <input
          {...inputProps}
          {...rest}
          ref={ref}
          value={inputProps.value}
          name={name}
          type={type}
          className={` ${border.className} ${background.className} ${spacing.className} ${dimension.className} ${typography.classNames} ${outline.className} ${className}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            ...border.style,
            ...background.style,
            ...spacing.styles,
            ...dimension.styles,
            ...typography.styles,
            ...outline.style,
          }}
        />
      )}

      {icon && <>{Icon}</>}
      {typeof errorMessage === "string" ? (
        <Typography {...getErrorMessageProps({ variant })}>
          {errorMessage}
        </Typography>
      ) : (
        errorMessage
      )}
    </Box>
  );
});
