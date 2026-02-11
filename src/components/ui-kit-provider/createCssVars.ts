import type { UIKitProviderTheme } from "~/components";

export const createCssVars = (
  theme: UIKitProviderTheme,
): Record<string, string | number> => {
  return {
    // global line break
    "--global-line-break": theme.global.lineBreak,
    "--global-word-break": theme.global.wordBreak,
    // ------------------------------

    // fontSize desktop headline
    "--fontSize-desktop-large-headline":
      theme.fontSize["headline.desktop.large"] + "px",
    "--fontSize-desktop-medium-headline":
      theme.fontSize["headline.desktop.medium"] + "px",
    // ------------------------------

    // fontSize desktop headline
    "--fontSize-mobile-large-headline":
      theme.fontSize["headline.mobile.large"] + "px",
    "--fontSize-mobile-medium-headline":
      theme.fontSize["headline.mobile.medium"] + "px",
    // ------------------------------

    // fontSize desktop title
    "--fontSize-desktop-large-title":
      theme.fontSize["title.desktop.large"] + "px",
    "--fontSize-desktop-medium-title":
      theme.fontSize["title.desktop.medium"] + "px",
    "--fontSize-desktop-small-title":
      theme.fontSize["title.desktop.small"] + "px",
    "--fontSize-desktop-xsmall-title":
      theme.fontSize["title.desktop.xsmall"] + "px",
    // ------------------------------

    // fontSize mobile title
    "--fontSize-mobile-large-title":
      theme.fontSize["title.mobile.large"] + "px",
    "--fontSize-mobile-medium-title":
      theme.fontSize["title.mobile.medium"] + "px",
    "--fontSize-mobile-small-title":
      theme.fontSize["title.mobile.small"] + "px",
    "--fontSize-mobile-xsmall-title":
      theme.fontSize["title.mobile.xsmall"] + "px",
    // ------------------------------

    // fontSize desktop body
    "--fontSize-desktop-large-body":
      theme.fontSize["body.desktop.large"] + "px",
    "--fontSize-desktop-medium-body":
      theme.fontSize["body.desktop.medium"] + "px",
    "--fontSize-desktop-small-body":
      theme.fontSize["body.desktop.small"] + "px",
    "--fontSize-desktop-xsmall-body":
      theme.fontSize["body.desktop.xsmall"] + "px",
    // ------------------------------

    // fontSize mobile title
    "--fontSize-mobile-large-body": theme.fontSize["body.mobile.large"] + "px",
    "--fontSize-mobile-medium-body":
      theme.fontSize["body.mobile.medium"] + "px",
    "--fontSize-mobile-small-body": theme.fontSize["body.mobile.small"] + "px",
    "--fontSize-mobile-xsmall-body":
      theme.fontSize["body.mobile.xsmall"] + "px",
    // ------------------------------

    // fontSize desktop button
    "--fontSize-desktop-large-button":
      theme.fontSize["button.desktop.large"] + "px",
    "--fontSize-desktop-medium-button":
      theme.fontSize["button.desktop.medium"] + "px",
    "--fontSize-desktop-small-button":
      theme.fontSize["button.desktop.small"] + "px",
    "--fontSize-desktop-xsmall-button":
      theme.fontSize["button.desktop.xsmall"] + "px",
    // ------------------------------

    // fontSize mobile button
    "--fontSize-mobile-large-button":
      theme.fontSize["button.mobile.large"] + "px",
    "--fontSize-mobile-medium-button":
      theme.fontSize["button.mobile.medium"] + "px",
    "--fontSize-mobile-small-button":
      theme.fontSize["button.mobile.small"] + "px",
    "--fontSize-mobile-xsmall-button":
      theme.fontSize["button.mobile.xsmall"] + "px",
    // ------------------------------

    // lineHeight desktop headline
    "--lineHeight-desktop-large-headline":
      theme.lineHeight["headline.desktop.large"] + "px",
    "--lineHeight-desktop-medium-headline":
      theme.lineHeight["headline.desktop.medium"] + "px",
    // ------------------------------

    // lineHeight desktop headline
    "--lineHeight-mobile-large-headline":
      theme.lineHeight["headline.mobile.large"] + "px",
    "--lineHeight-mobile-medium-headline":
      theme.lineHeight["headline.mobile.medium"] + "px",
    // ------------------------------

    // lineHeight desktop title
    "--lineHeight-desktop-large-title":
      theme.lineHeight["title.desktop.large"] + "px",
    "--lineHeight-desktop-medium-title":
      theme.lineHeight["title.desktop.medium"] + "px",
    "--lineHeight-desktop-small-title":
      theme.lineHeight["title.desktop.small"] + "px",
    "--lineHeight-desktop-xsmall-title":
      theme.lineHeight["title.desktop.xsmall"] + "px",
    // ------------------------------

    // lineHeight mobile title
    "--lineHeight-mobile-large-title":
      theme.lineHeight["title.mobile.large"] + "px",
    "--lineHeight-mobile-medium-title":
      theme.lineHeight["title.mobile.medium"] + "px",
    "--lineHeight-mobile-small-title":
      theme.lineHeight["title.mobile.small"] + "px",
    "--lineHeight-mobile-xsmall-title":
      theme.lineHeight["title.mobile.xsmall"] + "px",
    // ------------------------------

    // lineHeight desktop body
    "--lineHeight-desktop-large-body":
      theme.lineHeight["body.desktop.large"] + "px",
    "--lineHeight-desktop-medium-body":
      theme.lineHeight["body.desktop.medium"] + "px",
    "--lineHeight-desktop-small-body":
      theme.lineHeight["body.desktop.small"] + "px",
    // ------------------------------

    // lineHeight mobile title
    "--lineHeight-mobile-large-body":
      theme.lineHeight["body.mobile.large"] + "px",
    "--lineHeight-mobile-medium-body":
      theme.lineHeight["body.mobile.medium"] + "px",
    "--lineHeight-mobile-small-body":
      theme.lineHeight["body.mobile.small"] + "px",
    // ------------------------------

    // lineHeight desktop button
    "--lineHeight-desktop-large-button":
      theme.lineHeight["button.desktop.large"] + "px",
    "--lineHeight-desktop-medium-button":
      theme.lineHeight["button.desktop.medium"] + "px",
    "--lineHeight-desktop-small-button":
      theme.lineHeight["button.desktop.small"] + "px",
    "--lineHeight-desktop-xsmall-button":
      theme.lineHeight["button.desktop.xsmall"] + "px",
    // ------------------------------

    // lineHeight mobile button
    "--lineHeight-mobile-large-button":
      theme.lineHeight["button.mobile.large"] + "px",
    "--lineHeight-mobile-medium-button":
      theme.lineHeight["button.mobile.medium"] + "px",
    "--lineHeight-mobile-small-button":
      theme.lineHeight["button.mobile.small"] + "px",
    "--lineHeight-mobile-xsmall-button":
      theme.lineHeight["button.mobile.xsmall"] + "px",
    // ------------------------------

    // fontWeight mobile
    "--fontWeight-mobile-light": theme.fontWeight["mobile.light"],
    "--fontWeight-mobile-normal": theme.fontWeight["mobile.normal"],
    "--fontWeight-mobile-semibold": theme.fontWeight["mobile.semibold"],
    "--fontWeight-mobile-bold": theme.fontWeight["mobile.bold"],
    "--fontWeight-mobile-superbold": theme.fontWeight["mobile.superbold"],
    // ------------------------------

    // fontWeight desktop
    "--fontWeight-desktop-light": theme.fontWeight["desktop.light"],
    "--fontWeight-desktop-normal": theme.fontWeight["desktop.normal"],
    "--fontWeight-desktop-semibold": theme.fontWeight["desktop.semibold"],
    "--fontWeight-desktop-bold": theme.fontWeight["desktop.bold"],
    "--fontWeight-desktop-superbold": theme.fontWeight["desktop.superbold"],
    // ------------------------------

    // fontFamily
    "--fontFamily-main": theme.fontFamily.main_name,
    "--fontFamily-additional": theme.fontFamily.additional_name,
    "--fontFamily-accent": theme.fontFamily.accent_name,
    // ------------------------------
    // Colors
    "--colors-background-primary": theme.colors["background-primary"],
    "--colors-background-secondary": theme.colors["background-secondary"],
    "--colors-background-tetriary": theme.colors["background-tetriary"],
    "--colors-background-secondary-transparent":
      theme.colors["background-secondary-transparent"],
    "--colors-background-transparent": theme.colors["background-transparent"],
    "--colors-background-accent1": theme.colors["background-accent1"],
    "--colors-background-accent1-vertical":
      theme.colors["background-accent1-vertical"],
    "--colors-background-accent2": theme.colors["background-accent2"],
    "--colors-background-accent2-reversed":
      theme.colors["background-accent2-reversed"],
    "--colors-background-accent2-vertical":
      theme.colors["background-accent2-vertical"],
    "--colors-background-accent-vip": theme.colors["background-accent-vip"],
    "--colors-background-popups1": theme.colors["background-popups1"],
    "--colors-background-popups2": theme.colors["background-popups2"],

    "--colors-border-accent": theme.colors["border-accent"],
    "--colors-border-button": theme.colors["border-button"],
    "--colors-border-destructive": theme.colors["border-destructive"],
    "--colors-border-primary": theme.colors["border-primary"],
    "--colors-border-secondary": theme.colors["border-secondary"],
    "--colors-border-selected": theme.colors["border-selected"],
    "--colors-border-subtle": theme.colors["border-subtle"],

    "--colors-text-destructive": theme.colors["text-destructive"],
    "--colors-text-disabled": theme.colors["text-disabled"],
    "--colors-text-selection": theme.colors["text-selection"],
    "--colors-text-success": theme.colors["text-success"],
    "--colors-text-accent-default": theme.colors["text-accent-default"],
    "--colors-text-accent-hovered": theme.colors["text-accent-hovered"],
    "--colors-text-primary-default": theme.colors["text-primary-default"],
    "--colors-text-primary-hovered": theme.colors["text-primary-hovered"],
    "--colors-text-primary-inverted": theme.colors["text-primary-inverted"],
    "--colors-text-primary-muted": theme.colors["text-primary-muted"],
    "--colors-text-secondary-default": theme.colors["text-secondary-default"],
    "--colors-text-secondary-hovered": theme.colors["text-secondary-hovered"],
    "--colors-text-accent-grad": theme.colors["text-accent-grad"],

    "--colors-surface-primary-dark": theme.colors["surface-primary-dark"],
    "--colors-surface-primary-default": theme.colors["surface-primary-default"],
    "--colors-surface-primary-hovered": theme.colors["surface-primary-hovered"],
    "--colors-surface-primary-subtle": theme.colors["surface-primary-subtle"],
    "--colors-surface-primary-grad-default":
      theme.colors["surface-primary-grad-default"],
    "--colors-surface-primary-grad-hovered":
      theme.colors["surface-primary-grad-hovered"],
    "--colors-surface-primary-grad-pressed":
      theme.colors["surface-primary-grad-pressed"],
    "--colors-surface-primary-grad-subtle":
      theme.colors["surface-primary-grad-subtle"],

    "--colors-surface-destructive-default":
      theme.colors["surface-destructive-default"],
    "--colors-surface-destructive-subtle":
      theme.colors["surface-destructive-subtle"],

    "--colors-surface-neutral-dark-default":
      theme.colors["surface-neutral-dark-default"],
    "--colors-surface-neutral-dark-hovered":
      theme.colors["surface-neutral-hovered"],
    "--colors-surface-neutral-default": theme.colors["surface-neutral-default"],
    "--colors-surface-neutral-hovered": theme.colors["surface-neutral-hovered"],
    "--colors-surface-neutral-light": theme.colors["surface-neutral-light"],
    "--colors-surface-neutral-subtle": theme.colors["surface-neutral-subtle"],
    "--colors-surface-tetriary-hovered":
      theme.colors["surface-tetriary-hovered"],
    "--colors-surface-secondary-default":
      theme.colors["surface-secondary-default"],
    "--colors-surface-secondary-hovered":
      theme.colors["surface-secondary-hovered"],

    "--colors-surface-accent1-default": theme.colors["surface-accent1-default"],
    "--colors-surface-accent2-default": theme.colors["surface-accent2-default"],
    "--colors-surface-accent1-hovered": theme.colors["surface-accent1-hovered"],
    "--colors-surface-accent2-hovered": theme.colors["surface-accent2-hovered"],
    "--colors-surface-accent-button-default":
      theme.colors["surface-accent-button-default"],
    "--colors-surface-accent-button-hovered":
      theme.colors["surface-accent-button-hovered"],

    "--colors-surface-tag-timer": theme.colors["surface-tag-timer"],
    "--colors-surface-tag-poker": theme.colors["surface-tag-poker"],
    "--colors-surface-tag-cash": theme.colors["surface-tag-cash"],
    "--colors-surface-tag-casino": theme.colors["surface-tag-casino"],
    "--colors-surface-tag-mtt": theme.colors["surface-tag-mtt"],
    "--colors-surface-tag-vip": theme.colors["surface-tag-vip"],
    "--colors-surface-tag-quests": theme.colors["surface-tag-quests"],
    "--colors-surface-tag-social": theme.colors["surface-tag-social"],

    // border radius
    "--border-radius-button": theme.borderRadius.button,
    "--border-radius-form": theme.borderRadius.form,
    "--border-radius-card": theme.borderRadius.card,
    "--border-radius-chip": theme.borderRadius.chip,
    "--border-radius-big-card": theme.borderRadius["big-card"],
    "--border-radius-checkbox": theme.borderRadius.checkbox,
    "--border-radius-menus": theme.borderRadius.menus,
    "--border-radius-popups": theme.borderRadius.popups,
    "--border-radius-banner": theme.borderRadius.banner,
  };
};
