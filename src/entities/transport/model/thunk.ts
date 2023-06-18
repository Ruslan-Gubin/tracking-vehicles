import { createAsyncThunk } from "@reduxjs/toolkit";
import { TransportModel } from "./types";
import jsonDB from "../../../../transport-db.json";

export const fetchTransport = createAsyncThunk<
  TransportModel[],
  void,
  { rejectValue: string; getState: RootState }
>("transport/fetchTransport", async (_, { rejectWithValue, getState }) => {
  const response: TransportModel[] = jsonDB.transport_list;

  if (!response) {
    return rejectWithValue("Error");
  }

  return response;
});
