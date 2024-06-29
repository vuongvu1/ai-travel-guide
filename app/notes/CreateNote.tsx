"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import PocketBase from "pocketbase";

export default function CreateNote() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(async (_, formData) => {
    const title = formData.get("titleID");
    const content = formData.get("contentID");

    const pb = new PocketBase("http://127.0.0.1:8090");

    await pb.collection("notes").create({
      title,
      content,
    });

    router.refresh();
  }, null);

  return (
    <div>
      <h1>Create Note</h1>
      <form action={formAction}>
        <label htmlFor="noteTitle">Title:</label>
        <input type="text" id="titleID" name="titleID" required />
        <label htmlFor="noteContent">Content:</label>
        <textarea id="contentID" name="contentID" required />
        <button type="submit">Add Note</button>
        {isPending && <p>Adding note...</p>}
      </form>
    </div>
  );
}
