import React, { FC, useContext, useState } from "react";
import { Link } from "react-router-dom";

import { ModalContext } from "../Modal";

import SuccessModal from "../SuccessModal/SuccessModal";
import { useTimer } from "../../../hooks/useTimer";
import { ERROR_PAGE } from "../../../utils/path";
import { IModal } from "../../../types/modalTypes/modalType";
import { InputField, Button } from "../../common";

import classes from "./VerificationForm.module.scss";

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
  const [verificationCode, setVerificationCode] = useState("");

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

  const handleChange = (name: string) => (value: string) => {
    setVerificationCode(value);
  };

  return (
    <>
      {!isSuccess ? (
        <form className={classes.modalForm} action="">
          <h3 className={classes.modalTitle}>{title || "Регистрация"}</h3>
          <div className={classes.modalFields}>
            <div className={classes.inputBlock}>
              <InputField
                value={verificationCode}
                placeholder={"Введите код подтверждения"}
                type={"phone"}
                onChange={handleChange("phoneNumber")}
              />
            </div>
            <div className={classes.modalButton}>
              <Button onClick={handleAccept}>Подтвердить</Button>
            </div>
            <Link className={classes.modalSupport} to={ERROR_PAGE}>
              Не пришло SMS?
            </Link>
            <div className={classes.modalButtonResend}>
              <Button onClick={handleClick} disabled={isDisabledButton}>
                Отправить снова
                {isDisabledButton && (
                  <>
                    &nbsp;
                    <span>{minutes}</span>:<span>{seconds}</span>
                  </>
                )}
              </Button>
            </div>
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
