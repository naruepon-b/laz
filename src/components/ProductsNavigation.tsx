import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Avatar from "@mui/material/Avatar";

import imgAll from "../images/productsNav/all.avif";
import imgFree from "../images/productsNav/free.avif";
import img9Thb from "../images/productsNav/9thb.avif";
import imgBath from "../images/productsNav/bath.avif";
import imgFashion from "../images/productsNav/fashion.avif";
import imgLazMall from "../images/productsNav/lazMall.avif";
import imgLazGlobal from "../images/productsNav/lazGlobal.avif";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface IMenu {
  label: string;
  icon: string;
}

const menu: IMenu[] = [
  {
    label: "ทั้งหมด",
    icon: imgAll,
  },
  {
    label: "ส่งฟรี",
    icon: imgFree,
  },
  {
    label: "เริ่มต้น 9.-",
    icon: img9Thb,
  },
  {
    label: "เงินคืนทุกวัน",
    icon: imgBath,
  },
  {
    label: "แฟชั่นผู้หญิง",
    icon: imgFashion,
  },
  {
    label: "LazMall",
    icon: imgLazMall,
  },
  {
    label: "LazGlobal",
    icon: imgLazGlobal,
  },
];

export default function ProductsNavigation() {
  const theme = useTheme();
  const isUpSM = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box sx={{ overflowX: "auto", scrollbarWidth: "none", mb: 1 }}>
      <BottomNavigation
        showLabels
        value={0}
        sx={{
          width: isUpSM ? "100%" : "max-content",
          height: "auto",
          p: 1,
          backgroundColor: "unset",
          alignItems: "flex-start",
        }}
      >
        {menu.map((elem, index) => (
          <BottomNavigationAction
            key={`bottom-nav-${index}`}
            label={elem.label}
            icon={<Avatar src={elem.icon} />}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
