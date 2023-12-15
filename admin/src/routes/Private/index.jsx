import { Layout } from "app/layout";
import { useToken } from "lib/utils/useToken";
import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const { getToken } = useToken();
  const auth = getToken();

  return auth ? <Layout>{children}</Layout> : <Navigate to={"/login"} />;
};
