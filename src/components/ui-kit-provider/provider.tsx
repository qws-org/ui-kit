import type { FC, PropsWithChildren } from "react";

import { createCssVars } from "~/components/ui-kit-provider/createCssVars";

import { uiKitContext } from "./context";
import type { UIKitProviderProps } from "./types";

export const UIKitProvider: FC<
  PropsWithChildren<{ value: UIKitProviderProps; className?: string }>
> = ({ value, children, className = "w-full h-full" }) => {
  return (
    <div className={className} style={createCssVars(value.theme)}>
      <uiKitContext.Provider value={value}>{children}</uiKitContext.Provider>
    </div>
  );
};
