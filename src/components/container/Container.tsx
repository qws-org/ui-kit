import type { FC } from "react";

import type { FlexProps } from "../flex/Flex";
import { Flex } from "../flex/Flex";

export type ContainerProps = FlexProps;

export const Container: FC<ContainerProps> = (props) => {
  return (
    <Flex width="100%" {...props} className={`${props.className}`}>
      {props.children}
    </Flex>
  );
};
