import { OptionsSelector, NumericField } from "../components/Fields";
import { ConfirmationButton } from "../components/Buttons";
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from "react";
import { Grid, Alert } from "@mui/material";
import { useCreatePlace } from "../hooks/useCreatePlace";
import { usePlaces } from "../hooks/usePlaces";

const PlaceCreator = () => {

    const [disableSubButton, setDisableSubButton] = useState(true);
    const [registeredPlace, setRegisteredPlace] = useState(null);
    // const [loading, error, registerPlace] = useCreatePlace();

    const [places, setPlaces] = usePlaces();

    const [formData, setFormData] = useState({
        startupId: 0,
        type: "",
    });

    const handleSubmit = () => {
        // e.preventDefault()
        console.log(formData);
        // const response = await setPlaces(formData);

        setPlaces(formData)
        .then((response) => console.log(response))
        .catch((err) => console.log(err.message))

        // setRegisteredPlace(response)
        // window.location.reload(false);  // a refresh is needed to update PlaceList, to be changed
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

    useEffect(() => {
        setDisableSubButton(Object.values(formData).some(x => x === ''))
    }, [formData])
    
    return (
    
    <section>
        <h1>Create a Place</h1>
        <form>
        {JSON.stringify(formData)}
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
                    <ConfirmationButton title={"Send"} icon={<SendIcon />} onClick = {handleSubmit} disabled={/*loading |*/ disableSubButton}/>
                </Grid>
            </Grid>
        </form>

        {/* {error != null &&
            <Alert variant="outlined" severity="error" style={{ marginTop: '16px' }}>An error occured: {error}</Alert>
        }
        {registeredPlace != null &&
            <Alert variant="outlined" severity="success" style={{ marginTop: '16px' }}> A new {registeredPlace.type} place was successfully created in the startup #{registeredPlace.startupId}</Alert>
            //todo: add button to continue or do something next
        } */}
    </section>)
};
export default PlaceCreator

/*
    return(
        <div>
            <h1>Place</h1>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <NumericField fieldTitle={"Startup Id"} numValue = {startupId} setNumValue = {setStartupId} />
                    </Grid>
                    <Grid item xs={6}>
                        <OptionsSelector fieldTitle={"Type"} 
                            options = {["Personal Desk", "Meeting", "Board"]}
                            selectedOption = {type}
                            setSelectedOption = {setType}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ConfirmationButton title={"Send"} icon={<SendIcon />} onClick = {addAPlace}/>
                    </Grid>
                </Grid>
        </div>
    );
}

export default PlaceCreator;
*/