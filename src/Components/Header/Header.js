import React from "react";

import style from "./Header.module.scss";

const Header = (props) => {
  return (
    <header>
      <h1>
        <div className={style.headingPrimary}>
          Just Imagine
        </div>
        <div className={style.headingSecondary}>
          What we can create together
        </div>
      </h1>
    </header>
  );
};

export default Header;
