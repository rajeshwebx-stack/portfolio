import * as React from "react";
import { cn } from "@/lib/utils";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: boolean;
}

const gapMap: Record<number, string> = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
  16: "gap-16",
};

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction = "col", gap = 4, align, justify, wrap, children, ...props }, ref) => {
    const directionClass =
      direction === "col"
        ? "flex-col"
        : direction === "row"
        ? "flex-row"
        : direction === "col-reverse"
        ? "flex-col-reverse"
        : "flex-row-reverse";

    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          directionClass,
          gapMap[gap] || "gap-4",
          align && alignMap[align],
          justify && justifyMap[justify],
          wrap && "flex-wrap",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Stack.displayName = "Stack";

export const VStack = React.forwardRef<HTMLDivElement, Omit<StackProps, "direction">>(
  (props, ref) => <Stack ref={ref} direction="col" {...props} />
);
VStack.displayName = "VStack";

export const HStack = React.forwardRef<HTMLDivElement, Omit<StackProps, "direction">>(
  (props, ref) => <Stack ref={ref} direction="row" {...props} />
);
HStack.displayName = "HStack";
