import type { ColorKeys } from "~/components";

import type { UiKitTypographyProps } from "../types";
import { useUiKitTheme } from "../ui-kit-provider/useUiKitTheme";

type BaseEntry = {
  m?: UiKitTypographyProps;
  d?: UiKitTypographyProps;
  md?: UiKitTypographyProps;
};

type Entry = BaseEntry & { hover: BaseEntry };

type Output = {
  classNames: string;
  styles: Record<string, string | number>;
};

export const useTypography = (props: Entry): Output => {
  let classNames = "";
  const styles: Output["styles"] = {};
  const { colors } = useUiKitTheme();
  // color
  if (props.m?.color) {
    styles["--color"] = colors[props.m.color as ColorKeys] ?? props.m.color;
    classNames += `text-[color:var(--color)] `;
  }

  if (props.md?.color && props.md.color !== props.m?.color) {
    styles["--md-color"] =
      colors[props.md.color as ColorKeys] ?? props.md.color;
    classNames += `md:text-[color:var(--md-color)] `;
  }

  const mdColor = props.md?.color ?? props.m?.color;

  if (props.d?.color && props.d.color !== mdColor) {
    styles["--d-color"] = colors[props.d.color as ColorKeys] ?? props.d.color;
    classNames += `hover:text-[color:var(--d-color)] `;
  }
  // ----------------------------------------------------------------------------

  // hover color
  if (props.hover.m?.color) {
    styles["--hover-color"] =
      colors[props.hover.m.color as ColorKeys] ?? props.hover.m.color;
    classNames += `hover:text-[color:var(--hover-color)] `;
  }

  if (props.hover.md?.color && props.hover.md.color !== props.hover.m?.color) {
    styles["--hover-md-color"] =
      colors[props.hover.md.color as ColorKeys] ?? props.hover.md.color;
    classNames += `hover:md:text-[color:var(--hover-md-color)] `;
  }

  const hoverMdColor = props.hover.md?.color ?? props.hover.m?.color;

  if (props.hover.d?.color && props.hover.d.color !== hoverMdColor) {
    styles["--hover-d-color"] =
      colors[props.hover.d.color as ColorKeys] ?? props.hover.d.color;
    classNames += `hover:lg:text-[color:var(--hover-d-color)] `;
  }
  // ----------------------------------------------------------------------------

  // font-size
  if (typeof props.m?.fontSize === "number") {
    styles["--fs"] = props.m.fontSize;
    classNames += `[font-size:var(--fs)] `;
  }

  if (
    typeof props.md?.fontSize === "number" &&
    props.md.fontSize !== props.m?.fontSize
  ) {
    styles["--md-fs"] = props.md.fontSize;
    classNames += `md:[font-size:var(--md-fs)] `;
  }

  const mdFontSize = props.md?.fontSize ?? props.m?.fontSize;

  if (
    typeof props.d?.fontSize === "number" &&
    props.d.fontSize !== mdFontSize
  ) {
    styles["--d-fs"] = props.d.fontSize;
    classNames += `[font-size:var(--d-fs)] `;
  }
  // ----------------------------------------------------------------------------

  // hover font-size
  if (typeof props.hover.m?.fontSize === "number") {
    styles["--hover-fs"] = props.hover.m.fontSize;
    classNames += `hover:[font-size:var(--hover-fs)] `;
  }

  if (
    typeof props.hover.md?.fontSize === "number" &&
    props.hover.md.fontSize !== props.hover.m?.fontSize
  ) {
    styles["--hover-md-fs"] = props.hover.md.fontSize;
    classNames += `md:hover:[font-size:var(--hover-md-fs)] `;
  }

  const hoverMdFontSize = props.hover.md?.fontSize ?? props.hover.m?.fontSize;

  if (props.hover.d?.fontSize && props.hover.d.fontSize !== hoverMdFontSize) {
    styles["--hover-d-fs"] = props.hover.d.fontSize;
    classNames += `lg:hover:[font-size:var(--hover-d-fs)] `;
  }

  // ----------------------------------------------------------------------------

  // font-weight

  if (typeof props.m?.fontWeight === "number") {
    styles["--fw"] = props.m.fontWeight;
    classNames += `[font-weight:var(--fw)] `;
  }

  if (
    typeof props.md?.fontWeight === "number" &&
    props.md.fontWeight !== props.m?.fontWeight
  ) {
    styles["--md-fw"] = props.md.fontWeight;
    classNames += `md:[font-weight:var(--md-fw)] `;
  }

  const mdFontWeight = props.md?.fontWeight ?? props.m?.fontWeight;

  if (
    typeof props.d?.fontWeight === "number" &&
    props.d.fontWeight !== mdFontWeight
  ) {
    styles["--d-fw"] = props.d.fontWeight;
    classNames += `[font-weight:var(--d-fw)] `;
  }

  // ----------------------------------------------------------------------------

  // hover font-weight

  if (typeof props.hover.m?.fontWeight === "number") {
    styles["--hover-fw"] = props.hover.m.fontWeight;
    classNames += `hover:[font-weight:var(--hover-fw)] `;
  }

  if (
    typeof props.hover.md?.fontWeight === "number" &&
    props.hover.md.fontWeight !== props.hover.m?.fontWeight
  ) {
    styles["--hover-md-fw"] = props.hover.md.fontWeight;
    classNames += `md:hover:[font-weight:var(--hover-md-fw)] `;
  }

  const hoverMdFontWeight =
    props.hover.md?.fontWeight ?? props.hover.m?.fontWeight;

  if (
    props.hover.d?.fontWeight &&
    props.hover.d.fontWeight !== hoverMdFontWeight
  ) {
    styles["--hover-d-fw"] = props.hover.d.fontWeight;
    classNames += `lg:hover:[font-weight:var(--hover-d-fw)] `;
  }

  // ----------------------------------------------------------------------------

  // line-height

  if (typeof props.m?.lineHeight === "number") {
    styles["--lh"] = props.m.lineHeight;
    classNames += `[line-height:var(--lh)] `;
  }

  if (
    typeof props.md?.lineHeight === "number" &&
    props.md.lineHeight !== props.m?.lineHeight
  ) {
    styles["--md-lh"] = props.md.lineHeight;
    classNames += `md:[line-height:var(--md-lh)] `;
  }

  const mdLineHeight = props.md?.lineHeight ?? props.m?.lineHeight;

  if (
    typeof props.d?.lineHeight === "number" &&
    props.d.lineHeight !== mdLineHeight
  ) {
    styles["--d-lh"] = props.d.lineHeight;
    classNames += `[line-height:var(--d-lh)] `;
  }
  // ----------------------------------------------------------------------------

  // line-height hover
  if (typeof props.hover.m?.lineHeight === "number") {
    styles["--hover-lh"] = props.hover.m.lineHeight;
    classNames += `hover:[line-height:var(--hover-lh)] `;
  }

  if (
    typeof props.hover.md?.lineHeight === "number" &&
    props.hover.md.lineHeight !== props.hover.m?.lineHeight
  ) {
    styles["--hover-md-lh"] = props.hover.md.lineHeight;
    classNames += `md:hover:[line-height:var(--hover-md-lh)] `;
  }

  const hoverMdLineHeight =
    props.hover.md?.lineHeight ?? props.hover.m?.lineHeight;

  if (
    typeof props.hover.d?.lineHeight === "number" &&
    props.hover.d?.lineHeight !== hoverMdLineHeight
  ) {
    styles["--hover-d-lh"] = props.hover.d.lineHeight;
    classNames += `lg:hover:[line-height:var(--hover-d-lh)] `;
  }
  // ----------------------------------------------------------------------------

  // vertical align

  if (props.m?.verticalAlign) {
    classNames += `align-${props.m.verticalAlign} `;
  }

  if (
    props.md?.verticalAlign &&
    props.md.verticalAlign !== props.m?.verticalAlign
  ) {
    classNames += `md:align-${props.md.verticalAlign} `;
  }

  const mdVerticalAlign = props.md?.verticalAlign ?? props.m?.verticalAlign;

  if (props.d?.verticalAlign && props.d.verticalAlign !== mdVerticalAlign) {
    classNames += `lg:align-${props.d.verticalAlign} `;
  }
  // ----------------------------------------------------------------------------

  // hover vertical align
  if (props.hover.m?.verticalAlign) {
    classNames += `hover:align-${props.hover.m.verticalAlign} `;
  }

  if (
    props.hover.md?.verticalAlign &&
    props.hover.md.verticalAlign !== props.hover.m?.verticalAlign
  ) {
    classNames += `md:hover:align-${props.hover.md.verticalAlign} `;
  }

  const hoverMdVerticalAlign =
    props.hover.md?.verticalAlign ?? props.hover.m?.verticalAlign;

  if (
    props.hover.d?.verticalAlign &&
    props.hover.d.verticalAlign !== hoverMdVerticalAlign
  ) {
    classNames += `lg:hover:align-${props.hover.d.verticalAlign} `;
  }
  // ----------------------------------------------------------------------------

  // horizontal align

  if (props.m?.horizontalAlign) {
    classNames += `text-${props.m.horizontalAlign} `;
  }

  if (
    props.md?.horizontalAlign &&
    props.md.horizontalAlign !== props.m?.horizontalAlign
  ) {
    classNames += `md:text-${props.md.horizontalAlign} `;
  }

  const mdHorizontalAlign =
    props.md?.horizontalAlign ?? props.m?.horizontalAlign;

  if (
    props.d?.horizontalAlign &&
    props.d.horizontalAlign !== mdHorizontalAlign
  ) {
    classNames += `lg:text-${props.d.horizontalAlign} `;
  }
  // ----------------------------------------------------------------------------

  // hover horizontal align
  if (props.hover.m?.horizontalAlign) {
    classNames += `hover:text-${props.hover.m.horizontalAlign} `;
  }

  if (
    props.hover.md?.horizontalAlign &&
    props.hover.md.horizontalAlign !== props.hover.m?.horizontalAlign
  ) {
    classNames += `md:hover:text-${props.hover.md.horizontalAlign} `;
  }

  const hoverMdHorizontalAlign =
    props.hover.md?.horizontalAlign ?? props.hover.m?.horizontalAlign;

  if (
    props.hover.d?.horizontalAlign &&
    props.hover.d.horizontalAlign !== hoverMdHorizontalAlign
  ) {
    classNames += `lg:hover:text-${props.hover.d.horizontalAlign} `;
  }
  // ----------------------------------------------------------------------------

  // text transform

  if (props.m?.textTransform) {
    classNames += `${props.m.textTransform} `;
  }

  if (
    props.md?.textTransform &&
    props.md.textTransform !== props.m?.textTransform
  ) {
    classNames += `md:${props.md.textTransform} `;
  }

  const mdTextTransform = props.md?.textTransform ?? props.m?.textTransform;

  if (props.d?.textTransform && props.d.textTransform !== mdTextTransform) {
    classNames += `lg:${props.d.textTransform} `;
  }
  // ----------------------------------------------------------------------------

  // hover text transform
  if (props.hover.m?.textTransform) {
    classNames += `hover:${props.hover.m.textTransform} `;
  }

  if (
    props.hover.md?.textTransform &&
    props.hover.md.textTransform !== props.hover.m?.textTransform
  ) {
    classNames += `md:hover:${props.hover.md.textTransform} `;
  }

  const hoverMdTextTransform =
    props.hover.md?.textTransform ?? props.hover.m?.textTransform;

  if (
    props.hover.d?.textTransform &&
    props.hover.d.textTransform !== hoverMdTextTransform
  ) {
    classNames += `lg:hover:${props.hover.d.textTransform} `;
  }
  // ----------------------------------------------------------------------------

  // text decoration

  if (props.m?.textDecoration) {
    classNames += `${props.m.textDecoration} `;
  }

  if (
    props.md?.textDecoration &&
    props.md.textDecoration !== props.m?.textDecoration
  ) {
    classNames += `md:${props.md.textDecoration} `;
  }

  const mdTextDecoration = props.md?.textDecoration ?? props.m?.textDecoration;

  if (props.d?.textDecoration && props.d.textDecoration !== mdTextDecoration) {
    classNames += `lg:${props.d.textDecoration} `;
  }
  // ----------------------------------------------------------------------------

  // hover text decoration
  if (props.hover.m?.textDecoration) {
    classNames += `hover:${props.hover.m.textDecoration} `;
  }

  if (
    props.hover.md?.textDecoration &&
    props.hover.md.textDecoration !== props.hover.m?.textDecoration
  ) {
    classNames += `md:hover:${props.hover.md.textDecoration} `;
  }

  const hoverMdTextDecoration =
    props.hover.md?.textDecoration ?? props.hover.m?.textDecoration;

  if (
    props.hover.d?.textDecoration &&
    props.hover.d.textDecoration !== hoverMdTextDecoration
  ) {
    classNames += `lg:hover:${props.hover.d.textDecoration} `;
  }
  // ----------------------------------------------------------------------------

  // text overflow

  if (props.m?.textOverflow) {
    classNames += `text-${props.m.textOverflow} `;
  }

  if (
    props.md?.textOverflow &&
    props.md.textOverflow !== props.m?.textOverflow
  ) {
    classNames += `md:text-${props.md.textOverflow} `;
  }

  const mdTextOverflow = props.md?.textOverflow ?? props.m?.textOverflow;

  if (props.d?.textOverflow && props.d.textOverflow !== mdTextOverflow) {
    classNames += `lg:text-${props.d.textOverflow} `;
  }
  // ----------------------------------------------------------------------------

  // text overflow hover

  if (props.hover.m?.textOverflow) {
    classNames += `hover:text-${props.hover.m.textOverflow} `;
  }

  if (
    props.hover.md?.textOverflow &&
    props.hover.md.textOverflow !== props.hover.m?.textOverflow
  ) {
    classNames += `md:hover:text-${props.hover.md.textOverflow} `;
  }

  const hoverMdTextOverflow =
    props.hover.md?.textOverflow ?? props.hover.m?.textOverflow;

  if (
    props.hover.d?.textOverflow &&
    props.hover.d.textOverflow !== hoverMdTextOverflow
  ) {
    classNames += `lg:hover:text-${props.hover.d.textOverflow} `;
  }

  // white space
  if (props.m?.whiteSpace) {
    classNames += `whitespace-${props.m.whiteSpace} `;
  }

  if (props.md?.whiteSpace && props.md.whiteSpace !== props.m?.whiteSpace) {
    classNames += `md:whitespace-${props.md.whiteSpace} `;
  }

  const mdWhiteSpace = props.md?.whiteSpace ?? props.m?.whiteSpace;

  if (props.d?.whiteSpace && props.d.whiteSpace !== mdWhiteSpace) {
    classNames += `lg:whitespace-${props.d.whiteSpace} `;
  }
  // ----------------------------------------------------------------------------

  // white space hover
  if (props.hover.m?.whiteSpace) {
    classNames += `hover:whitespace-${props.hover.m.whiteSpace} `;
  }

  if (
    props.hover.md?.whiteSpace &&
    props.hover.md.whiteSpace !== props.hover.m?.whiteSpace
  ) {
    classNames += `md:hover:whitespace-${props.hover.md.whiteSpace} `;
  }

  const hoverMdWhiteSpace =
    props.hover.md?.whiteSpace ?? props.hover.m?.whiteSpace;

  if (
    props.hover.d?.whiteSpace &&
    props.hover.d.whiteSpace !== hoverMdWhiteSpace
  ) {
    classNames += `lg:hover:whitespace-${props.hover.d.whiteSpace} `;
  }
  // ----------------------------------------------------------------------------

  return {
    classNames,
    styles,
  };
};
