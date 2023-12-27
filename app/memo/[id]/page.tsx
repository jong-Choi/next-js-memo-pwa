const Memo = async ({ params }: { params: { id: string } }) => {
  const response = await fetch(`http://localhost:3000/api/memo/${params.id}`, {
    cache: "no-store",
  });
  const data = await response.json();
  const result = data.result;

  return <div>{JSON.stringify(result)}</div>;
};

export default Memo;
