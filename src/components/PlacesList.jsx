
import { usePlaces } from "../hooks/usePlaces";
import PlaceFragment from "../fragments/PlaceFragment";

export const PlacesList = () => {
    const [places] = usePlaces();
    
    return (
        <div>
            {places.map(place => place && <PlaceFragment key={place.id} place={place}/>)}
        </div>
    );
       
}

