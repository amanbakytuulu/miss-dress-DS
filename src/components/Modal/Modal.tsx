import React, { FC } from "react";
import { Button } from "@mui/material";

import { ReactComponent as LogoIcon } from "../../assets/icons/logoIcon.svg";

import classes from "./Modal.module.scss";

interface IModalProps {
  children: React.ReactNode;
  isModalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

const Modal: FC<IModalProps> = ({ children, isModalOpen, setModalOpen }) => {
  return (
    <div
      className={`${classes.modalOverlay} ${isModalOpen && classes.active}`}
      onClick={() => setModalOpen(false)}
    >
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
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
