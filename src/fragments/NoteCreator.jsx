import { OptionsSelector, TextArea } from '../components/Fields';
import { useState } from 'react';
import { usePlaces } from '../hooks/usePlaces';
import { ConfirmationButton } from '../components/Buttons';
import { Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useNotes } from '../hooks/useNotes';
import { useCreateNotes } from '../hooks/useCreateNotes';

const NoteCreator = () => {
    const places = usePlaces()
    const [registeredNote, setRegisteredNote] = useState(null);
    const [loading, error, registerNote] = useCreateNotes();
    const [formData, setFormData] = useState({
        placeId: 0,
        description: "",
    })
    
    const handleSubmit = async(e) => {
            e.preventDefault()
            const response = await registerNote(formData)
            setRegisteredNote(response)
    }

    const handleDesChange = (e) => {
        setFormData({
            ...formData, 
            description: e.target.value,
        })
    }

    const handleChangePlaceID = (e) => {
        setFormData({
            ...formData, 
            placeId: e.target.value,
        })
    }



    /*
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
*/   
}

export default NoteCreator;