import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Select from "react-select";
import axios from "axios";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [places, setPlaces] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState("");

    useEffect(() => {
        axios.get("/places").then((response) => {
            setPlaces(response.data);
        });
    }, []);

    useEffect(() => {
        if (selectedPlace) {
            axios.get(`/users?place=${selectedPlace}`).then((response) => {
                setUsers(response.data);
            });
        }
    }, [selectedPlace]);

    const handlePlaceChange = (selectedOption) => {
        setSelectedPlace(selectedOption.value);
    };

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Select
                        placeholder="Select a place"
                        options={places}
                        onChange={handlePlaceChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>
                                {user.name} - {user.email}
                            </li>
                        ))}
                    </ul>
                </Grid>
            </Grid>
        </div>
    );
};

export default UserList;