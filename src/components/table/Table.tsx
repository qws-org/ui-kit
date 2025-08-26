import type { ReactNode } from "react";
import { useRef } from "react";
import type { AriaTableProps } from "react-aria";
import { useTable } from "react-aria";
import type { TableStateProps } from "react-stately";
import {
  Cell,
  Column,
  Row,
  TableBody,
  TableHeader,
  useTableState,
} from "react-stately";

import type { BoxProps } from "~/components";
import { Box } from "~/components";

import { TableCell } from "./TableCell";
import { TableCheckboxCell } from "./TableCheckboxCell";
import { TableColumnHeader } from "./TableColumnHeader";
import { TableHeaderRow } from "./TableHeaderRow";
import { TableRow } from "./TableRow";
import { TableRowGroup } from "./TableRowGroup";
import { TableSelectAllCell } from "./TableSelectAllCell";

export type TableProps<T> = TableStateProps<T> &
  AriaTableProps & { className?: string } & Partial<
    Omit<BoxProps, "as" | "onClick" | "display" | "children">
  >;

export const Table = function <T extends object>(
  props: TableProps<T>,
): ReactNode {
  const { selectionMode, selectionBehavior, className, ...indentationProps } =
    props;
  const state = useTableState({
    ...props,
    showSelectionCheckboxes:
      selectionMode === "multiple" && selectionBehavior !== "replace",
  });

  const ref = useRef<HTMLTableElement | null>(null);
  const { collection } = state;
  const { gridProps } = useTable(indentationProps, state, ref);

  return (
    <Box
      as={"table"}
      display={"table"}
      className={`rounded-lg overflow-hidden w-full ${className ?? ""}`}
      {...indentationProps}
      {...gridProps}
      style={{
        ...indentationProps.style,
      }}
      ref={ref}
    >
      <TableRowGroup type="thead">
        {collection.headerRows.map((headerRow) => (
          <TableHeaderRow key={headerRow.key} item={headerRow} state={state}>
            {[...headerRow.childNodes].map((column) =>
              column.props.isSelectionCell ? (
                <TableSelectAllCell
                  key={column.key}
                  column={column}
                  state={state}
                />
              ) : (
                <TableColumnHeader
                  key={column.key}
                  column={column}
                  state={state}
                  md={{ m: 16 }}
                />
              ),
            )}
          </TableHeaderRow>
        ))}
      </TableRowGroup>
      <TableRowGroup type="tbody">
        {[...collection.body.childNodes].map((row) => (
          <TableRow key={row.key} item={row} state={state}>
            {[...row.childNodes].map((cell) =>
              cell.props.isSelectionCell ? (
                <TableCheckboxCell key={cell.key} cell={cell} state={state} />
              ) : (
                <TableCell
                  key={cell.key}
                  cell={cell}
                  state={state}
                  md={{ p: { py: 12, px: 16 } }}
                />
              ),
            )}
          </TableRow>
        ))}
      </TableRowGroup>
    </Box>
  );
};

Table.Cell = Cell;
Table.Column = Column;
Table.Row = Row;
Table.Body = TableBody;
Table.Header = TableHeader;
