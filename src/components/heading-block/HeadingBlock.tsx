import type { FC } from "react";
import { tv } from "tailwind-variants";

import { Box, type BoxProps, Markdown } from "~/components";

import styles from "./HeadingBlock.module.css";

export type TitleSizes = "large" | "medium" | "small" | "xsmall";
export type TextSizes = "large" | "medium" | "small";
export type HeadingBlockAlignments = "left" | "center";

export type HeadingBlockProps = {
  title?: string;
  description?: string;
  size?: TitleSizes;
  textSize?: TextSizes;
  alignment?: HeadingBlockAlignments;
  className?: string;
} & Partial<Omit<BoxProps, "as" | "onClick" | "display" | "children">>;

const heading = tv({
  base: "max-w-[1270px] ",
  slots: {
    title: "",
    description: "text-sm whitespace-pre-line",
  },
  variants: {
    alignment: {
      left: "text-left",
      center: "text-center",
    },
    textSize: {
      large: {
        description:
          "[font-size:var(--fontSize-mobile-large-body)] [line-height:var(--lineHeight-mobile-large-body)] md:[font-size:var(--fontSize-desktop-large-body)] md:[line-height:var(--lineHeight-desktop-large-body)] text-[var(--colors-text-primary-muted)]",
      },
      medium: {
        description:
          "[font-size:var(--fontSize-mobile-medium-body)] [line-height:var(--lineHeight-mobile-medium-body)] md:[font-size:var(--fontSize-desktop-medium-body)] md:[line-height:var(--lineHeight-desktop-medium-body)] text-[var(--colors-text-primary-muted)]",
      },
      small: {
        description:
          "[font-size:var(--fontSize-mobile-small-body)] [line-height:var(--lineHeight-mobile-small-body)] md:[font-size:var(--fontSize-desktop-small-body)] md:[line-height:var(--lineHeight-desktop-small-body)] text-[var(--colors-text-primary-muted)]",
      },
    },
    size: {
      large: {
        title:
          "[font-size:var(--fontSize-mobile-large-title)] [line-height:var(--lineHeight-mobile-large-title)] md:[font-size:var(--fontSize-desktop-large-title)] md:[line-height:var(--lineHeight-desktop-large-title)] mb-2 md:mb-4",
      },
      medium: {
        title:
          "[font-size:var(--fontSize-mobile-medium-title)] [line-height:var(--lineHeight-mobile-medium-title)] md:[font-size:var(--fontSize-desktop-medium-title)] md:[line-height:var(--lineHeight-desktop-medium-title)] mb-6 md:mb-10",
      },
      small: {
        title:
          "[font-size:var(--fontSize-mobile-small-title)] [line-height:var(--lineHeight-mobile-small-title)] md:[font-size:var(--fontSize-desktop-small-title)] md:[line-height:var(--lineHeight-desktop-small-title)] mb-2 md:mb-4",
      },
      xsmall: {
        title:
          "[font-size:var(--fontSize-mobile-xsmall-title)] [line-height:var(--lineHeight-mobile-xsmall-title)] md:[font-size:var(--fontSize-desktop-xsmall-title)] md:[line-height:var(--lineHeight-desktop-xsmall-title)] mb-2 md:mb-4",
      },
    },
  },
});

export const HeadingBlock: FC<HeadingBlockProps> = (props) => {
  const {
    title,
    description,
    size = "large",
    alignment = "left",
    className,
    ...indentationProps
  } = props;

  const {
    base,
    title: titleClass,
    description: descriptionClass,
  } = heading({
    alignment,
    size,
  });
  let Title: "h1" | "h2" | "h3" | "h4" = "h1";

  if (size === "medium") {
    Title = "h2";
  }
  if (size === "small") {
    Title = "h3";
  }
  if (size === "xsmall") {
    Title = "h4";
  }

  return (
    <Box
      {...props}
      style={{
        ...indentationProps.style,
      }}
      className={`${base()} ${className}`}
      m={{ mx: "auto" }}
    >
      {title && <Title className={titleClass()}>{title}</Title>}
      {description && (
        <Markdown
          className={`${descriptionClass()} ${styles.descriptionReactMarkdown}`}
        >
          {description}
        </Markdown>
      )}
    </Box>
  );
};
