import Box from "../atoms/Box";
import Icons from "../atoms/Icons";
import Stack from "../atoms/Stack";
import Typography from "../atoms/Typography";
import BottomCreateButton from "../molecules/BottomCreateButton";
import BottomMonthIndex from "../molecules/BottomMonthIndex";
import BottomToggleButton from "../molecules/BottomToggleButton";

const BottomBar = () => {
  return (
    <Stack
      className="_bottom-container p-[16px] pb-[30px]"
      flexDirection="row"
      alignItems="center"
      justifyContent="between"
    >
      <Stack
        flexDirection="row"
        justifyContent="between"
        alignItems="center"
        className="_bottom-container-left w-[136px]"
      >
        <div>
          <BottomMonthIndex />
        </div>

        <Typography type="indexMonth">|</Typography>
        <Typography type="bottom">2015</Typography>
        <Typography type="indexMonth">|</Typography>
      </Stack>

      <BottomCreateButton />
      <Stack
        flexDirection="row"
        justifyContent="between"
        alignItems="center"
        className="_bottom-container-right w-[136px] flex-shrink-0"
      >
        <Typography type="indexMonth">|</Typography>
        <BottomToggleButton />
        <div className="h-[15px] w-[26px]">
          <Box background="diagonal" className="h-[15px]" />
        </div>
      </Stack>
    </Stack>
  );
};

export default BottomBar;
