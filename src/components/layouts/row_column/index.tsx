import { memo, type HTMLAttributes } from "react";
import styles from "./Styles.module.css";
import { clsx } from "clsx"; // You can switch back to `classnames` if you prefer

type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "start"
  | "end"
  | "left"
  | "right";

type AlignItems =
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "stretch"
  | "start"
  | "end"
  | "self-start"
  | "self-end";

type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  gap?: string | number;
  justify?: JustifyContent;
  align?: AlignItems;
  wrap?: FlexWrap;
  fullWidth?: boolean;
  fullHeight?: boolean;
  inline?: boolean;
}

// Utility to normalize gap values
const normalizeGap = (gap: string | number): string =>
  typeof gap === "number" ? `${gap}px` : gap;

export const Row = memo(function Row({
  children,
  gap = "0",
  className = "",
  justify = "flex-start",
  align = "stretch",
  wrap = "nowrap",
  fullWidth = false,
  fullHeight = false,
  inline = false,
  ...props
}: FlexProps) {
  const css = clsx(styles.row, className, {
    [styles.fullWidth]: fullWidth,
    [styles.fullHeight]: fullHeight,
  });

  return (
    <div
      {...props}
      data-component="Row"
      role="presentation"
      className={css}
      style={{
        display: inline ? "inline-flex" : "flex",
        gap: normalizeGap(gap),
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        ...props.style,
      }}
    >
      {children}
    </div>
  );
});
Row.displayName = "Row";

export const Column = memo(function Column({
  children,
  gap = "0",
  className = "",
  justify = "flex-start",
  align = "stretch",
  wrap = "nowrap",
  fullWidth = false,
  fullHeight = false,
  inline = false,
  ...props
}: FlexProps) {
  const css = clsx(styles.column, className, {
    [styles.fullWidth]: fullWidth,
    [styles.fullHeight]: fullHeight,
  });

  return (
    <div
      {...props}
      data-component="Column"
      role="presentation"
      className={css}
      style={{
        display: inline ? "inline-flex" : "flex",
        flexDirection: "column",
        gap: normalizeGap(gap),
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        ...props.style,
      }}
    >
      {children}
    </div>
  );
});
Column.displayName = "Column";
