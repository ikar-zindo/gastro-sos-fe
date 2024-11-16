import {RootState} from "../store/store";

export const getGlobalError = (state: RootState) => state.app.globalError;