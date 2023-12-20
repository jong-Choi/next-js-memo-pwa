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
  padding,
  className,
}: React.PropsWithChildren<{
  background?: "diagonal";
  justifyContent?: TJustifyContents;
  alignItems?: TAlignItems;
  padding?: "p-4";
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
