import React, { useContext } from "react";

import { Button } from "../../common";
import { ModalContext } from "../Modal";
import { IModal } from "../../../types/modalTypes/modalType";

import classes from "./SuccessModal.module.scss";

const SuccessModal = () => {
  const { closeModal } = useContext(ModalContext) as IModal;

  return (
    <div className={classes.successModal}>
      <h5 className={classes.successModalTitle}>Поздравляем!</h5>
      <p className={classes.successModalText}>Регистрация прошла успешно!</p>
      <div className={classes.buttonBlock}>
        <Button onClick={closeModal}>Продолжить покупки</Button>
      </div>
    </div>
  );
};

export default SuccessModal;
