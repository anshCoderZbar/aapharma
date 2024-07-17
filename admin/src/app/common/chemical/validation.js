import { object, string } from "yup";

export const chemicalSchema = object({
  sortNo: string()
    .matches(/^-?\d*\.?\d+$/, "Please enter a valid number")
    .required("field is required"),
  heading: string().required("field is required"),
  description: string().required("field is required"),
  mainCategory: string().required("field is required"),
  subCategory: string().required("field is required"),
  superCategory: string().required("field is required"),
  productClass: string().required("field is required"),
  clogP: string().required("field is required"),
  mv: string().required("field is required"),
  hbd: string().required("field is required"),
  hba: string().required("field is required"),
  rotb: string().required("field is required"),
  fap3: string().required("field is required"),
  price: string()
    .matches(/^-?\d*\.?\d+$/, "Please enter a valid number")
    .required("field is required"),
});

export const utilsSchema = object({
  // sortNo: string()
  //   .matches(/^-?\d*\.?\d+$/, "Please enter a valid number")
  //   .required("field is required"),
  // heading: string().required("field is required"),
  // description: string().required("field is required"),
});
