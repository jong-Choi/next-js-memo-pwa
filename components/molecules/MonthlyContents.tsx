import Box from "../atoms/Box";
import Typography from "../atoms/Typography";

const MonthlyContents = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => {
  return (
    <Box alignItems="center" className={"border-l-0" + " " + className}>
      <Typography type="content" className="p-[10px]">
        <div className="line-clamp-2">{children}</div>
      </Typography>
    </Box>
  );
};

export default MonthlyContents;
