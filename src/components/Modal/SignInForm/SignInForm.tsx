import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";

import { InputField, Button } from "../../common";

import VerificationForm from "../VerificationForm/VerificationForm";

import classes from "./SignInForm.module.scss";

interface SignInFormProps {
  setUserEnter: (value: boolean) => void;
}

type SignInFormType = {
  name: string;
  surName: string;
  phoneNumber: string;
  acceptTerms: boolean | string;
};

const SignInForm: FC<SignInFormProps> = ({ setUserEnter }) => {
  const [isContinue, setContinue] = useState(false);
  const {
    register,
    formState: { errors, isValid, touchedFields },
    handleSubmit,
  } = useForm<SignInFormType>({ mode: "onBlur", reValidateMode: "onChange" });

  const onSubmit = (data: SignInFormType) => {
    setContinue(true);
  };

  console.log(touchedFields);
  // const [signInForm, setSignInForm] = useState({
  //   name: "",
  //   surName: "",
  //   phoneNumber: "",
  // });

  // const handleChange = (name: string) => (value: string) => {
  //   setSignInForm({ ...signInForm, [name]: value });
  // };

  return (
    <>
      {!isContinue ? (
        <form className={classes.modalForm} onSubmit={handleSubmit(onSubmit)}>
          <h3 className={classes.modalTitle}>Регистрация</h3>
          <div className={classes.modalFields}>
            <div className={classes.inputBlock}>
              <InputField
                inputConfig={{
                  ...register("name", {
                    required: "Поле обязательно к заполнению",
                    minLength: {
                      value: 3,
                      message: "Слишком короткое имя",
                    },
                  }),
                }}
                placeholder={"Имя"}
                type={"text"}
              />
              <div className={classes.modalError}>
                {errors.name && <span>{errors.name?.message}</span>}
              </div>
            </div>
            <div className={classes.inputBlock}>
              <InputField
                inputConfig={{
                  ...register("surName", {
                    required: "Поле обязательно к заполнению",
                    minLength: {
                      value: 3,
                      message: "Слишком короткая Фамилия",
                    },
                  }),
                }}
                placeholder={"Фамилия"}
                type={"text"}
              />

              <div className={classes.modalError}>
                {errors.surName && <span>{errors.surName?.message}</span>}
              </div>
            </div>
            <div className={classes.inputBlock}>
              <InputField
                inputConfig={{
                  ...register("phoneNumber", {
                    required: "Поле обязательно к заполнению",
                    minLength: {
                      value: 13,
                      message: "Слишком короткий номер телефона",
                    },
                    pattern: {
                      value: new RegExp("^\\+[0-9]{1}[0-9]{3,14}$"),
                      message: "Некорекктный номер телефона",
                    },
                  }),
                }}
                placeholder={"Номер телефона"}
                type={"phone"}
              />

              <div className={classes.modalError}>
                {errors.phoneNumber && (
                  <span>{errors.phoneNumber?.message}</span>
                )}
              </div>
            </div>
            <div className={classes.modalCheckBox}>
              <input
                type="checkbox"
                id="check"
                {...register("acceptTerms", { required: "Условия не приняты" })}
              />
              <label htmlFor="check">
                <span>Я согласен с условиями публичной оферты</span>
              </label>
            </div>
            <div className={classes.modalButton}>
              <Button disabled={!isValid}>Продолжить</Button>
            </div>
          </div>
          <div className={classes.modalError}>
            {errors.acceptTerms && <span>{errors?.acceptTerms?.message}</span>}
          </div>
        </form>
      ) : (
        <VerificationForm title="Регистрация" setUserEnter={setUserEnter} />
      )}
    </>
  );
};

export default SignInForm;
