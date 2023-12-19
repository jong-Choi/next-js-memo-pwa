const Box = ({
  background = "",
  justifyContent = "",
  children = null,
  padding = "",
  className = "",
}: {
  background?: "" | "bg-gradient-diagonal";
  justifyContent?: "" | "justify-center";
  padding?: "" | "p-4";
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`border-solid border border-gray-800 ${background} w-full h-full flex align-middle ${justifyContent} ${padding} ${className}`}
    >
      {children}
    </div>
  );
};

export default Box;
