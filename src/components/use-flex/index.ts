import type {
  UiKitAlign,
  UiKitFlexDirection,
  UiKitFlexParams,
  UiKitFlexWrap,
  UiKitJustify,
} from "~/components";

export type UseFlexOutput = {
  styles: Record<string, string | number>;
  className: string;
};

const styleTransformer = (value: string | number): string => {
  return typeof value === "string" ? value : `${value}px`;
};

const justifyStyle = (
  value: UiKitJustify | undefined,
  breakpoint?: "md" | "lg",
): string => {
  if (!value) return "";

  const justifyClass: Record<UiKitJustify, string> = {
    center:
      breakpoint === "md"
        ? "md:justify-center"
        : breakpoint === "lg"
          ? "lg:justify-center"
          : "justify-center",
    end:
      breakpoint === "md"
        ? "md:justify-end"
        : breakpoint === "lg"
          ? "lg:justify-end"
          : "justify-end",
    "flex-end":
      breakpoint === "md"
        ? "md:justify-end"
        : breakpoint === "lg"
          ? "lg:justify-end"
          : "justify-end",
    "flex-start":
      breakpoint === "md"
        ? "md:justify-start"
        : breakpoint === "lg"
          ? "lg:justify-start"
          : "justify-start",
    start:
      breakpoint === "md"
        ? "md:justify-start"
        : breakpoint === "lg"
          ? "lg:justify-start"
          : "justify-start",
    "space-around":
      breakpoint === "md"
        ? "md:justify-around"
        : breakpoint === "lg"
          ? "lg:justify-around"
          : "justify-around",
    "space-between":
      breakpoint === "md"
        ? "md:justify-between"
        : breakpoint === "lg"
          ? "lg:justify-between"
          : "justify-between",
    "space-evenly":
      breakpoint === "md"
        ? "md:justify-evenly"
        : breakpoint === "lg"
          ? "lg:justify-evenly"
          : "justify-evenly",
    stretch:
      breakpoint === "md"
        ? "md:justify-stretch"
        : breakpoint === "lg"
          ? "lg:justify-stretch"
          : "justify-stretch",
    baseline:
      breakpoint === "md"
        ? "md:justify-baseline"
        : breakpoint === "lg"
          ? "lg:justify-baseline"
          : "justify-baseline",
    normal:
      breakpoint === "md"
        ? "md:justify-normal"
        : breakpoint === "lg"
          ? "lg:justify-normal"
          : "justify-normal",
  };

  return justifyClass[value];
};

const flexWrapStyle = (
  value: UiKitFlexWrap | undefined,
  breakpoint?: "md" | "lg",
): string => {
  if (!value) return "";

  const flexWrapClass: Record<UiKitFlexWrap, string> = {
    wrap:
      breakpoint === "md"
        ? "md:flex-wrap"
        : breakpoint === "lg"
          ? "lg:flex-wrap"
          : "flex-wrap",
    nowrap:
      breakpoint === "md"
        ? "md:flex-nowrap"
        : breakpoint === "lg"
          ? "lg:flex-nowrap"
          : "flex-nowrap",
    "wrap-reverse":
      breakpoint === "md"
        ? "md:flex-wrap-reverse"
        : breakpoint === "lg"
          ? "lg:flex-wrap-reverse"
          : "flex-wrap-reverse",
  };

  return flexWrapClass[value];
};

const directionStyle = (
  value: UiKitFlexDirection | undefined,
  breakpoint?: "md" | "lg",
): string => {
  if (!value) return "";

  const directionClass: Record<UiKitFlexDirection, string> = {
    column:
      breakpoint === "md"
        ? "md:flex-col"
        : breakpoint === "lg"
          ? "lg:flex-col"
          : "flex-col",
    "column-reverse":
      breakpoint === "md"
        ? "md:flex-col-reverse"
        : breakpoint === "lg"
          ? "lg:flex-col-reverse"
          : "flex-col-reverse",
    row:
      breakpoint === "md"
        ? "md:flex-row"
        : breakpoint === "lg"
          ? "lg:flex-row"
          : "flex-row",
    "row-reverse":
      breakpoint === "md"
        ? "md:flex-row-reverse"
        : breakpoint === "lg"
          ? "lg:flex-row-reverse"
          : "flex-row-reverse",
  };

  return directionClass[value];
};

