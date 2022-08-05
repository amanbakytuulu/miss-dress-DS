import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useEditPhoneMutation, useUpdatePhoneMutation } from "../../../store/features/User/userMe/meQuery";

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
  const [editPhone, { data: phoneData = [], isSuccess }] = useEditPhoneMutation();
  const [updatePhone, { data: updatePhoneData = [] }] = useUpdatePhoneMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<getMessageTypeR>({ mode: "onBlur", reValidateMode: "onChange" });

  const enter = async (data: getMessageTypeR) => {
    await editPhone(data.phoneNumber);
    // updatePhone(data.phoneNumber);
    // setContinue(true);
    reset();
  }
  // useEffect(() => {
  //   if (isSuccess) {
  //     updatePhone()
  //   }
  // }, [isSuccess])

  console.log(phoneData);
  console.log(updatePhoneData);

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
