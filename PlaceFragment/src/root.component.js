import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import GroupsIcon from '@mui/icons-material/Groups';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { NotesInPlace } from './pages/NotesInPlace';
import FullScreenDialog from './components/FullScreenDialog';
// <NotesInPlace placeId={place.id}/>
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

const PlaceFragment = ({ place }) => {

    return (
    <div key={place.id} style={{padding: 50, backgroundColor: 'pink', borderRadius: '30px' }} key={place.id}>
        <h3>Place #{place.id}</h3>
        <p>Startup: {place.startupId}</p>
        <CustomIcon type={place.type}/>
        <p>{place.type}</p>
        <FullScreenDialog type='notes' placeId={place.id}/>
        <FullScreenDialog type='members' placeId={place.id}/>
       
    </div>
    )
}

export default PlaceFragment;
