import Stack from "../atoms/Stack";
import MonthlyCard from "../orgarnisms/MonthlyCard";

const MonthlyTemplate = () => {
  const memos = [
    {
      id: 1,
      date: new Date().toISOString(),
      content: "안녕하세요",
    },
    {
      id: 2,
      date: new Date().toISOString(),
      content: "안녕하세요",
    },
    {
      id: 3,
      date: new Date().toISOString(),
      content: "안녕하세요",
    },
    {
      id: 4,
      date: new Date().toISOString(),
      content: "안녕하세요",
    },
    ,
    {
      id: 5,
      date: new Date().toISOString(),
      content:
        "안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요",
    },
  ];
  const data = {
    date: new Date().toISOString(),
    memos,
  };
  return (
    <Stack className="gap-[10px]">
      {data.memos.map((memo) => {
        const { date } = memo!;
        const dayOfWeek = new Date(date).toLocaleDateString("en-US", {
          weekday: "short",
        });
        const days = Number(date.split("T")[0].split("-")[2]);

        return (
          <MonthlyCard
            key={"memo" + memo!.id}
            day={dayOfWeek}
            days={days}
            contents={memo!.content}
          />
        );
      })}
      <MonthlyCard
        key={"memo"}
        day={"MON"}
        days={12}
        contents={"도로 가운데 나무들은 오늘도 매연을 꾸역꾸역 집어 삼킨다."}
      />
    </Stack>
  );
};

export default MonthlyTemplate;
