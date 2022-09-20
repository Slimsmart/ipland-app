import * as React from "react";
import Box from "@mui/material/Box";
import Skeltn from "@mui/material/Skeleton";

export default function Skeleton() {
  return (
    <Box sx={{ width: "100%" }}>
      <Skeltn />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}
