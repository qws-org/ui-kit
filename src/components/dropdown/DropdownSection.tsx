import { useMenuSection } from "@react-aria/menu";
import type { ReactElement } from "react";
import type { Node, TreeState } from "react-stately";

import type { BoxProps } from "~/components";
import { Box } from "~/components";
import { DropdownItem } from "~/components/dropdown/DropdownItem";

export interface DropdownSectionProps<T extends object> {
  section: Node<T>;
  state: TreeState<T>;
}

export const DropdownSection = <T extends object>(
  props: DropdownSectionProps<T> & Partial<BoxProps>,
): ReactElement => {
  const { section, state, ...indentationProps } = props;
  const { itemProps, headingProps, groupProps } = useMenuSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  return (
    <li {...itemProps}>
      {section.rendered && (
        <Box
          className={`[font-size:var(--fontSize-desktop-small-body)] [font-weight:var(--fontWeight-desktop-semibold)] uppercase text-light-heading`}
          {...headingProps}
          {...indentationProps}
          style={{
            ...indentationProps.style,
          }}
          as={"span"}
        >
          {section.rendered}
        </Box>
      )}
      <ul {...groupProps} className="list-none">
        {[...section.childNodes].map((node) => (
          <DropdownItem key={node.key} item={node} state={state} />
        ))}
      </ul>
    </li>
  );
};
