import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export function Loader() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "10px 0px" }}>
      <CircularProgress sx={{ color: "#372e24" }} />
    </Box>
  );
}
