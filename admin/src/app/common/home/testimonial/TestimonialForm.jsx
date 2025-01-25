import React, { useEffect, useState } from "react";

import { FormInput } from "components/ui/FormInput";
import { AllClientMutation } from "rest/home";
import { TextEditor } from "components/ui/TextEditor";
import { ButtonLoader } from "components/Loader/ButtonLoader";

export const TestimonialForm = ({
  register,
  onSubmit,
  control,
  errors,
  setSelectedClient,
  selectedClient,
  isLoading,
  testimonalDesc,
  authorImg,
}) => {
  const allClients = AllClientMutation();

  const [previewImage, setPreviewImage] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const filePreviewUrl = URL.createObjectURL(file);
      setPreviewImage(filePreviewUrl);
    }
  };

  useEffect(() => {
    setSelectedClient(allClients?.data?.data[0]?.id);
  }, [allClients?.data?.data]);

  const handleRadioChange = (clientId) => {
    setSelectedClient(clientId);
  };
  return (
    <form onSubmit={onSubmit} className="row mt-4 mb-3">
      {/* <div className="mb-3 col-12">
        <label htmlFor="client" className="form-label">
          Client
        </label>
        <div className="d-flex align-items-center flex-wrap">
          {allClients?.data?.data?.map((data, index) => {
            const isFirst = index === 0;
            return (
              <div className="mx-2" key={data?.id}>
                <input
                  type="radio"
                  id={data?.id}
                  name="clients"
                  value={data?.id}
                  checked={selectedClient === data?.id}
                  defaultChecked={isFirst}
                  onChange={() => handleRadioChange(data?.id)}
                />
                <label htmlFor={data?.id}>
                  <img
                    src={data?.image}
                    alt={`Option ${data?.id}`}
                    className="clients_image"
                  />
                </label>
              </div>
            );
          })}
        </div>
        {errors?.client && <p className="errorMessage">client is required</p>}
      </div> */}
      <div className="mb-3 col-md-12">
        <label htmlFor="authorImage" className="form-label">
          Client Image
        </label>
        <FormInput
          type="file"
          name="authorImage"
          placeholder="authorImage"
          {...register("authorImage", {
            required: !previewImage && !authorImg,
            onChange: (e) => handleChange(e),
          })}
        />
        {errors?.authorImage && (
          <p className="errorMessage">Author Image is required</p>
        )}
        {previewImage && (
          <div className="mt-2">
            <img
              src={previewImage}
              alt="File Preview"
              style={{ maxWidth: "100px" }}
            />
          </div>
        )}
        {!previewImage && authorImg && (
          <div className="mt-2">
            <img
              src={authorImg}
              alt="File Preview"
              style={{ maxWidth: "100px" }}
            />
          </div>
        )}
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="authorName" className="form-label">
          Author Name
        </label>
        <FormInput
          type="text"
          name="authorName"
          placeholder="Author Name"
          {...register("authorName", { required: true })}
        />
        {errors?.authorName && (
          <p className="errorMessage">Author Name is required</p>
        )}
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="authorPosition" className="form-label">
          Author Position
        </label>
        <FormInput
          type="text"
          name="authorPosition"
          placeholder="Author Position"
          {...register("authorPosition", { required: true })}
        />
        {errors?.authorPosition && (
          <p className="errorMessage">Author Position is required</p>
        )}
      </div>
      <div className="mb-3 col-md-12">
        <label htmlFor={`description`} className="form-label">
          Description
        </label>
        <TextEditor
          control={control}
          defaultValue={testimonalDesc && testimonalDesc}
          name={`description`}
          {...register(`description`, {
            required: true,
          })}
        />
        {errors.description && (
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
