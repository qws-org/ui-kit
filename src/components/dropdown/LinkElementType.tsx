import type { AnchorHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";

import { useUiKitComponents } from "~/components";

export const LinkElementType = forwardRef<
  HTMLAnchorElement,
  {
    children: ReactNode;
    href: string;
  } & AnchorHTMLAttributes<HTMLAnchorElement>
>(({ children, href, ...rest }, ref) => {
  const { Link } = useUiKitComponents();

  return (
    <Link href={href} ref={ref} {...rest}>
      {children}
    </Link>
  );
});
