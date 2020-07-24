import React from "react";

import style from "./AuthorSection.module.scss";

import map from "../../Assets/Images/landingimages/posterboard.jpg";
import bridge from "../../Assets/Images/landingimages/bridge.jpg";
import spiral from "../../Assets/Images/landingimages/spiral.jpg";

import author1 from "../../Assets/Images/landingimages/jesse.jpg";
import author2 from "../../Assets/Images/landingimages/jeramiah.jpg";
import author3 from "../../Assets/Images/landingimages/kelsey.jpg";

import AuthorDetail from "../AuthorDetail/AuthorDetail";
import AuthorPhoto from "../AuthorPhoto/AuthorPhoto";

const AuthorSection = (props) => {
  return (
    <section className={style.AuthorSection}>
      <AuthorDetail heading="Photographs from New Mexico">
        See the gallery of beautiful photos shot by our photographer Jesse
        Robinson in the Plains of Eastern New Mexico and West Texas.
      </AuthorDetail>

      <AuthorPhoto
        tilt="left"
        name="Jesse Robinson"
        desc="Photographer"
        face={author1}
        facealt="Jesse"
        title="Map"
        image={map}
        alt="Posterboard"
      />

      <AuthorPhoto
        tilt="right"
        name="Jeramiah Johnson"
        desc="Designer, Photographer"
        face={author2}
        facealt="Jeramiah"
        title="Bridge"
        image={bridge}
        alt="Bridge"
      />

      <AuthorDetail heading="Photographs from Las Vegas">
        With over 8 years of experience, and a vision to bring to life the
        essence you and your loved ones are looking for, our photographer
        Jeramiah Johnson is here to help you capture your important moments.
      </AuthorDetail>

      <AuthorDetail heading="Photographs from New Mexico">
        See the inspiring pictures in the Land of Enchantment from our
        photographer Kelsey Gentile
      </AuthorDetail>

      <AuthorPhoto
        tilt="left"
        name="Kelsey Gentile"
        desc="Photographer"
        face={author3}
        facealt="Kelsey"
        title="Spiral"
        image={spiral}
        alt="Spiral"
      ></AuthorPhoto>


    </section>
  );
};

export default AuthorSection;
