import React, { FC } from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

import { colors } from "../../../../../types/modalTypes/inputTypes";

import { InputField } from "../../../../../components/common";

import classes from "./TableHeader.module.scss";

interface TableHeaderProps {
  title: string;
}

const TableHeader: FC<TableHeaderProps> = ({ title }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <div className={classes.tableHeader}>
      <h3>{title}</h3>

      <div className={classes.navs}>
        <div className={classes.inputBlock}>
          <InputField
            color={colors.secondary}
            placeholder={"Поиск пользователей"}
            type={"text"}
          />
        </div>

        <div className={classes.sort}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
