import React from "react";
import { Link } from "react-router-dom";

import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.header}>
      <Link className={css.link} to="/">
        Home
      </Link>
      <Link className={css.link} to="/users">
        Users
      </Link>
      <Link className={css.link} to="/about">
        About
      </Link>
      <Link className={css.link} to="/redux">
        Redux
      </Link>
    </div>
  );
};

export default Header;
