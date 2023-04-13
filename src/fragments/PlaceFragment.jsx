import { TextField } from '@mui/material';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import GroupsIcon from '@mui/icons-material/Groups';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

const CustomIcon = (type) => {
    switch(type) {
        case 'Personal Desk':
            return <DesktopMacIcon/>;
        case 'Meeting Room':
            return <GroupsIcon/>
        case 'Board':
            return <FilterFramesIcon/>
        default:
            return <HourglassEmptyIcon/>
    }
}

const PlaceFragment = ({ place }) => {

    return (
    <div key={place.id}>
        <p>{place.startupId}</p>
        <CustomIcon type={place.type}/>
        <p>{place.type}</p>
    </div>
    )
}

export default PlaceFragment;
