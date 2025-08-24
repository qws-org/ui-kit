import { useTableRowGroup } from "react-aria";
import type { ElementType, FC, ReactNode } from "react";

type TableRowGroupProps = {
  type: ElementType;
  children: ReactNode;
};

export const TableRowGroup: FC<TableRowGroupProps> = ({
  type: Element,
  children,
}) => {
  const { rowGroupProps } = useTableRowGroup();
  return <Element {...rowGroupProps}>{children}</Element>;
};
