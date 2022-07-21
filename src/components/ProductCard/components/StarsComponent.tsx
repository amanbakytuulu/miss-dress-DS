import { Box, Rating } from "@mui/material";
import React, { useState } from "react";

import starFull from "../../../assets/mainPage/icons/starfull.svg";

const StarsComponent = ({ star, index }: any) => {
  const [starChange, setStarChange] = useState(false);
  const [value, setValue] = React.useState(0);
  return (
    <img
      onClick={() => setStarChange(!starChange)}
      src={starChange ? starFull : star}
      alt=""
    />
    // <Box
    //   sx={{
    //     "& > legend": { mt: 4 },
    //   }}
    // >
    // <Rating
    //   name="simple-controlled"
    //   value={value}
    //   onChange={(event, newValue: any) => {
    //     setValue(newValue);
    //     console.log(event);
    //   }}
    // />
    // </Box>
  );
};

export default StarsComponent;
