import Icons from "@components/atoms/Icons";
import Stack from "@components/atoms/Stack";
import Typography from "@components/atoms/Typography";

const BottomMonthIndex = ({ date = new Date() }: { date?: Date }) => {
  // 날짜로부터 영어 Month 이름을 추출합니다.
  const formatter = new Intl.DateTimeFormat("en", { month: "long" });
  const month = formatter.format(date);

  return (
    <Stack flexDirection="row" alignItems="center">
      <Icons
        iconName="minus"
        rotate="rotate-90"
        className="mb-[1px]"
        size={16}
        strokeWidth={5}
        strokeLinecap="square"
      />
      <Typography type="bottom" className="uppercase">
        {month}
      </Typography>
    </Stack>
  );
};

export default BottomMonthIndex;
