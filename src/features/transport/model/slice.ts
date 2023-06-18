import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers } from "./reducers";

export const transportsSlice = createSlice({
  name: "transports",
  initialState,
  reducers,
});

