import Grid from '@mui/material/Grid';
import Note from './components/Note';

 const NotesInPlaceList = () => {

  // const [placces]

  const notesInPlace = [{ id: 2, text: "we", date: "10/20/30"}, { id: 2, text: "we", date: "10/20/30"}, { id: 2, text: "we", date: "10/20/30"}]
    
    return (

        <section>
          {/* <h5>Current Notes:</h5> */}
          <Grid container spacing={0.5}>
              <Grid item xs={12} >
                {/* <Box
                  sx={{
                    p: 2,
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr 1fr 1fr 1fr 1fr' },
                    gap: 2,
                  }}
                > */}
                  {notesInPlace.length === 0 ? "None" :notesInPlace.map(note=> <div style={{marginTop: "10px"}}><Note key={note.id} note={note} invertStatusNote = {() => invertStatusNote(note.id)}/></div> )}
                {/* </Box> */}
              </Grid>
            </Grid>
        </section>
    );
       
}

export default NotesInPlaceList;

