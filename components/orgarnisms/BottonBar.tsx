import Box from "../atoms/Box";
import Icons from "../atoms/Icons";
import Stack from "../atoms/Stack";
import Typography from "../atoms/Typography";
import BottomMonthIndex from "../molecules/BottomMonthIndex";
import BottomToggleButton from "../molecules/BottomToggleButton";

const BottonBar = () => {
  return (
    <Stack
      className="_bottom-container p-6 pb-12"
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

      <Icons iconName="plus" className="_bottom-container-center " />

      <Stack
        flexDirection="row"
        justifyContent="between"
        alignItems="center"
        className="_bottom-container-right w-2/5"
      >
        <Icons iconName="minus" rotate="rotate-90" strokeWidth={1} />
        <BottomToggleButton />
        <Box background="diagonal" className="w-10 h-6" />
      </Stack>
    </Stack>
  );
};

export default BottonBar;
