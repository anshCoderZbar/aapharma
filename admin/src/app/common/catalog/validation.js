import { object, string } from "yup";

export const catalogSchema = object({
  sortNo: string()
    .matches(/^-?\d*\.?\d+$/, "Please enter a valid number")
    .required("field is required"),
  heading: string().required("field is required"),
});

export const subCatalogSchema = object({
  sortNo: string()
    .matches(/^-?\d*\.?\d+$/, "Please enter a valid number")
    .required("field is required"),
  heading: string().required("field is required"),
  subCategory: string().required("field is required"),
});
export const superSubCatalogSchema = object({
  sortNo: string()
    .matches(/^-?\d*\.?\d+$/, "Please enter a valid number")
    .required("field is required"),
  heading: string().required("field is required"),
  subCategory: string().required("field is required"),
  superSubCategoryName: string().required("field is required"),
});
