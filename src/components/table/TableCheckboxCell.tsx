import type { AriaTableCellProps } from "@react-aria/table";
import { useTableCell, useTableSelectionCheckbox } from "@react-aria/table";
import type { FC } from "react";
import { useRef } from "react";
import type { TableState } from "react-stately";

import { Box } from "~/components";
import { Checkbox } from "~/components/checkbox/Checkbox";

export type TableCheckboxCellProps = {
  cell: AriaTableCellProps["node"];
  state: TableState<unknown>;
};

export const TableCheckboxCell: FC<TableCheckboxCellProps> = ({
  cell,
  state,
}) => {
  const ref = useRef<HTMLTableCellElement | null>(null);
  const { gridCellProps } = useTableCell({ node: cell }, state, ref);

  if (!cell.parentKey) {
    return null;
  }

  const { checkboxProps } = useTableSelectionCheckbox(
    { key: cell.parentKey },
    state,
  );

  return (
    <td {...gridCellProps} ref={ref}>
      <Box p={{ px: 8, py: 12 }} md={{ p: { py: 12, px: 16 } }}>
        <Checkbox
          aria-label="label"
          {...checkboxProps}
          value={state.selectionManager.isSelected(cell.key)}
        />
      </Box>
    </td>
  );
};
