import React, { FC, useContext, useState } from "react";
import { useForm } from "react-hook-form";
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

type ValidationValues = {
  verificationCode: string;
};

const VerificationForm: FC<VerificationFormProps> = ({
  title,
  setUserEnter,
}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { closeModal } = useContext(ModalContext) as IModal;
  const {
    register,
    formState: { errors, isValid, touchedFields },
    handleSubmit,
  } = useForm<ValidationValues>({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const [{ minutes, seconds }, restart] = useTimer(60);
  const isDisabledButton = Number(seconds) !== 0 || Number(minutes) !== 0;

  const handleRestartTimer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    restart(60);
  };
  const handleAccept = () => {
    setUserEnter(true);
    if (title?.toLowerCase() === "вход") return closeModal();
    setIsSuccess(true);
  };

  // const handleChange = (name: string) => (value: string) => {
  //   setVerificationCode(value);
  // };

  return (
    <>
      {!isSuccess ? (
        <form
          className={classes.modalForm}
          onSubmit={handleSubmit(handleAccept)}
        >
          <h3 className={classes.modalTitle}>{title || "Регистрация"}</h3>
          <div className={classes.modalFields}>
            <div className={classes.inputBlock}>
              <InputField
                inputConfig={{
                  ...register("verificationCode", {
                    required: "Поле обязательно к заполнению",
                  }),
                }}
                placeholder={"Введите код подтверждения"}
                type={"text"}
              />
            </div>
            <div className={classes.modalButton}>
              <Button
                disabled={!isValid}
                onClick={handleAccept}
                type={"submit"}
              >
                Подтвердить
              </Button>
            </div>
            <Link className={classes.modalSupport} to={ERROR_PAGE}>
              Не пришло SMS?
            </Link>
            <div className={classes.modalButtonResend}>
              <Button onClick={handleRestartTimer} disabled={isDisabledButton}>
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
            {errors.verificationCode && (
              <span>{errors.verificationCode.message}</span>
            )}
          </div>
        </form>
      ) : (
        <SuccessModal />
      )}
    </>
  );
};

export default VerificationForm;
