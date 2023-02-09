import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import SearchBox from "../components/SearchBox";
import imgLazNewUser from "../images/lazNewUser.jpg";
import imgLogo from "../images/laz.png";
import imgBanner from "../images/banner.jpg";
import Button from "@mui/material/Button";

export default function Header() {
  const theme = useTheme();
  const isUpSM = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Box
        sx={{
          display: {
            sm: "none",
          },
        }}
      >
        <img alt="Banner" style={{ width: "100%" }} src={imgLazNewUser} />
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          backgroundColor: "#01bfa6",
        }}
      >
        <Container>
          <img alt="Banner" style={{ width: "100%" }} src={imgBanner} />
        </Container>
      </Box>
      <Box textAlign="right" sx={{ display: { xs: "none", sm: "block" } }}>
        <Container>
          {Array(5)
            .fill(0)
            .map((_t, index) => (
              <Button
                key={`menu-top-${index}`}
                size="small"
                sx={{ pb: 0, pt: 0, mr: 2 }}
              >
                Lorem ipsum
              </Button>
            ))}
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "#fff",
        }}
      >
        <Container>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "inline-block",
              },
              verticalAlign: "middle",
              pt: isUpSM ? 1 : null,
              mr: 3,
            }}
          >
            <img alt="logo" src={imgLogo} style={{ width: 130 }} />
          </Box>
          <Box
            sx={{
              display: { sm: "inline-block" },
              pl: isUpSM ? 2 : null,
              pr: isUpSM ? 2 : null,
            }}
          >
            <SearchBox />
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "inline-block",
              },
            }}
          >
            <IconButton aria-label="delete">
              <ShoppingCartIcon
                fontSize="large"
                sx={{ verticalAlign: "middle", color: "#0A1569" }}
              />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </>
  );
}
