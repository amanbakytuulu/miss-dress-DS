import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";

import { InputField } from "../../../components/common";

import { Button } from "../../../components/common/Button/Button";
import { useFetchUserMeQuery } from "../../../store/features/User/userMe/meQuery";

import classes from "./style.module.scss";

interface inputValues {
  name: string;
  surname: string;
  phone: string;
  country: string;
  town: string;
}
interface formPropsType {
  openModal: () => void;
}
interface user {
  createDate: string;
  firstName: string;
  id: number;
  lastName: string;
  phoneNumber: string;
  role: string;
  status: number;
  updateDate: string;
}

const FormComponent: FC<formPropsType> = ({ openModal }) => {
  const [isContinue, setContinue] = useState<boolean>(false);
  const { data = null } = useFetchUserMeQuery("");
  const user: user = data?.result;
  const {
    register,
    formState: { errors, isValid, touchedFields },
    handleSubmit,
  } = useForm<inputValues>({ mode: "onBlur", reValidateMode: "onChange" });

  const onSubmit = (data: any) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setContinue(true);
  };
  return (
    <div className={classes.formDiv}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formBlock}>
        <h4>Профиль</h4>
        <div className={classes.inputStyles}>
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
            value={user?.firstName || ""}
            type="text"
            placeholder="Имя"
            disable={true}
          />
        </div>
        <div className={classes.modalError}>
          {errors.name && <span>{errors.name?.message}</span>}
        </div>
        <div className={classes.inputStyles}>
          <InputField
            inputConfig={{
              ...register("surname", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 3,
                  message: "Слишком короткая фамилия",
                },
              }),
            }}
            value={user?.lastName || ""}
            placeholder="Фамилия"
            type="text"
            disable={true}
          />
        </div>
        <div className={classes.modalError}>
          {errors.surname && <span>{errors.surname?.message}</span>}
        </div>
        <div className={classes.inputStyles}>
          <InputField
            inputConfig={{
              ...register("phone", {
                required: "Поле обязательно к заполнению",
                minLength: {
                  value: 3,
                  message: "Слишком короткий номер телефона",
                },
                pattern: {
                  value: new RegExp("^\\+[0-9]{1}[0-9]{3,14}$"),
                  message: "Некорректный номер телефона",
                },
              }),
            }}
            value={user?.phoneNumber || ""}
            placeholder="Номер телефона"
            type="text"
            disable={true}
          />
        </div>
        <div className={classes.modalError}>
          {errors.phone && <span>{errors.phone?.message}</span>}
        </div>
        <div>
          <Button type="button" onClick={openModal}>
            Изменить номер
          </Button>
        </div>
        <h4>Адрес доставки</h4>
        <div className={classes.inputStyles}>
          <InputField
            inputConfig={{
              ...register("country", {
                required: "Поле обязательно к заполнению",
                maxLength: {
                  value: 13,
                  message: "Слишком длинное  название",
                },
              }),
            }}
            placeholder="Страна"
            type="text"
          />
        </div>
        <div className={classes.modalError}>
          {errors.country && <span>{errors.country?.message}</span>}
        </div>
        <div className={classes.inputStyles}>
          <InputField
            inputConfig={{
              ...register("town", {
                required: "Поле обязательно к заполнению",
                maxLength: {
                  value: 13,
                  message: "Слишком длинное  название",
                },
              }),
            }}
            placeholder="Город"
            type="text"
          />
        </div>
        <div className={classes.modalError}>
          {errors.town && <span>{errors.town?.message}</span>}
        </div>
        <div>
          <Button type="submit">Сохранить</Button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
