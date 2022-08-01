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
  );
};

export default StarsComponent;
