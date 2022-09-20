import React from "react";
import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer";
import { ABOUT_US } from "../constants";

export default function About() {
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
        <Typography variant="h3">About Us</Typography>
        <p style={{ maxWidth: "80%" }}>{ABOUT_US}</p>
      </Box>
      <Footer />
    </Box>
  );
}
