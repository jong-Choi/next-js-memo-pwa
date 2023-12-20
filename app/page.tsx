import Box from "@/components/atoms/Box";
import Stack from "@/components/atoms/Stack";
import Typography from "@/components/atoms/Typography";
import MonthlyCard from "@/components/molecules/MonthlyCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MonthlyCard />
    </main>
  );
}
