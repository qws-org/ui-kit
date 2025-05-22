import { useState } from "react";

import type { PaginationProps } from "~/components/pagination/Pagination";

export type UseClientPaginationEntry<T> = {
  renderPageLabel?: PaginationProps["renderPageLabel"];
  data: Array<T>;
  onPageChange?: (page: number) => void;
  itemsPerPage?: number;
};

export type UseClientPaginationOutput<T> = {
  paginationProps: PaginationProps;
  paginatedData: Array<T>;
};

export const useClientPagination = function <T>({
  renderPageLabel,
  data,
  onPageChange,
  itemsPerPage = 10,
}: UseClientPaginationEntry<T>): UseClientPaginationOutput<T> {
  const [page, setPage] = useState(0);

  const spreadsheetData = data;
  const totalPages = Math.ceil(spreadsheetData.length / itemsPerPage);
  const paginatedData = spreadsheetData.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage,
  );

  return {
    paginationProps: {
      totalPages,
      currentPage: page,
      onPageChange(p) {
        onPageChange?.(p);
        setPage(p);
      },
      itemsPerPage,
      renderPageLabel,
    },
    paginatedData,
  };
};
