import MonthlyCardsTemplate from "@/components/template/MonthlyCardsTemplate";

const MonthlyCards = async () => {
  const df = await fetch("http://localhost:3000/api/memos/1", {
    cache: "no-store",
  });
  const data = await df.json();
  console.log(data);
  return (
    <>
      <div>{JSON.stringify(data)}</div>
      <MonthlyCardsTemplate />;
    </>
  );
};

export default MonthlyCards;
