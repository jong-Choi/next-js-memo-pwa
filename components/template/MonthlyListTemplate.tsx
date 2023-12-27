import Link from "next/link";
import Stack from "../atoms/Stack";
import Typography from "../atoms/Typography";

const MonthlyListTemplate = ({
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
    <Stack className="gap-[30px]">
      {memos.map((memo) => {
        const { createdAt } = memo;
        const dayOfWeek = new Date(createdAt).toLocaleDateString("en-US", {
          weekday: "long",
        });
        const days = Number(createdAt.split("T")[0].split("-")[2]);

        return (
          <div key={memo.id}>
            <Link href={`/memo/${memo.id}`}>
              <Typography
                type="content"
                className="text-sm whitespace-pre-wrap inline"
              >
                <Typography type="index" className="text-sm inline">
                  {days}
                </Typography>{" "}
                <Typography
                  type="index"
                  className={`text-sm inline ${
                    dayOfWeek === "Sunday" ? "text-red-700" : ""
                  }`}
                >
                  {dayOfWeek}
                </Typography>{" "}
                / {memo.content}
              </Typography>
            </Link>
          </div>
        );
      })}
    </Stack>
  );
};

export default MonthlyListTemplate;
