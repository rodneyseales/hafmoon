import React from "react";

import style from "./AuthorDetail.module.scss";

const AuthorDetail = (props) => {
  return (
    <div className={style.AuthorDetail}>
      <h1>{props.heading}</h1>
      <p>{props.children}</p>
      <a href="/" className={style.learnBtn}>Learn more &rarr;</a>
    </div>
  );
};

export default AuthorDetail;
