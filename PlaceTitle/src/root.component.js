import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import GroupsIcon from '@mui/icons-material/Groups';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { Grid, Typography } from "@mui/material";
import { usePlaces } from './hooks/usePlaces';
import {useState, useEffect} from 'react';

const CustomIcon = (type) => {  
     
  switch(type.type) {
      case 'PERSONAL_DESK':
          return <DesktopMacIcon fontSize="large" />;
      case 'MEETING_ROOM':
          return <GroupsIcon fontSize="large"/>
      case 'BOARD':
          return <FilterFramesIcon fontSize="large"/>
      default:
          return <section>
              <HourglassEmptyIcon fontSize="large"/>
              {/* {type.type} */}
          </section>
  }
}

const getNameType = (type) => {
  switch(type) {
      case 'PERSONAL_DESK':
          return "PERSONAL DESK";
      case 'MEETING_ROOM':
          return "MEETING ROOM";
      case 'BOARD':
          return "BOARD";
      default:
          return "UNKNOWN"
  }
}

const TitleComp = ({place}) => {

  console.log(JSON.stringify(place))

  return(
    <div style={{display: "inline-block"}}>
      <CustomIcon  type={place.type}/>
      <Typography variant='h3'>{getNameType(place.type)}</Typography>
    </div>
  )
}

function App() {

  const [placeId, setPlaceId] = useState();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    setPlaceId(id);
  }, []);

  const {place} = usePlaces({placeId});  

  console.log("place " + JSON.stringify(place));

  return (
    <div className="App" style={{minWidth: "80vw"}}>

      <Grid container style={{paddingTop: "10px", paddingLeft: "10px"}}>
        
        <Grid item xs={5}>
          {
            place ? 
            <TitleComp place = {place} />
            : <></>
          }
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={3}>
          <a class="btn btn-secondary" href="/"> <Typography variant="h4"> Company Hall </Typography></a>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
