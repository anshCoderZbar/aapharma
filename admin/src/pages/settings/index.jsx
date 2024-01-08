import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { FormInput } from "components/ui/FormInput";
import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";
import { AllSettings } from "rest/main";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { GetSettings } from "rest/main";
import { ComponentLoader } from "components/Loader/ComponentLoader";

export default function Settings() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const settings = AllSettings();

  const getSettings = GetSettings();
  const [logos, setLogos] = useState({ header: "", footer: "", favicon: "" });

  const [imagePreview, setImagePreview] = useState({
    headerlogo: "",
    footerlogo: "",
    favicon: "",
  });

  const handleImageChange = (event, imageType) => {
    if (event?.target?.files) {
      const objectURL = URL.createObjectURL(event.target.files[0]);
      setImagePreview({ ...imagePreview, [imageType]: objectURL });
    }
  };

  useEffect(() => {
    const defaultValues = {};
    defaultValues.twitter = getSettings?.data?.data?.twitter;
    defaultValues.youtube = getSettings?.data?.data?.youtube;
    defaultValues.linkedin = getSettings?.data?.data?.linkedin;
    defaultValues.address = getSettings?.data?.data?.address;
    defaultValues.phone = getSettings?.data?.data?.phone;
    defaultValues.email = getSettings?.data?.data?.email;
    defaultValues.footerText = getSettings?.data?.data?.footerText;
    defaultValues.headerlogo = getSettings?.data?.data?.headerlogo;
    defaultValues.footerlogo = getSettings?.data?.data?.footerlogo;
    defaultValues.favicon = getSettings?.data?.data?.favicon;
    defaultValues.contactDescription = getSettings?.data?.data?.contacttext;
    getSettings?.data?.data?.headerlogo &&
      getSettings?.data?.data?.footerlogo &&
      getSettings?.data?.data?.favicon &&
      setLogos({
        header: getSettings?.data?.data?.headerlogo,
        footer: getSettings?.data?.data?.footerlogo,
        favicon: getSettings?.data?.data?.favicon,
      });
    reset(defaultValues);
  }, [getSettings?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("twitter", data?.twitter);
    formData.append("youtube", data?.youtube);
    formData.append("linkedin", data?.linkedin);
    formData.append("address", data?.address);
    formData.append("phone", data?.phone);
    formData.append("email", data?.email);
    formData.append("contacttext", data?.contactDescription);
    formData.append("footerText", data?.footerText);
    formData.append("headerlogo", data?.headerlogo[0]);
    formData.append("footerlogo", data?.footerlogo[0]);
    formData.append("favicon", data?.favicon[0]);
    settings.mutate(formData);
  };

  return (
    <div className="settings_page">
      <PageWrapper slug="settings" name="Settings" />
      {getSettings?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input mb-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="row mt-4 mb-3"
          >
            <div className="mb-3 col-md-6">
              <label htmlFor="twitter" className="form-label">
                Twitter
              </label>
              <FormInput
                type="text"
                name="twitter"
                placeholder="twitter"
                {...register("twitter", { required: true })}
              />
              {errors?.twitter && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="youtube" className="form-label">
                Youtube
              </label>
              <FormInput
                type="text"
                name="youtube"
                placeholder="Youtube"
                {...register("youtube", { required: true })}
              />
              {errors?.youtube && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="linkedin" className="form-label">
                Linkedin
              </label>
              <FormInput
                type="text"
                name="linkedin"
                placeholder="Linkedin"
                {...register("linkedin", { required: true })}
              />
              {errors?.linkedin && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <FormInput
                type="text"
                name="address"
                placeholder="Address"
                {...register("address", { required: true })}
              />
              {errors?.address && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <FormInput
                type="number"
                name="phone"
                placeholder="Phone"
                {...register("phone", { required: true })}
              />
              {errors?.phone && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <FormInput
                type="text"
                name="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors?.email && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="footerText" className="form-label">
                Footer Text
              </label>
              <FormInput
                type="text"
                name="footerText"
                placeholder="Footer Text"
                {...register("footerText", { required: true })}
              />
              {errors?.footerText && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="headerlogo" className="form-label">
                Header Logo
              </label>
              <FormInput
                type="file"
                name="headerlogo"
                placeholder="headerlogo"
                {...register("headerlogo", {
                  required: !imagePreview?.headerlogo && !logos.header,
                  onChange: (e) => handleImageChange(e, "headerlogo"),
                })}
              />
              {imagePreview?.headerlogo && (
                <img
                  src={imagePreview.headerlogo}
                  alt="Header Logo Preview"
                  className="preview-image"
                />
              )}
              {!imagePreview?.headerlogo && logos.header && (
                <img
                  src={logos.header}
                  alt="Header Logo Preview"
                  className="preview-image"
                />
              )}
              {errors?.headerlogo && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="contactDescription" className="form-label">
                Contact Description
              </label>
              <textarea
                type="text"
                name="contactDescription"
                rows={5}
                className="form-control form_input"
                placeholder="Contact Description"
                {...register("contactDescription", { required: true })}
              />
              {errors?.contactDescription && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            <div className="mb-3 col-md-6">
              <label htmlFor="footerlogo" className="form-label">
                Footer Logo
              </label>
              <FormInput
                type="file"
                name="footerlogo"
                placeholder="footerlogo"
                {...register("footerlogo", {
                  required: !imagePreview?.footerlogo && !logos.footer,
                  onChange: (e) => handleImageChange(e, "footerlogo"),
                })}
              />
              {imagePreview?.footerlogo && (
                <img
                  src={imagePreview.footerlogo}
                  alt="Footer Logo Preview"
                  className="preview-image bg-secondary"
                />
              )}
              {!imagePreview?.footerlogo && logos.footer && (
                <img
                  src={logos.footer}
                  alt="Footer Logo Preview"
                  className="preview-image bg-secondary"
                />
              )}
              {errors?.footerlogo && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="favicon" className="form-label">
                Favicon
              </label>
              <FormInput
                type="file"
                name="favicon"
                placeholder="favicon"
                {...register("favicon", {
                  required: !imagePreview?.favicon && !logos.favicon,
                  onChange: (e) => handleImageChange(e, "favicon"),
                })}
              />
              {imagePreview?.favicon && (
                <img
                  src={imagePreview.favicon}
                  alt="Favicon Preview"
                  className="preview-image"
                />
              )}
              {!imagePreview?.favicon && logos.favicon && (
                <img
                  src={logos.favicon}
                  alt="Favicon Logo Preview"
                  className="preview-image"
                />
              )}
              {errors?.favicon && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            {settings?.isPending ? (
              <div>
                <ButtonLoader />
              </div>
            ) : (
              <div className="mb-3 mt-3 col-12">
                <input type="submit" value="submit" className="input_submit" />
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
