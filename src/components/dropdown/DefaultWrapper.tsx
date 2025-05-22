import type { FC, ReactNode } from "react";
import React from "react";

import { Grid } from "../grid/Grid";

export const DefaultWrapper: FC<{ children: ReactNode }> = (wrapperProps) => (
  <Grid gap={16} cols={1}>
    {wrapperProps.children}
  </Grid>
);
