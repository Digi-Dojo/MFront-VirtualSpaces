import { List, ListItem, ListItemText } from "@mui/material";
import { useNotes } from "../hooks/useNotes";
import NoteFragment from "../fragments/NoteFragment";
import { useState } from "react";
import { usePlaces } from "../hooks/usePlaces";
import { NotesInPlace } from "./NotesInPlace";

export const NotesList = () => {
    
    const [places] = useState(usePlaces());

    return (
        places.map((place => (place && <NotesInPlace placeId={place.id}/>)))
    );
}