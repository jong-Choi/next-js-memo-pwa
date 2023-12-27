import Link from "next/link";
import Stack from "../atoms/Stack";
import MonthlyCard from "../orgarnisms/MonthlyCard";

const MonthlyCardsTemplate = ({
  memos,
}: {
  memos: Array<{ id: number; content: string; createdAt: string }>;
}) => {
  memos = memos.sort((a, b) => {
    const dateA = Number(new Date(a.createdAt));
    const dateB = Number(new Date(b.createdAt));
    return dateA - dateB;
  });
  return (
    <Stack className="gap-[10px]">
      {memos.map((memo, index) => {
        const { createdAt } = memo!;
        const dayOfWeek = new Date(createdAt)
          .toLocaleDateString("en-US", {
            weekday: "short",
          })
          .toLocaleUpperCase();
        const days = Number(createdAt.split("T")[0].split("-")[2]);

        const nextMemo = memos[index + 1];
        const dotArray = [];
        if (nextMemo) {
          const nextDate = new Date(nextMemo.createdAt.split("T")[0]);
          let gap = 0;
          while (true) {
            gap++;
            const crrDate = new Date(memo.createdAt.split("T")[0]);
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
          <div key={"memo" + memo!.id}>
            <Link href={`/memo/${memo!.id}`}>
              <MonthlyCard
                day={dayOfWeek}
                days={days}
                contents={memo!.content}
              />
            </Link>
            {dotArray.length ? (
              <Stack
                className="mb-[-10px]"
                alignItems="center"
                justifyContent="between"
              >
                {dotArray.map((e, i) => (
                  <div
                    key={"memodots" + memo!.id + "date" + memo.createdAt + i}
                    className="my-[15px]"
                  >
                    {e}
                  </div>
                ))}
              </Stack>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </Stack>
  );
};

export default MonthlyCardsTemplate;
