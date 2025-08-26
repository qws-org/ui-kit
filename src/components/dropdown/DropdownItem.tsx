import type { ReactNode } from "react";
import React, { useRef } from "react";
import { useMenuItem } from "react-aria";
import type { Node, TreeState } from "react-stately";

import { ElementType } from "./ElementType";
import { LinkElementType } from "./LinkElementType";

export interface DropdownItemProps<T> {
  item: Node<T>;
  state: TreeState<T>;
}

export const DropdownItem = <T extends object>({
  item,
  state,
}: DropdownItemProps<T>): ReactNode => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const { menuItemProps } = useMenuItem(
    { key: item.key },
    state,
    item.props?.href ? linkRef : elementRef,
  );

  return item.props?.href ? (
    <LinkElementType
      {...menuItemProps}
      ref={linkRef}
      href={item.props.href}
      onClick={item.props?.onClose}
    >
      {item.rendered}
    </LinkElementType>
  ) : (
    <ElementType
      {...menuItemProps}
      ref={elementRef}
      onClick={item.props?.onClose}
    >
      {item.rendered}
    </ElementType>
  );
};
