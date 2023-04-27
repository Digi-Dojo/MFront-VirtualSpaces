
import { usePlaces } from "../hooks/usePlaces";
import PlaceFragment from "../fragments/PlaceFragment";
import { useEffect } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export const PlacesList = () => {
    
    const [places] = usePlaces();
    useEffect(() => {
        
    }, [places])
    
    return (
        <Grid container>
            <Box
              sx={{
                p: 2,
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr 1fr 1fr 1fr 1fr' },
                gap: 2,
              }}
            >
                {places.map(place => place && <PlaceFragment style={{padding: '5px'}} key={place.id} place={place}/>)}
            </Box>
            
        </Grid>
    );
       
}

