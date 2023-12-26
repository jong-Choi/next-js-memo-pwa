import Stack from "../atoms/Stack";
import MonthlyCard from "../orgarnisms/MonthlyCard";

const MonthlyTemplate = () => {
  const memos = [
    {
      id: 1,
      date: "2023-11-12",
      content: "안녕하세요",
    },
    {
      id: 3,
      date: "2023-11-20",
      content: "안녕하세요",
    },
    {
      id: 2,
      date: "2023-11-13",
      content: "안녕하세요",
    },
  ];
  const data = {
    date: new Date().toISOString(),
    memos,
  };

  data.memos = data.memos.sort((a, b) => {
    const dateA = Number(new Date(a.date));
    const dateB = Number(new Date(b.date));
    return dateA - dateB;
  });
  return (
    <Stack className="gap-[10px]">
      {data.memos.map((memo, index) => {
        const { date } = memo!;
        const dayOfWeek = new Date(date).toLocaleDateString("en-US", {
          weekday: "short",
        });
        const days = Number(date.split("T")[0].split("-")[2]);

        const nextMemo = data.memos[index + 1];
        const dotArray = [];
        if (nextMemo) {
          const nextDate = new Date(nextMemo.date.split("T")[0]);
          let gap = 0;
          while (true) {
            gap++;
            const crrDate = new Date(memo.date.split("T")[0]);
            crrDate.setDate(crrDate.getDate() + gap);
            if (crrDate.getTime() >= nextDate.getTime()) {
              break;
            } else {
              if (crrDate.getDay()) {
                dotArray.push(
                  <div className="h-[8px] w-[8px] rounded-full bg-gray-900 opacity-80" />
                );
              } else {
                dotArray.push(
                  <div className="h-[8px] w-[8px] rounded-full bg-red-800 opacity-80" />
                );
              }
            }
          }
        }
        return (
          <>
            <MonthlyCard
              key={"memo" + memo!.id}
              day={dayOfWeek}
              days={days}
              contents={memo!.content}
            />
            {dotArray.length ? (
              <Stack
                className="p-[10px] gap-[30px]"
                alignItems="center"
                justifyContent="between"
              >
                {dotArray.map((e) => (
                  <div key={Math.random()}>{e}</div>
                ))}
              </Stack>
            ) : (
              <></>
            )}
          </>
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
