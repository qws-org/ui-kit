import { useFocusRing } from "@react-aria/focus";
import type { GridRowProps } from "@react-aria/table";
import { useTableRow } from "@react-aria/table";
import { mergeProps } from "@react-aria/utils";
import type { FC, ReactNode } from "react";
import { useRef } from "react";
import type { TableState } from "react-stately";

import { useUiKitComponents } from "~/components";

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
  const { Link } = useUiKitComponents();
  const Wrapper = item.props.href ? Link : "tr";

  return (
    <Wrapper
      className={`table-row [font-size:var(--fontSize-mobile-small-body)] [line-height:var(--lineHeight-mobile-small-body)] md:[font-size:var(--fontSize-desktop-small-body)] md:[line-height:var(--lineHeight-desktop-small-body)] text-white outline-none !select-all ${isSelected ? "bg-purple-700 text-white" : item.index % 2 ? "bg-[#171717]" : "bg-[#0F0F0F]"}`}
      {...mergeProps(rowProps, focusProps)}
      href={item.props.href}
      onClick={() => (item.props.href ? undefined : rowProps.onClick)}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      ref={ref}
    >
      {children}
    </Wrapper>
  );
};
