import Grid from '@mui/material/Grid';
import Note from './components/Note';
import { useNotes } from './hooks/useNotes';
import { useEffect, useState } from 'react';

 const NotesList = () => {

  const [placeId, setPlaceId] = useState();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    setPlaceId(id);
  }, []);

  const {notes, invertStatusNote} = useNotes({placeId});

  const notesInPlace = notes.filter(note => note.statusAdded === true);
  
    return (

        <section>
          <Grid container spacing={0.5}>
              <Grid item xs={12} >
                  {notesInPlace.length === 0 ? "None" :notesInPlace.map(note=> <div style={{marginTop: "10px"}}><Note key={note.id} note={note} invertStatusNote = {() => invertStatusNote(note.id)}/></div> )}
              </Grid>
            </Grid>
        </section>
    );
       
}

export default NotesList;

