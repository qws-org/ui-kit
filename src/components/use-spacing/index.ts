import type {
  UIKitArrayIndentation,
  UIKitIndentationsProps,
} from "~/components";

import { getIndentationsStyles } from "./get-indentation-styles";

type UIKitUseSpacingOutput = {
  className: string;
  styles: Record<string, string | number>;
};

type UIKitUseSpacingParams = {
  m?: Partial<UIKitIndentationsProps>;
  md?: Partial<UIKitIndentationsProps>;
  d?: Partial<UIKitIndentationsProps>;
  defaultMargin?: UIKitArrayIndentation;
  defaultPadding?: UIKitArrayIndentation;
};

export const useSpacing = (
  params: UIKitUseSpacingParams,
): UIKitUseSpacingOutput => {
  const md = params.md;
  const d = params?.d;
  const mobileSpacing = getIndentationsStyles(
    { ...params.m },
    {
      padding: params.defaultPadding ?? [0, 0, 0, 0],
      margin: params.defaultMargin ?? [0, 0, 0, 0],
    },
  );
  const mdSpacing = md
    ? getIndentationsStyles({ ...md }, undefined, mobileSpacing)
    : mobileSpacing;

  const dSpacing = d
    ? getIndentationsStyles({ ...d }, undefined, mdSpacing)
    : mdSpacing;

  const styles: Record<string, string | number> = {};
  let className = "";

  if (JSON.stringify(mobileSpacing.padding) !== '["0px","0px","0px","0px"]') {
    if (mobileSpacing.padding[0] !== "0px") {
      styles["--m-pt"] = mobileSpacing.padding[0];
      className += `pt-[var(--m-pt)] `;
    }
    if (mobileSpacing.padding[2] !== "0px") {
      styles["--m-pb"] = mobileSpacing.padding[2];
      className += `pb-[var(--m-pb)] `;
    }
    if (mobileSpacing.padding[1] !== "0px") {
      styles["--m-pr"] = mobileSpacing.padding[1];
      className += `pr-[var(--m-pr)] `;
    }
    if (mobileSpacing.padding[3] !== "0px") {
      styles["--m-pl"] = mobileSpacing.padding[3];
      className += `pl-[var(--m-pl)] `;
    }
  }

  if (
    JSON.stringify(mdSpacing.padding) !== JSON.stringify(mobileSpacing.padding)
  ) {
    if (mdSpacing.padding[0] !== mobileSpacing.padding[0]) {
      styles["--md-pt"] = mdSpacing.padding[0];
      className += `md:pt-[var(--md-pt)] `;
    }
    if (mdSpacing.padding[2] !== mobileSpacing.padding[2]) {
      styles["--md-pb"] = mdSpacing.padding[2];
      className += `md:pb-[var(--md-pb)] `;
    }
    if (mdSpacing.padding[1] !== mobileSpacing.padding[1]) {
      styles["--md-pr"] = mdSpacing.padding[1];
      className += `md:pr-[var(--md-pr)] `;
    }
    if (mdSpacing.padding[3] !== mobileSpacing.padding[3]) {
      styles["--md-pl"] = mdSpacing.padding[3];
      className += `md:pl-[var(--md-pl)] `;
    }
  }

  if (JSON.stringify(dSpacing.padding) !== JSON.stringify(mdSpacing.padding)) {
    if (dSpacing.padding[0] !== mdSpacing.padding[0]) {
      styles["--lg-pt"] = dSpacing.padding[0];
      className += `lg:pt-[var(--lg-pt)] `;
    }
    if (dSpacing.padding[2] !== mdSpacing.padding[2]) {
      styles["--lg-pb"] = dSpacing.padding[2];
      className += `lg:pb-[var(--lg-pb)] `;
    }
    if (dSpacing.padding[1] !== mdSpacing.padding[1]) {
      styles["--lg-pr"] = dSpacing.padding[1];
      className += `lg:pr-[var(--lg-pr)] `;
    }
    if (dSpacing.padding[3] !== mdSpacing.padding[3]) {
      styles["--lg-pl"] = dSpacing.padding[3];
      className += `lg:pl-[var(--lg-pl)] `;
    }
  }

  if (JSON.stringify(mobileSpacing.margin) !== '["0px","0px","0px","0px"]') {
    if (mobileSpacing.margin[0] !== "0px") {
      styles["--m-mt"] = mobileSpacing.margin[0];
      className += `mt-[var(--m-mt)] `;
    }
    if (mobileSpacing.margin[2] !== "0px") {
      styles["--m-mb"] = mobileSpacing.margin[2];
      className += `mb-[var(--m-mb)] `;
    }
    if (mobileSpacing.margin[1] !== "0px") {
      styles["--m-mr"] = mobileSpacing.margin[1];
      className += `mr-[var(--m-mr)] `;
    }
    if (mobileSpacing.margin[3] !== "0px") {
      styles["--m-ml"] = mobileSpacing.margin[3];
      className += `ml-[var(--m-ml)] `;
    }
  }
  if (
    JSON.stringify(mdSpacing.margin) !== JSON.stringify(mobileSpacing.margin)
  ) {
    if (mdSpacing.margin[0] !== mobileSpacing.margin[0]) {
      styles["--md-mt"] = mdSpacing.margin[0];
      className += `md:mt-[var(--md-mt)] `;
    }
    if (mdSpacing.margin[2] !== mobileSpacing.margin[2]) {
      styles["--md-mb"] = mdSpacing.margin[2];
      className += `md:mb-[var(--md-mb)] `;
    }
    if (mdSpacing.margin[1] !== mobileSpacing.margin[1]) {
      styles["--md-mr"] = mdSpacing.margin[1];
      className += `md:mr-[var(--md-mr)] `;
    }
    if (mdSpacing.margin[3] !== mobileSpacing.margin[3]) {
      styles["--md-ml"] = mdSpacing.margin[3];
      className += `md:ml-[var(--md-ml)] `;
    }
  }

  if (JSON.stringify(dSpacing.margin) !== JSON.stringify(mdSpacing.margin)) {
    if (dSpacing.margin[0] !== mdSpacing.margin[0]) {
      styles["--lg-mt"] = dSpacing.margin[0];
      className += `lg:mt-[var(--lg-mt)] `;
    }
    if (dSpacing.margin[2] !== mdSpacing.margin[2]) {
      styles["--lg-mb"] = dSpacing.margin[2];
      className += `lg:mb-[var(--lg-mb)] `;
    }
    if (dSpacing.margin[1] !== mdSpacing.margin[1]) {
      styles["--lg-mr"] = dSpacing.margin[1];
      className += `lg:mr-[var(--lg-mr)] `;
    }
    if (dSpacing.margin[3] !== mdSpacing.margin[3]) {
      styles["--lg-ml"] = dSpacing.margin[3];
      className += `lg:ml-[var(--lg-ml)] `;
    }
  }

  return {
    styles,
    className,
  };
};
