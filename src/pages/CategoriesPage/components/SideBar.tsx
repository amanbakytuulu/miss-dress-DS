import React from "react";
import { Link } from "react-router-dom";

import classes from "../CategoryPage.module.scss";

const SideBar = () => {
  const barItems = [
    {
      title: "Верхняя одежда",
      path: "#",
    },
    {
      title: "Платья",
      path: "#",
    },
    {
      title: "Юбки",
      path: "#",
    },
    {
      title: "Джинсы",
      path: "#",
    },
    {
      title: "Брюки",
      path: "#",
    },
    {
      title: "Футболки",
      path: "#",
    },
    {
      title: "Шорты",
      path: "#",
    },
    {
      title: "Топы",
      path: "#",
    },
    {
      title: "Пижамы",
      path: "#",
    },
  ];
  return (
    <div className={classes.sideBarDiv}>
      <h1>Категория</h1>
      {barItems.map((item) => (
        <ul className={classes.ulItems}>
          <Link to={item.path}>{item.title}</Link>
        </ul>
      ))}
    </div>
  );
};

export default SideBar;
