import React from "react";

import SideBar from "../components/SideBar/SideBar";
import Widget from "../components/Widget/Widget";
import List from "../components/List/List";
import Profile from "../components/Profile/Profile";
import TableStats from "../components/TableStats/TableStats";

import { ADMIN_PAGE_USERS } from "../../../utils/path";

import { Status, TableTypes } from "../../../types/adminTypes/tableTypes";

import classes from "../Users/Users.module.scss";

function createData(
  id: number,
  name: string,
  sales: string,
  income: string,
  status: number
) {
  return { id, name, sales, income, status };
}

const rows = [
  createData(1, "Ророноа Зороt", "104 продаж", "500k+ доход", Status.ACTIVE),
  createData(2, "Портгас Д. Эйс", "104 продаж", "500k+ доход", Status.PENDING),
  createData(3, "Винсмок Санджи", "104 продаж", "500k+ доход", Status.BANNED),
  createData(4, "Нико Робин", "104 продаж", "500k+ доход", Status.DELETED),
  createData(5, "Тони Чоппер", "104 продаж", "500k+ доход", Status.ACTIVE),
];

const Cart = () => {
  return (
    <div className={classes.users}>
      <SideBar />
      <div className={classes.usersContainer}>
        <div className={classes.header}>
          <div className={classes.headerProfile}>
            <Profile />
          </div>
        </div>
        <div className={classes.usersContent}>
          <div className={classes.left}>
            <div className={classes.tableContainer}>
              <TableStats
                navigateToPage={ADMIN_PAGE_USERS}
                type={TableTypes.USERS}
                rows={rows || []}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
