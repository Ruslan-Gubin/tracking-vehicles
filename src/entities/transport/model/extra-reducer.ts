import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { fetchTransport } from "./thunk";
import { TransportState } from "./types";

export const extraReducers = (
  builder: ActionReducerMapBuilder<TransportState>
) => {
  builder
    .addCase(fetchTransport.pending, (state) => {
      state.error = null;
      state.loading = true;
    })
    .addCase(fetchTransport.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      }
      state.loading = false;
    })
    .addCase(fetchTransport.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.transportList = action.payload;
    });
};
