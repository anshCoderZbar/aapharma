import { atom } from "jotai";

const catalogSchema = {
  subcategoryId: [],
  supersubcategoryId: [],
  search: "",
  orderby: "",
};

export const catalogFilterSchema = atom(catalogSchema);
