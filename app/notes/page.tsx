import Link from "next/link";
import { INote } from "../components/Note";
import CreateNote from "./CreateNote";
import PocketBase from "pocketbase";

async function getNotes(): Promise<INote[]> {
  const db = new PocketBase("http://127.0.0.1:8090");

  const data = await db.collection("notes").getList();

  return data.items as unknown as INote[];
}

export default async function NotesPage() {
  // Get the notes from the database
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link href={`/notes/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
      <CreateNote />
    </div>
  );
}
