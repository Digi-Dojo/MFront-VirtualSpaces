
import { usePlaces } from "../hooks/usePlaces";
import PlaceFragment from "../fragments/PlaceFragment";

export const PlaceList = () => {
    const [places] = usePlaces();
    return (
        <div>
            {places.map(place => place && <PlaceFragment key={place.id} place={place}/>)}
        </div>
    );
       
}

