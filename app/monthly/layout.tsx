import BottomBar from "@/components/orgarnisms/BottomBar";

const MonthlyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full min-h-screen px-[12px] bg-stone-100 pb-[100px]">
        {children}
      </div>
      <div className="fixed bottom-0 w-full bg-stone-100 z-50">
        <BottomBar />
      </div>
    </>
  );
};

export default MonthlyLayout;
