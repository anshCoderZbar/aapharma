import { ButtonLoader } from "components/Loader/ButtonLoader";
import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import { X } from "lucide-react";
import React, { useState } from "react";

export const TestimonialForm2 = ({
  register,
  onSubmit,
  control,
  errors,
  defaultImg,
  isLoading,
  testimonialDesc,
  inputs,
  setInputs,
  reset,
  getValues,
}) => {
  const [previewImage, setPreviewImage] = useState("");

  const handleAddInputs = (e) => {
    setInputs([
      ...inputs,
      { authorName: "", authorPosition: "", description: "" },
    ]);
  };

  const handleDeleteInput = (index) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
    const authorNameKey = `authorName_${index + 1}`;
    const authorPositionKey = `authorPosition_${index + 1}`;
    const descriptionKey = `description_${index + 1}`;
    const newFormData = { ...getValues() };
    delete newFormData[authorNameKey];
    delete newFormData[authorPositionKey];
    delete newFormData[descriptionKey];
    reset(newFormData);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const filePreviewUrl = URL.createObjectURL(file);
      setPreviewImage(filePreviewUrl);
    }
  };
  return (
    <div className="home_banner_input">
      <form onSubmit={onSubmit} className="row mt-4 mb-3">
        <div className="col-12">
          <div className="mb-3 col-6">
            <label htmlFor="client" className="form-label">
              Client Logo (200px *200px)
            </label>
            <FormInput
              type="file"
              name="clientLogo"
              placeholder="Client Image"
              {...register("clientLogo", {
                required: !previewImage && !defaultImg,
                onChange: (e) => handleChange(e),
              })}
            />
            {previewImage && (
              <img
                src={previewImage}
                alt="personnel banner Preview"
                style={{ maxWidth: "100px", marginTop: "10px" }}
              />
            )}
            {!previewImage && defaultImg && (
              <img
                src={defaultImg}
                alt="personnel banner Preview"
                style={{ maxWidth: "100px", marginTop: "10px" }}
              />
            )}
            {errors?.client && (
              <p className="errorMessage">client is required</p>
            )}
          </div>
        </div>
        {inputs?.map((_, index) => {
          return (
            <div className="row cxxxz" key={index}>
              {inputs?.length > 1 && (
                <div className=" col-12">
                  <div
                    onClick={() => handleDeleteInput(index)}
                    className="d-flex justify-content-end"
                  >
                    <span className="btn btn-danger">
                      <X />
                    </span>
                  </div>
                </div>
              )}
              <div className="mb-3 col-md-6">
                <label htmlFor="authorName" className="form-label">
                  Author Name
                </label>
                <FormInput
                  type="text"
                  name={`authorName_${index + 1}`}
                  placeholder="Author Name"
                  {...register(`authorName_${index + 1}`, { required: true })}
                />
                {errors[`authorName_${index + 1}`] && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="authorPosition" className="form-label">
                  Author Position
                </label>
                <FormInput
                  type="text"
                  name={`authorPosition_${index + 1}`}
                  placeholder="Author Position"
                  {...register(`authorPosition_${index + 1}`, {
                    required: true,
                  })}
                />
                {errors[`authorPosition_${index + 1}`] && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
              <div className="mb-3 col-md-12">
                <label htmlFor={`description`} className="form-label">
                  Description
                </label>
                <TextEditor
                  control={control}
                  name={`description_${index + 1}`}
                  defaultValue={
                    testimonialDesc && testimonialDesc[index]?.description
                  }
                  {...register(`description_${index + 1}`, {
                    required: true,
                  })}
                />
                {errors[`description_${index + 1}`] && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
            </div>
          );
        })}
        <div className="col-12">
          <div className="d-flex justify-content-end">
            <span onClick={handleAddInputs} className="btn btn-success">
              Add More
            </span>
          </div>
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
    </div>
  );
};
