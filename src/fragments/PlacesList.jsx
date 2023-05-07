import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Place from "../components/Place";

export const PlacesList = ({places, setPlaces}) => {
    
    return (
        <Grid container>
            <Box
              sx={{
                p: 2,
                display: 'grid',
                /* TODO:
                    Deciding the place used by a UI element inside itself it's not so good, especially because
                    this gridTemplateColumns makes it go out the borders of an external container. So this should
                    be adjusted such that it takes 100% of the space and that could be externally reduced
                 */
                gridTemplateColumns: { md: '1fr 1fr 1fr 1fr' },
                gap: 3,
              }}
            >
              {places.map(place => place && <Place style={{padding: '5px'}} key={place.id} place={place}/>)}
            </Box>
        </Grid>
    );
       
}

