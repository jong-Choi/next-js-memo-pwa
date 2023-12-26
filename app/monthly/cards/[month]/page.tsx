import MonthlyCardsTemplate from "@/components/template/MonthlyCardsTemplate";

const MonthlyCards = async () => {
  const df = await fetch("/api/memos/1/");
  console.log(JSON.stringify(df));
  return <MonthlyCardsTemplate />;
};

export default MonthlyCards;
