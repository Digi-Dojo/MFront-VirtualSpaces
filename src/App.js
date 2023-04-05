import logo from './logo.svg';
import './App.css';
import { NumericField, OptionsSelector } from './components/Fields';
import { useState } from 'react';

function App() {

  const [startupId, setStartupId] = useState();
  const [type, setType] = useState();
 
  return (
    <div className="App">
      <NumericField fieldTitle={"Startup Id"} numValue = {startupId} setNumValue = {setStartupId} />
      <OptionsSelector fieldTitle={"Type"} 
        options = {["Personal Desk", "Meeting", "Board"]}
        selectedOption = {type}
        setSelectedOption = {setType}
      />
    </div>
  );
}

export default App;
