
import { usePlaces } from "../hooks/usePlaces";
import PlaceFragment from "../fragments/PlaceFragment";
import { useEffect } from "react";

export const PlacesList = ({places, setPlaces}) => {
    
    return (
        <div>
            {places.map(place => place && <PlaceFragment key={place.id} place={place}/>)}
        </div>
    );
       
}

