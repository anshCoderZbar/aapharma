import React from "react";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";

export const TableForm = ({ onSubmit, register, isLoading, errors }) => {
  return (
    <form onSubmit={onSubmit} className="row mt-4 mb-3">
      <div className="mb-3 col-md-4">
        <label htmlFor="elements" className="form-label">
          Elements
        </label>
        <FormInput
          type="text"
          name="elements"
          placeholder="Elements"
          {...register("elements")}
        />
        {errors?.elements && <p className="errorMessage">Field is required</p>}
      </div>
      <div className="mb-3 col-md-4">
        <label htmlFor="atomicNumber" className="form-label">
          Atomic Number
        </label>
        <FormInput
          type="text"
          name="atomicNumber"
          placeholder="Atomic Number"
          {...register("atomicNumber")}
        />
        {errors?.atomicNumber && (
          <p className="errorMessage">Field is required</p>
        )}
      </div>
      <div className="mb-3 col-md-4">
        <label htmlFor="parentAtom" className="form-label">
          Parent Atom
        </label>
        <FormInput
          type="text"
          name="parentAtom"
          placeholder="Parent Atom"
          {...register("parentAtom")}
        />
        {errors?.parentAtom && (
          <p className="errorMessage">Field is required</p>
        )}
      </div>
      <div className="mb-3 col-md-4">
        <label htmlFor="stableIsotope" className="form-label">
          Stable Isotope
        </label>
        <FormInput
          type="text"
          name="stableIsotope"
          placeholder="Stable Isotope"
          {...register("stableIsotope")}
        />
        {errors?.stableIsotope && (
          <p className="errorMessage">Field is required</p>
        )}
      </div>
      <div className="mb-3 col-md-4">
        <label htmlFor="abundance" className="form-label">
          Abundance
        </label>
        <FormInput
          type="text"
          name="abundance"
          placeholder="Abundance"
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