const alignStyle = (
  value: UiKitAlign | undefined,
  breakpoint?: "md" | "lg",
): string => {
  if (!value) return "";

  const alignClass: Record<UiKitAlign, string> = {
    center:
      breakpoint === "md"
        ? "md:items-center"
        : breakpoint === "lg"
          ? "lg:items-center"
          : "items-center",
    start:
      breakpoint === "md"
        ? "md:items-start"
        : breakpoint === "lg"
          ? "lg:items-start"
          : "items-start",
    end:
      breakpoint === "md"
        ? "md:items-end"
        : breakpoint === "lg"
          ? "lg:items-end"
          : "items-end",
    "flex-start":
      breakpoint === "md"
        ? "md:items-start"
        : breakpoint === "lg"
          ? "lg:items-start"
          : "items-start",
    "flex-end":
      breakpoint === "md"
        ? "md:items-end"
        : breakpoint === "lg"
          ? "lg:items-end"
          : "items-end",
    stretch:
      breakpoint === "md"
        ? "md:items-stretch"
        : breakpoint === "lg"
          ? "lg:items-stretch"
          : "items-stretch",
    baseline:
      breakpoint === "md"
        ? "md:items-baseline"
        : breakpoint === "lg"
          ? "lg:items-baseline"
          : "items-baseline",
  };

  return alignClass[value];
};

export const useFlex = (params: {
  m: UiKitFlexParams;
  md: UiKitFlexParams;
  d: UiKitFlexParams;
}): UseFlexOutput => {
  const styles: Record<string, string | number> = {};
  let className = "";

  // === GAP ===
  if (typeof params.m.gap !== "undefined") {
    styles["--gap"] = styleTransformer(params.m.gap);
    className += "gap-[var(--gap)] ";
  }

  const mdGap = params.md.gap ?? params.m.gap;
  if (typeof params.md.gap !== "undefined" && params.md.gap !== params.m.gap) {
    styles["--md-gap"] = styleTransformer(params.md.gap);
    className += "md:gap-[var(--md-gap)] ";
  }

  if (typeof params.d.gap !== "undefined" && params.d.gap !== mdGap) {
    styles["--d-gap"] = styleTransformer(params.d.gap);
    className += "lg:gap-[var(--d-gap)] ";
  }

  // === JUSTIFY ===
  if (params.m.justify) {
    className += justifyStyle(params.m.justify) + " ";
  }

  const mdJustify = params.md.justify ?? params.m.justify;
  if (params.md.justify && params.md.justify !== params.m.justify) {
    className += justifyStyle(params.md.justify, "md") + " ";
  }

  if (params.d.justify && params.d.justify !== mdJustify) {
    className += justifyStyle(params.d.justify, "lg") + " ";
  }

  // === FLEX WRAP ===
  if (params.m.flexWrap) {
    className += flexWrapStyle(params.m.flexWrap) + " ";
  }

  if (params.md.flexWrap && params.md.flexWrap !== params.m.flexWrap) {
    className += flexWrapStyle(params.md.flexWrap, "md") + " ";
  }

  const mdFlexWrap = params.md.flexWrap ?? params.m.flexWrap;

  if (params.d.flexWrap && params.d.flexWrap !== mdFlexWrap) {
    className += flexWrapStyle(params.d.flexWrap, "lg") + " ";
  }

  // === ALIGN ===
  if (params.m.align) {
    className += alignStyle(params.m.align) + " ";
  }

  if (params.md.align && params.md.align !== params.m.align) {
    className += alignStyle(params.md.align, "md") + " ";
  }

  const mdAlign = params.md.align ?? params.m.align;

  if (params.d.align && params.d.align !== mdAlign) {
    className += alignStyle(params.d.align, "lg") + " ";
  }

  // === DIRECTION ===
  if (params.m.flexDirection) {
    className += directionStyle(params.m.flexDirection) + " ";
  }

  if (
    params.md.flexDirection &&
    params.md.flexDirection !== params.m.flexDirection
  ) {
    className += directionStyle(params.md.flexDirection, "md") + " ";
  }

  const mdDirection = params.md.flexDirection ?? params.m.flexDirection;

  if (params.d.flexDirection && params.d.flexDirection !== mdDirection) {
    className += directionStyle(params.d.flexDirection, "lg") + " ";
  }

  // === FLEX GROW ===
  if (typeof params.m.flexGrow !== "undefined") {
    styles["--grow"] = params.m.flexGrow;
    className += "grow-[var(--grow)] ";
  }

  const mdGrow = params.md.flexGrow ?? params.m.flexGrow;
  if (
    typeof params.md.flexGrow !== "undefined" &&
    params.md.flexGrow !== params.m.flexGrow
  ) {
    styles["--md-grow"] = params.md.flexGrow;
    className += "md:grow-[var(--md-grow)] ";
  }

  if (
    typeof params.d.flexGrow !== "undefined" &&
    params.d.flexGrow !== mdGrow
  ) {
    styles["--d-grow"] = params.d.flexGrow;
    className += "lg:grow-[var(--d-grow)] ";
  }

  return {
    styles,
    className,
  };
};
