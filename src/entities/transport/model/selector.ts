import { useAppDispatch, useAppSelector } from "../../../shared";
import { transportSlice } from "./slice";
import { fetchTransport } from "./thunk";

const select = (state: RootState) => state.transport;
export const transportReducer = transportSlice.reducer;

export const useTransport = () => {
  return useAppSelector(select);
};

export const useTransportAction = () => {
  const dispatch = useAppDispatch();

  return {
    fetchTransports: () => dispatch(fetchTransport()),
  };
};
