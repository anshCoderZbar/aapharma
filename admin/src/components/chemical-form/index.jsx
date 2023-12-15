import React, { useState } from "react";
import { TextEditor } from "components/ui/TextEditor";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";

export const ChemicalForm = ({
  onSubmit,
  register,
  errors,
  control,
  isLoading,
  mainCategoryData,
  subCategoryData,
  superSubCategoryData,
  mainCategoryFilterId,
  subChemicalFilterId,
  subSuperChemicalFilterId,
}) => {
  const [superSubCat, setSuperSubCat] = useState("");
  const [searchLastLevCat, setSearchLastLevCat] = useState("");
  const filterSuperSubCategory = subCategoryData?.filter((data) => {
    return (
      Number.parseInt(data?.catalog) ===
      Number.parseInt(superSubCat || mainCategoryFilterId)
    );
  });

  const filterSuperSubLastCategory = superSubCategoryData?.filter((data) => {
    return (
      Number.parseInt(data?.catalog2) ===
        Number.parseInt(searchLastLevCat || subChemicalFilterId) &&
      Number.parseInt(data?.catalog) ===
        Number.parseInt(superSubCat || mainCategoryFilterId)
    );
  });

  return (
    <div className="edit_catalog_page mb-4">
      <div className="catalog_single_page_inputs">
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="mb-3 col-12">
              <label htmlFor="sortNo" className="form-label">
                Sort no
              </label>
              <FormInput
                type="text"
                name="sortNo"
                placeholder="Sort no"
                {...register("sortNo")}
              />
              {errors?.sortNo && (
                <p className="errorMessage">{errors?.sortNo?.message}</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="heading" className="form-label">
                Heading
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
            <div className="mb-3 col-md-6">
              <label htmlFor="hba" className="form-label">
                Description
              </label>
              <TextEditor
                control={control}
                name="description"
                {...register("description")}
              />
              {errors?.description && (
                <p className="errorMessage">{errors?.description?.message}</p>
              )}
            </div>

            <div className="mb-3 col-md-4">
              <label htmlFor="mainCategory" className="form-label">
                Main Category
              </label>
              <select
                className="form-select text-capitalize"
                name="mainCategory"
                aria-label="Default select example"
                {...register("mainCategory", {
                  onChange: (e) => setSuperSubCat(e.target.value),
                })}
              >
                <option value={""}>Select Main Category</option>
                {mainCategoryData?.map((category, i) => {
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
            <div className="mb-3 col-md-4">
              <label htmlFor="subCategory" className="form-label">
                Sub Category
              </label>
              <select
                className="form-select text-capitalize"
                name="subCategory"
                aria-label="Default select example"
                {...register("subCategory", {
                  onChange: (e) => setSearchLastLevCat(e.target.value),
                })}
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
                      ? "Please Select Main Category First"
                      : "Sub Category Not Present"}
                  </option>
                )}
              </select>
              {errors?.subSuperCategory && (
                <p className="errorMessage">
                  {errors?.subSuperCategory?.message}
                </p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="superCategory" className="form-label">
                Super Sub Category
              </label>
              <select
                className="form-select text-capitalize"
                name="superCategory"
                aria-label="Default select example"
                {...register("superCategory")}
              >
                <option value={""}>Select Super Sub Category</option>
                {filterSuperSubLastCategory?.length >= 1 ? (
                  filterSuperSubLastCategory?.map((subCategory, i) => {
                    return (
                      <option key={i} value={subCategory?.id}>
                        {subCategory?.heading}
                      </option>
                    );
                  })
                ) : (
                  <option disabled value={""}>
                    {searchLastLevCat.length < 1
                      ? "Please Select Main Category First"
                      : "Sub Category Not Present"}
                  </option>
                )}
              </select>
              {errors?.superCategory && (
                <p className="errorMessage">{errors?.superCategory?.message}</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="productClass" className="form-label">
                Product Class
              </label>
              <FormInput
                type="text"
                name="productClass"
                placeholder="Product Class"
                {...register("productClass")}
              />
              {errors?.productClass && (
                <p className="errorMessage">{errors?.productClass?.message}</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="clogP" className="form-label">
                ClogP
              </label>
              <FormInput
                type="text"
                name="clogP"
                placeholder="ClogP"
                {...register("clogP")}
              />
              {errors?.clogP && (
                <p className="errorMessage">{errors?.clogP?.message}</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="mv" className="form-label">
                MV
              </label>
              <FormInput
                type="text"
                name="mv"
                placeholder="MV"
                {...register("mv")}
              />
              {errors?.mv && (
                <p className="errorMessage">{errors?.mv?.message}</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="hbd" className="form-label">
                HBD
              </label>
              <FormInput
                type="text"
                name="hbd"
                placeholder="HBD"
                {...register("hbd")}
              />
              {errors?.hbd && (
                <p className="errorMessage">{errors?.hbd?.message}</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="hba" className="form-label">
                HBA
              </label>
              <FormInput
                type="text"
                name="hba"
                placeholder="HBA"
                {...register("hba")}
              />
              {errors?.hba && (
                <p className="errorMessage">{errors?.hba?.message}</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="rotb" className="form-label">
                Rotb
              </label>
              <FormInput
                type="text"
                name="rotb"
                placeholder="Rotb"
                {...register("rotb")}
              />
              {errors?.rotb && (
                <p className="errorMessage">{errors?.rotb?.message}</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="fap3" className="form-label">
                Fap3
              </label>
              <FormInput
                type="text"
                name="fap3"
                placeholder="Fap3"
                {...register("fap3")}
              />
              {errors?.fap3 && (
                <p className="errorMessage">{errors?.fap3?.message}</p>
              )}
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <FormInput
                type="text"
                name="price"
                placeholder="Price"
                {...register("price")}
              />
              {errors?.price && (
                <p className="errorMessage">{errors?.price?.message}</p>
              )}
            </div>
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
