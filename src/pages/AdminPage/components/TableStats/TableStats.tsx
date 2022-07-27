import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import TableHeader from "./TableHeader/TableHeader";

import classes from "./TableStats.module.scss";

function createData(
  name: string,
  sales: string,
  income: string,
  status: string
) {
  return { name, sales, income, status };
}

enum Status {
  PENDING = "Pending",
  ACTIVE = "Active",
  DELETED = "Deleted",
  BANNED = "Banned",
}
const rows = [
  createData("Ророноа Зороt", "104 продаж", "500k+ доход", Status.ACTIVE),
  createData("Портгас Д. Эйс", "104 продаж", "500k+ доход", Status.PENDING),
  createData("Винсмок Санджи", "104 продаж", "500k+ доход", Status.BANNED),
  createData("Нико Робин", "104 продаж", "500k+ доход", Status.DELETED),
  createData("Тони Чоппер", "104 продаж", "500k+ доход", Status.ACTIVE),
];

const TableStats = () => {
  return (
    <>
      <TableHeader title={"Все пользователи"} />
      <TableContainer component={Paper} className={classes.table}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCellHeader}>
                Пользователь
              </TableCell>
              <TableCell className={classes.tableCellHeader}>Продажи</TableCell>
              <TableCell className={classes.tableCellHeader}>Доход</TableCell>
              <TableCell className={classes.tableCellHeader}>Статус</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  className={`${classes.tableCell} ${classes.tableCellName}`}
                >
                  {row.name}
                </TableCell>
                <TableCell className={classes.tableCell}>{row.sales}</TableCell>
                <TableCell className={classes.tableCell}>
                  {row.income}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <span className={`${classes.status} ${classes[row.status]}`}>
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableStats;
