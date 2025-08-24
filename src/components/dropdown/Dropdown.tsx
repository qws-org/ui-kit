import type { AriaMenuProps } from "react-aria";
import { useMenu } from "react-aria";
import type { ReactElement } from "react";
import { useRef } from "react";
import { Item, Section, useTreeState } from "react-stately";

import { DefaultWrapper } from "./DefaultWrapper";
import { DropdownItem } from "./DropdownItem";
import { DropdownSection } from "./DropdownSection";
import type { CustomWrapper } from "./DropdownTrigger";
import { DropdownTrigger } from "./DropdownTrigger";

export interface DropdownProps<T> extends AriaMenuProps<T> {
  wrapper?: CustomWrapper;
}

export const Dropdown = <T extends object>(
  props: DropdownProps<T>,
): ReactElement => {
  const state = useTreeState(props);

  const ref = useRef(null);
  const { menuProps } = useMenu(props, state, ref);
  const Wrapper = props.wrapper ?? DefaultWrapper;

  return (
    <ul {...menuProps} ref={ref}>
      <Wrapper>
        {[...state.collection].map((item) => {
          if (item.type === "section") {
            return (
              <DropdownSection key={item.key} section={item} state={state} />
            );
          } else {
            return <DropdownItem key={item.key} item={item} state={state} />;
          }
        })}
      </Wrapper>
    </ul>
  );
};

Dropdown.Item = Item;
Dropdown.Section = Section;
Dropdown.Trigger = DropdownTrigger;
