import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Checkbox,
  Button,
  Icon,
} from "@mui/material";
import Image13 from "../../assets/image13.jpg";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GoogleIcon from "@mui/icons-material/Google";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Header = () => {
  return (
    <>
      <Box sx={{ height: 130, width: "100%", border: "2px solid red" }}>
        <Grid container xs={12}>
          <Grid sx={{ marginTop: 2 }} item xs={4}>
            <img src={Image13} alt="image13" />
          </Grid>
          <Grid item xs={4}>
            <Paper
              variant="outlined"
              sx={{ height: 120, margin: 1, backgroundColor: "#36454F" }}
            >
              <Grid container xs={12}>
                <FormControlLabel
                  sx={{ color: "white", marginLeft: "20px" }}
                  control={<Checkbox defaultChecked />}
                  label="CLASSIFIED WEBSITE"
                />
                <FormControlLabel
                  sx={{ color: "white", marginLeft: "20px" }}
                  control={<Checkbox defaultChecked />}
                  label="DIRECTORY WEBSITE"
                />
                <FormControlLabel
                  sx={{ color: "white", marginLeft: "20px" }}
                  control={<Checkbox defaultChecked />}
                  label="MARKET PLACE WEBSITE"
                />
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Button sx={{ background: "#FF311A" }} variant="contained">
              Sign
            </Button>
            <Button sx={{ background: "#FF311A" }} variant="contained">
              Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Header;
