import Link from "next/link";

const Memo = async ({ params }: { params: { id: string } }) => {
  const response = await fetch(`http://localhost:3000/api/memo/${params.id}`, {
    next: { tags: [`memo${params.id}`] },
  });
  const data = await response.json();
  const result = data.result;
  const MODE = "cards";

  const date = new Date(result.createdAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return (
    <>
      <Link href={`/memo/${params.id}/update`}>
        <div className="w-full h-full">{result.content}</div>
      </Link>
      <Link href={`/monthly/${MODE}/${year}/${month}`}>
        <div className="flex fixed bottom-0 w-full">
          <div className="mx-auto">홈</div>
        </div>
      </Link>
    </>
  );
};

export default Memo;
