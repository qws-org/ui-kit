import type { AriaButtonOptions } from "react-aria";
import { useButton } from "react-aria";
import type {
  ElementType,
  ForwardedRef,
  PropsWithChildren,
  ReactElement,
} from "react";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import type { RootMenuTriggerState } from "react-stately";

export type DropdownTriggerElementProps<Element extends ElementType> =
  PropsWithChildren<
    AriaButtonOptions<Element> & {
      triggerElement: ReactElement;
      strategy?: "click" | "hover" | "mixed";
      state: RootMenuTriggerState;
    }
  >;

export const DropdownTriggerElement = forwardRef(
  <T extends ElementType>(
    props: DropdownTriggerElementProps<T>,
    ref: ForwardedRef<HTMLElement>,
  ): ReactElement => {
    const localRef = useRef<HTMLElement>(null);
    const buttonRef = (ref ?? localRef) as React.MutableRefObject<HTMLElement>;
    const { buttonProps } = useButton(props, buttonRef);
    const [hasClicked, setHasClicked] = useState(false);
    let closeTimeout: ReturnType<typeof setTimeout>;

    useEffect(() => {
      if (!props.state.isOpen && hasClicked) {
        setHasClicked(false);
      }
    }, [props.state.isOpen]);

    const handleMouseEnter = (): void => {
      clearTimeout(closeTimeout);
      if (props.strategy !== "click") {
        props.state.open();
      }
    };

    const handleMouseLeave = (): void => {
      if (hasClicked) return;

      closeTimeout = setTimeout(() => {
        if (props.strategy !== "click") {
          props.state.close();
        }
      }, 250);
    };

    const handleClick = (): void => {
      if (!hasClicked) {
        setHasClicked(true);
        props.state.open();
      }
    };

    return React.cloneElement(props.triggerElement, {
      ...buttonProps,
      ref: buttonRef,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onClick: props.strategy === "mixed" ? handleClick : buttonProps.onClick,
      children: (
        <>
          {(props.triggerElement.props as { children: ReactElement }).children}
          {props.children}
        </>
      ),
    });
  },
);
