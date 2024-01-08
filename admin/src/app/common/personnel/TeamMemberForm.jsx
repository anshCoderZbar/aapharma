import React, { useState } from "react";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";

export const TeamMemberForm = (props) => {
  const { onSubmit, register, errors, isLoading, memberImage } = props;
  const [previewImage, setPreviewImage] = useState("");

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
        <div className="mb-3 col-md-6">
          <label htmlFor="sortNo" className="form-label">
            Sort No
          </label>
          <FormInput
            type="number"
            name="sortNo"
            placeholder="Sort No"
            {...register("sortNo", { required: true })}
          />
          {errors?.sortNo && (
            <p className="errorMessage"> Sort No is required</p>
          )}
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <FormInput
            type="text"
            name="name"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors?.name && <p className="errorMessage"> Name is required</p>}
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="designation" className="form-label">
            Designation
          </label>
          <FormInput
            type="text"
            name="designation"
            placeholder="Designation"
            {...register("designation", { required: true })}
          />
          {errors?.designation && (
            <p className="errorMessage"> Designation is required</p>
          )}
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="education" className="form-label">
            Education
          </label>
          <FormInput
            type="text"
            name="education"
            placeholder="Education"
            {...register("education", { required: true })}
          />
          {errors?.education && (
            <p className="errorMessage"> Field is required</p>
          )}
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="skill" className="form-label">
            Skill
          </label>
          <FormInput
            type="text"
            name="skill"
            placeholder="Skill"
            {...register("skill", { required: true })}
          />
          {errors?.skill && <p className="errorMessage"> Field is required</p>}
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="contactNo" className="form-label">
            Contact No
          </label>
          <FormInput
            type="number"
            name="contactNo"
            placeholder="Contact No"
            {...register("contactNo", { required: true })}
          />
          {errors?.contactNo && (
            <p className="errorMessage"> Field is required</p>
          )}
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="memberImage" className="form-label">
            Member Image (395px * 385px)
          </label>
          <FormInput
            type="file"
            name="memberImage"
            placeholder="memberImage"
            {...register("memberImage", {
              required: !previewImage && !memberImage,
              onChange: (e) => handleChange(e),
            })}
          />
          {errors?.memberImage && (
            <p className="errorMessage">Member Image is required</p>
          )}
          {previewImage && (
            <div className="mt-2">
              <img
                src={previewImage}
                alt="File Preview"
                style={{ maxWidth: "150px" }}
              />
            </div>
          )}
          {!previewImage && memberImage && (
            <div className="mt-2">
              <img
                src={memberImage}
                alt="File Preview"
                style={{ maxWidth: "150px" }}
              />
            </div>
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
    </div>
  );
};
