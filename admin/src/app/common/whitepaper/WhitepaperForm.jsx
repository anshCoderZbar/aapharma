import React, { useState } from "react";

import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { CustomeDate } from "components/date-picker";
import dayjs from "dayjs";

export const WhitepaperForm = ({
  register,
  onSubmit,
  errors,
  // defaultImg,
  control,
  addedDescription,
  isLoading,
  defaultDate,
}) => {
  // const [perviewImages, setPreviewImages] = useState("");

  // const handleChange = (e) => {
  //   const files = e.target.files[0];
  //   if (files) {
  //     const imageUrl = URL.createObjectURL(files);
  //     setPreviewImages(imageUrl);
  //   }
  // };

  return (
    <form onSubmit={onSubmit} className="row mt-4 mb-3">
      <div className="mb-3 col-md-6">
        <label htmlFor="heading" className="form-label">
          Heading
        </label>
        <FormInput
          type="text"
          name="heading"
          placeholder="Heading"
          {...register("heading", { required: true })}
        />
        {errors?.heading && <p className="errorMessage">Heading is required</p>}
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <CustomeDate
          name="date"
          control={control}
          maxDate={dayjs()}
          defaultDate={defaultDate}
          {...register("date", {
            required: true,
          })}
        />
        {errors?.date && <p className="errorMessage">Date is required</p>}
      </div>

      {/* <div className="mb-3 col-md-6">
        <label htmlFor="banner" className="form-label">
          Banner (1540px * 305px)
        </label>
        <FormInput
          type="file"
          name="banner"
          placeholder="banner"
          {...register("banner", {
            required: !perviewImages && !defaultImg,
            onChange: (e) => handleChange(e),
          })}
        />
        {errors?.banner && <p className="errorMessage">Field is required</p>}
        {perviewImages && (
          <img
            src={perviewImages}
            alt="banner Preview"
            style={{ maxWidth: "300px", marginTop: "10px" }}
          />
        )}
        {!perviewImages && defaultImg && (
          <img
            src={defaultImg}
            alt="banner Preview"
            style={{ maxWidth: "300px", marginTop: "10px" }}
          />
        )}
      </div> */}
      <div className="mb-3 col-md-12">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <TextEditor
          control={control}
          name={`description`}
          defaultValue={addedDescription}
          {...register(`description`, {
            required: true,
          })}
        />
        {errors?.description && (
          <p className="errorMessage">Description is required</p>
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
