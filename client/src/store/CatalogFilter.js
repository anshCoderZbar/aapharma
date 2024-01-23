import { atom } from "jotai";

const catalogSchema = {
  categoryId: [],
  subcategoryId: [],
  supersubcategoryId: [],
  search: "",
  orderby: "",
};

export const catalogFilterSchema = atom(catalogSchema);
