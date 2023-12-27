"use client";
import { FormEvent, useRef, useState } from "react";
import Stack from "../atoms/Stack";
import { Clock } from "react-feather";

const UpdateTextarea = ({ content }: { content: string }) => {
  const [value, setValue] = useState(content);
  const textRef = useRef<HTMLTextAreaElement>(null);

  return (
    <>
      <div className="h-full pb-5">
        <textarea
          ref={textRef}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            console.log(e.target.selectionStart);
          }}
          className="bg-transparent outline-none border-none resize-none overflow-hidden w-full min-h-14 max-h-full"
          onInput={(e) => auto_grow(e)}
          autoFocus
        />
      </div>
      <Stack
        flexDirection="row"
        justifyContent="between"
        className="fixed bottom-0 left-0 z-20 w-full py-2 px-4 bg-stone-100"
      >
        <Clock
          onClick={() => {
            const selectionStart = textRef.current?.selectionStart;
            setValue(
              value.slice(0, selectionStart) +
                getCurrentTime() +
                " " +
                value.slice(selectionStart)
            );
          }}
        />
        <div>|DONE|</div>
      </Stack>
    </>
  );
};

export default UpdateTextarea;

function auto_grow(event: FormEvent<HTMLTextAreaElement>) {
  const element = event.currentTarget;
  element.style.height = "5px";
  element.style.height = element.scrollHeight + "px";
}

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  const formattedTime = `${hours}:${formattedMinutes}${ampm}`;

  return formattedTime;
}
