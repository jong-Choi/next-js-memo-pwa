interface StackProps {
  flexDirection?: "row" | "col";
  justifyContent?: TJustifyContents;
  alignItems?: TAlignItems;
  gap?: number;
  className?: string;
}

const Stack = ({
  flexDirection = "col",
  justifyContent = "start",
  alignItems = "stretch",
  className = "",
  gap = 0,
  children,
}: React.PropsWithChildren<StackProps>) => {
  return (
    <div
      className={`flex flex-${flexDirection} gap-${~~gap} ${
        JustifyContentMap[justifyContent]
      } ${AlignItemsMap[alignItems]}  w-full h-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Stack;

export type TJustifyContents =
  | "normal"
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly"
  | "stretch";

export const JustifyContentMap: Record<TJustifyContents, string> = {
  normal: "justify-normal",
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
  stretch: "justify-stretch",
};

export type TAlignItems = "start" | "end" | "center" | "baseline" | "stretch";

// AlignItemsMap을 수정했습니다.
export const AlignItemsMap: Record<TAlignItems, string> = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  baseline: "items-baseline",
  stretch: "items-stretch",
};
