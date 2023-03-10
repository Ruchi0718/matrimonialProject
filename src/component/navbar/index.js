import * as React from "react";
import { AppBar, Box, Toolbar, Button } from "@mui/material";
import Image from "../../assets/Image.jpg";
import Form from "../form";

const navItems = [
  "HOME",
  "ABOUT US",
  "MEMBERSHIP",
  "CONTACT US",
  "LOGIN",
  "SEARCH",
];

const Navbar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar sx={{ background: "#FF311A" }}>
        <Toolbar>
          <Box>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "white" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

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


    </Box>
  );
};

export default Navbar;
