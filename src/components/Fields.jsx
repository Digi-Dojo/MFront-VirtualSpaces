import { TextField } from "@mui/material";

const NumericField = ({fieldTitle, numValue, setNumValue}) => {

    const isFieldValid = (fieldVal) => (fieldVal != '' && !isNaN(fieldVal))

    return (
        <div>
            <TextField
                required
                id="filled-required"
                label={fieldTitle}
                variant="filled"
                onChange={(val) => setNumValue(val.target.value)}
                error = { !isFieldValid(numValue) }
            />
        </div>
    )

}

export {NumericField};