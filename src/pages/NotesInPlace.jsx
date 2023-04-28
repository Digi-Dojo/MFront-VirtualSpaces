import { useNotes } from "../hooks/useNotes";
import NoteFragment from "../fragments/NoteFragment";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export const NotesInPlace = ({placeId}) => {
    
    const [notes] = useNotes();
    const notesInPlace = notes.filter(note => note.placeId === placeId && note.statusAdded === true)
    // {notes.map((note => ((note.placeId = placeId?<NoteFragment key={note.id} note={note}/>: null)|| null)))}
    return (
      <section>
      
      <Grid container spacing={0.5}>
        
        <Grid item xs={8}>
          <h1>Current Notes:</h1>
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              p: 2,
              display: 'grid',
              gridTemplateColumns: { md: '1fr 1fr 1fr 1fr 1fr 1fr' },
              gap: 2,
            }}
          >
            {notesInPlace.length === 0 ? "None" :notesInPlace.map(note=> <NoteFragment key={note.id} note={note}/>)}
          </Box>
        </Grid>
      </Grid>
      </section>
    );
}
