import { combineReducers } from "redux";

import InitialSetting from "./InitialSetting/reducer";
import L10n from "./L10n/reducer";

const reducers = combineReducers({
  InitialSetting: InitialSetting,
  L10n: L10n
});

export default reducers;
