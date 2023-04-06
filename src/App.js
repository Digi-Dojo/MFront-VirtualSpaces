import logo from './logo.svg';
import './App.css';
import PlaceCreator from './fragments/PlaceCreator';
import { OptionsSelector, TextArea } from './components/Fields';
import { useState } from 'react';

function App() {

  const [content, setContent] = useState("");
 
  return (
    <div className="App">
      <PlaceCreator />
      <TextArea title = "Note" setContent = {setContent} />
    </div>
  );
}

export default App;
