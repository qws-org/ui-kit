import { useFocusRing } from "react-aria";
import { mergeProps, useId } from "react-aria";
import type { FC, PropsWithChildren, ReactNode } from "react";
import React from "react";
import { useDisclosureState } from "react-stately";
import { tv } from "tailwind-variants";

import {
  Box,
  type BoxProps,
  Flex,
  type UIKitArrayIndentation,
} from "~/components";
import { ArrowRight } from "~/icons";

import { AccordionContext } from "./Accordion";

type AccordionVariant = "primary" | "secondary";
export type HeadingWrapper = FC<{ children: ReactNode }>;
interface AccordionItemProps extends PropsWithChildren {
  id?: ID;
  title: ReactNode;
  isExpanded?: boolean;
  isDisabled?: boolean;
  onToggle?: (isExpanded: boolean) => void;
  variant?: AccordionVariant;
  className?: string;
  duration?: number;
  headingWrapper?: HeadingWrapper;
}
type Props = AccordionItemProps &
  Partial<Omit<BoxProps, "children" | "as" | "display">>;

const accordionStyles = tv({
  base: "transition-transform cursor-pointer ",
  variants: {
    variant: {
      primary: "bg-[var(--colors-surface-neutral-default)]",
      secondary: "",
    },
    isDisabled: {
      true: "cursor-default",
      false: "",
    },
  },
  defaultVariants: {
    isExpanded: false,
    variant: "primary",
  },
});

const accordionArrowStyles = tv({
  base: "transition-transform  ",
  variants: {
    variant: {
      primary: "",
      secondary: "",
    },
    isExpanded: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    { variant: "primary", isExpanded: true, class: "-rotate-90" },
    { variant: "primary", isExpanded: false, class: "rotate-0" },
    { variant: "secondary", isExpanded: true, class: "-rotate-90" },
    { variant: "secondary", isExpanded: false, class: "rotate-90" },
  ],
  defaultVariants: {
    variant: "primary",
    isExpanded: false,
  },
});

const DefaultHeadingWrapper: HeadingWrapper = (wrapperProps) => (
  <Flex justify="space-between" align="center" p={0} m={0}>
    {wrapperProps.children}
  </Flex>
);

const DEFAULT_SPACING_PADDING: UIKitArrayIndentation = [24, 24, 24, 24];

export const AccordionItem: FC<Props> = (props) => {
  const {
    id: propId,
    title,
    children,
    isExpanded: propIsExpanded,
    isDisabled: propIsDisabled,
    onToggle,
    variant = "primary",
    className,
    headingWrapper,
    duration = 500,
  } = props;
  const defaultId = useId();
  const id: ID = propId ?? defaultId;
  const groupState = React.useContext(AccordionContext);

  const expanded = groupState
    ? groupState.expandedKeys?.has(id)
    : propIsExpanded;

  const state = useDisclosureState({
    isExpanded: expanded,
    onExpandedChange: (isExpanded) => {
      if (groupState) {
        groupState.toggleKey(id);
      }
      onToggle?.(isExpanded);
    },
  });

  const panelRef = React.useRef<HTMLDivElement | null>(null);

  const isDisabled = propIsDisabled ?? groupState?.isDisabled ?? false;

  const { focusProps } = useFocusRing();
  const HeadingWrapper = headingWrapper ?? DefaultHeadingWrapper;

  return (
    <>
      <Box
        width="100%"
        className={accordionStyles({
          variant,
          className: `${className ?? ""}`,
          isDisabled,
        })}
        style={{
          transitionDuration: `${duration}ms`,
        }}
        {...mergeProps(props, focusProps)}
        onClick={() => {
          state.toggle();
        }}
        p={props.p ?? DEFAULT_SPACING_PADDING}
      >
        <HeadingWrapper>
          <>{title}</>

          <ArrowRight
            className={accordionArrowStyles({
              isExpanded: expanded,
              variant,
            })}
            style={{ transitionDuration: `${duration}ms`, minWidth: "24px" }}
          />
        </HeadingWrapper>
      </Box>

      <Box
        maxHeight={expanded ? "max-content" : 0}
        ref={panelRef}
        opacity={expanded ? 100 : 0}
        className="overflow-hidden transition-all ease-in-out "
        style={{ transitionDuration: `${duration}ms` }}
      >
        {children}
      </Box>
    </>
  );
};
