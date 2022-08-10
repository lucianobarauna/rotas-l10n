import { useSelector } from "react-redux";

const useGetL10n = () => {
  const { translationsLocale, uiTranslationsLoaded } = useSelector((state) => ({
    translationsLocale: state.L10n.translationsLocale,
    uiTranslationsLoaded: state.L10n.uiTranslationsLoaded
  }));

  return { translationsLocale, uiTranslationsLoaded };
};

export default useGetL10n;
