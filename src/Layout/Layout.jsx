import React from "react";
import Header from "../components/Header/Header";
import css from "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={css.content}>{children}</div>
    </>
  );
};

export default Layout;
