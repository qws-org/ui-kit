import type { FC, PropsWithChildren } from "react";

import { uiKitContext } from "./context";
import type { UIKitProviderProps } from "./types";

export const UIKitProvider: FC<
  PropsWithChildren<{ value: UIKitProviderProps }>
> = ({ value, children }) => {
  return (
    <uiKitContext.Provider value={value}>{children}</uiKitContext.Provider>
  );
};
