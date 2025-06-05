export const propertyTransformer = (value: string | number): string => {
  return typeof value === "string" && !/^\d+$/.test(value)
    ? value
    : `${value}px`;
};
