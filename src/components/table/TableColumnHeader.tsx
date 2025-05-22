import { useFocusRing } from "@react-aria/focus";
import type { AriaTableColumnHeaderProps } from "@react-aria/table";
import { useTableColumnHeader } from "@react-aria/table";
import { mergeProps } from "@react-aria/utils";
import type { FC } from "react";
import { useRef } from "react";
import type { TableState } from "react-stately";

import { Box, type BoxProps, Flex } from "~/components";

export type TableColumnHeaderProps = {
  state: TableState<unknown>;
  column: AriaTableColumnHeaderProps<unknown>["node"];
} & Partial<BoxProps>;

export const TableColumnHeader: FC<TableColumnHeaderProps> = (props) => {
  const { column, state, md, d, ...indentationProps } = props;
  const ref = useRef<HTMLTableCellElement | null>(null);
  const { columnHeaderProps } = useTableColumnHeader(
    { node: column },
    state,
    ref,
  );
  const { isFocusVisible, focusProps } = useFocusRing();
  const arrowIcon = state.sortDescriptor?.direction === "ascending" ? "▲" : "▼";

  return (
    <th
      {...mergeProps(columnHeaderProps, focusProps)}
      colSpan={column.colspan}
      className={` [font-size:var(--fontSize-mobile-small-body)] [line-height:var(--lineHeight-mobile-small-body)] [font-weight:var(--fontWeight-mobile-semibold)] md:[font-size:var(--fontSize-desktop-small-body)] md:[line-height:var(--lineHeight-desktop-small-body)] text-[var(--colors-text-secondary-default)] outline-none cursor-default ${(column.colspan ?? 0 > 1) ? "text-center" : "text-left"} ${isFocusVisible && "shadow-[inset_0_0_0_2px_var(--colors-surface-delete)]"}  `}
      ref={ref}
    >
      <Box
        style={{
          ...indentationProps.style,
        }}
        {...indentationProps}
        md={md}
        d={d}
      >
        {column.rendered}
        {column.props.allowsSorting && (
          <Flex
            p={{ px: 2 }}
            as="span"
            aria-hidden="true"
            className={`${state.sortDescriptor?.column === column.key ? "visible" : "invisible"}`}
          >
            {arrowIcon}
          </Flex>
        )}
      </Box>
    </th>
  );
};
