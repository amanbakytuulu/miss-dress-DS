import React from "react";

import { ReactComponent as LogoIcon } from "../../../../assets/icons/logoIcon.svg";
import { ReactComponent as DashBoardIcon } from "../../../../assets/icons/sideBarIcons/dashboardIcon.svg";
import { ReactComponent as UserIcon } from "../../../../assets/icons/sideBarIcons/userIcon.svg";
import { ReactComponent as ProductsIcon } from "../../../../assets/icons/sideBarIcons/productsIcon.svg";
import { ReactComponent as SalesIcon } from "../../../../assets/icons/sideBarIcons/salesIcon.svg";
import { ReactComponent as CartIcon } from "../../../../assets/icons/sideBarIcons/cartIcon.svg";
import { ReactComponent as AdIcon } from "../../../../assets/icons/sideBarIcons/adIcon.svg";
import { ReactComponent as ChatIcon } from "../../../../assets/icons/sideBarIcons/chatIcon.svg";

import { ISideBarListTypes } from "../../../../types/adminTypes/sideBarTypes";

import SidebarList from "./SideBarList/SidebarList";

import classes from "./SideBar.module.scss";

const sidebarList: ISideBarListTypes[] = [
  {
    icon: <DashBoardIcon />,
    title: "Dashboard",
  },
  {
    icon: <DashBoardIcon />,
    title: "Dashboard",
  },
  {
    icon: <DashBoardIcon />,
    title: "Dashboard",
  },
  {
    icon: <DashBoardIcon />,
    title: "Dashboard",
  },
  {
    icon: <DashBoardIcon />,
    title: "Dashboard",
  },
  {
    icon: <DashBoardIcon />,
    title: "Dashboard",
  },
];

const SideBar = () => {
  return (
    <div className={classes.sideBar}>
      <div className={classes.top}>
        <i>
          <LogoIcon />
        </i>
      </div>
      <div className={classes.center}>
        <SidebarList sideBarList={sidebarList} />
      </div>
      <div className={classes.bottom}>exit btn</div>
    </div>
  );
};

export default SideBar;
