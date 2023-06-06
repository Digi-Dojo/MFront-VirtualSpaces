import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import GroupsIcon from '@mui/icons-material/Groups';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import FullScreenDialog from './FullScreenDialog';
import { Button } from '@mui/material';
import { useState } from 'react';
import { NotesInPlace } from './NotesInPlace';

const CustomIcon = (type) => {  
     
    switch(type.type) {
        case 'PERSONAL_DESK':
            return <DesktopMacIcon/>;
        case 'MEETING_ROOM':
            return <GroupsIcon/>
        case 'BOARD':
            return <FilterFramesIcon/>
        default:
            return <section>
                <HourglassEmptyIcon/>
                {type.type}
            </section>
    }
}

const Place = ({ place }) => {

    const [notesOpened, setNotesOpened] = useState(false);
    const [membersOpened, setMembersOpened] = useState(false);

    return (
    <div key={place.id} style={{padding: 50, backgroundColor: 'pink', borderRadius: '30px' }} >
        <h3>Place #{place.id}</h3>
        <p>Startup: {place.startupId}</p>
        <CustomIcon type={place.type}/>
        <p>{place.type}</p>
        {/*
            TODO:
            Now the plae is managing the part of attached notes and members. Probably the full screen dialog containing those
            information should be a fragment and the button from place should just connect these two different pieces of
            microfrontend but not using them directly in the UI
        */}
        <Button variant="outlined" onClick={() => setNotesOpened(!notesOpened)}> Attached Notes </Button>
        <Button variant="outlined" onClick={() => setMembersOpened(!membersOpened)}> Members </Button>
        <FullScreenDialog title="Attached Notes" status={notesOpened} setStatus={setNotesOpened} content={<NotesInPlace placeId={place.id} />}/>
        <FullScreenDialog title="Members" status={membersOpened} setStatus={setMembersOpened} content={<h1>To Be Implemented</h1>}/>
    </div>
    )
}

export default Place;
