import React from "react";
import { Box, Grid, Icon, Typography } from "@mui/material";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box sx={{ height: 250, width: "108%", backgroundColor: "#E8E8E8" }}>
      <Grid m={3} container xs={12}>
        <Grid m={2} item xs={2}>
          <Typography sx={{ fontWeight: "bold" }}>Our Links</Typography>
        </Grid>
        <Grid m={2} item xs={2}>
          <Typography sx={{ fontWeight: "bold" }}>Support</Typography>
        </Grid>
        <Grid m={2} item xs={2}>
          <Typography sx={{ fontWeight: "bold" }}>Contact Info</Typography>
        </Grid>
        <Grid m={2} item xs={2}>
          <Typography sx={{ fontWeight: "bold" }}>Follow Us</Typography>
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid
          sx={{
            textAlign: "justify",
            textJustify: "inter",
            marginLeft: "60px",
          }}
          item
          xs={2}
        >
          <Typography>Privacy Policy</Typography>
          <Typography>Site Map</Typography>
          <Typography>FAQ</Typography>
          <Typography>Feedback</Typography>
          <Typography>Customer Support</Typography>
        </Grid>
        <Grid
          sx={{
            textAlign: "justify",
            textJustify: "inter",
            marginLeft: "20px",
          }}
          item
          xs={2}
        >
          <Typography>Contact Us</Typography>
          <Typography>Terms and condition</Typography>
          <Typography>Bottam Link1</Typography>
          <Typography>Bottam Link2</Typography>
        </Grid>
        <Grid sx={{ textAlign: "justify", textJustify: "inter" }} item xs={2}>
          <Icon>
            <AddLocationIcon />
          </Icon>
          Aura IT solution sector 4
          <Grid>
            <Icon>
              <MailIcon />
            </Icon>
            info@demo.com
          </Grid>
          <Grid>
            <Icon>
              <CallIcon />
            </Icon>
            555-8888-999
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Icon>
            <FacebookIcon />
          </Icon>
          <Icon>
            <TwitterIcon />
          </Icon>
          <Icon>
            <GoogleIcon />
          </Icon>
          <Icon>
            <LinkedInIcon />
          </Icon>
        </Grid>
      </Grid>
      <hr></hr>
      <Grid container xs={12}>
        <Typography sx={{marginLeft:"40%",fontWeight:"bold"}}>
          Website Design by makeyoursoftware.com
        </Typography>
      </Grid>
    </Box>
  );
};

export default Footer;
