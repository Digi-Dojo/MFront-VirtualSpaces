import logo from './logo.svg';
import './App.css';
import PlaceCreator from './fragments/PlaceCreator';
import NoteCreator from './fragments/NoteCreator';
import NoteFragment from './fragments/NoteFragment';
import PlaceFragment from './fragments/PlaceFragment';
import {NotesList} from './components/NotesList';
import {PlacesList} from './components/PlacesList';


function App() {

  return (
    <div className="App">
      <PlaceCreator />
      <br/> <br/>
      <NoteCreator />
      <br/> <br/>
      <NotesList/>
      <br/> <br/>
      <PlacesList/>
      
    </div>
  );
}

export default App;
