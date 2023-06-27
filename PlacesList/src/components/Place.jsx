import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import GroupsIcon from '@mui/icons-material/Groups';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import FullScreenDialog from './FullScreenDialog';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

const CustomIcon = (type) => {  
     
    switch(type.type) {
        case 'PERSONAL DESK':
            return <DesktopMacIcon/>;
        case 'MEETING ROOM':
            return <GroupsIcon/>
        case 'BOARD':
            return <FilterFramesIcon/>
        default:
            return <section>
                <HourglassEmptyIcon/>
                {/* {type.type} */}
            </section>
    }
}

const Place = ({ place }) => {

    const [notesOpened, setNotesOpened] = useState(false);
    const [membersOpened, setMembersOpened] = useState(false);

    const handleJoinButtonClick = () => {
        window.location.href = '/GeneralPlace';
    };

    return (
    <div key={place.id} style={{padding: 50, backgroundColor: 'pink', borderRadius: '30px' }} >
        <Grid container alignItems="center" justifyContent="center" >
            <Grid item xs={12}>
                <CustomIcon type={place.type}/>
            </Grid>
            <Grid item xs={12}>
                <p>{place.type}</p>
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" onClick={() => handleJoinButtonClick()}> Join </Button>
            </Grid>
            {/*
                TODO:
                Now the plae is managing the part of attached notes and members. Probably the full screen dialog containing those
                information should be a fragment and the button from place should just connect these two different pieces of
                microfrontend but not using them directly in the UI
            */}
            {/* <Button variant="outlined" onClick={() => setNotesOpened(!notesOpened)}> Attached Notes </Button> */}
            <FullScreenDialog title="Members" status={membersOpened} setStatus={setMembersOpened} content={<h1>To Be Implemented</h1>}/>
        </Grid>
    </div>
    )
}

export default Place;
