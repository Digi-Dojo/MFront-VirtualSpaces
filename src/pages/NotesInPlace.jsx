import { useNotes } from "../hooks/useNotes";
import NoteFragment from "../fragments/NoteFragment";

export const NotesInPlace = ({placeId}) => {
    
    const [notes] = useNotes();
    const notesInPlace = notes.filter(note => note.placeId === placeId)
    // {notes.map((note => ((note.placeId = placeId?<NoteFragment key={note.id} note={note}/>: null)|| null)))}
    return (
      <div>
        <h3>Current Notes:</h3>
        {notesInPlace.length === 0 ? "None" :notesInPlace.map(note=> <NoteFragment key={note.id} note={note}/>)}
      </div>
    );
}
