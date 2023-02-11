import React from "react";
import "./PageContainer.style.scss"
import { PageContainerProps } from "../PageContainer.types";

export const PageContainer = ({children}:PageContainerProps) => {
  return <div className="page-container">{children}</div>
} 