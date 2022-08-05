import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";

import { changePhoneSuccess } from "../../../utils/helpers/modalSuccessConsructor";

import { Button, InputField } from "../../common";
import VerificationForm from "../VerificationForm/VerificationForm";

import classes from "./NewNumberForm.module.scss";

type getMessageTypeR = {
  phoneNumber: string;
  code: string;
};

const NewNumberForm: FC = () => {
  const [isContinue, setContinue] = useState<boolean>(false);
  const [isetUser, setUserEnter] = useState<boolean>(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<getMessageTypeR>({ mode: "onBlur", reValidateMode: "onChange" });

  function enter(data: getMessageTypeR) {
    setContinue(true);
    reset();
  }
  return (
    <>
      {!isContinue ? (
        <div>
          <h4 className={classes.titleText}>Изменить номер телефона</h4>
          <form onSubmit={handleSubmit(enter)} className={classes.phoneForm}>
            <div style={{ marginBottom: "30px" }}>
              <InputField
                inputConfig={{
                  ...register("phoneNumber", {
                    required: "Поле обязательно к заполнению",
                    pattern: {
                      value: new RegExp("^\\+[0-9]{1}[0-9]{3,14}$"),
                      message: "Некорректный номер телефона",
                    },
                  }),
                }}
                placeholder="Указать новый номер"
                type="text"
              />
            </div>
            <Button type="submit">Подтвердить</Button>
            <div className={classes.modalError}>
              {errors.phoneNumber && <span>{errors.phoneNumber?.message}</span>}
            </div>
          </form>
        </div>
      ) : (
        <VerificationForm
          title="Смена номера"
          modalSuccessBody={changePhoneSuccess}
          setContinue={setContinue}
          setUserEnter={setUserEnter}
        />
      )}
    </>
  );
};

export default NewNumberForm;
