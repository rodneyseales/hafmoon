import React from 'react';

import style from './AboutCard.module.scss';

const AboutCard = props => {
  return(
    <div className={style.AboutSectionCard}>
      <div className={style.AboutSectionCardIcon}>
        <svg className={style.iconstyle}>
          <use href={props.sprite + "#icon-" + props.iconname} />
        </svg>
      </div>
      <h1 className={style.AboutSectionCardHeading}>
        {props.heading}
      </h1>
      <p className={style.AboutSectionCardContent}>
        {props.children}
      </p>
      <p>test</p>
      
    </div>
  );
}

export default AboutCard;
