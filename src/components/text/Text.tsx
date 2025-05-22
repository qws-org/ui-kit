import type { FC } from "react";

import type { BoxProps } from "~/components";
import { Markdown } from "~/components";

import styles from "./Text.module.css";

export type TextProps = {
  className?: string;
  content: string;
  size?: "large" | "medium" | "small";
  alignment?: "left" | "center" | "right" | "justify";
} & Partial<Omit<BoxProps, "as" | "onClick" | "display" | "children">>;

export const Text: FC<TextProps> = (props) => {
  const { className, content, size = "medium" } = props;

  let style = styles.textReactMarkdown;

  if (size === "large") {
    style += ` ${styles.textReactMarkdownLarge}`;
  }

  if (size === "medium") {
    style += ` ${styles.textReactMarkdownMedium}`;
  }

  if (size === "small") {
    style += ` ${styles.textReactMarkdownSmall}`;
  }
  return (
    <Markdown {...props} className={`${style ?? ""} ${className ?? ""}`}>
      {content}
    </Markdown>
  );
};
