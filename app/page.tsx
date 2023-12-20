import MonthlyCard from "@/components/orgarnisms/MonthlyCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MonthlyCard day="SUN" days={15} contents="hello" />
    </main>
  );
}
