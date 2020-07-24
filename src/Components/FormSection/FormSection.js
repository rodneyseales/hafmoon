import React from "react";

import style from "./FormSection.module.scss";

const FormSection = (props) => {
  return (
    <section className={style.FormSection}>
      <div className={style.FormSectionBox}>
        <div className={style.FormSectionBoxLeft}>
          <form
            className={style.form}
            name="contactform"
            method="post"
            action="send_form_email.php"
          >
            <h1>Tell us about your Project</h1>
            <input type="text" defaultValue="Enter your full name" name="name" />
            <input type="email" defaultValue="Enter your email address" name="email" />
            <textarea defaultValue="Enter the information you are requesting." className={style.ta} name="jobinfo">

            </textarea>
            <div className={style.buttons}>
              <input
                className={style.ins}
                type="reset"
                value="Reset Form"
                name="reset"
              />
              <input
                className={style.ins}
                type="submit"
                value="Email Us"
                name="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default FormSection;
