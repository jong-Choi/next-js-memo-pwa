import Box from "../atoms/Box";
import Stack from "../atoms/Stack";
import Typography from "../atoms/Typography";
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
    <Stack flexDirection="row" className="w-full h-[90px]">
      <div className="w-[60px]">
        <Stack>
          <DayIndex className="border-b-0 h-[32px]">{day}</DayIndex>
          <DateIndex className="h-[58px]">{days}</DateIndex>
        </Stack>
      </div>
      <MonthlyContents className="border-l-0 h-[90px]">
        {contents}
      </MonthlyContents>
    </Stack>
  );
};

export default MonthlyCard;
