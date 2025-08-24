import { useFocusRing } from "react-aria";
import type { GridRowProps } from "react-aria";
import { useTableRow } from "react-aria";
import { mergeProps } from "react-aria";
import type { FC, ReactNode } from "react";
import { useRef } from "react";
import type { TableState } from "react-stately";

import { Box } from "~/components";

export type TableRowProps = {
  item: GridRowProps<unknown>["node"];
  children: ReactNode;
  state: TableState<unknown>;
};

export const TableRow: FC<TableRowProps> = ({ item, children, state }) => {
  const ref = useRef<HTMLTableRowElement | null>(null);
  const isSelected = state.selectionManager.isSelected(item.key);
  const { rowProps } = useTableRow(
    {
      node: item,
    },
    state,
    ref,
  );
  const { focusProps } = useFocusRing();

  return (
    <Box
      width="100%"
      display="table-row"
      as="tr"
      fontSize="body.mobile.small"
      lineHeight="body.mobile.small"
      md={{ fontSize: "body.desktop.small", lineHeight: "body.desktop.small" }}
      {...mergeProps(rowProps, focusProps)}
      bg={
        isSelected
          ? "surface-primary-subtle"
          : item.index % 2
            ? "surface-neutral-default"
            : "surface-neutral-dark-default"
      }
      style={{ userSelect: "all", ...{ important: "user-select" } }}
      ref={ref}
    >
      {children}
    </Box>
  );
};
