import { TextField, FormControl, InputLabel, Select, MenuItem, TextareaAutosize } from "@mui/material";

const NumericField = ({fieldTitle, numValue, setNumValue}) => {

    const isFieldValid = (fieldVal) => (fieldVal !== '' && !isNaN(fieldVal))

    return (
        <TextField
            id="numeric-field"
            label={fieldTitle}
            variant="filled"
            onChange={(val) => setNumValue(val.target.value)}
            error = { !isFieldValid(numValue) }
            fullWidth
            required
        />
    )

}

const OptionsSelector = ({fieldTitle, options, selectedOption, setSelectedOption}) => {

    const handleChange = (val) => setSelectedOption(val.target.value);
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

const TextArea = ({title, setContent}) => {

    const handleChange = (val) => setContent(val.target.value);

    return (
        <TextareaAutosize
            minRows={3}
            placeholder={title}
            style={{ width: "100%"}}
            required
            onChange={handleChange}
        />
    )
}

export {NumericField, OptionsSelector, TextArea};