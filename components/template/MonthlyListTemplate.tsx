import Stack from "../atoms/Stack";
import Typography from "../atoms/Typography";

const MonthlyListTemplate = () => {
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
    {
      id: 4,
      date: "2023-11-14",
      content: "안녕하세요",
    },
    {
      id: 5,
      date: "2023-11-16",
      content: `안녕하
세요`,
    },
    {
      id: 6,
      date: "2023-11-16",
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
    <Stack className="gap-[30px]">
      {data.memos.map((memo) => {
        const { date } = memo;
        const dayOfWeek = new Date(date).toLocaleDateString("en-US", {
          weekday: "long",
        });
        const days = Number(date.split("T")[0].split("-")[2]);

        return (
          <div key={memo.id}>
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
          </div>
        );
      })}
    </Stack>
  );
};

export default MonthlyListTemplate;
