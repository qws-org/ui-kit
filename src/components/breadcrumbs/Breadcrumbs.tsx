import type { AriaBreadcrumbsProps } from "@react-aria/breadcrumbs";
import { useBreadcrumbs } from "@react-aria/breadcrumbs";
import type { ReactNode } from "react";
import React from "react";
import { tv } from "tailwind-variants";

import type { BoxProps } from "~/components";
import { Box } from "~/components";
import { BredcrumbsArrow } from "~/icons";

import type { BreadcrumbItemProps } from "./BreadcrumbItem";

const listStyles = tv({
  base: "flex m-0 p-0 list-none items-center flex-wrap",
});
const sectionStyles = tv({ base: "py-4 md:pt-16 md:pb-10" });

export type BreadcrumbsProps = AriaBreadcrumbsProps & {
  children: ReactNode;
  className?: string;
} & Partial<Omit<BoxProps, "display" | "as" | "children" | "onClick">>;

export const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const { navProps } = useBreadcrumbs(props);
  const childCount = React.Children.count(props.children);

  return (
    <Box
      {...navProps}
      {...props}
      className={`${sectionStyles()} ${props?.className ?? ""}`}
      as={"nav"}
      style={{
        ...props.style,
      }}
    >
      <ol className={listStyles()}>
        {React.Children.map(props.children, (child, i) => (
          <React.Fragment key={i}>
            {React.cloneElement(
              child as React.ReactElement<BreadcrumbItemProps>,
              {
                variant: i === childCount - 1 ? "disabled" : "active",
              },
            )}
            {i < childCount - 1 && (
              <span aria-hidden="true" className="px-2 py-[6px]">
                <BredcrumbsArrow />
              </span>
            )}
          </React.Fragment>
        ))}
      </ol>
    </Box>
  );
};
