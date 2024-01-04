import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";

import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { CreatePersonnelCharacterized } from "rest/personnel";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { GetPersonnelCharacterized } from "rest/personnel";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

export default function PersonnelCharacterized() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [icons, setIcons] = useState({ icon1: "", icon2: "", icon3: "" });
  const [filePreviews, setFilePreviews] = useState({
    icon1Preview: "",
    icon2Preview: "",
    icon3Preview: "",
  });

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setFilePreviews((prevState) => ({
        ...prevState,
        [`${type}Preview`]: previewURL,
      }));
    }
  };

  const categorizedMutation = CreatePersonnelCharacterized();

  const getPersonnelCharacterizedData = GetPersonnelCharacterized();
  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getPersonnelCharacterizedData?.data?.data?.heading;
    defaultValues.title1 = getPersonnelCharacterizedData?.data?.data?.title1;
    defaultValues.title2 = getPersonnelCharacterizedData?.data?.data?.title2;
    defaultValues.title3 = getPersonnelCharacterizedData?.data?.data?.title3;
    defaultValues.description1 =
      getPersonnelCharacterizedData?.data?.data?.description1;
    defaultValues.description2 =
      getPersonnelCharacterizedData?.data?.data?.description2;
    defaultValues.description3 =
      getPersonnelCharacterizedData?.data?.data?.description3;
    setIcons({
      icon1: `${getPersonnelCharacterizedData?.data?.data?.icon1}`,
      icon2: `${getPersonnelCharacterizedData?.data?.data?.icon2}`,
      icon3: `${getPersonnelCharacterizedData?.data?.data?.icon3}`,
    });
    reset(defaultValues);
  }, [getPersonnelCharacterizedData?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("title1", data?.title1);
    formData.append("description1", data?.description1);
    formData.append("icon1", data?.icon1[0]);
    formData.append("title2", data?.title2);
    formData.append("description2", data?.description2);
    formData.append("icon2", data?.icon2[0]);
    formData.append("title3", data?.title3);
    formData.append("description3", data?.description3);
    formData.append("icon3", data?.icon3[0]);
    categorizedMutation.mutate(formData);
  };

  return (
    <div className="personnel_page">
      <PageWrapper
        slug="personnel-characterized"
        name="Personnel Characterized"
      />
      <div className="home_banner_input">
        {getPersonnelCharacterizedData?.isError && (
          <ErrorComponent message="OOPS ! something went wrong please try again later" />
        )}
        {getPersonnelCharacterizedData?.isPending ? (
          <ComponentLoader />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="col-12">
              <div className="mb-3 col-6">
                <label htmlFor="heading" className="form-label">
                  Main Heading
                </label>
                <FormInput
                  type="text"
                  name="heading"
                  placeholder="Heading"
                  {...register("heading", { required: true })}
                />
                {errors?.heading && (
                  <p className="errorMessage">Heading is required</p>
                )}
              </div>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="title1" className="form-label">
                Title 1
              </label>
              <FormInput
                type="text"
                name="title1"
                placeholder="Title 1"
                {...register("title1", { required: true })}
              />
              {errors?.title1 && (
                <p className="errorMessage">Title is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="description1" className="form-label">
                Description 1
              </label>
              <FormInput
                type="text"
                name="description1"
                placeholder="Description 1"
                {...register("description1", { required: true })}
              />
              {errors?.description1 && (
                <p className="errorMessage">description is required</p>
              )}
            </div>
            <div className="col-12">
              <div className="mb-3 col-md-6">
                <label htmlFor="icon1" className="form-label">
                  Icon 1
                </label>
                <FormInput
                  type="file"
                  name="icon1"
                  placeholder="Description 1"
                  {...register("icon1", {
                    required: !filePreviews?.icon1Preview && !icons?.icon1,
                    onChange: (e) => handleFileChange(e, "icon1"),
                  })}
                />
                {errors?.icon1 && (
                  <p className="errorMessage">Icon is required</p>
                )}
                {filePreviews?.icon1Preview && (
                  <img
                    src={filePreviews.icon1Preview}
                    alt="Featured Image Preview"
                    style={{ maxWidth: "100px" }}
                  />
                )}
                {!filePreviews.icon1Preview && icons?.icon1 && (
                  <img
                    src={icons?.icon1}
                    alt="Featured Image Preview"
                    style={{ maxWidth: "100px" }}
                  />
                )}
              </div>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="title2" className="form-label">
                Title 2
              </label>
              <FormInput
                type="text"
                name="title2"
                placeholder="Title 2"
                {...register("title2", { required: true })}
              />
              {errors?.title2 && (
                <p className="errorMessage">Title is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="description2" className="form-label">
                Description 2
              </label>
              <FormInput
                type="text"
                name="description2"
                placeholder="Description 2"
                {...register("description2", { required: true })}
              />
              {errors?.description2 && (
                <p className="errorMessage">description is required</p>
              )}
            </div>
            <div className="col-12">
              <div className="mb-3 col-md-6">
                <label htmlFor="icon2" className="form-label">
                  Icon 2
                </label>
                <FormInput
                  type="file"
                  name="icon2"
                  placeholder="Description 2"
                  {...register("icon2", {
                    required: !filePreviews?.icon2Preview && !icons?.icon2,
                    onChange: (e) => handleFileChange(e, "icon2"),
                  })}
                />
                {errors?.icon2 && (
                  <p className="errorMessage">Icon is required</p>
                )}
                {filePreviews?.icon2Preview && (
                  <img
                    src={filePreviews.icon2Preview}
                    alt="Featured Image Preview"
                    style={{ maxWidth: "100px" }}
                  />
                )}
                {!filePreviews.icon2Preview && icons?.icon2 && (
                  <img
                    src={icons?.icon2}
                    alt="Featured Image Preview"
                    style={{ maxWidth: "100px" }}
                  />
                )}
              </div>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="title3" className="form-label">
                Title 3
              </label>
              <FormInput
                type="text"
                name="title3"
                placeholder="Title 3"
                {...register("title3", { required: true })}
              />
              {errors?.title3 && (
                <p className="errorMessage">Title is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="description2" className="form-label">
                Description 3
              </label>
              <FormInput
                type="text"
                name="description3"
                placeholder="Description 3"
                {...register("description3", { required: true })}
              />
              {errors?.description3 && (
                <p className="errorMessage">description is required</p>
              )}
            </div>
            <div className="col-12">
              <div className="mb-3 col-md-6">
                <label htmlFor="icon3" className="form-label">
                  Icon 3
                </label>
                <FormInput
                  type="file"
                  name="icon3"
                  placeholder="Description 3"
                  {...register("icon3", {
                    required: !filePreviews?.icon3Preview && !icons?.icon3,
                    onChange: (e) => handleFileChange(e, "icon3"),
                  })}
                />
                {errors?.icon3 && (
                  <p className="errorMessage">Icon is required</p>
                )}
                {filePreviews?.icon3Preview && (
                  <img
                    src={filePreviews.icon3Preview}
                    alt="Featured Image Preview"
                    style={{ maxWidth: "100px" }}
                  />
                )}
                {!filePreviews.icon3Preview && icons?.icon3 && (
                  <img
                    src={icons?.icon3}
                    alt="Featured Image Preview"
                    style={{ maxWidth: "100px" }}
                  />
                )}
              </div>
            </div>
            {categorizedMutation?.isPending ? (
              <div>
                <ButtonLoader />
              </div>
            ) : (
              <div className="mb-3 col-12">
                <input type="submit" value="submit" className="input_submit" />
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
