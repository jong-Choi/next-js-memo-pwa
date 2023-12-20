import Box from "../atoms/Box";

const MonthlyContents = ({
  children,
  className,
}: React.PropsWithChildren<{ className: string }>) => {
  return (
    <Box className={className} padding="p-4" alignItems="center">
      <div className="line-clamp-2">{children}</div>
    </Box>
  );
};

export default MonthlyContents;
