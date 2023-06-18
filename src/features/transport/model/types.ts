export interface Category {
  value: string;
  label: string;
  checked: boolean;
}


export interface TransportsState {
  category: Category[];
  displayMode: "transports" | "map";
  isActiveFilters: boolean;
  modalStatus: boolean;
}
