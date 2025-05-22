import { createContext } from "react";

import type { UIKitProviderProps } from "./types";

export const uiKitContext = createContext<UIKitProviderProps | null>(null);
