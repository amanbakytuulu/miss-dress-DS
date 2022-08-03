import React, { useState } from "react";
import { Link } from "react-router-dom";

import vector from "../../../assets/categoriesPage/Vector.svg";

import classes from "../CategoryPage.module.scss";

const Select = (props: any) => {
  const [show, setShow] = useState(false);

  const sort = [
    {
      title: "По обновлению",
      path: "/#",
    },
    {
      title: "По цене",
      path: "/#",
    },
    {
      title: "По алфавиту",
      path: "/#",
    },
    {
      title: "По умолчанию",
      path: "/#",
    },
  ];

  return (
    <div className={classes.sideBarSortDiv}>
      <div onClick={() => setShow(!show)} className={classes.vectorSort}>
        <h4>Сортировать по</h4>
        <img src={vector} alt="" />
      </div>
      <div className={show ? classes.showDiv : classes.mdDiv}>
        {sort.map((item) => (
          <ul>
            <Link to={item.path}>{item.title}</Link>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Select;
