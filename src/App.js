
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

      <Grid container spacing={2} style={{margin: "auto", width: "80%"}}>
        <div style={{width: "80%"}}>
          <PlaceCreator places = {places} setPlaces = {setPlaces} />
        </div>
        <br/> <br/>
        <div style={{width: "80%"}}>
          <NoteCreator notes = {notes} setNotes = {setNotes} places = {places} />
        </div>
        <br/> <br/>
        <div style={{width: "80%"}}>
          <PlacesList places = {places} setPlaces = {setPlaces} />
        </div>
      </Grid>
      
    </div>
  );
}

export default App;
