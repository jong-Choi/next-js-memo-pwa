import Link from "next/link";

const Memo = async ({ params }: { params: { id: string } }) => {
  const response = await fetch(`http://localhost:3000/api/memo/${params.id}`, {
    next: { tags: [`memo${params.id}`] },
  });
  const data = await response.json();
  const result = data.result;

  return (
    <Link href={`/memo/${params.id}/update`}>
      <div className="w-full h-full">{result.content}</div>
    </Link>
  );
};

export default Memo;
