import React, { FC, useContext, useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import classes from "../LoginInForm/LoginInForm.module.scss";
import { ERROR_PAGE } from "../../../utils/path";
import { useTimer } from "../../../hooks/useTimer";
import SuccessModal from "../SuccessModal/SuccessModal";
import { ModalContext } from "../Modal";
import { IModal } from "../../../types/modalTypes/modalType";

interface VerificationFormProps {
  title?: string;
  setUserEnter: (value: boolean) => void;
}

const VerificationForm: FC<VerificationFormProps> = ({
  title,
  setUserEnter,
}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { closeModal } = useContext(ModalContext) as IModal;

  const [{ minutes, seconds }, restart] = useTimer(60);
  const isDisabledButton = Number(seconds) !== 0 || Number(minutes) !== 0;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    restart(60);
  };
  const handleAccept = () => {
    setUserEnter(true);
    if (title?.toLowerCase() == "вход") return closeModal();
    setIsSuccess(true);
  };

  return (
    <>
      {!isSuccess ? (
        <form className={classes.modalForm} action="">
          <h3 className={classes.modalTitle}>{title || "Регистрация"}</h3>
          <div className={classes.modalFields}>
            <div className={classes.inputBlock}>
              <input type="text" />
            </div>
            <div className={classes.modalButton}>
              <Button onClick={handleAccept}>Подтвердить</Button>
            </div>
            <Link className={classes.modalSupport} to={ERROR_PAGE}>
              Не пришло SMS?
            </Link>
            <button onClick={handleClick} disabled={isDisabledButton}>
              Отправить снова
              {isDisabledButton && (
                <>
                  &nbsp;
                  <span>{minutes}</span>:<span>{seconds}</span>
                </>
              )}
            </button>
          </div>
          <div className={classes.modalError}>
            <span>error</span>
          </div>
        </form>
      ) : (
        <SuccessModal />
      )}
    </>
  );
};

export default VerificationForm;
