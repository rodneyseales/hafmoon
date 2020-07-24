import React from "react";

import style from "./NavLink.module.scss";

const NavLink = (props) => {
  return (
    <span className={style.NavLink}>
      <img src={props.link} alt={props.alt} />
    </span>
  );
}

export default NavLink;
