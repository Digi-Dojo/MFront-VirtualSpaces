import logo from './logo.svg';
import './App.css';
import PlaceCreator from './fragments/PlaceCreator';
import NoteCreator from './fragments/NoteCreator';

function App() {

 
  return (
    <div className="App">
      <PlaceCreator />
      <br/> <br/>
      <NoteCreator />
    </div>
  );
}

export default App;
