const MemoUpdate = async ({ params }: { params: { id: string } }) => {
  const response = await fetch(`http://localhost:3000/api/memo/${params.id}`, {
    cache: "no-store",
  });
  const data = await response.json();
  const result = data.result;

  const title = getTitle(result.createdAt);

  return (
    <div>
      {title}
      {JSON.stringify(result)}
    </div>
  );
};

export default MemoUpdate;

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
