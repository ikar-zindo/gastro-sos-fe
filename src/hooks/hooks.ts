import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, AppStore, RootState } from '../store/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector = <T>(selector: (state: RootState) => T): T => useSelector(selector);
export const useAppStore = useStore.withTypes<AppStore>();