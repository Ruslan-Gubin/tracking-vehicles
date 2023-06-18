import { PayloadAction } from "@reduxjs/toolkit";
import { TransportsState } from "./types";

export const reducers = {
  setFilterCategory(
    state: TransportsState,
    action: PayloadAction<{ value: string }>
  ) {
    const findCategory = state.category.find(
      (c) => c.value === action.payload.value
    );
    if (!findCategory) return;
    findCategory.checked = !findCategory.checked;
  },

  cancelFiltersCategory(state: TransportsState) {
    state.category.forEach((c) => (c.checked = false));
  },

  setActiveFilters(state: TransportsState) {
    state.isActiveFilters = true;
  },

  removeActiveFilters(state: TransportsState) {
    state.isActiveFilters = false;
  },

  setMapDisplay(state: TransportsState) {
    state.displayMode = 'map';
  },

  cancelMapDisplay(state: TransportsState) {
    state.displayMode = 'transports';
  },

  toggleSelectModal(state: TransportsState, action: PayloadAction<boolean>) {
    state.modalStatus = action.payload;
  },
};
