import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";

import { Button } from "../../../../../components/common";

import {
  IProduct,
  IProductsStat,
} from "../../../../../types/productsTypes/productsTypes";
import { colors } from "../../../../../types/colorTypes/colorTypes";
import { IAllStatus } from "../../../../../types/adminTypes/tableTypes";
import { Orders } from "../../../../../types/orderTypes/orderTypes";

import classes from "../TableStats.module.scss";

interface OrdersTableBodyProps {
  orders: Orders[];
  allStatus: IAllStatus;
}

const OrdersTableBody: FC<OrdersTableBodyProps> = ({ orders, allStatus }) => {
  const navigate = useNavigate();

  return (
    <>
      {orders.map((row: any) => (
        <TableRow
          key={row.id}
          className={classes.tableRow}
          // onClick={() => navigate(row.productId)}
          // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell
            className={`${classes.tableCell} ${classes.tableCellName}`}
          >
            {row.id}
          </TableCell>
          {/*<TableCell className={classes.tableCell}>{row.amount}</TableCell>*/}
          <TableCell className={classes.tableCell}>
            {row.cart.amount} продаж
          </TableCell>
          <TableCell className={classes.tableCell}>
            {row.cart.price} доход
          </TableCell>
          <TableCell align="center" className={classes.tableCell}>
            <span
              className={`${classes.status} ${
                classes[allStatus[`${row.status}`]]
              }`}
            >
              {allStatus[`${row.status}`]}
            </span>
          </TableCell>
          <TableCell align="center" className={classes.tableCell}>
            <Button
              onClick={(e) => e.stopPropagation()}
              style={{
                padding: "5px",
                backgroundColor: colors.deleteBtn,
                color: colors.blackText,
              }}
            >
              Удалить
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default OrdersTableBody;
