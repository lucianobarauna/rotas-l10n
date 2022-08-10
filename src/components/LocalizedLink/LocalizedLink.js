import { NavLink } from "react-router-dom";

// i18n
import { utilGetPrefixPath } from "../../locales/";

// redux
import { useGetL10n } from "../../store/L10n";

const LocalizedLink = ({ to, children, className }) => {
  const { translationsLocale } = useGetL10n();

  return (
    <NavLink
      to={utilGetPrefixPath(to, translationsLocale)}
      className={className}
    >
      {children}
    </NavLink>
  );
};

export default LocalizedLink;
