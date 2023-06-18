import { useAppDispatch, useAppSelector } from "../../../shared";
import { transportsSlice } from "./slice";

const select = (state: RootState) => state.transports;
const action = transportsSlice.actions;
export const transportsReducer = transportsSlice.reducer;

export const useTransports = () => {
  return useAppSelector(select);
};

export const useTransportOptionsAction = () => {
  const dispatch = useAppDispatch();

  return {
    setFilterCategory: (value: string) =>
      dispatch(action.setFilterCategory({ value })),
    cancelFiltersCategory: () => dispatch(action.cancelFiltersCategory()),
    setActiveFilters: () => dispatch(action.setActiveFilters()),
    removeActiveFilters: () => dispatch(action.removeActiveFilters()),
    setMapDisplay: () => dispatch(action.setMapDisplay()),
    cancelMapDisplay: () => dispatch(action.cancelMapDisplay()),
    toggleSelectModal: (value: boolean) =>
      dispatch(action.toggleSelectModal(value)),
  };
};
