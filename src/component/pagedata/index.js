import React from "react";
import { Grid, Typography, Button, Box, Icon } from "@mui/material";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
const Pagedata = () => {
  return (
    <>
      <Grid container item xs={12}>
        <Grid item xs={6}>
          <Typography sx={{ fontWeight: 600, fontSize: "xx-large" }}>
            WELCOME
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ fontWeight: 600, fontSize: "xx-large" }}>
            VIDEOS
          </Typography>
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={5}>
          <Typography
            sx={{
              textAlign: "justify",
              textJustify: "inter-word",
              marginLeft: "10px",
            }}
          >
            Make your Software.com presents new free matrimonial website designs
            for its customers. The design upgrade is free to new and old
            customer who have purchased the script in last six months.In case of
            any feedback please feel free to get back to us.visit us on{" "}
            <u>https://www.makeyoursoftware.com</u>
          </Typography>
          <Button
            sx={{ float: "left", background: "grey" }}
            variant="contained"
          >
            {" "}
            More
          </Button>
        </Grid>
        <Grid item xs={3}>
          <img src={Image2} alt="image2" />
        </Grid>
        <Grid item xs={4}>
          <img src={Image3} alt="image3" />
        </Grid>
      </Grid>
      <Box
        sx={{
          height: 150,
          width: "100%",
          background: "#FF311A",
        }}
      >
        <Grid container xs={12}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "xx-large",
              color: "white",
              marginLeft: "40%",
            }}
          >
            HOWS IT WORKS
          </Typography>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={3}>
            <Icon>
              <BorderColorIcon sx={{ color: "white" }} />
            </Icon>
          </Grid>
          <Grid item xs={3}>
            <Icon>
              <PersonIcon sx={{ color: "white" }} />
            </Icon>
          </Grid>
          <Grid item xs={3}>
            <Icon>
              <GroupsIcon sx={{ color: "white" }} />
            </Icon>
          </Grid>
          <Grid item xs={3}>
            <Icon>
              <ChatBubbleIcon sx={{ color: "white" }} />
            </Icon>
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={3}>
            <Typography sx={{ color: "white", fontSize: "small" }}>
              FREE REGISTRATION
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ color: "white", fontSize: "small" }}>
              FREE PROFILE & PICTURES
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ color: "white", fontSize: "small" }}>
              SEARCH,SHORTLIST & CONTACT
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{ color: "white", fontSize: "small" }}>
              COMMUNICATE & MOVE AHEAD
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          height: 600,
          width: "100%",
          border: "2px solid black",
        }}
      >
        <Grid container xs={12}>
          <Typography
            sx={{ fontWeight: 600, fontSize: "xx-large", marginLeft: "38%" }}
          >
            FEATURED PROFILE
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default Pagedata;
