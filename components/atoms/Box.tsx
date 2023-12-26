import {
  AlignItemsMap,
  JustifyContentMap,
  TAlignItems,
  TJustifyContents,
} from "./Stack";

const Box = ({
  background,
  justifyContent = "start",
  alignItems = "stretch",
  children,
  padding = "p-3 lg:p-4",
  className,
}: React.PropsWithChildren<{
  background?: "diagonal";
  justifyContent?: TJustifyContents;
  alignItems?: TAlignItems;
  padding?: string;
  className?: string;
}>) => {
  let bg;
  switch (background) {
    case "diagonal":
      bg = "bg-gradient-diagonal";
      break;
    default:
      bg = "";
      break;
  }

  return (
    <div
      className={`border-solid border border-gray-800 ${bg} w-full flex ${AlignItemsMap[alignItems]} ${JustifyContentMap[justifyContent]} ${padding} ${className}`}
    >
      {children}
    </div>
  );
};

export default Box;
