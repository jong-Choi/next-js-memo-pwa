import Box from "../atoms/Box";
import Typography from "../atoms/Typography";

const DayIndex = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      background="diagonal"
      className={className}
    >
      <Typography type="indexMonth">{children}</Typography>
    </Box>
  );
};

export default DayIndex;
