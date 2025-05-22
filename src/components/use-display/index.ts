import type { UiKitDisplayProps } from "~/components";

export type UiKitUseDisplayOutput = {
  classNames: string;
};

export const useDisplay = (props: {
  d: UiKitDisplayProps;
  md: UiKitDisplayProps;
  m: UiKitDisplayProps;
}): UiKitUseDisplayOutput => {
  let classNames = "";

  if (props.m.display) {
    classNames += `${props.m.display} `;
  }

  if (props.md.display && props.m.display !== props.md.display) {
    classNames += `md:${props.md.display} `;
  }

  const mdValue = props.md.display ?? props.m.display;

  if (props.d.display && props.d.display !== mdValue) {
    classNames += `lg:${props.d.display} `;
  }

  return {
    classNames,
  };
};
