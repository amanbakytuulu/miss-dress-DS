import React, { FC } from "react";

import classes from "../Button/Button.module.scss";
interface ButtonPoros {
  children: React.ReactNode;
}

const ButtonImage: FC<ButtonPoros> = ({ children }) => {
  return (
    <div className={classes.image}>
      <button className={classes.btn}>{children}</button>
    </div>
  );
};
export default ButtonImage;
