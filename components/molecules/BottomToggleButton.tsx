"use client";

import { usePathname, useRouter } from "next/navigation";
import ToggleIcon from "../atoms/ToggleIcon";

const BottomToggleButton = () => {
  const pathname = usePathname();
  const router = useRouter();
  const onClick = () => {
    if (pathname.includes("cards")) {
      router.push(pathname.replace("cards", "list"));
    } else if (pathname.includes("list")) {
      router.push(pathname.replace("list", "cards"));
    }
  };
  return (
    <div className="w-[62px]" onClick={onClick}>
      <ToggleIcon />
    </div>
  );
};

export default BottomToggleButton;
