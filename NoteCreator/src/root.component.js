import { OptionsSelector, TextArea } from '../components/Fields';
import { useState, useEffect } from 'react';
import { usePlaces } from './hooks/usePlaces';
import { ConfirmationButton } from './components/Buttons';
import { Grid, Alert, FormControlLabel, Switch } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useNotes } from './hooks/useNotes';
import { ErrorAlert, SuccessAlert } from './components/Alerts';

const NoteCreator = ({notes, setNotes, places}) => {

    //0 - no status | 1 - error | 2 - success
    const [status, setStatus] = useState({code: 0, message: ""});
    const currentDate = new Date()
    const [formData, setFormData] = useState({
        text: "",
        statusAdded: true,
        date: currentDate.getDate().toString() + "/" + (currentDate.getMonth()+1).toString() + "/" + currentDate.getFullYear().toString(),
    })
    
    const handleSubmit = async(e) => {
            
        setNotes(formData)
        .then(() => setStatus({code: 2, message: "Note added successfully"}))
        .catch((err) => setStatus({code: 1, message: err}))
            
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

    /*
        <Grid item xs={12}>
            <FormControlLabel control={<Switch checked={status} onChange={handleStatChange}  inputProps={{ 'aria-label': 'controlled' }}/>} label="Status" />
        </Grid>
    */
    return (
        <section>
            <h1>Create a note</h1>
            
                <form>
                
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <OptionsSelector 
                                fieldTitle = "Place" 
                                options = { places.map((place, index) => place.id)} 
                                selectedOption = {formData.placeId} 
                                handleChange={handleChangePlaceID}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextArea title = "Note" setContent = {formData.text} onChange={handleDesChange}/> 
                        </Grid>
                        <Grid item xs={12}>
                            <ConfirmationButton title={"Send"} icon={<SendIcon />} onClick = {handleSubmit} disabled = { formData.text === "" || formData.placeId === 0 }/>
                        </Grid>
                    </Grid>

                </form>

                { status.code === 1 ? <ErrorAlert message={status.message} /> : <></> }
                { status.code === 2 ? <SuccessAlert message={status.message} /> : <></> }


        </section>
    )
}

export default NoteCreator;