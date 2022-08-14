import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import classes from "./Loader.module.scss";

export function Loader({ center }: { center?: string }) {
  return (
    <Box className={`${classes.loader} ${center ? classes.center : ""}`}>
      <CircularProgress sx={{ color: "#372e24" }} />
    </Box>
  );
}
