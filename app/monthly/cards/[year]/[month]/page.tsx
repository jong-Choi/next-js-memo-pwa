import MonthlyCardsTemplate from "@/components/template/MonthlyCardsTemplate";

const MonthlyCards = async ({
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

  return <MonthlyCardsTemplate memos={results} />;
};

export default MonthlyCards;
