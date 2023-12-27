"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import Stack from "../atoms/Stack";
import { Clock } from "react-feather";
import { useRouter } from "next/navigation";
import { UpdateMemo } from "@/app/actions";

const UpdateTextarea = ({ content, id }: { content: string; id: string }) => {
  const [value, setValue] = useState(content);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (textRef.current) {
      textRef.current.selectionStart = content.length;
      textRef.current.focus();
    }
  }, [textRef, content]);

  return (
    <>
      <div className="h-full pb-5">
        <textarea
          ref={textRef}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            auto_grow(e);
          }}
          className="bg-transparent outline-none border-none resize-none overflow-hidden w-full min-h-14 max-h-full"
        />
      </div>
      <Stack
        flexDirection="row"
        justifyContent="between"
        className="fixed bottom-0 left-0 z-20 w-full py-2 px-4 bg-stone-100"
      >
        <Clock
          onClick={() => {
            if (!textRef.current) return;
            const selectionStart = textRef.current.selectionStart;
            const currentTime = getCurrentTime();
            const selectionOffset = currentTime.length + 1;
            setValue(
              value.slice(0, selectionStart) +
                currentTime +
                " " +
                value.slice(selectionStart)
            );
            setTimeout(() => {
              if (textRef.current) {
                textRef.current.setSelectionRange(
                  selectionStart + selectionOffset,
                  selectionStart + selectionOffset
                );
                textRef.current.focus();
              }
            });
          }}
        />
        <div
          onClick={async () => {
            const response = await fetch(`/api/memo/${id}/update`, {
              method: "PUT",
              body: JSON.stringify({ content: value }),
            });
            if (response.status === 200) {
              UpdateMemo(id);
              await fetch(`http://localhost:3000/api/memo/${id}`, {
                next: { tags: [`memo${id}`] },
              });
              router.push(`/memo/${id}`);
            }
          }}
        >
          |DONE|
        </div>
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
