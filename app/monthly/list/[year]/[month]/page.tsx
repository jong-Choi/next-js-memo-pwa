import MonthlyListTemplate from "@/components/template/MonthlyListTemplate";

const MonthlyList = async ({
  params,
}: {
  params: { year: string; month: string };
}) => {
  const response = await fetch(
    `http://localhost:3000/api/memos/${params.year}/${params.month}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  const results = data.results;

  return <MonthlyListTemplate memos={results} />;
};

export default MonthlyList;
