import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function SearchBox() {
  const theme = useTheme();
  const isUpSM = useMediaQuery(theme.breakpoints.up("sm"));
  const isUpMD = useMediaQuery(theme.breakpoints.up("md"));

  const [searchTop, setSearchTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 40) {
        setSearchTop(true);
      } else {
        setSearchTop(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      sx={{
        width: isUpSM ? null : "100%",
        position: isUpSM ? "relative" : searchTop ? "fixed" : "relative",
        zIndex: 10,
        backgroundColor: "#fff",
        top: 0,
        left: 0,
        p: 2,
        borderBottom: searchTop ? "1px solid #666" : null,
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "4px",
          display: "flex",
          alignItems: "center",
          borderRadius: isUpSM ? null : 25,
          border: isUpSM ? null : "1px solid #FE4960",
        }}
      >
        <IconButton sx={{ display: { sm: "none" } }} aria-label="menu">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1, minWidth: isUpMD ? 400 : null }}
          placeholder="ค้นหา"
          fullWidth
          inputProps={{ "aria-label": "ค้นหา" }}
        />
        <Button
          type="button"
          size="small"
          sx={{
            p: "8px 20px",
            background: isUpSM
              ? "#F57224"
              : `linear-gradient(45deg, #FF9140, #F93782)`,
            borderRadius: isUpSM ? null : 25,
            color: "#fff",
          }}
          aria-label="search"
        >
          {isUpSM ? <SearchIcon /> : "ค้นหา"}
        </Button>
      </Paper>
    </Box>
  );
}
