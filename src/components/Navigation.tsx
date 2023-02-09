import React from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";

import imgHome from "../images/home.png";

export default function Navigation() {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: {
          sm: "none",
        },
      }}
      elevation={3}
    >
      <BottomNavigation showLabels value={0}>
        <BottomNavigationAction
          label="Home"
          icon={
            <Avatar
              variant="square"
              src={imgHome}
              sx={{ width: 24, height: 24 }}
            >
              <HomeIcon />
            </Avatar>
          }
        />
        <BottomNavigationAction
          label="Categories"
          icon={<FormatListBulletedIcon />}
        />
        <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
        <BottomNavigationAction label="Account" icon={<PersonIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
