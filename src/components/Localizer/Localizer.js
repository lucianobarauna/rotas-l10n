import { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useGetL10n, setChangeLocale } from "../../store/L10n";
import { i18n } from "../../locales/";

// utils
import { utilSwithHtmlLocale, getLocaleFromPath } from "../../locales/";

const Localizer = ({ children }) => {
  const history = useHistory();
  const { translationsLocale } = useGetL10n();

  const doSetLocale = useCallback(() => {
    if (translationsLocale !== history.location) {
      const { location } = history;
      const targetLocale = getLocaleFromPath(location.pathname);
      utilSwithHtmlLocale(targetLocale);
      setChangeLocale(targetLocale);
      i18n.changeLanguage(targetLocale);
      history.push(location.pathname);
    }
  }, [translationsLocale, history]);

  useEffect(() => {
    console.log("localizer");
    doSetLocale();
  }, [doSetLocale]);

  return <>{children}</>;
};

export default Localizer;
