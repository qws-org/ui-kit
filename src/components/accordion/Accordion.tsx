import type { FC, PropsWithChildren } from "react";
import React from "react";
import type { DisclosureGroupState } from "react-stately";
import { useDisclosureGroupState } from "react-stately";

import { AccordionItem } from "./AccordionItem";

export interface AccordionProps extends PropsWithChildren {
  expandedKeys?: Set<ID>;
  onExpandedChange?: (keys: Set<ID>) => void;
  isDisabled?: boolean;
  allowsMultipleExpanded?: boolean;
}

export const AccordionContext =
  React.createContext<DisclosureGroupState | null>(null);

export const Accordion: FC<AccordionProps> & { Item: typeof AccordionItem } = ({
  children,
  ...props
}) => {
  const state = useDisclosureGroupState(props);

  return (
    <>
      <AccordionContext.Provider value={state}>
        {children}
      </AccordionContext.Provider>
    </>
  );
};

Accordion.Item = AccordionItem;
