import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Carousel() {
  const theme = useTheme();
  const isUpSM = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Skeleton
        animation="wave"
        variant="rounded"
        width="100%"
        height={isUpSM ? 300 : 150}
        sx={{ bgcolor: "#01bfa6" }}
      />
    </Container>
  );
}
