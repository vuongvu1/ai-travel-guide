export interface INote {
  id: string;
  title: string;
  content: string;
}

export const Note = ({ id, title, content }: INote) => {
  return (
    <div>
      <h2>
        Note {id} - {title}
      </h2>
      <p>{content}</p>
    </div>
  );
};
