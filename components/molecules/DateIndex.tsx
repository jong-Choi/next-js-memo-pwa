import Box from "../atoms/Box";
import Stack from "../atoms/Stack";
import Typography from "../atoms/Typography";

const DateIndex = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => {
  return (
    <Box className={className}>
      <Typography type="index" className="m-auto">
        {children}
      </Typography>
    </Box>
  );
};

export default DateIndex;
