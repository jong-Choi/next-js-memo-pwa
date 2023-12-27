"use client";

import { useRouter } from "next/navigation";
import Icons from "../atoms/Icons";
import Stack from "../atoms/Stack";

const BottomCreateButton = () => {
  const router = useRouter();
  const onClick = async () => {
    const res = await fetch("http://localhost:3000/api/memo/create", {
      method: "POST",
      body: JSON.stringify({ content: "" }),
    });
    const data = await res.json();
    if (data?.id) {
      const { id } = data;
      router.push(`/memo/${id}/update`);
    }
  };
  return (
    <div onClick={onClick}>
      <Stack alignItems="center" justifyContent="between" className="">
        <Icons iconName="plus" className="_bottom-container-center " />
      </Stack>
    </div>
  );
};

export default BottomCreateButton;
