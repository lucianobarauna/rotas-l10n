import React from "react";
import css from "./About.module.css";

import { useTranslation } from "react-i18next";

const About = ({ location }) => {
  const { t } = useTranslation("pgAbout");
  console.log(location);
  return (
    <section className={css.wrap}>
      <h2>{t("title")}</h2>
      <p>{t("content")}</p>
    </section>
  );
};

export default About;
