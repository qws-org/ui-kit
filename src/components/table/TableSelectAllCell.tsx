import type { AriaTableColumnHeaderProps } from "@react-aria/table";
import {
  useTableColumnHeader,
  useTableSelectAllCheckbox,
} from "@react-aria/table";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import type { FC } from "react";
import { useRef } from "react";
import type { TableState } from "react-stately";

import { Checkbox } from "~/components/checkbox/Checkbox";

export type TableSelectAllCellProps = {
  column: AriaTableColumnHeaderProps<unknown>["node"];
  state: TableState<unknown>;
};

export const TableSelectAllCell: FC<TableSelectAllCellProps> = ({
  column,
  state,
}) => {
  const ref = useRef<HTMLTableCellElement | null>(null);
  const { columnHeaderProps } = useTableColumnHeader(
    { node: column },
    state,
    ref,
  );
  const { checkboxProps } = useTableSelectAllCheckbox(state);

  return (
    <th {...columnHeaderProps} ref={ref}>
      {state.selectionManager.selectionMode === "single" ? (
        <VisuallyHidden>{checkboxProps["aria-label"]}</VisuallyHidden>
      ) : (
        <Checkbox
          className="px-2 py-3 md:p-4"
          aria-label="label"
          {...checkboxProps}
          value={checkboxProps.isSelected}
        />
      )}
    </th>
  );
};
