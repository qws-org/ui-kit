import type { FC, ReactNode } from "react";

import { Button } from "~/components";
import { Flex } from "~/components/flex/Flex";

export type PaginationProps = {
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  renderPageLabel?: (page: number) => ReactNode;
};

export const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  itemsPerPage,
  renderPageLabel = (page) =>
    `${page * itemsPerPage + 1} - ${(page + 1) * itemsPerPage}`,
}) => {
  if (totalPages <= 1) return null;

  return (
    <Flex gap={10} justify="center" m={{ mt: 16 }} md={{ m: { mt: 24 } }}>
      {Array.from({ length: totalPages }, (_, i) => (
        <Button
          minWidth="fit-content"
          key={i}
          variant="secondary"
          size="xsmall"
          p={{ px: 24, py: 8 }}
          md={{
            p: { px: 24, py: 8 },
            fontSize: "button.desktop.small",
            lineHeight: "button.desktop.small",
          }}
          className={`rounded ${
            currentPage === i
              ? "outline outline-1 outline-[var(--colors-text-selection)] text-[var(--colors-text-selection)]"
              : ""
          }`}
          onPress={() => onPageChange(i)}
        >
          {renderPageLabel(i)}
        </Button>
      ))}
    </Flex>
  );
};
