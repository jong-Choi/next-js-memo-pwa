import Box from "@/components/atoms/Box";
import Stack from "@/components/atoms/Stack";
import Typography from "@/components/atoms/Typography";

const MemoLayout = async ({
  params,
  children,
}: {
  params: { id: string };
  children: React.ReactNode;
}) => {
  const response = await fetch(`http://localhost:3000/api/memo/${params.id}`, {
    cache: "no-store",
  });
  const data = await response.json();
  const result = data.result;

  const title = getTitle(result.createdAt);

  return (
    <div className="w-screen h-screen">
      <Box background="diagonal" className="p-2 border-none w-full h-full">
        <Stack className=" bg-stone-100 w-full h-full">
          <div className="border-solid border-b-2 border-gray-900 w-fit py-1 mx-auto mb-1">
            <Typography type="bottom" className="text-gray-900">
              {title}
            </Typography>
          </div>
          <div className="w-full h-full overflow-y-auto p-3">{children}</div>
        </Stack>
      </Box>
    </div>
  );
};

export default MemoLayout;

const getTitle = (ISODate: string): string => {
  const date = new Date(ISODate);
  const dayOfWeek = date.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const month = date.toLocaleDateString("en-US", {
    month: "long",
  });
  const days = date.getDate();
  const year = date.getFullYear();
  const title = `${dayOfWeek} / ${month} ${days} / ${year}`.toLocaleUpperCase();
  return title;
};
