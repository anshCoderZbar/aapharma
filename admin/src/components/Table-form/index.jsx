import React from "react";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { TextEditor } from "components/ui/TextEditor";

export const TableForm = ({
  onSubmit,
  register,
  isLoading,
  errors,
  control,
  defaultValue,
}) => {
  return (
    <form onSubmit={onSubmit} className="row mt-4 mb-3">
      <div className="mb-3 col-md-6">
        <label htmlFor="elements" className="form-label">
          Elements
        </label>
        <TextEditor
          control={control}
          name="elements"
          placeholder="Elements"
          defaultValue={defaultValue?.elements}
          {...register("elements")}
        />
        {errors?.elements && <p className="errorMessage">Field is required</p>}
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="atomicNumber" className="form-label">
          Atomic Number
        </label>
        <TextEditor
          control={control}
          name="atomicNumber"
          placeholder="Atomic Number"
          defaultValue={defaultValue?.atomicNumber}
          {...register("atomicNumber")}
        />
        {errors?.atomicNumber && (
          <p className="errorMessage">Field is required</p>
        )}
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="parentAtom" className="form-label">
          Parent Atom
        </label>
        <TextEditor
          control={control}
          name="parentAtom"
          placeholder="Parent Atom"
          defaultValue={defaultValue?.parentAtom}
          {...register("parentAtom")}
        />
        {errors?.parentAtom && (
          <p className="errorMessage">Field is required</p>
        )}
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="stableIsotope" className="form-label">
          Stable Isotope
        </label>
        <TextEditor
          control={control}
          name="stableIsotope"
          placeholder="Stable Isotope"
          defaultValue={defaultValue?.stableIsotope}
          {...register("stableIsotope")}
        />
        {errors?.stableIsotope && (
          <p className="errorMessage">Field is required</p>
        )}
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="abundance" className="form-label">
          Abundance
        </label>
        <TextEditor
          control={control}
          name="abundance"
          placeholder="Abundance"
          defaultValue={defaultValue?.abundance}
          {...register("abundance")}
        />
        {errors?.abundance && <p className="errorMessage">Field is required</p>}
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
