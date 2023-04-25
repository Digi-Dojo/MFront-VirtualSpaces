import { TextField, FormControl, InputLabel, Select, MenuItem, TextareaAutosize } from "@mui/material";

const NumericField = ({fieldTitle, numValue, onChange}) => {

    const isFieldValid = (fieldVal) => (fieldVal !== '' && !isNaN(fieldVal))

    return (
        <TextField
            id="numeric-field"
            label={fieldTitle}
            variant="filled"
            onChange={onChange}
            error = { !isFieldValid(numValue) }
            fullWidth
            required
        />
    )
}

const OptionsSelector = ({fieldTitle, options, selectedOption, handleChange}) => {
    const isFieldValid = (fieldVal) => (fieldVal !== undefined);
    
    return (
        <FormControl fullWidth required error = { !isFieldValid(selectedOption)}>
            <InputLabel>{fieldTitle}</InputLabel>
            <Select
                id="options-selector"
                variant="filled"
                value={selectedOption}
                label={fieldTitle}
                onChange={handleChange}
            >
                {
                    options.map(option => 
                        <MenuItem value={option}>{option}</MenuItem>
                    )
                }
            </Select>
        </FormControl>
    )
}

const TextArea = ({title, setContent, onChange}) => {

    
    return (
        <TextareaAutosize
            minRows={3}
            placeholder={title}
            style={{ width: "100%"}}
            required
            onChange={onChange}
        />
    )
}

export {NumericField, OptionsSelector, TextArea};