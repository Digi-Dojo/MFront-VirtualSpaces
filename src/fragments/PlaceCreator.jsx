import { NumericField, OptionsSelector } from "../components/Fields";
import { ConfirmationButton } from "../components/Buttons";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { Grid } from "@mui/material";

const PlaceCreator = (/* use qualcosa*/) => {

    const [startupId, setStartupId] = useState();
    const [type, setType] = useState();

    return(
        <div>
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
                    <ConfirmationButton title={"Send"} icon={<SendIcon />}/>
                </Grid>
            </Grid>
            
            
        </div>
    );

}

export default PlaceCreator;