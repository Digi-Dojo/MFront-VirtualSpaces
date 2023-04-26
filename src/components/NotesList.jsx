import { usePlaces } from "../hooks/usePlaces";
import { NotesInPlace } from "./NotesInPlace";

export const NotesList = () => {

    const [places] = usePlaces();
    
    return (
        places.map((place => (<div>{place.id}<NotesInPlace placeId={place.id}/></div>)))
    );
}