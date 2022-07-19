import React, { FC } from "react";

import classes from "./InputField.module.scss";

interface InputFieldProps {
  value: string;
  label?: string;
  placeholder: string;
  onChange: (value: string) => void;
  type: string;
  alignPlaceholder?: boolean;
}

export const InputField: FC<InputFieldProps> = ({
  type,
  value,
  placeholder,
  onChange,
  alignPlaceholder,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value);
  };
  return (
    <div className={classes.formGroup}>
      <input
        className={`${alignPlaceholder ? classes.input : ""}`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
