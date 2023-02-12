import React from "react";
import { TextboxProps } from "../Textbox.types";
import "./Textbox.styles.scss";

export const Textbox = ({ value, onChange, placeholder }: TextboxProps) => {
  return (
    <input
      className="textbox"
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        if (onChange) onChange(e.target.value);
      }}
    />
  );
};
