import React from "react";

import classes from "../SubscrubeContainer/SubscrubeContainer.module.scss";
import Fonsub from "../../../../assets/Main/Subscrube/fonsub.png";
import ButtonImage from "../Button/Button";

import SubscrubeComponents from "./SubscrubeComponents/SubscrubeComponents";

const SubscrubeContainer = () => {
  return (
    <>
      <div className={classes.image__flex}>
        <div className={classes.image__item}>
          <img className={classes.image} src={Fonsub} alt="" />
          <h3 className={classes.image__h3}>
            Оформить подписку
            <SubscrubeComponents placeholder="Ваше Ф.И.О." />
            <SubscrubeComponents placeholder="Номер телефона" />
            <SubscrubeComponents placeholder="Выбрать категорию" />
            <ButtonImage>Продолжить</ButtonImage>
          </h3>
        </div>
      </div>
    </>
  );
};

export default SubscrubeContainer;
