import React from "react";
import { CollectionProps } from "../Collection.types";
import "./Collection.style.scss";

export const Collection = ({ children, title }: CollectionProps) => {
  if (children.length > 0)
    return (
      <div className="collection">
        <div className="collection--title">{title}</div>
        <div className="collection--list">{children}</div>
      </div>
    );
  else return null;
};
