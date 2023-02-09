import React from "react";
import { ButtonProps } from "../Button.types";
import "./Button.style.scss";

export const Button = ({ title, onClick, type }: ButtonProps) => {
  return (
    <button className={`button button-${type ?? "contained"}`} onClick={onClick}>
      {title}
    </button>
  );
};
