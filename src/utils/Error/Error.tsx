import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import classes from "./Error.module.scss";

export function Error({ center }: { center?: string }) {
  return (
    <Box className={`${classes.error} ${center ? classes.center : ""}`}>
      <Typography className={classes.text}>Проблема со сервером!</Typography>
    </Box>
  );
}
