import logo from './logo.svg';
import './App.css';
import PlaceCreator from './fragments/PlaceCreator';
import NoteCreator from './fragments/NoteCreator';
import NoteFragment from './fragments/NoteFragment';
import PlaceFragment from './fragments/PlaceFragment';
import {NotesList} from './pages/OLDNotesList';
import {PlacesList} from './pages/PlacesList';
import { NotesInPlace } from './pages/NotesInPlace';
import FullScreenDialog from './components/FullScreenDialog';
/*
      <NotesList/>
      <br/> <br/>
*/

function App() {

  return (
    <div className="App">
      <PlaceCreator />
      <br/> <br/>
      <NoteCreator />
      <br/> <br/>
      <PlacesList/>
      
    </div>
  );
}

export default App;
