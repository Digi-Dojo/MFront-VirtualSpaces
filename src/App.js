import logo from './logo.svg';
import './App.css';
import PlaceCreator from './fragments/PlaceCreator';
import NoteCreator from './fragments/NoteCreator';
import { NotesList } from './components/NotesList';
import { PlaceList } from './components/PlacesList';

function App() {


  return (
    <div className="App">
      <PlaceCreator />
      <br/> <br/>
      <NoteCreator />
      <br/> <br/>
      <NotesList/>
      <br/> <br/>
      <PlaceList/>
    </div>
  );
}

export default App;
