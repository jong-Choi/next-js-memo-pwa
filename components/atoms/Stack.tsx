interface StackProps {
  flexDirection?: "row" | "col";
  gap?: number;
}

const Stack = ({
  flexDirection = "col",
  gap = 0,
  children,
}: React.PropsWithChildren<StackProps>) => {
  return (
    <div className={`flex flex-${flexDirection} gap-${~~gap}`}>{children}</div>
  );
};

export default Stack;
