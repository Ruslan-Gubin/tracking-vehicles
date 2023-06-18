import { TransportsState } from "./types";

const initialState: TransportsState = {
  category: [
    { value: "cargo", label: "Грузовой", checked: false },
    { value: "passenger", label: "Пассажирский", checked: false },
    { value: "special", label: "Спецтранспорт", checked: false },
  ],
  displayMode: "transports",
  isActiveFilters: false,
  modalStatus: false,
};

export { initialState }; 
