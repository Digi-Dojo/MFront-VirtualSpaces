import { OptionsSelector, TextArea } from './components/Fields';
import { useState } from 'react';
import { ConfirmationButton } from './components/Buttons';
import { Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { ErrorAlert, SuccessAlert } from './components/Alerts';
import { useNotes } from './hooks/useNotes';

const NoteCreator = () => {
    
    const [notes, setNotes] = useState("");

    const places = [{id: 2}, {id: 1}, {id:4}];

    const {addNote} = useNotes();

    //0 - no status | 1 - error | 2 - success
    const [status, setStatus] = useState({code: 0, message: ""});
    const currentDate = new Date()
    const [formData, setFormData] = useState({
        text: "",
        placeId: 109,
        statusAdded: true,
        date: currentDate.getDate().toString() + "/" + (currentDate.getMonth()+1).toString() + "/" + currentDate.getFullYear().toString(),
    })

    
    const handleSubmit = async(e) => {
            
        addNote(formData)
        .then(() => setStatus({code: 2, message: "Note added successfully"}))
        .catch((err) => setStatus({code: 1, message: err}))
            
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

    return (
        <section style={{marginTop: "4px"}}>
            {/* <h5>Create a note</h5> */}
            
                <form >
                
                    <Grid container spacing={2} style={{marginTop: "2px"}}>
                        {/* <Grid item xs={12}>
                            <OptionsSelector 
                                fieldTitle = "Place" 
                                options = { places.map((place, index) => place.id)} 
                                selectedOption = {formData.placeId} 
                                handleChange={handleChangePlaceID}
                            />
                        </Grid> */}
                        <Grid item xs={12}>
                            <TextArea title = "Note" setContent = {formData.text} onChange={handleDesChange}/> 
                        </Grid>
                        <Grid item xs={12}>
                            <ConfirmationButton title={"Add Note"} onClick = {handleSubmit} disabled = { formData.text === "" || formData.placeId === 0 }/>
                        </Grid>
                    </Grid>

                </form>


        </section>
    )
}

export default NoteCreator;