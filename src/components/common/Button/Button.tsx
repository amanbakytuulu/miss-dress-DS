import React, { FC } from "react";

import classes from "./Button.module.scss";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: any;
  disabled?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  type,
  disabled,
  children,
  style,
}) => {
  const isDisabled = disabled ? classes.btnDisable : classes.btnEnable;
  return (
    <button
      style={style}
      className={`${classes.formButton} ${isDisabled}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
