"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const date = new Date();
    const mode = "cards";
    router.push(
      `/monthly/${mode}/${date.getFullYear()}/${date.getMonth() + 1}`
    );
  }, [router]);
  return null;
}
