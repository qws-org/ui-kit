import type { UIKitDimensionProps } from "~/components";

type UIKitUseDimentionsOutput = {
  styles: Record<string, string | undefined>;
  className: string;
};
type UIKitDimentionsParams = {
  m?: Partial<UIKitDimensionProps>;
  md?: Partial<UIKitDimensionProps>;
  d?: Partial<UIKitDimensionProps>;
};

export const useDimensions = ({
  m,
  md,
  d,
}: UIKitDimentionsParams): UIKitUseDimentionsOutput => {
  let className = "";
  const styles: Record<string, string> = {};

  if (m) {
    if (typeof m.width !== "undefined") {
      styles["--width"] =
        typeof m.width !== "string" ? m.width + "px" : m.width;
      className += `w-[var(--width)] `;
    }
    if (typeof m.minWidth !== "undefined") {
      styles["--minWidth"] =
        typeof m.minWidth !== "string" ? m.minWidth + "px" : m.minWidth;
      className += `min-w-[var(--minWidth)] `;
    }
    if (typeof m.maxWidth !== "undefined") {
      styles["--maxWidth"] =
        typeof m.maxWidth !== "string" ? m.maxWidth + "px" : m.maxWidth;
      className += `max-w-[var(--maxWidth)] `;
    }

    if (typeof m.height !== "undefined") {
      styles["--height"] =
        typeof m.height !== "string" ? m.height + "px" : m.height;
      className += `h-[var(--height)] `;
    }
    if (typeof m.minHeight !== "undefined") {
      styles["--minHeight"] =
        typeof m.minHeight !== "string" ? m.minHeight + "px" : m.minHeight;
      className += `min-h-[var(--minHeight)] `;
    }
    if (typeof m.maxHeight !== "undefined") {
      styles["--maxHeight"] =
        typeof m.maxHeight !== "string" ? m.maxHeight + "px" : m.maxHeight;
      className += `max-h-[var(--maxHeight)] `;
    }
  }

  const mdCalculatedValues = {
    width: m?.width,
    maxWidth: m?.maxWidth,
    minWidth: m?.minWidth,
    height: m?.height,
    minHeight: m?.minHeight,
    maxHeight: m?.maxHeight,
  };

  if (md) {
    if (typeof md.width !== "undefined") {
      if (m?.width !== md.width) {
        styles["--mdWidth"] =
          typeof md.width !== "string" ? md.width + "px" : md.width;
        className += `md:w-[var(--mdWidth)] `;
      }
      mdCalculatedValues.width = md.width;
    }

    if (typeof md.minWidth !== "undefined") {
      if (m?.minWidth !== md.minWidth) {
        styles["--mdMinWidth"] =
          typeof md.minWidth !== "string" ? md.minWidth + "px" : md.minWidth;
        className += `md:w-[var(--mdMinWidth)] `;
      }
      mdCalculatedValues.minWidth = md.minWidth;
    }
    if (typeof md.maxWidth !== "undefined") {
      if (m?.maxWidth !== md.maxWidth) {
        styles["--mdMaxWidth"] =
          typeof md.maxWidth !== "string" ? md.maxWidth + "px" : md.maxWidth;
        className += `md:max-w-[var(--mdMaxWidth)] `;
      }
      mdCalculatedValues.maxWidth = md.maxWidth;
    }

    if (typeof md.height !== "undefined") {
      if (m?.height !== md.height) {
        styles["--mdHeight"] =
          typeof md.height !== "string" ? md.height + "px" : md.height;
        className += `md:w-[var(--mdHeight)] `;
      }
      mdCalculatedValues.height = md.height;
    }
    if (typeof md.minHeight !== "undefined") {
      if (m?.minHeight !== md.minHeight) {
        styles["--mdMinHeight"] =
          typeof md.minHeight !== "string" ? md.minHeight + "px" : md.minHeight;
        className += `md:w-[var(--mdMinHeight)] `;
      }
      mdCalculatedValues.minHeight = md.minHeight;
    }
    if (typeof md.maxHeight !== "undefined") {
      if (m?.maxHeight !== md.maxHeight) {
        styles["--mdMaxHeight"] =
          typeof md.maxHeight !== "string" ? md.maxHeight + "px" : md.maxHeight;
        className += `md:w-[var(--mdMaxHeight)] `;
      }
      mdCalculatedValues.maxHeight = md.maxHeight;
    }
  }
  if (d) {
    if (typeof d.width !== "undefined") {
      if (md?.width !== d.width) {
        styles["--dWidth"] =
          typeof d.width !== "string" ? d.width + "px" : d.width;
        className += `lg:w-[var(--dWidth)] `;
      }
      mdCalculatedValues.width = d.width;
    }
    if (typeof d.minWidth !== "undefined") {
      if (md?.minWidth !== d.minWidth) {
        styles["--dMinWidth"] =
          typeof d.minWidth !== "string" ? d.minWidth + "px" : d.minWidth;
        className += `lg:w-[var(--dMinWidth)] `;
      }
      mdCalculatedValues.minWidth = d.minWidth;
    }
    if (typeof d.maxWidth !== "undefined") {
      if (md?.maxWidth !== d.maxWidth) {
        styles["--mdMaxWidth"] =
          typeof d.maxWidth !== "string" ? d.maxWidth + "px" : d.maxWidth;
        className += `lg:w-[var(--dMaxWidth)] `;
      }
      mdCalculatedValues.maxWidth = d.maxWidth;
    }

    if (typeof d.height !== "undefined") {
      if (md?.height !== d.height) {
        styles["--dHeight"] =
          typeof d.height !== "string" ? d.height + "px" : d.height;
        className += `lg:h-[var(--dHeight)] `;
      }
      mdCalculatedValues.height = d.height;
    }
    if (typeof d.minHeight !== "undefined") {
      if (md?.minHeight !== d.minHeight) {
        styles["--dMinHeight"] =
          typeof d.minHeight !== "string" ? d.minHeight + "px" : d.minHeight;
        className += `lg:min-h-[var(--dMinHeight)] `;
      }
      mdCalculatedValues.minHeight = d.minHeight;
    }
    if (typeof d.maxHeight !== "undefined") {
      if (md?.maxHeight !== d.maxHeight) {
        styles["--dMaxHeight"] =
          typeof d.maxHeight !== "string" ? d.maxHeight + "px" : d.maxHeight;
        className += `lg:max-h-[var(--dMaxHeight)] `;
      }
      mdCalculatedValues.maxHeight = d.maxHeight;
    }
  }

  return {
    styles,
    className,
  };
};
