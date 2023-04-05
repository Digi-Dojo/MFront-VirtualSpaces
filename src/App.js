import logo from './logo.svg';
import './App.css';
import { NumericField } from './components/Fields';
import { useState } from 'react';

function App() {

  const [startupId, setStartupId] = useState();

  return (
    <div className="App">
      <NumericField fieldTitle={"Startup Id"} numValue = {startupId} setNumValue = {setStartupId} />
    </div>
  );
}

export default App;
