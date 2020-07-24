import React from 'react';

import style from './AboutSection.module.scss';
import sprite from '../../Assets/sprite.svg';

import AboutCard from '../AboutCard/AboutCard';

const AboutSection = props => {
  return(
    <section className={style.AboutSection}>
      <AboutCard sprite={sprite} iconname="camera" heading="Photography">
        We strive to fulfill your photography needs, including
        everything from single to group portraits, prints, product
        photography, real estate photography and many other
        types of digital photography.
      </AboutCard>
      <AboutCard sprite={sprite} iconname="quill" heading="Design">
        If you can think it, we strive to design it. From logos
        to flyer, business cards and stationary, we help with
        all your design needs. Looking for branding for your
        company? We can help set you up with that as well.
      </AboutCard>

      <AboutCard sprite={sprite} iconname="profile" heading="Web Design">
        Our in house web design staff works to give you the
        website you've been looking for. With a combination of
        CSS3, HTML5, and Javascript, we will design you a
        site to help you stand out against your competition.
        Just ask us how we can help.
      </AboutCard>

      <AboutCard sprite={sprite} iconname="mobile2" heading="Something">
        We strive to fulfill your photography needs, including
        everything from single to group portraits, prints, product
        If you can think it, we strive to design it. From logos
        to flyer, business cards and stationary, we help with
        site to help you stand out against your competition.
        Just ask us how we can help.
      </AboutCard>

    </section>
  );
}

export default AboutSection;
