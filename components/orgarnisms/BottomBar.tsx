import Box from "../atoms/Box";
import Icons from "../atoms/Icons";
import Stack from "../atoms/Stack";
import Typography from "../atoms/Typography";
import BottomMonthIndex from "../molecules/BottomMonthIndex";
import BottomToggleButton from "../molecules/BottomToggleButton";

const BottomBar = () => {
  return (
    <Stack
      className="_bottom-container p-4 lg:p-6 pb-8 lg:pb-12"
      flexDirection="row"
      alignItems="center"
      justifyContent="between"
    >
      <Stack
        flexDirection="row"
        justifyContent="between"
        alignItems="center"
        className="_bottom-container-left w-2/5"
      >
        <div>
          <BottomMonthIndex />
        </div>
        <Icons iconName="minus" rotate="rotate-90" strokeWidth={1} />
        <Typography type="bottom">2015</Typography>
        <Icons iconName="minus" rotate="rotate-90" strokeWidth={1} />
      </Stack>

      <Stack alignItems="center" justifyContent="center">
        <Icons iconName="plus" className="_bottom-container-center " />
      </Stack>
      <Stack
        flexDirection="row"
        justifyContent="between"
        alignItems="center"
        className="_bottom-container-right w-2/5"
      >
        <Icons iconName="minus" rotate="rotate-90" strokeWidth={1} />
        <BottomToggleButton />
        <Box
          background="diagonal"
          className="h-4 lg:h-6 w-[27px] lg:w-[40px]"
        />
      </Stack>
    </Stack>
  );
};

export default BottomBar;
