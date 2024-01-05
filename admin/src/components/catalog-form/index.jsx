import React, { useState } from "react";
import { TextEditor } from "components/ui/TextEditor";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";

export const CatalogForm = ({
  onSubmit,
  register,
  errors,
  isLoading,
  isSubCategoryEnable,
  subCategory,
  isSuperSubCategoryEnable,
  superSubCategory,
  subCatalogFilterIdLev1,
  heading1,
  heading2,
  heading3,
}) => {
  const [superSubCat, setSuperSubCat] = useState("");
  const filterSuperSubCategory = superSubCategory?.filter((data) => {
    return (
      Number.parseInt(data?.catalog) ===
      Number.parseInt(superSubCat || subCatalogFilterIdLev1)
    );
  });

  console.log(subCatalogFilterIdLev1);

  return (
    <div className="edit_catalog_page mb-4">
      <div className="catalog_single_page_inputs">
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label htmlFor="heading" className="form-label">
                Sort No
              </label>
              <FormInput
                type="text"
                name="name"
                placeholder="Sort No"
                {...register("sortNo")}
              />
              {errors?.sortNo && (
                <p className="errorMessage">{errors?.sortNo?.message}</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="heading" className="form-label">
                {heading1}
              </label>
              <FormInput
                type="text"
                name="heading"
                placeholder="Heading"
                {...register("heading")}
              />
              {errors?.heading && (
                <p className="errorMessage">{errors?.heading?.message}</p>
              )}
            </div>

            {isSubCategoryEnable && (
              <div className="mb-3 col-md-6">
                <label htmlFor="selectSubCategory" className="form-label">
                  {heading2}
                </label>
                <select
                  className="form-select text-capitalize"
                  name="subcategory"
                  aria-label="Default select example"
                  {...register("subCategory", {
                    onChange: (e) => setSuperSubCat(e.target.value),
                  })}
                >
                  <option value={""}>Select Master Category</option>
                  {subCategory?.map((category, i) => {
                    return (
                      <option key={i} value={category?.id}>
                        {category?.heading}
                      </option>
                    );
                  })}
                </select>
                {errors?.subCategory && (
                  <p className="errorMessage">{errors?.subCategory?.message}</p>
                )}
              </div>
            )}
            {isSuperSubCategoryEnable && (
              <div className="mb-3 col-md-6">
                <label htmlFor="selectSuperSubCategory" className="form-label">
                  {heading3}
                </label>
                <select
                  className="form-select text-capitalize"
                  name="subcategory"
                  aria-label="Default select example"
                  {...register("superSubCategoryName")}
                >
                  <option value={""}>Select Sub Category</option>
                  {filterSuperSubCategory?.length >= 1 ? (
                    filterSuperSubCategory?.map((subCategory, i) => {
                      return (
                        <option key={i} value={subCategory?.id}>
                          {subCategory?.heading}
                        </option>
                      );
                    })
                  ) : (
                    <option disabled value={""}>
                      {superSubCat.length < 1
                        ? "Please Select Master Category First"
                        : "Sub Category Not Present"}
                    </option>
                  )}
                </select>
                {errors?.superSubCategoryName && (
                  <p className="errorMessage">
                    {errors?.superSubCategoryName?.message}
                  </p>
                )}
              </div>
            )}
          </div>
          {isLoading ? (
            <ButtonLoader />
          ) : (
            <div className="mb-3 col-12">
              <input type="submit" value="submit" className="input_submit" />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
