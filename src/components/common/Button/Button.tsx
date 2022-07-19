import React, { FC } from "react";

import classes from "./Button.module.scss";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: any;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  type,
  disabled,
  children,
}) => {
  const isDisabled = disabled ? classes.btnDisable : classes.btnEnable;
  return (
    <button
      className={`${classes.formButton} ${isDisabled}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
