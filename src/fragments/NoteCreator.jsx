import { OptionsSelector, TextArea } from '../components/Fields';
import { useState, useEffect } from 'react';
import { usePlaces } from '../hooks/usePlaces';
import { ConfirmationButton } from '../components/Buttons';
import { Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useNotes } from '../hooks/useNotes';
import { useCreateNotes } from '../hooks/useCreateNotes';

const NoteCreator = () => {
    const [places, setPlaces] = usePlaces()
    const [placesId, setPlacesId] = useState([]);
    const [disableSubButton, setDisableSubButton] = useState(true);
    const [registeredNote, setRegisteredNote] = useState(null);
    const [loading, error, registerNote] = useCreateNotes();
    const [formData, setFormData] = useState({
        placeId: 0,
        text: "",
    })
    
    const handleSubmit = async(e) => {
            e.preventDefault()
            const response = await registerNote(formData)
            setRegisteredNote(response)
    }

    const handleDesChange = (e) => {
        setFormData({
            ...formData, 
            text: e.target.value,
        })
    }

    const handleChangePlaceID = (e) => {
        
        setFormData({
            ...formData, 
            placeId: e.target.value,
        })
    }


    useEffect(() => {
    setPlacesId(places.map(place => place.id))
    }, [places] )

    useEffect(() => {
        setDisableSubButton(Object.values(formData).some(x => x === ''))
    }, [formData])

    return (
        <div>
        
            <h1>Note</h1>
            <form>
            {JSON.stringify(placesId)}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <OptionsSelector 
                        fieldTitle = "Place" 
                        options = {placesId} 
                        selectedOption = {formData.placeId} 
                        handleChange={handleChangePlaceID}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextArea title = "Note" setContent = {formData.text} onChange={handleDesChange}/> 
                </Grid>
                <Grid item xs={12}>
                    <ConfirmationButton title={"Send"} icon={<SendIcon />} onClick = {handleSubmit} disabled = {loading | disableSubButton}/>
                </Grid>
            </Grid>
            </form>
        </div>
    )
 
}

export default NoteCreator;