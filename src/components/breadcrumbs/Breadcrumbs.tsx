import type { AriaBreadcrumbsProps } from "@react-aria/breadcrumbs";
import { useBreadcrumbs } from "@react-aria/breadcrumbs";
import type { ReactElement, ReactNode } from "react";
import React from "react";
import { tv } from "tailwind-variants";

import type { BoxProps } from "~/components";
import { Box } from "~/components";
import { BredcrumbsArrow } from "~/icons";

import type { BreadcrumbItemProps } from "./BreadcrumbItem";
import { BreadcrumbItem } from "./BreadcrumbItem";

const listStyles = tv({
  base: "flex m-0 p-0 list-none items-center flex-wrap",
});
const sectionStyles = tv({ base: "py-4 md:pt-16 md:pb-10" });

export type BreadcrumbsProps = AriaBreadcrumbsProps & {
  children: ReactNode;
  className?: string;
} & Partial<Omit<BoxProps, "display" | "as" | "children" | "onClick">>;

function isBreadcrumbItemElement(
  child: unknown,
): child is React.ReactElement<BreadcrumbItemProps> {
  return React.isValidElement(child) && child.type === BreadcrumbItem;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const { navProps } = useBreadcrumbs(props);

  React.Children.forEach(props.children, (child) => {
    if (!isBreadcrumbItemElement(child)) {
      throw new Error("Breadcrumbs only accepts <BreadcrumbItem> as children.");
    }
  });

  const validChildren = React.Children.toArray(props.children) as Array<
    ReactElement<BreadcrumbItemProps>
  >;

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
        {validChildren.map((child, i) => {
          const isLast = i === validChildren.length - 1;

          return (
            <React.Fragment key={i}>
              {React.cloneElement(child, {
                variant:
                  child.props.variant ?? (isLast ? "disabled" : "active"),
              })}
              {!isLast && (
                <span aria-hidden="true" className="px-2 py-[6px]">
                  <BredcrumbsArrow />
                </span>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </Box>
  );
};
