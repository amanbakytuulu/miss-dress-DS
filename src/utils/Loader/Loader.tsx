import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import classes from "./Loader.module.scss";

interface LoaderProps {
  center?: string;
  color?: string;
  size?: string;
}

export function Loader({ center, color, size }: LoaderProps) {
  return (
    <Box className={`${classes.loader} ${center ? classes.center : ""}`}>
      <CircularProgress
        size={size ? size : "40px"}
        sx={{
          color: color ? color : "#372e24",
        }}
      />
    </Box>
  );
}
