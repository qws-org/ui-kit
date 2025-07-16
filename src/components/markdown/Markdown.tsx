import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { tv } from "tailwind-variants";

import type { BoxProps } from "~/components";
import { Box } from "~/components";

const customSchema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), "button", "style", "iframe"],
  attributes: {
    ...defaultSchema.attributes,
    "*": ["class", "className", "style", "id"],
    a: ["href", "target", "rel"],
    iframe: ["src", "width", "height", "allow", "frameborder"],
  },
  protocols: {
    ...defaultSchema.protocols,
    src: ["https"],
    href: ["https", "mailto"],
  },
};

export type MarkdownProps = {
  children: string;
  className?: string;
  alignment?: "left" | "center" | "right" | "justify";
} & Partial<Omit<BoxProps, "as" | "onClick" | "children">>;

const markdownStyles = tv({
  variants: {
    alignment: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
  },
  defaultVariants: {
    alignment: "left",
  },
});

export const Markdown: React.FC<MarkdownProps> = (props) => {
  const {
    children,
    className,
    alignment = "left",
    ...indentationProps
  } = props;

  return (
    <Box
      {...props}
      style={{
        ...indentationProps.style,
      }}
    >
      <ReactMarkdown
        className={markdownStyles({
          className: className ?? "",
          alignment,
        })}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeSanitize, customSchema]]}
      >
        {children}
      </ReactMarkdown>
    </Box>
  );
};
