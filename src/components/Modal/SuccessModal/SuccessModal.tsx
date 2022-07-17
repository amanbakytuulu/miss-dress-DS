import React from "react";

import classes from "./SuccessModal.module.scss";

const SuccessModal = () => {
  return (
    <div className={classes.successModal}>
      <h5>Поздравляем!</h5>
      <p>Регистрация прошла успешно!</p>
      <button>Продолжить покупки</button>
    </div>
  );
};

export default SuccessModal;
