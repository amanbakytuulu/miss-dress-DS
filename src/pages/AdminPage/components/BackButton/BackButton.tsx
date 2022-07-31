import React, { FC } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowIcon } from "../../../../assets/adminPage/adminIcons/arrowIcon.svg";

import classes from "./BackButton.module.scss";

interface BackButtonProps {
  path: string;
  children: React.ReactNode;
}

const BackButton: FC<BackButtonProps> = ({ path, children }) => {
  return (
    <Link to={path} className={classes.backButton}>
      <i>
        <ArrowIcon />
      </i>
      <span>{children}</span>
    </Link>
  );
};

export default BackButton;
