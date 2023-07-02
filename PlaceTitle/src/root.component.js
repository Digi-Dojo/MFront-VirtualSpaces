import { Grid } from "@mui/material";

function App() {

  return (
    <div className="App">

      <Grid container style={{paddingTop: "10px", paddingLeft: "10px"}}>
        
        <Grid item xs={3}>
          <h2>Place Name</h2>
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={3}>
          <a class="btn btn-secondary" href="/"> <Typography variant="h4"> Company Hall </Typography></a>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
