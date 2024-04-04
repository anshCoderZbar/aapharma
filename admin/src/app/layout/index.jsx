import React from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import "styles/Layout.css";

export const Layout = ({ children }) => {
  return (
    <div className="web_layout">
      <Header />
      <div className="childrens">{children}</div>
      <Sidebar />
    </div>
  );
};
