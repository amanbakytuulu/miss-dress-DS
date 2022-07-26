import React, { FC } from "react";

import { ISideBarListTypes } from "../../../../../types/adminTypes/sideBarTypes";

import classes from "./SidebarList.module.scss";

interface SidebarListProps {
  sideBarList: ISideBarListTypes[];
}

const SidebarList: FC<SidebarListProps> = ({ sideBarList }) => {
  return (
    <ul className={classes.sideBarList}>
      <li>
        <span>dashBoard</span>
      </li>
      <li>
        <span>dashBoard</span>
      </li>
      <li>
        <span>dashBoard</span>
      </li>
      <li>
        <span>dashBoard</span>
      </li>
      <li>
        <span>dashBoard</span>
      </li>
      <li>
        <span>dashBoard</span>
      </li>
      <li>
        <span>dashBoard</span>
      </li>
    </ul>
  );
};

export default SidebarList;
