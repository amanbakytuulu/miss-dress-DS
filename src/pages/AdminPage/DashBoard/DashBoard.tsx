import React from "react";

import SideBar from "../components/SideBar/SideBar";

import classes from "./Dashboard.module.scss";

const DashBoard = () => {
  return (
    <div className={classes.dashBoard}>
      <SideBar />
      <div className={classes.dashBoardContainer}>container</div>
    </div>
  );
};

export default DashBoard;
