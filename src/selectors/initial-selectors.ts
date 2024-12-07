import {RootState} from "../store/store";

export const selectIsInitialedApp = (state: RootState) => state.app.initialized;