import React, { useEffect, useState } from "react";
import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { useForm } from "react-hook-form";
import { HomeBannerApi } from "rest/home";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { GetBannerApi } from "rest/home";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

export const HomeBanner = () => {
  const [img, setImg] = useState("");
  const [bannerImg, setBannerImg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const bannerData = HomeBannerApi();

  const getBannerData = GetBannerApi();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.mainHeading = getBannerData?.data?.data?.heading;
    defaultValues.heading = getBannerData?.data?.data?.description;
    defaultValues.bannerImage = getBannerData?.data?.data?.image;
    getBannerData?.data?.data?.image &&
      setBannerImg(
        `${getBannerData?.data?.baseUrl}/${getBannerData?.data?.data?.image}`
      );
    reset(defaultValues);
  }, [getBannerData?.data?.data]);

  const handleOnBannerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const image = URL.createObjectURL(file);
      setImg(image);
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("heading", data?.mainHeading);
    formData.append("description", data?.heading);
    formData.append("image", data?.bannerImage[0]);
    await bannerData.mutate(formData);
  };
  return (
    <div className="home_banner">
      <PageWrapper slug="home-banner" name="Home Banner" />
      {getBannerData?.isError && (
        <ErrorComponent message="OOPS! some error occured" />
      )}
      {getBannerData?.isPending ? (
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
                name="mainHeading"
                placeholder="main heading"
                {...register("mainHeading", { required: true })}
              />
              {errors?.mainHeading && (
                <p className="errorMessage">Main Heading is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="heading" className="form-label">
                Heading
              </label>
              <FormInput
                type="text"
                name="heading"
                placeholder=" heading"
                {...register("heading", { required: true })}
              />
              {errors?.heading && (
                <p className="errorMessage"> Heading is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="bannerImage" className="form-label">
                Heading
              </label>
              <FormInput
                type="file"
                name="bannerImage"
                accept="image/png, image/webp, image/jpeg"
                {...register("bannerImage", {
                  required:
                    img?.length >= 1 || bannerImg?.length >= 1 ? false : true,
                  onChange: (e) => handleOnBannerChange(e),
                })}
              />
              {errors?.bannerImage && (
                <p className="errorMessage"> Banner Image is required</p>
              )}
            </div>
            <div className="d-block">
              {img && (
                <img src={img} alt="banner" style={{ maxWidth: "300px" }} />
              )}
            </div>
            <div className="d-block">
              {!img && bannerImg && (
                <img
                  src={bannerImg}
                  alt="banner"
                  style={{ maxWidth: "300px" }}
                />
              )}
            </div>
            {bannerData?.isPending ? (
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
};
