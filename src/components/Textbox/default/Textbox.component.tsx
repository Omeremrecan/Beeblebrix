import React from "react";
import { TextboxProps } from "../Textbox.types";
import "./Textbox.styles.scss";

export const Textbox = ({
  value,
  onChange,
  placeholder,
  type,
}: TextboxProps) => {
  return (
    <input
      className="textbox"
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={(e) => {
        if (onChange) onChange(e.target.value);
      }}
    />
  );
};
