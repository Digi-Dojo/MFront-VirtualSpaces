
import './App.css';
import PlaceCreator from './fragments/PlaceCreator';
import NoteCreator from './fragments/NoteCreator';
import {PlacesList} from './fragments/PlacesList';
import { usePlaces } from './hooks/usePlaces';
import { useNotes } from './hooks/useNotes';
import { Grid } from '@mui/material';

function App() {

  const [places, setPlaces] = usePlaces();
  const [notes, setNotes] = useNotes();

  return (
    <div className="App">

      <Grid container spacing={2}>
        <PlaceCreator places = {places} setPlaces = {setPlaces} />
        <br/> <br/>
        <NoteCreator notes = {notes} setNotes = {setNotes} places = {places} />
        <br/> <br/>
        <PlacesList places = {places} setPlaces = {setPlaces} />
      </Grid>
      
    </div>
  );
}

export default App;
