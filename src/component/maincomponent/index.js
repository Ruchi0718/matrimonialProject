import * as React from "react";
import { AppBar, Box, Button, Stack, Avatar } from "@mui/material";
import { Grid, Paper, Checkbox } from "@mui/material";
import Image13 from "../../assets/image13.jpg";
import Image from "../../assets/Image.jpg";
import Form from "../form";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AddIcon from "@mui/icons-material/Add";
import TwitterIcon from '@mui/icons-material/Twitter';
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import GoogleIcon from "@mui/icons-material/Google";
import FormControlLabel from "@mui/material/FormControlLabel";
const navItems2 = [
  "HOME",
  "ABOUT US",
  "MEMBERSHIP",
  "CONTACT US",
  "LOGIN",
  "SEARCH",
];

const MainComponent = () => {
  return (
    <>
      <Stack sx={{ display: "flex" }}>
        <AppBar sx={{ backgroundColor: "white" }} position="static">
          <Box sx={{ height: 140, width: "100%" }}>
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
              <Grid item xs={3}>
                <Stack  sx={{ marginLeft:"30%"}}m={4} spacing={2} direction="row">
                  <Button
                    sx={{ background: "#FF311A" }}
                    startIcon={<AddIcon />}
                    variant="contained"
                  >
                    Sign
                  </Button>
                  <Button
                    sx={{ background: "#FF311A" }}
                    startIcon={<TrendingFlatIcon />}
                    variant="contained"
                  >
                    Login
                  </Button>
                </Stack>

                <Stack sx={{marginBottam:12,marginLeft:"50%"}} spacing={1} direction="row">
                  <Avatar variant="square" sx={{ bgcolor: " #3b5998" }}>
                    <FacebookIcon />
                  </Avatar>
                  <Avatar sx={{ bgcolor: "red" }}>
                    <GoogleIcon />
                  </Avatar>
                  <Avatar sx={{ bgcolor: "primary.light" }}>
                    <TwitterIcon />
                  </Avatar>
                  <Avatar sx={{ bgcolor: "black" }}>
                    <LinkedInIcon />
                  </Avatar>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </AppBar>
        <AppBar sx={{ background: "#FF311A" }} position="static">
          <Box sx={{ height: 50 }}>
            {navItems2.map((item) => (
              <Button key={item} sx={{ color: "white" }}>
                {item}
              </Button>
            ))}
          </Box>
        </AppBar>
      </Stack>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${Image})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Form />
      </Box>
    </>
  );
};

export default MainComponent;
