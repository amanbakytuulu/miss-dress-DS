import React from "react";
import { Link } from "react-router-dom";

import { minHeight } from "@mui/system";

import { INewsItems } from "../../../../types/NewsTypes/NewsTypes";
import firstImage from "../../../../assets/News/firstImage.png";
import secondImage from "../../../../assets/News/secondImage.png";
import thirdImage from "../../../../assets/News/thirdImage.png";

import styles from "./News.module.scss";

const NewsList = () => {
  const liElements: INewsItems[] = [
    {
      title: "Более 20 новых коллекций",
      date: "05.05.2022",
      image: firstImage,
      path: "#",
    },
    {
      title: "Самые удачные покупки за Зиму",
      date: "02.03.2022",
      image: secondImage,
      path: "#",
    },
    {
      title: "Она создала свой бренд в 20",
      date: "20.01.2022",
      image: thirdImage,
      path: "#",
    },
  ];

  return (
    <div className={styles.wrapper__news}>
      <h1>Новости</h1>
      {liElements.map((item) => (
        <div
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
          }}
          className={styles.main}
        >
          <h5 className={styles.header__news}>{item.title}</h5>
          <div className={styles.desc__news}>
            <Link className={styles.link} to={item.path}>
              Читать
            </Link>
            <p className={styles.date__news}>{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
