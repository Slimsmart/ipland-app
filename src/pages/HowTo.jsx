import React from "react";
import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer";
import { HOW_TO } from "../constants";

export default function HowTo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Box className="flex-column align-center" sx={{ width: "100%" }}>
        <Typography variant="h3">How To</Typography>
        <p style={{ maxWidth: "80%" }}>{HOW_TO}</p>
      </Box>
      <Footer />
    </Box>
  );
}
