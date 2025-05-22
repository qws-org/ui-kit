import { useContext } from "react";

import { uiKitContext } from "./context";
import type { UIKitProviderProps } from "./types";

export const useUiKitComponents = (): UIKitProviderProps["components"] => {
  const context = useContext(uiKitContext);
  if (context === null) {
    throw new Error(
      "data of UIKitProvider cannot be null, please add 'UIKitProvider' to the root of your application",
    );
  }

  return context.components;
};
