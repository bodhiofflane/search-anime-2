import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import { AppDispatch, RootStore } from '../store';

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
