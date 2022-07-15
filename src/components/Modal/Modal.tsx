import React, { FC } from "react";
import { Button } from "@mui/material";

import { ReactComponent as LogoIcon } from "../../assets/icons/logoIcon.svg";

import classes from "./Modal.module.scss";

interface IModalProps {
  children: React.ReactNode;
}

const Modal: FC<IModalProps> = ({ children }) => {
  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modal}>
        <div className={classes.modalLogo}>
          <i>
            <LogoIcon />
          </i>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
