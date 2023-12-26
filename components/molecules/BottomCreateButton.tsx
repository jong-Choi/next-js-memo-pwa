"use client";

import Icons from "../atoms/Icons";
import Stack from "../atoms/Stack";

const BottomCreateButton = () => {
  const onClick = async () => {
    const res = await fetch("http://localhost:3000/api/memo/create", {
      method: "POST",
      body: JSON.stringify({ content: "안녕하세요" }),
    });
    const data = await res.json();
    console.log(data);
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
