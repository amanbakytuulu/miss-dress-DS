import React, { FC } from "react";

import { colors } from "../../../types/colorTypes/colorTypes";

import classes from "./InputField.module.scss";

interface InputFieldProps {
  value?: string;
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  type: string;
  alignPlaceholder?: boolean;
  inputConfig?: object;
  color?: colors;
  error?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  autofocus?: boolean;
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
  onKeyDown,
  autofocus,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange && onChange(value);
  };
  return (
    <>
      <div className={classes.formGroup}>
        <input
          style={{ backgroundColor: `${color && color}` }}
          {...inputConfig}
          className={`${alignPlaceholder ? classes.input : ""}`}
          onKeyDown={onKeyDown}
          autoFocus={autofocus}
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
