import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { CreateAboutBannerMutation } from "rest/about";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { GetAboutBannerMutation } from "rest/about";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

export default function AboutBanner() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const [perviewIcons, setPreviewIcons] = useState({
    icon1: "",
    icon2: "",
    icon3: "",
    icon4: "",
  });
  const [defaultIcons, setDefaultIcons] = useState({
    img1: "",
    img2: "",
    img3: "",
    img4: "",
  });

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  const handleIconChange = (e, type) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewIcons({ ...perviewIcons, [type]: imageUrl });
    }
  };

  const createBanner = CreateAboutBannerMutation();

  const getBanner = GetAboutBannerMutation();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getBanner?.data?.data?.heading;
    defaultValues.description = getBanner?.data?.data?.description;
    defaultValues.aboutDescription = getBanner?.data?.data?.description2;
    defaultValues.aboutBanner = getBanner?.data?.data?.image;
    setDefaultImg(getBanner?.data?.data?.image);
    getBanner?.data?.data?.icon1 &&
      getBanner?.data?.data?.icon2 &&
      getBanner?.data?.data?.icon3 &&
      getBanner?.data?.data?.icon4 &&
      setDefaultIcons({
        img1: getBanner?.data?.data?.icon1,
        img2: getBanner?.data?.data?.icon2,
        img3: getBanner?.data?.data?.icon3,
        img4: getBanner?.data?.data?.icon4,
      });
    reset(defaultValues);
  }, [getBanner?.data?.data]);

  console.log(getBanner?.data?.data);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    formData.append("description2", data?.aboutDescription);
    formData.append("image", data?.aboutBanner[0]);
    formData.append("icon1", data?.icon1[0]);
    formData.append("icon2", data?.icon2[0]);
    formData.append("icon3", data?.icon3[0]);
    formData.append("icon4", data?.icon4[0]);
    createBanner.mutate(formData);
  };

  return (
    <div className="about-us">
      <PageWrapper slug="about-us" name="About Us" />
      {getBanner?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getBanner?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="input_banners  mb-3">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-6">
              <label htmlFor="aboutBanner" className="form-label">
                About Banner (1540px * 545 px)
              </label>
              <FormInput
                type="file"
                name="aboutBanner"
                placeholder="aboutBanner"
                {...register("aboutBanner", {
                  required: !perviewImages && !defaultImg,
                  onChange: (e) => handleChange(e),
                })}
              />
              {errors?.aboutBanner && (
                <p className="errorMessage">Field is required</p>
              )}
              {perviewImages && (
                <img
                  src={perviewImages}
                  alt="about banner Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
              )}
              {!perviewImages && defaultImg && (
                <img
                  src={defaultImg}
                  alt="about banner Preview"
                  style={{ maxWidth: "300px", marginTop: "10px" }}
                />
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
                {...register("heading", { required: true })}
              />
              {errors?.heading && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                type="text"
                name="description"
                rows={5}
                className="form-control form_input"
                placeholder="Description"
                {...register("description", { required: true })}
              />
              {errors?.description && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="aboutDescription" className="form-label">
                About Description
              </label>
              <textarea
                type="text"
                name="aboutDescription"
                rows={5}
                className="form-control form_input"
                placeholder=" About Description"
                {...register("aboutDescription", { required: true })}
              />
              {errors?.aboutDescription && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="icon1" className="form-label">
                Icon 1 (35px * 40px)
              </label>
              <FormInput
                type="file"
                name="icon1"
                placeholder="icon1"
                {...register("icon1", {
                  required: !perviewIcons?.icon1 && !defaultIcons?.img1,
                  onChange: (e) => handleIconChange(e, "icon1"),
                })}
              />
              {errors?.icon1 && (
                <p className="errorMessage">Field is required</p>
              )}
              {perviewIcons?.icon1 && (
                <img
                  src={perviewIcons?.icon1}
                  alt="icon1 Preview"
                  className="preview-image mt-2"
                />
              )}
              {!perviewIcons?.icon1 && defaultIcons?.img1 && (
                <img
                  src={defaultIcons?.img1}
                  alt="icon1 Preview"
                  className="preview-image mt-2"
                />
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="icon2" className="form-label">
                Icon 2 (35px * 40px)
              </label>
              <FormInput
                type="file"
                name="icon2"
                placeholder="icon2"
                {...register("icon2", {
                  required: !perviewIcons?.icon2 && !defaultIcons?.img2,
                  onChange: (e) => handleIconChange(e, "icon2"),
                })}
              />
              {errors?.icon2 && (
                <p className="errorMessage">Field is required</p>
              )}
              {perviewIcons?.icon2 && (
                <img
                  src={perviewIcons?.icon2}
                  alt="icon2 Preview"
                  className="preview-image mt-2"
                />
              )}
              {!perviewIcons?.icon2 && defaultIcons?.img2 && (
                <img
                  src={defaultIcons?.img2}
                  alt="icon2 Preview"
                  className="preview-image mt-2"
                />
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="icon3" className="form-label">
                Icon 3 (35px * 40px)
              </label>
              <FormInput
                type="file"
                name="icon3"
                placeholder="icon3"
                {...register("icon3", {
                  required: !perviewIcons?.icon3 && !defaultIcons?.img3,
                  onChange: (e) => handleIconChange(e, "icon3"),
                })}
              />
              {errors?.icon3 && (
                <p className="errorMessage">Field is required</p>
              )}
              {perviewIcons?.icon3 && (
                <img
                  src={perviewIcons?.icon3}
                  alt="icon3 Preview"
                  className="preview-image mt-2"
                />
              )}
              {!perviewIcons?.icon3 && defaultIcons?.img3 && (
                <img
                  src={defaultIcons?.img3}
                  alt="icon3 Preview"
                  className="preview-image mt-2"
                />
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="icon4" className="form-label">
                Icon 4 (35px * 40px)
              </label>
              <FormInput
                type="file"
                name="icon4"
                placeholder="icon4"
                {...register("icon4", {
                  required: !perviewIcons?.icon4 && !defaultIcons?.img4,
                  onChange: (e) => handleIconChange(e, "icon4"),
                })}
              />
              {errors?.icon4 && (
                <p className="errorMessage">Field is required</p>
              )}
              {perviewIcons?.icon4 && (
                <img
                  src={perviewIcons?.icon4}
                  alt="icon4 Preview"
                  className="preview-image mt-2"
                />
              )}
              {!perviewIcons?.icon4 && defaultIcons?.img4 && (
                <img
                  src={defaultIcons?.img4}
                  alt="icon4 Preview"
                  className="preview-image mt-2"
                />
              )}
            </div>
            {createBanner?.isPending ? (
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
