import React, { useEffect, useState } from "react";
import { PageWrapper } from "components/ui/PageWrapper";

import { HomeCompanyMission } from "rest/home";

import { FormInput } from "components/ui/FormInput";
import { useForm } from "react-hook-form";
import "styles/main.css";
import { TextEditor } from "components/ui/TextEditor";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { GetHomeCompanyMission } from "rest/home";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

export default function HomeAbout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const companyMisson = HomeCompanyMission();
  const [featureImageUrl, setFeatureImageUrl] = useState("");
  const [icons, setIcons] = useState({ icon1: "", icon2: "", icon3: "" });

  const [filePreviews, setFilePreviews] = useState({
    featuredImagePreview: "",
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

  const getHomeCompanyMission = GetHomeCompanyMission();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getHomeCompanyMission?.data?.data?.heading;
    defaultValues.description = getHomeCompanyMission?.data?.data?.description;
    defaultValues.heading1 = getHomeCompanyMission?.data?.data?.heading1;
    defaultValues.heading2 = getHomeCompanyMission?.data?.data?.heading2;
    defaultValues.heading3 = getHomeCompanyMission?.data?.data?.heading3;
    defaultValues.icon1 = getHomeCompanyMission?.data?.data?.icon1;
    defaultValues.icon2 = getHomeCompanyMission?.data?.data?.icon2;
    defaultValues.icon3 = getHomeCompanyMission?.data?.data?.icon3;
    defaultValues.featuredImage =
      getHomeCompanyMission?.data?.data?.featuredImage;
    getHomeCompanyMission?.data?.data?.icon1 &&
      getHomeCompanyMission?.data?.data?.icon2 &&
      getHomeCompanyMission?.data?.data?.icon3 &&
      setIcons({
        icon1: `${getHomeCompanyMission?.data?.baseUrl}/${getHomeCompanyMission?.data?.data?.icon1}`,
        icon2: `${getHomeCompanyMission?.data?.baseUrl}/${getHomeCompanyMission?.data?.data?.icon2}`,
        icon3: `${getHomeCompanyMission?.data?.baseUrl}/${getHomeCompanyMission?.data?.data?.icon3}`,
      });
    getHomeCompanyMission?.data?.data?.featuredImage &&
      setFeatureImageUrl(
        `${getHomeCompanyMission?.data?.baseUrl}/${getHomeCompanyMission?.data?.data?.featuredImage}`
      );
    reset(defaultValues);
  }, [getHomeCompanyMission?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("featuredImage", data?.featuredImage[0]);
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    formData.append("heading1", data?.heading1);
    formData.append("icon1", data?.icon1[0]);
    formData.append("heading2", data?.heading2);
    formData.append("icon2", data?.icon2[0]);
    formData.append("heading3", data?.heading3);
    formData.append("icon3", data?.icon3[0]);
    companyMisson.mutate(formData);
  };

  return (
    <div className="home_about_page">
      <PageWrapper slug="home-about" name="Home About" />
      {getHomeCompanyMission?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getHomeCompanyMission?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-6">
              <label htmlFor="mainHeading" className="form-label">
                Main Heading
              </label>
              <FormInput
                type="text"
                name="heading"
                placeholder="heading"
                {...register("heading", { required: true })}
              />
              {errors?.heading && (
                <p className="errorMessage">Main Heading is required</p>
              )}
            </div>

            <div className="mb-3 col-md-6">
              <label htmlFor="featuredImage" className="form-label">
                Featured Image (721px * 856px)
              </label>
              <FormInput
                type="file"
                name="featuredImage"
                placeholder="featuredImage"
                {...register("featuredImage", {
                  required:
                    featureImageUrl?.length >= 1 ||
                    filePreviews?.featuredImagePreview?.length >= 1
                      ? false
                      : true,
                  onChange: (e) => handleFileChange(e, "featuredImage"),
                })}
              />
              {errors?.featuredImage && (
                <p className="errorMessage">Featured Image is required</p>
              )}
              {filePreviews?.featuredImagePreview && (
                <img
                  src={filePreviews.featuredImagePreview}
                  alt="Featured Image Preview"
                  style={{ maxWidth: "100px" }}
                />
              )}
              <div className="d-block">
                {!filePreviews.featuredImagePreview && featureImageUrl && (
                  <img
                    src={featureImageUrl}
                    alt="Featured Image Preview"
                    style={{ maxWidth: "100px" }}
                  />
                )}
              </div>
            </div>
            <div className="mb-4 col-12">
              <label htmlFor={`description`} className="form-label">
                Description
              </label>
              <TextEditor
                control={control}
                name={`description`}
                defaultValue={getHomeCompanyMission?.data?.data?.description}
                {...register(`description`, {
                  required: true,
                })}
              />
              {errors.description && (
                <p className="errorMessage">Description is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="mainHeading" className="form-label">
                Icon Heading 1
              </label>
              <FormInput
                type="text"
                name="heading1"
                placeholder="heading"
                {...register("heading1", { required: true })}
              />
              {errors?.heading1 && (
                <p className="errorMessage">Icon Heading is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="mainHeading" className="form-label">
                Icon 1 (50px * 50px)
              </label>
              <div className="main_icons">
                <div className="icon__img">
                  <FormInput
                    type="file"
                    name="icon1"
                    placeholder="icon1"
                    {...register("icon1", {
                      required: !filePreviews?.icon1Preview && !icons?.icon1,
                      onChange: (e) => handleFileChange(e, "icon1"),
                    })}
                  />
                  {errors?.icon1 && (
                    <p className="errorMessage">Icon is required</p>
                  )}
                </div>
                <div className="icon__preview">
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
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="mainHeading" className="form-label">
                Icon Heading 2
              </label>
              <FormInput
                type="text"
                name="heading2"
                placeholder="heading"
                {...register("heading2", { required: true })}
              />
              {errors?.heading2 && (
                <p className="errorMessage">Icon Heading is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="mainHeading" className="form-label">
                Icon 2 (50px * 50px)
              </label>
              <div className="main_icons">
                <div className="icon__img">
                  <FormInput
                    type="file"
                    name="icon2"
                    placeholder="icon2"
                    {...register("icon2", {
                      required: !filePreviews?.icon2Preview && !icons?.icon2,
                      onChange: (e) => handleFileChange(e, "icon2"),
                    })}
                  />
                  {errors?.icon2 && (
                    <p className="errorMessage">Icon is required</p>
                  )}
                </div>
                <div className="icon__preview">
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
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="mainHeading" className="form-label">
                Icon Heading 3
              </label>
              <FormInput
                type="text"
                name="heading3"
                placeholder="heading"
                {...register("heading3", { required: true })}
              />
              {errors?.heading3 && (
                <p className="errorMessage">Icon Heading is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="mainHeading" className="form-label">
                Icon 3 (50px * 50px)
              </label>
              <div className="main_icons">
                <div className="icon__img">
                  <FormInput
                    type="file"
                    name="icon3"
                    placeholder="icon3"
                    {...register("icon3", {
                      required: !filePreviews?.icon3Preview && !icons?.icon3,
                      onChange: (e) => handleFileChange(e, "icon3"),
                    })}
                  />
                  {errors?.icon2 && (
                    <p className="errorMessage">Icon is required</p>
                  )}
                </div>
                <div className="icon__preview">
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
            </div>
            {companyMisson?.isPending ? (
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
      )}
    </div>
  );
}
