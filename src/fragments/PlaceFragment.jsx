import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import GroupsIcon from '@mui/icons-material/Groups';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

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
    <div style={{border: '10 black', padding: 50, width: 160, backgroundColor: 'pink', borderRadius: '30px' }} key={place.id}>
        <p>Startup: {place.startupId}</p>
        <CustomIcon type={place.type}/>
        <p>{place.type}</p>
    </div>
    )
}

export default PlaceFragment;
