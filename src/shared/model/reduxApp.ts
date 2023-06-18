import {
  useSelector,
  type TypedUseSelectorHook,
  useDispatch,
} from "react-redux";
import { AppDispatch } from "src/app";

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
