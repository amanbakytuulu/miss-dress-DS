import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export function Error() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "10px 0px" }}>
      <Typography sx={{ color: "#372e24", fontSize: "1.7rem" }}>
        Проблема со сервером!
      </Typography>
    </Box>
  );
}
