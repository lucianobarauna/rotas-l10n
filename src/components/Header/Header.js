import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import css from "./Header.module.css";
//  i18n
import { locales } from "../../locales/";

// redux
import { setChangeLocale } from "../../store/L10n";

// utils
// import { getLocaleFromPath } from "../../locales/";

const Header = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const history = useHistory();

  const doChangeLanguage = (lng) => {
    dispatch(setChangeLocale(lng));
    history.push(`/${lng}`);
  };

  return (
    <header className={css.header}>
      <p>{t("globalText:select")}</p>
      <select onChange={({ target }) => doChangeLanguage(target.value)}>
        {locales.map((row) => {
          return (
            <option key={row.code} value={row.code}>
              {row.name}
            </option>
          );
        })}
      </select>
    </header>
  );
};

export default Header;
