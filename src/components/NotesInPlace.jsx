import { useNotes } from "../hooks/useNotes";
import NoteFragment from "../fragments/NoteFragment";

export const NotesInPlace = ({placeId}) => {
    
    const [notes] = useNotes();


    return (
      <div>
        {notes.map((note => ((note.placeId = placeId?<NoteFragment key={note.id} note={note}/>: null)|| null)))}
      </div>
    );
}
