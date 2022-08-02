import React, { FC } from "react";

import classes from "../Button/Button.module.scss";
interface ButtonPoros {
  onCLicks?: () => void;
  children: React.ReactNode;
}

const ButtonImage: FC<ButtonPoros> = ({ children, onCLicks }) => {
  return (
    <div className={classes.image}>
      <button onClick={onCLicks} className={classes.btn}>
        {children}
      </button>
    </div>
  );
};
export default ButtonImage;
