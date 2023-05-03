import { useNotes } from "../hooks/useNotes";
import NoteFragment from "../fragments/NoteFragment";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export const NotesInPlace = ({placeId}) => {
    
    const [notes, setNotes, invertStatusNote] = useNotes();
    const notesInPlace = notes.filter(note => note.placeId === placeId && note.statusAdded === true)
    return (
      <section>
      <h1>Current Notes:</h1>
      <Grid container spacing={0.5}>
        <Grid item xs={0}>
          <Box
            sx={{
              p: 2,
              display: 'grid',
              gridTemplateColumns: { md: '1fr 1fr 1fr 1fr 1fr' },
              gap: 2,
            }}
          >
            {notesInPlace.length === 0 ? "None" :notesInPlace.map(note=> <NoteFragment key={note.id} note={note} invertStatusNote = {() => invertStatusNote(note.id)}/>)}
          </Box>
        </Grid>
      </Grid>
      </section>
    );
}
