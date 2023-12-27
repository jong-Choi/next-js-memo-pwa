"use server";

import { revalidateTag } from "next/cache";

export async function UpdateMemo(id: string) {
  revalidateTag(`memo${id}`);
}
