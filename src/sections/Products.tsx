import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ProductsNavigation from "../components/ProductsNavigation";
import Products from "../components/Products";

export default function ProductsSection() {
  const theme = useTheme();
  const isUpSM = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: 2,
          mb: isUpSM ? 2 : 9,
          overflow: "hidden",
          backgroundColor: "unset",
          position: "relative",
        }}
      >
        <ProductsNavigation />
        <Products />
      </Box>
    </Container>
  );
}
