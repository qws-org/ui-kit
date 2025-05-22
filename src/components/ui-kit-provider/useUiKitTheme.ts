import { useContext } from "react";

import type { UIKitProviderTheme } from "~/components";

import { uiKitContext } from "./context";

export const useUiKitTheme = (): UIKitProviderTheme => {
  const context = useContext(uiKitContext);

  if (!context) {
    throw new Error(
      "useUiKitContext must be defined, please make sure that u are add a context provider",
    );
  }

  return context.theme;
};
