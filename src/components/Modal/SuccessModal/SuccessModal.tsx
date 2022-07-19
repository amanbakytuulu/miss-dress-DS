import React, { useContext } from "react";

import { ModalContext } from "../Modal";
import { IModal } from "../../../types/modalTypes/modalType";

import classes from "./SuccessModal.module.scss";

const SuccessModal = () => {
  const { closeModal } = useContext(ModalContext) as IModal;

  return (
    <div className={classes.successModal}>
      <h5>Поздравляем!</h5>
      <p>Регистрация прошла успешно!</p>
      <button onClick={closeModal}>Продолжить покупки</button>
    </div>
  );
};

export default SuccessModal;
