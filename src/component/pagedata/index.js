import React from "react";
import { Grid, Typography, Button, Box, Icon } from "@mui/material";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Image10 from "../../assets/image10.jpg";
import Image11 from "../../assets/image11.jpg";
import Image12 from "../../assets/image12.jpg";
import Footer from "../footer";

const Pagedata = () => {
  return (
    <>
      <Grid container item xs={12}>
        <Grid item xs={6}>
          <Typography
            sx={{ fontWeight: 600, fontSize: "xx-large", marginLeft: "50%" }}
          >
            WELCOME
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{ fontWeight: 600, fontSize: "xx-large", marginLeft: "45%" }}
          >
            VIDEOS
          </Typography>
        </Grid>
      </Grid>
      <br></br>
      <Grid container xs={12}>
        <Grid item xs={4}>
          <Typography
            sx={{
              marginLeft: "10%",
              // textAlign: "justify",
              // textJustify: "inter-word",
              // marginLeft: "10px",
            }}
          >
            Make your Software.com presents new free matrimonial website designs
            for its customers. The design upgrade is free to new and old
            customer who have purchased the script in last six months.In case of
            any feedback please feel free to get back to us.visit us on{" "}
            <u>https://www.makeyoursoftware.com</u>
          </Typography>
          <Button
            sx={{
              float: "left",
              background: "grey",
              margin: 2,
              marginLeft: "10%",
            }}
            variant="contained"
          >
            {" "}
            More
          </Button>
        </Grid>
        <Grid item xs={3}>
          <img style={{ marginLeft: "20%" }} src={Image2} alt="image2" />
        </Grid>
        <Grid item xs={4}>
          <img style={{ marginLeft: "20%" }} src={Image3} alt="image3" />
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
        {/* <Grid container xs={12}>
          <Grid sx={{marginLeft:"8%"}} item xs={3}>
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
        </Grid> */}
        <br></br>
        <Grid container xs={12}>
          <Grid item xs={3}>
            <Icon sx={{marginLeft:"80px"}}>
              <BorderColorIcon sx={{ color: "white" }} />
            </Icon>
            <Typography sx={{ color: "white", fontSize: "small",paddingLeft:5 }}>
              FREE REGISTRATION
            </Typography>
          </Grid>
          <Grid item xs={3}>
             <Icon >
              <PersonIcon sx={{ color: "white" }} />
            </Icon>
            <Typography sx={{ color: "white", fontSize: "small" }}>
              FREE PROFILE & PICTURES
            </Typography>
          </Grid>
          <Grid item xs={3}>
          <Icon>
              <GroupsIcon sx={{ color: "white" }} />
            </Icon>
            <Typography sx={{ color: "white", fontSize: "small" }}>
              SEARCH,SHORTLIST & CONTACT
            </Typography>
          </Grid>
          <Grid item xs={3}>
          <Icon >
              <ChatBubbleIcon sx={{ color: "white" }} />
            </Icon>
            <Typography sx={{ color: "white", fontSize: "small" }}>
              COMMUNICATE & MOVE AHEAD
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          height: 300,
          width: "100%",
        }}
      >
        <Grid container xs={12}>
          <Typography
            sx={{ fontWeight: 600, fontSize: "xx-large", marginLeft: "38%" }}
          >
            FEATURED PROFILE
          </Typography>
        </Grid>
        <Grid container xs={12}>
          <Typography
            sx={{ fontWeight: 600, fontSize: "xx-large", marginLeft: "38%" }}
          >
            SUCCESS STORIES
          </Typography>
        </Grid>
        <br></br>
        <Grid container xs={12}>
          <Grid item xs={6}>
            <Typography
              sx={{
                // marginLeft: "20%",
                textAlign: "justify",
                textJustify: "inter-word",
                marginLeft: "150px",
              }}
            >
              Watch out this space it would be loaded with happy customers
              review very soon.We have just started this month but already
              customers have Demo Matrimony Management,Ahemdabaad engage.
            </Typography>
          </Grid>
        </Grid>
        <Grid m={2} container xs={12}>
          <Button
            variant="contained"
            sx={{marginLeft:"10%", background: "grey" }}
          >
            More
          </Button>
        </Grid>
      </Box>
      <Box
        sx={{
          height: 300,
          width: "100%",
          background: "#F8F8F8",
        }}
      >
        <Grid container xs={12}>
          <Typography
            sx={{ fontWeight: 600, fontSize: "xx-large", marginLeft: "40%" }}
          >
            ANNOUNCEMENT
          </Typography>
        </Grid>
        <Grid container xs={12}>
          <Grid ml={10} item xs={3}>
            <img src={Image2} alt="image2" />
          </Grid>
          <Grid m={5} item xs={3}>
            <Typography >ATTN: LAUNCH OF NEW MATRIMONY LAYOUT</Typography>
            <Typography sx={{ alignItems: "justify" }}>
              We pleased to announce new version
            </Typography>
          </Grid>
        </Grid>
        <Grid m={2} container xs={12}>
          <Button
            variant="contained"
            sx={{ marginLeft: "32%", background: "grey" }}
          >
            More
          </Button>
        </Grid>
      </Box>
      <Grid m={10} container xs={12}>
        <Grid item xs={4}>
          <img src={Image10} alt="image10" />
        </Grid>
        <Grid item xs={4}>
          <img src={Image11} alt="image11" />
        </Grid>
        <Grid item xs={4}>
          <img src={Image12} alt="image12" />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Pagedata;
