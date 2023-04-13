import { NumericField, OptionsSelector } from "../components/Fields";
import { ConfirmationButton } from "../components/Buttons";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { Grid } from "@mui/material";
import { usePlaces } from "../hooks/usePlaces";


const PlaceCreator = () => {

    const [startupId, setStartupId] = useState();
    const [type, setType] = useState();
    const setPlace = usePlaces();

    const addAPlace = () => setPlace(startupId, type);

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