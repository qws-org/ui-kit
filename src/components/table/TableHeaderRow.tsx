import type { GridRowProps } from "@react-aria/table";
import { useTableHeaderRow } from "@react-aria/table";
import type { FC, ReactNode } from "react";
import { useRef } from "react";
import type { TableState } from "react-stately";

export type TableHeaderRowProps = {
  state: TableState<unknown>;
  item: GridRowProps<unknown>["node"];
  children: ReactNode;
};

export const TableHeaderRow: FC<TableHeaderRowProps> = ({
  item,
  state,
  children,
}) => {
  const ref = useRef<HTMLTableRowElement | null>(null);
  const { rowProps } = useTableHeaderRow({ node: item }, state, ref);

  return (
    <tr className="bg-[rgba(155,95,245,0.25)]" {...rowProps} ref={ref}>
      {children}
    </tr>
  );
};
