import UpdateTextarea from "@/components/molecules/UpdateTextarea";

const MemoUpdate = async ({ params }: { params: { id: string } }) => {
  const response = await fetch(`http://localhost:3000/api/memo/${params.id}`, {
    next: { tags: [`memo${params.id}`] },
  });
  const data = await response.json();
  const result = data.result;

  return (
    <div>
      <UpdateTextarea content={result.content} id={result.id} />
    </div>
  );
};

export default MemoUpdate;
