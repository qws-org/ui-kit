import type { FC, ReactNode } from "react";
import React from "react";

import type { GridProps } from "../grid/Grid";
import { Grid } from "../grid/Grid";

export const DefaultWrapper: FC<
  { children: ReactNode } & Partial<GridProps>
> = ({ children, ...rest }) => (
  <Grid gap={16} cols={1} {...rest}>
    {children}
  </Grid>
);
