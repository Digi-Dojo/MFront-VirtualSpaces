
import './App.css';
import PlaceCreator from './fragments/PlaceCreator';
import NoteCreator from './fragments/NoteCreator';
import {PlacesList} from './pages/PlacesList';
import { usePlaces } from './hooks/usePlaces';
import { useNotes } from './hooks/useNotes';

function App() {

  const [places, setPlaces] = usePlaces();
  const [notes, setNotes] = useNotes();

  return (
    <div className="App">
      <PlaceCreator places = {places} setPlaces = {setPlaces} />
      <br/> <br/>
      <NoteCreator notes = {notes} setNotes = {setNotes} places = {places} />
      <br/> <br/>
      <PlacesList places = {places} setPlaces = {setPlaces} />
      
    </div>
  );
}

export default App;
