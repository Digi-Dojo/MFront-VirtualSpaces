
import { JitsiMeeting } from '@jitsi/react-sdk';

function App() {
  return (
    <div className="App">
      <JitsiMeeting
          roomName = { 'YOUR_CUSTOM_ROOM_NAME' } 
          getIFrameRef = { node => node.style.height = '800px' }
          useStaging = { true }
        />
    </div>
  );
}

export default App;
