import createReducer from "../createReducer";
import {
  CHANGE_LOCALE,
  SET_UI_TRANSLATIONS_LOADING,
  SET_UI_TRANSLATIONS_LOADED
} from "./actions";
import { defaultLocale } from "../../locales";

export const initialState = {
  translationsLocale: defaultLocale,
  uiTranslationsLoaded: false
};

const reducer = createReducer(initialState, {
  [CHANGE_LOCALE]: (state, action) => ({
    ...state,
    translationsLocale: action.payload.translationsLocale
  }),
  [SET_UI_TRANSLATIONS_LOADING]: (state) => ({
    ...state,
    uiTranslationsLoaded: false
  }),
  [SET_UI_TRANSLATIONS_LOADED]: (state, action) => ({
    ...state,
    uiTranslationsLoaded: action.payload.isLoaded
  })
});

export default reducer;
