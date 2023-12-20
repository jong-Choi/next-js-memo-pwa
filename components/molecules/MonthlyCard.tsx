import Box from "../atoms/Box";
import Stack from "../atoms/Stack";
import Typography from "../atoms/Typography";
const MonthlyCard = () => {
  return (
    <Stack flexDirection="row" className="w-full h-[90px]">
      <div className="w-[60px]">
        <Stack>
          <Box justifyContent="justify-center" className="border-b-0 h-[32px]">
            <Typography type="indexMonth">SUN</Typography>
          </Box>
          <Box className="h-[58px]">
            <Stack alignItems="items-center" justifyContent="justify-center">
              <Typography type="index">12</Typography>
            </Stack>
          </Box>
        </Stack>
      </div>
      <Box className="border-l-0 h-[90px]" padding="p-4">
        asd
      </Box>
    </Stack>
  );
};

export default MonthlyCard;
