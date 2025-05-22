import { useFocusRing } from "@react-aria/focus";
import type { AriaTableCellProps } from "@react-aria/table";
import { useTableCell } from "@react-aria/table";
import { mergeProps } from "@react-aria/utils";
import type { ReactNode } from "react";
import { useRef } from "react";
import type { TableState } from "react-stately";

import type { BoxProps, UIKitArrayIndentation } from "~/components";
import { Box } from "~/components";

export type TableCellProps<T> = {
  cell: AriaTableCellProps["node"];
  state: TableState<T>;
} & Partial<BoxProps>;
const DEFAULT_SPACING_PADDING: UIKitArrayIndentation = [12, 8, 12, 8];

export const TableCell = function <T>(props: TableCellProps<T>): ReactNode {
  const ref = useRef<HTMLTableCellElement | null>(null);
  const { cell, state, ...indentationProps } = props;
  const { gridCellProps } = useTableCell({ node: cell }, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <Box
      {...mergeProps(gridCellProps, focusProps)}
      {...indentationProps}
      display="table-cell"
      p={indentationProps.p ?? DEFAULT_SPACING_PADDING}
      className={`outline-none ${isFocusVisible ? "shadow-[inset_0_0_0_2px_orange]" : "shadow-none"}`}
      ref={ref}
      style={{
        ...indentationProps.style,
      }}
    >
      {cell.rendered}
    </Box>
  );
};
