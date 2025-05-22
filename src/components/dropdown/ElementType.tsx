import type { HTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";

export const ElementType = forwardRef<
  HTMLDivElement,
  { children: ReactNode } & HTMLAttributes<HTMLElement>
>(({ children, ...rest }, ref) => {
  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});
