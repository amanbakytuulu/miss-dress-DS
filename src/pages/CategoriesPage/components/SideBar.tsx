import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "../CategoryPage.module.scss";

import vector from "../../../assets/categoriesPage/Vector.svg";
import vectorfull from "../../../assets/categoriesPage/Vectorfull.svg";

interface IObjectItems {
  title: string;
  sub: {
    first: string;
    second: string;
    trench: string;
    trenchVar: {
      autumn: string;
      spring: string;
    };
  };
}
interface IBarItems {
  title: string;
  path: string;
}
const SideBar = () => {
  const [verh, setVerh] = useState<boolean>(false);
  const [verh2, setVerh2] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const sideBarObj: IObjectItems = {
    title: "Верхняя одежда",
    sub: {
      first: "Пальто",
      second: "Пуховик",
      trench: "Тренч",
      trenchVar: {
        autumn: "Осенний",
        spring: "Весенний",
      },
    },
  };

  const barItems: IBarItems[] = [
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
    <div onClick={() => setShow(!show)} className={classes.sideBarDiv}>
      <div className={classes.vectorSortCategory}>
        <h1>Категория</h1>
        <img className={classes.miniVec} src={vector} alt="" />
      </div>
      <ul
        style={{ display: show ? "block" : "none" }}
        className={classes.ulItems}
      >
        <li>
          <div
            onClick={() => {
              true ? setVerh(!verh) : setVerh(false);
              setVerh2(false);
            }}
            className={classes.vectorDiv}
          >
            <span style={{ color: verh ? "#E5A66E" : "#372e24" }}>
              {sideBarObj.title}
            </span>
            <img src={verh ? vectorfull : vector} alt="" />
          </div>
        </li>
        <div className={verh ? classes.showFirst : classes.hideFirst}>
          <li>{sideBarObj.sub.first}</li>
          <li>{sideBarObj.sub.second}</li>
          <li onClick={() => (true ? setVerh2(!verh2) : setVerh2(false))}>
            <div className={classes.vectorDivSecond}>
              <span style={{ color: verh2 ? "#E5A66E" : "#372e24" }}>
                {sideBarObj.sub.trench}
              </span>
              <img src={verh2 ? vectorfull : vector} alt="" />
            </div>
          </li>
        </div>
        <div className={verh2 ? classes.showSecond : classes.hideSecond}>
          <li>{sideBarObj.sub.trenchVar.autumn}</li>
          <li>{sideBarObj.sub.trenchVar.spring}</li>
        </div>
      </ul>
      {barItems.map((item) => (
        <ul
          style={{ display: show ? "block" : "none" }}
          className={classes.ulItems}
        >
          <Link to={item.path}>{item.title}</Link>
        </ul>
      ))}
    </div>
  );
};

export default SideBar;
