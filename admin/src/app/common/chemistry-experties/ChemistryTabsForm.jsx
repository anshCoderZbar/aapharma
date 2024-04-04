import React from "react";

import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";

import { ButtonLoader } from "components/Loader/ButtonLoader";

export const ChemistryTabsForm = ({
  onSubmit,
  register,
  errors,
  control,
  defaultValue,
  isLoading,
}) => {
  return (
    <form onSubmit={onSubmit} className="row mt-4 mb-3">
      <div className="mb-3 col-md-6">
        <label htmlFor="sortNo" className="form-label">
          Sort No
        </label>
        <FormInput
          type="number"
          name="sortNo"
          placeholder="sortNo"
          {...register("sortNo", { required: true })}
        />
        {errors?.sortNo && <p className="errorMessage">Sort No is required</p>}
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="heading" className="form-label">
          Heading
        </label>
        <FormInput
          type="text"
          name="heading"
          placeholder="heading"
          {...register("heading", { required: true })}
        />
        {errors?.heading && <p className="errorMessage">Heading is required</p>}
      </div>
      <div className="mb-3 col-md-12">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <TextEditor
          control={control}
          name={`description`}
          defaultValue={defaultValue}
          {...register(`description`, {
            required: true,
          })}
        />
        {errors?.description && (
          <p className="errorMessage">Field is required</p>
        )}
      </div>
      {isLoading ? (
        <div>
          <ButtonLoader />
        </div>
      ) : (
        <div className="mb-3 col-12">
          <input type="submit" value="submit" className="input_submit" />
        </div>
      )}
    </form>
  );
};
