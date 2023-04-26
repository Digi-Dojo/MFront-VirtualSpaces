import { OptionsSelector, TextArea } from '../components/Fields';
import { useState, useEffect } from 'react';
import { usePlaces } from '../hooks/usePlaces';
import { ConfirmationButton } from '../components/Buttons';
import { Grid, Alert, FormControlLabel, Switch } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useCreateNotes } from '../hooks/useCreateNotes';

const NoteCreator = () => {
    const [places, setPlaces] = usePlaces()
    const [placesId, setPlacesId] = useState([])
    const [disableSubButton, setDisableSubButton] = useState(true)
    const [registeredNote, setRegisteredNote] = useState(null)
    const [loading, error, registerNote] = useCreateNotes()
    const currentDate = new Date()
    const [formData, setFormData] = useState({
        text: "",
        statusAdded: true,
        placeId: 0,
        date: currentDate.getDate().toString() + "/" + (currentDate.getMonth()+1).toString() + "/" + currentDate.getFullYear().toString(),
    })
    
    const handleSubmit = async(e) => {
            e.preventDefault()
            const response = await registerNote(formData)
            setRegisteredNote(response)
            //window.location.reload(false); // a refresh is needed to update NotesList, to be changed
    }

    const handleDesChange = (e) => {
        setFormData({
            ...formData, 
            text: e.target.value,
        })
    }
/*
    const handleStatChange = (e) => {
        setFormData({
            ...formData, 
            statusAdded: !status,
        })
        setStatus(e.target.checked)
    }
*/
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

    /*
        <Grid item xs={12}>
            <FormControlLabel control={<Switch checked={status} onChange={handleStatChange}  inputProps={{ 'aria-label': 'controlled' }}/>} label="Status" />
        </Grid>
    */
    return (
        <section>
            <h1>Create a note</h1>
            {
                <form>
                {JSON.stringify(formData)}
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
            }
            
            {error != null &&
                <Alert variant="outlined" severity="error" style={{ marginTop: '16px' }}>An error occured: {error}</Alert>
            }
            {registeredNote != null &&
                <Alert variant="outlined" severity="success" style={{ marginTop: '16px' }}> A new note was successfully created in the place #{registeredNote.placeId}</Alert>
            }
        </section>
    )
}

export default NoteCreator;