import React from "react";

import style from "./AuthorPhoto.module.scss";

const AuthorPhoto = (props) => {

  let tiltClass = "";

  if(props.tilt.localeCompare("left")) {
    tiltClass = style.leftTilt;
  }
  else if (props.tilt.localeCompare("right")) {
    tiltClass = style.rightTilt;
  }

  return (
    <div className={style.AuthorPhoto + " " + tiltClass}>
      <div className={style.AuthorPhotoInner}>
        <div className={style.AuthorPhotoFront}>
          <div className={style.AuthorPhotoFrontImage}>
            <img src={props.image} alt={props.alt} />
          </div>
          <h1>{props.title}</h1>
        </div>
        <div className={style.AuthorPhotoBack}>
          <div className={style.AuthorPhotoBackFace}>
            <img src={props.face} alt={props.facealt} />
          </div>
          <div className={style.AuthorPhotoBackContents}>
            <h1>{props.name}</h1>
            <h2>{props.desc}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorPhoto;
