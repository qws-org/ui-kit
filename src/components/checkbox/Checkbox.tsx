import type { PropsWithChildren, ReactNode } from "react";
import React, { forwardRef, useRef } from "react";
import type { AriaCheckboxProps } from "react-aria";
import { useCheckbox } from "react-aria";
import { useToggleState } from "react-stately";

import type { FlexProps, UiKitDataAttributesProps } from "~/components";
import { Box, Typography } from "~/components";
import { useResolvedAttributes } from "~/components/use-resolved-attributes";
import { CheckboxIcon } from "~/icons";

import { Flex } from "../flex/Flex";

export type CheckboxProps = PropsWithChildren<
  Omit<AriaCheckboxProps, "value"> & {
    value?: boolean;
    onChange?: (value: boolean) => void;
    className?: string;
    errorMessage?: string | ReactNode;
    customCheckbox?: (args: { isSelected: boolean }) => ReactNode;
    customWrapper?: (args: {
      isSelected: boolean;
      children: ReactNode;
    }) => ReactNode;
  } & UiKitDataAttributesProps &
    FlexProps
>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      children,
      value,
      onChange,
      className = "",
      errorMessage,
      customCheckbox,
      customWrapper,

      ...rest
    },
    ref,
  ) => {
    const localRef = useRef<HTMLInputElement | null>(null);
    const inputRef = ref ?? localRef;
    const state = useToggleState({ isSelected: value, onChange });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const { inputProps } = useCheckbox(rest, state, inputRef);
    const resolvedProps = useResolvedAttributes(rest);

    const CustomCheckbox = customCheckbox ? (
      customCheckbox({ isSelected: state.isSelected })
    ) : (
      <></>
    );

    const InnerContent = (
      <>
        <input
          {...inputProps}
          ref={inputRef}
          type="checkbox"
          className="opacity-0 absolute"
        />

        {customCheckbox ? (
          CustomCheckbox
        ) : (
          <Flex
            as="span"
            align="center"
            justify="center"
            bg={state.isSelected ? "surface-primary-default" : ""}
            border={{
              radius: "checkbox",
              width: "2px",
              color: state.isSelected
                ? "surface-primary-default"
                : "border-button",
            }}
            cursor="pointer"
            minWidth={24}
            width={24}
            height={24}
            minHeight={24}
            className={className}
            {...rest}
          >
            {state.isSelected && <CheckboxIcon />}
          </Flex>
        )}

        {children}
      </>
    );

    return (
      <Box>
        {customWrapper ? (
          customWrapper({
            isSelected: state.isSelected,
            children: InnerContent,
          })
        ) : (
          <Flex
            {...resolvedProps}
            as="label"
            align="center"
            gap={8}
            cursor="pointer"
          >
            {InnerContent}
          </Flex>
        )}

        {typeof errorMessage === "string" ? (
          <Typography
            lineHeight="body.mobile.small"
            fontSize="body.mobile.small"
            fontWeight="mobile.normal"
            md={{ fontWeight: "desktop.normal" }}
            as="span"
            color="text-destructive"
          >
            {errorMessage}
          </Typography>
        ) : (
          errorMessage
        )}
      </Box>
    );
  },
);
