import React, { FC } from "react";

import { colors } from "../../../types/modalTypes/inputTypes";

import classes from "./InputField.module.scss";

interface InputFieldProps {
  ref?: null;
  value?: string;
  label?: string;
  placeholder: string;
  onChange?: (value: string) => void;
  type: string;
  alignPlaceholder?: boolean;
  inputConfig?: object;
  color?: colors;
  error?: string;
}

export const InputField: FC<InputFieldProps> = ({
  type,
  value,
  placeholder,
  onChange,
  alignPlaceholder,
  inputConfig,
  color,
  error,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange && onChange(value);
  };
  return (
    <>
      <div className={classes.formGroup}>
        <input
          autoComplete="off"
          style={{ backgroundColor: `${color && color}` }}
          {...inputConfig}
          className={`${alignPlaceholder ? classes.input : ""}`}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
      {error && <span className={classes.error}>{error}</span>}
    </>
  );
};
