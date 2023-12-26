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
    <Stack flexDirection="row" className="_card-container w-full h-[60px]">
      <div className="_card-left w-[50px]">
        <Stack className="_card-index">
          <DayIndex className="border-b-0 h-[21px]">{day}</DayIndex>
          <DateIndex
            className={
              "h-[39px]" + " " + `${day === "SUN" ? "text-red-700" : ""}`
            }
          >
            {days}
          </DateIndex>
        </Stack>
      </div>
      <MonthlyContents className="h-[60px] whitespace-pre-wrap">
        {contents}
      </MonthlyContents>
    </Stack>
  );
};

export default MonthlyCard;
