import { OptionsSelector, TextArea } from '../components/Fields';
import { useState } from 'react';
import { usePlaces } from '../hooks/usePlaces';
import { ConfirmationButton } from '../components/Buttons';
import { Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useNotes } from '../hooks/useNotes';

const NoteCreator = () => {

    const [content, setContent] = useState("");
    const [places, setPlaces] = usePlaces();
    const [selectedPlace, setSelectedPlace] = useState();
    const [notes, setNote] = useNotes();

    const addANote = () => {
        const nowDate = new Date(); 
        const date = nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate(); 

        setNote(content, true, selectedPlace, date);
    }

    return (
        <div>
        
            <h1>Note</h1>
        
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <OptionsSelector 
                        fieldTitle = "Place" 
                        options = {places} 
                        selectedOption = {selectedPlace} 
                        setSelectedOption = {setSelectedPlace} 
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextArea title = "Note" setContent = {setContent} /> 
                </Grid>
                <Grid item xs={12}>
                    <ConfirmationButton title={"Send"} icon={<SendIcon />} onClick = {addANote} />
                </Grid>
            </Grid>
        </div>
    )

}

export default NoteCreator;