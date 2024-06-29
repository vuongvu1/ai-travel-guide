import PocketBase from "pocketbase";
import { INote } from "../../components/Note";

async function getNote(id: string): Promise<INote> {
  const db = new PocketBase("http://127.0.0.1:8090");

  const data = await db.collection("notes").getOne(id);

  return data as unknown as INote;
}

export default async function NotePage({ params }: { params: { id: string } }) {
  const note = await getNote(params.id);

  return (
    <div>
      <h1>Note Page</h1>
      <div>
        <h2>
          Note {note.id} - {note.title}
        </h2>
        <p>{note.content}</p>
      </div>
    </div>
  );
}
