import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import imgFree from "../images/productsNav/free.avif";
import img9Thb from "../images/productsNav/9thb.avif";
import imgBath from "../images/productsNav/bath.avif";
import imgFashion from "../images/productsNav/fashion.avif";
import imgLazMall from "../images/productsNav/lazMall.avif";
import imgLazGlobal from "../images/productsNav/lazGlobal.avif";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";

interface IMenu {
  label: string;
  icon: string;
}

const menu: IMenu[] = [
  {
    label: "LazMall",
    icon: imgLazMall,
  },
  {
    label: "คูปองลดหลายต่อ",
    icon: imgLazMall,
  },

  {
    label: "คูปองส่งฟรี",
    icon: imgFree,
  },
  {
    label: "9 บาทส่งฟรี",
    icon: img9Thb,
  },
  {
    label: "อัพเดทโปรโมชั่น",
    icon: img9Thb,
  },
  {
    label: "อิเล็กทรอนิกส์",
    icon: img9Thb,
  },
  {
    label: "LazAroi อร่อยฟิน",
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
    label: "LazGlobal",
    icon: imgLazGlobal,
  },
];

const mdMenu: IMenu[] = [
  {
    label: "LazMall",
    icon: imgLazMall,
  },
  {
    label: "คูปองลดเพิ่ม",
    icon: imgLazMall,
  },
  {
    label: "เติมเงิน&ดีลอาหาร",
    icon: imgLazMall,
  },
  {
    label: "LazBlog",
    icon: imgLazMall,
  },
  {
    label: "ร้านค้าแนะนำ",
    icon: imgLazMall,
  },
  {
    label: "9 บาทส่งฟรี",
    icon: imgLazGlobal,
  },
];

export default function Menu() {
  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Box
        sx={{
          overflowX: "auto",
          scrollbarWidth: "none",
          mb: 1,
          display: {
            xs: "block",
            md: "none",
          },
        }}
      >
        {Array(2)
          .fill(0)
          .map((_t, index) => (
            <BottomNavigation
              key={`nav-menu-${index}`}
              showLabels
              value={0}
              sx={{
                width: "max-content",
                height: "auto",
                p: 1,
                backgroundColor: "unset",
                alignItems: "flex-start",
              }}
            >
              {menu.map((elem, index) => (
                <BottomNavigationAction
                  key={`menu1-${index}`}
                  label={elem.label}
                  icon={<Avatar src={elem.icon} />}
                />
              ))}
            </BottomNavigation>
          ))}
      </Box>

      <Grid
        container
        spacing={1}
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
        }}
        justifyContent="space-between"
      >
        {mdMenu.map((elem, index) => (
          <Grid key={`md-menu-${index}`} item xs={2}>
            <Chip
              avatar={<Avatar alt="Natacha" src={imgLazMall} />}
              label={elem.label}
              variant="filled"
              sx={{ width: "100%", justifyContent: "left" }}
              onClick={() => {}}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
