import { CHANGE_LOCALE } from "./actions";

const setChangeLocale = (locale) => (dispatch) => {
  dispatch({
    type: CHANGE_LOCALE,
    payload: {
      translationsLocale: locale
    }
  });
};

export { setChangeLocale };
