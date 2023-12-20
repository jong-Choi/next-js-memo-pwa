import { TAlignItems, TJustifyContents } from "./Stack";

const Box = ({
  background,
  justifyContent,
  alignItems = "items-center",
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
      className={`border-solid border border-gray-800 ${background} w-full flex ${alignItems} ${justifyContent} ${padding} ${className}`}
    >
      {children}
    </div>
  );
};

export default Box;
