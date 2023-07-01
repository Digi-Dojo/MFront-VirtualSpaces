import { OptionsSelector, NumericField } from "./components/Fields";
import { ConfirmationButton } from "./components/Buttons";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { Grid } from "@mui/material";
import { ErrorAlert, SuccessAlert } from "./components/Alerts";
import { usePlaces } from "./hooks/usePlaces";


const PlaceCreator = () => {

    const {addPlace} = usePlaces();

    const [status, setStatus] = useState({code: 0, message: ""});

    const [formData, setFormData] = useState({
        startupId: null,
        type: null,
    });

    const handleSubmit = () => {

        addPlace(formData)
        .then(() => setStatus({code: 2, message: "Place added successfully"}))
        .catch((err) => setStatus({code: 1, message: err}))

    }

    const handleChangeStartID = (e) => {
        setFormData({
            ...formData, 
            startupId: e.target.value,
        })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData, 
            type: e.target.value,
        })
    }

    
    return (
    
    <div style={{marginTop: "4px", minWidth: "50vw"}}>
        <form>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <NumericField fieldTitle={"StartupID"}
                    numValue={formData.startupId}
                    onChange={handleChangeStartID}
                />
                </Grid>
                <Grid item xs={6}>
                    <OptionsSelector fieldTitle={"Type"} 
                        options = {["Personal Desk", "Meeting room", "Board"]}
                        selectedOption = {formData.type}
                        handleChange={handleChange}/>
                </Grid>
                <Grid item xs={12}>
                    <ConfirmationButton title={"Send"} icon={<SendIcon />} onClick = {handleSubmit} disabled={formData.startupId === null || formData.type === null}/>
                </Grid>
            </Grid>
        </form>

        { status.code === 1 ? <ErrorAlert message={status.message} /> : <></> }
        { status.code === 2 ? <SuccessAlert message={status.message} /> : <></> }

    </div>)
};

export default PlaceCreator;
