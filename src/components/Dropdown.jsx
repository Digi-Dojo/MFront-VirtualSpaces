import React, { useState, useEffect } from "react";
import {Button, Grid, MenuItem} from "@mui/material"
import Select from "react-select";
import axios from "axios";


const Dropdown = () => {
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");

    useEffect(() => {
        axios.get('/places').then((response) => {
            setOptions(response.data);
        });
    }, []);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleButtonClick = () => {
        window.location.href = selectedOption;
    };


    return (
        <div style={{
            width: '250px'
        }}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Select
                        placeholder="Choose a place"
                        value = {selectedOption}
                        onChange = {handleOptionChange}
                    >
                        {
                            options.map(option =>
                                <MenuItem key={option.id} value={option.value}>{option.label}</MenuItem>
                            )
                        }
                    </Select>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        containerViewStyle={{width: '100%', marginLeft: 0}}
                        onClick={handleButtonClick}
                    >
                        Go to this Place
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dropdown;