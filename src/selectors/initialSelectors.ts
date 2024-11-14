import {RootState} from "../store/store";

export const getIsInitialedApp = (state: RootState) => state.app.initialized;