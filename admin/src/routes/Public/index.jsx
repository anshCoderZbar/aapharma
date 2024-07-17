import React from "react";
import { Navigate } from "react-router";

export const PublicRoute = ({ children, restricted }) => {
  return <>{restricted ? <Navigate to="/" /> : children}</>;
};
