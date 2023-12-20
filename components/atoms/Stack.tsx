export type TJustifyContents =
  | "justify-normal"
  | "justify-start"
  | "justify-end"
  | "justify-center"
  | "justify-between"
  | "justify-around"
  | "justify-evenly"
  | "justify-stretch";

export type TAlignItems =
  | "items-start"
  | "items-end"
  | "items-center"
  | "items-beasline"
  | "items-stretch";

interface StackProps {
  flexDirection?: "row" | "col";
  justifyContent?: TJustifyContents;
  alignItems?: TAlignItems;
  gap?: number;
  className?: string;
}

const Stack = ({
  flexDirection = "col",
  justifyContent = "justify-normal",
  alignItems = "items-start",
  className = "",
  gap = 0,
  children,
}: React.PropsWithChildren<StackProps>) => {
  return (
    <div
      className={`flex flex-${flexDirection} gap-${~~gap} ${justifyContent} ${alignItems}  w-full h-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Stack;
