import type { AriaBreadcrumbItemProps } from "react-aria";
import { useBreadcrumbItem } from "react-aria";
import type { ReactNode } from "react";
import React, { useRef } from "react";
import { tv } from "tailwind-variants";

import { Flex, useUiKitComponents } from "~/components";

export type BreadcrumbItemProps = AriaBreadcrumbItemProps & {
  href: string;
  variant?: "active" | "disabled";
  children: ReactNode;
};
const breadcrumbItemStyles = tv({
  base: "[font-size:var(--fontSize-mobile-large-body)]  md:[font-size:var(--fontSize-desktop-large-body)] [line-height:var(--lineHeight-mobile-large-body)] md:[line-height:var(--lineHeight-desktop-large-body)] whitespace-nowrap text-[var(--colors-text-selection)] flex items-center",
  variants: {
    nonActive: {
      true: "cursor-default  text-[var(--colors-text-primary-default)] ",
      false: "cursor-pointer",
    },
  },
  defaultVariants: {
    nonActive: false,
  },
});

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ ...props }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const { itemProps } = useBreadcrumbItem(props, ref);
  const { Link } = useUiKitComponents();

  return (
    <Flex justify="center" as="li">
      <Link
        ref={ref}
        {...itemProps}
        href={props.href}
        className={breadcrumbItemStyles({
          nonActive: props.variant === "disabled",
        })}
      >
        {props.children}
      </Link>
    </Flex>
  );
};
