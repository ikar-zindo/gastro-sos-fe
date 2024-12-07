import {RootState} from "../store/store";

export const selectGlobalError = (state: RootState) => state.app.globalError;