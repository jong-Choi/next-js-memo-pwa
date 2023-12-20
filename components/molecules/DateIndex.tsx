import Box from "../atoms/Box";
import Stack from "../atoms/Stack";
import Typography from "../atoms/Typography";

const DateIndex = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => {
  return (
    <Box className={className}>
      <Stack alignItems="center" justifyContent="center">
        <Typography type="index">{children}</Typography>
      </Stack>
    </Box>
  );
};

export default DateIndex;
