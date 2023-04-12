import logo from './logo.svg';
import './App.css';
import Dropdown from './components/Dropdown';

function App() {

 
  return (
    <div
        className="App"
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}
    >
        <br />  <br />
        <Dropdown />
    </div>
  );
}

export default App;
