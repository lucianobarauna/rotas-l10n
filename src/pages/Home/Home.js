import { useTranslation } from "react-i18next";
import css from "./Home.module.css";
import { Header, LocalizedLink } from "../../components/";
import { Link } from "react-router-dom";

import { useGetL10n } from "../../store/L10n";

const Home = () => {
  const { t } = useTranslation();
  const { translationsLocale } = useGetL10n();
  return (
    <main className={css.wrapper}>
      <Header />
      <p>{translationsLocale}</p>
      <h1>{t("globalText:title")}</h1>
      <p>{t("globalText:text")}</p>

      <LocalizedLink to="/about">Saiba mais</LocalizedLink>
    </main>
  );
};

export default Home;
