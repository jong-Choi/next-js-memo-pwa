import Stack from "../atoms/Stack";
import DateIndex from "../molecules/DateIndex";
import DayIndex from "../molecules/DayIndex";
import MonthlyContents from "../molecules/MonthlyContents";
const MonthlyCard = ({
  day,
  days,
  contents,
}: {
  day: string;
  days: number;
  contents: string;
}) => {
  return (
    <Stack
      flexDirection="row"
      className="_card-container w-full h-[62px] lg:h-[90px]"
    >
      <div className="_card-left w-[42px] lg:w-[60px]">
        <Stack className="_card-index">
          <DayIndex className="border-b-0 h-[21px] lg:h-[32px]">{day}</DayIndex>
          <DateIndex className="h-[40px] lg:h-[58px]">{days}</DateIndex>
        </Stack>
      </div>
      <MonthlyContents className="_card-contents border-l-0 h-[62px] lg:h-[90px]">
        {contents}
      </MonthlyContents>
    </Stack>
  );
};

export default MonthlyCard;
