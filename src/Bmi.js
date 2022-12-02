import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

function Bmi() {
  const [weight, setWeight] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  return (
    <Box
      marginTop={30}
      marginLeft={70}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            defaultValue={weight}
            label="Weight"
            variant="outlined"
            placeholder="weight"
            onChange={(event) => {
              setWeight(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            defaultValue={height}
            label="Height"
            variant="outlined"
            placeholder="height"
            onChange={(event) => {
              setHeight(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            disabled
            label="Bmi"
            value={weight / height ** 2}
            variant="outlined"
            placeholder="output"
            onChange={(event) => {
              setHeight(event.target.value);
            }}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Bmi;
