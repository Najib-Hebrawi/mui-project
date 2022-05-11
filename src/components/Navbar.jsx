import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Box,
  styled,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

import React, { useState } from "react";

// theme is from mui
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const IconsBox = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  // den her code for at vise Icns kun hvis skærmen er sm og up.
  [theme.breakpoints.up("sm")]: { display: "flex" },
}));

// to show just a image for beskeder nor vi åbner appen med mobilen.
const UserIconsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "none" },
}));

const Navbar = () => {
  // her en useState for at lukke og åbner menu.
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Najib
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />{" "}
        </Search>

        <IconsBox>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>

          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>

          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(event) => setOpen(true)}
          />
        </IconsBox>

        <UserIconsBox onClick={(event) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">Najib </Typography>
        </UserIconsBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open} // open kom fra vores state
        onClose={(event) => setOpen(false)} // den her når vi klicker ik på menu så menuen lukker
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
