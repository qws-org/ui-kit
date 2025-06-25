import type { UiKitPositionProps } from "~/components";

type Entry = {
  m?: UiKitPositionProps;
  md?: UiKitPositionProps;
  d?: UiKitPositionProps;
};
export const usePosition = ({
  m,
  d,
  md,
}: Entry): {
  styles: Record<string, string>;
  className: string;
} => {
  let className = "";
  const styles: Record<string, string> = {};

  if (m) {
    if (m.position.type) {
      className += `${m.position.type} `;
    }

    if (typeof m.position.top !== "undefined") {
      styles["--mPositionTop"] =
        typeof m.position.top !== "string"
          ? m.position.top + "px"
          : m.position.top;
      className += `top-[var(--mPositionTop)] `;
    }

    if (typeof m.position.bottom !== "undefined") {
      styles["--mPositionBottom"] =
        typeof m.position.bottom !== "string"
          ? m.position.bottom + "px"
          : m.position.bottom;
      className += `bottom-[var(--mPositionBottom)] `;
    }

    if (typeof m.position.right !== "undefined") {
      styles["--mPositionRight"] =
        typeof m.position.right !== "string"
          ? m.position.right + "px"
          : m.position.right;
      className += `right-[var(--mPositionRight)] `;
    }

    if (typeof m.position.left !== "undefined") {
      styles["--mPositionLeft"] =
        typeof m.position.left !== "string"
          ? m.position.left + "px"
          : m.position.left;
      className += `left-[var(--mPositionLeft)] `;
    }

    if (typeof m.position.zIndex !== "undefined") {
      styles["--mPositionZ"] = String(m.position.zIndex);
      className += `z-[var(--mPositionZ)] `;
    }
  }

  const mdCalculatedValues = {
    position: {
      ...m?.position,
    },
  };

  if (md) {
    if (md.position.type) {
      if (m?.position.type !== md.position.type) {
        className += `md:${md.position.type} `;
      }
      mdCalculatedValues.position.type = md.position.type;
    }

    if (typeof md.position.top !== "undefined") {
      if (m?.position.top !== md.position.top) {
        styles["--mdPositionTop"] =
          typeof md.position.top !== "string"
            ? md.position.top + "px"
            : md.position.top;
        className += `md:top-[var(--mdPositionTop)] `;
      }
      mdCalculatedValues.position.top = md.position.top;
    }

    if (typeof md.position.bottom !== "undefined") {
      if (m?.position.bottom !== md.position.bottom) {
        styles["--mdPositionBottom"] =
          typeof md.position.bottom !== "string"
            ? md.position.bottom + "px"
            : md.position.bottom;
        className += `md:bottom-[var(--mdPositionBottom)] `;
      }
      mdCalculatedValues.position.bottom = md.position.bottom;
    }

    if (typeof md.position.right !== "undefined") {
      if (m?.position.right !== md.position.right) {
        styles["--mdPositionRight"] =
          typeof md.position.right !== "string"
            ? md.position.right + "px"
            : md.position.right;
        className += `md:right-[var(--mdPositionRight)] `;
      }
      mdCalculatedValues.position.right = md.position.right;
    }

    if (typeof md.position.left !== "undefined") {
      if (m?.position.left !== md.position.left) {
        styles["--mdPositionLeft"] =
          typeof md.position.left !== "string"
            ? md.position.left + "px"
            : md.position.left;
        className += `md:left-[var(--mdPositionLeft)] `;
      }
      mdCalculatedValues.position.left = md.position.left;
    }

    if (md.position.zIndex) {
      if (m?.position.zIndex !== md.position.zIndex) {
        styles["--mdPositionZ"] = String(md.position.zIndex);
        className += `md:z-[var(--mdPositionZ)] `;
      }
      mdCalculatedValues.position.zIndex = md.position.zIndex;
    }
  }

  if (d) {
    if (d.position.type) {
      className += `lg:${d.position.type} `;
    }

    if (
      typeof d.position.top !== "undefined" &&
      mdCalculatedValues.position.top !== d.position.top
    ) {
      styles["--dPositionTop"] =
        typeof d.position.top !== "string"
          ? d.position.top + "px"
          : d.position.top;
      className += `lg:top-[var(--dPositionTop)] `;
    }

    if (
      typeof d.position.bottom !== "undefined" &&
      mdCalculatedValues.position.bottom !== d.position.bottom
    ) {
      styles["--dPositionBottom"] =
        typeof d.position.bottom !== "string"
          ? d.position.bottom + "px"
          : d.position.bottom;
      className += `lg:bottom-[var(--dPositionBottom)] `;
    }

    if (
      typeof d.position.right !== "undefined" &&
      mdCalculatedValues.position.right !== d.position.right
    ) {
      styles["--dPositionRight"] =
        typeof d.position.right !== "string"
          ? d.position.right + "px"
          : d.position.right;
      className += `lg:right-[var(--dPositionRight)] `;
    }

    if (
      typeof d.position.left !== "undefined" &&
      mdCalculatedValues.position.left !== d.position.left
    ) {
      styles["--dPositionLeft"] =
        typeof d.position.left !== "string"
          ? d.position.left + "px"
          : d.position.left;
      className += `lg:left-[var(--dPositionLeft)] `;
    }

    if (
      d.position.zIndex &&
      mdCalculatedValues.position.zIndex !== d.position.zIndex
    ) {
      styles["--dPositionZ"] = String(d.position.zIndex);
      className += `lg:z-[var(--dPositionZ)] `;
    }
  }

  return {
    styles,
    className,
  };
};
