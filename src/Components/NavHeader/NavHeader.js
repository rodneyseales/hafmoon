import React from "react";
import NavLink from "../NavLink/NavLink";
import style from "./NavHeader.module.scss";

import link1 from "../../Assets/Images/linkimages/city.jpg";
import link2 from "../../Assets/Images/linkimages/ocean.jpg";
import link3 from "../../Assets/Images/linkimages/bostonhill.jpg";
import link4 from "../../Assets/Images/linkimages/whitesands.jpg";
import link5 from "../../Assets/Images/linkimages/paintedsky.jpg";
import link6 from "../../Assets/Images/linkimages/trainstation.jpg";
import link7 from "../../Assets/Images/linkimages/landscape.jpg";

const NavHeader = (props) => {
  return (
    <div className={style.NavHeader}>
      <NavLink link={link1} alt="City" />
      <NavLink link={link2} alt="Ocean" />
      <NavLink link={link3} alt="Boston Hill" />
      <NavLink link={link4} alt="White Sands, New Mexico" />
      <NavLink link={link5} alt="Painted Sky" />
      <NavLink link={link6} alt="Train Station" />
      <NavLink link={link7} alt="SouthWest Landscape" />

    </div>
  );
};

export default NavHeader;
