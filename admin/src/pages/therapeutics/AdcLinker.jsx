import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { FormInput } from "components/ui/FormInput";
import { GetAdcLinker } from "rest/therapeutics";
import { EditAdcLinker } from "rest/therapeutics";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { TextEditor } from "components/ui/TextEditor";

export default function AdcLinker() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const [images, setImages] = useState({ image1: "", image2: "" });
  const [filePreviews, setFilePreviews] = useState({
    image1Preview: "",
    image2Preview: "",
  });

  const getAdc = GetAdcLinker();
  const editAdc = EditAdcLinker();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getAdc?.data?.data?.heading;
    defaultValues.headingLeft = getAdc?.data?.data?.titleLeft;
    defaultValues.headingRight = getAdc?.data?.data?.titleRight;
    defaultValues.firstButton = getAdc?.data?.data?.button1;
    defaultValues.firstDescripton = getAdc?.data?.data?.button1Description;
    defaultValues.secondButton = getAdc?.data?.data?.button2;
    defaultValues.secondDescripton = getAdc?.data?.data?.button2Description;
    defaultValues.thirdButton = getAdc?.data?.data?.button3;
    defaultValues.thirdDescripton = getAdc?.data?.data?.button3Description;
    defaultValues.fourthButton = getAdc?.data?.data?.button4;
    defaultValues.fourthDescripton = getAdc?.data?.data?.button4Description;
    defaultValues.bottomDescripton = getAdc?.data?.data?.bottomDescription;
    setImages({
      image1: getAdc?.data?.data?.imageLeft,
      image2: getAdc?.data?.data?.imageRight,
    });
    reset(defaultValues);
  }, [getAdc?.data?.data]);

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

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("titleLeft", data?.headingLeft);
    formData.append("titleRight", data?.headingRight);
    formData.append("button1", data?.firstButton);
    formData.append("button1Description", data?.firstDescripton);
    formData.append("button2", data?.secondButton);
    formData.append("button2Description", data?.secondDescripton);
    formData.append("button3", data?.thirdButton);
    formData.append("button3Description", data?.thirdDescripton);
    formData.append("button4", data?.fourthButton);
    formData.append("button4Description", data?.fourthDescripton);
    formData.append("bottomDescription", data?.bottomDescripton);
    formData.append("imageLeft", data?.image1[0]);
    formData.append("imageRight", data?.image2[0]);
    editAdc.mutate(formData);
  };

  return (
    <div className="therapeutics_page">
      <PageWrapper slug="therapeutics-adc" name="ADC" />
      {getAdc?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getAdc?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="input_banners  mb-3">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
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
            <h2 className="heading_main">ADC Linker Diagram</h2>
            <div className="mb-3 col-md-6">
              <label htmlFor="headingLeft" className="form-label">
                Heading Left
              </label>
              <FormInput
                type="text"
                name="headingLeft"
                placeholder="Heading Left"
                {...register("headingLeft", { required: true })}
              />
              {errors?.headingLeft && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="headingRight" className="form-label">
                Heading Right
              </label>
              <FormInput
                type="text"
                name="headingRight"
                placeholder="Heading Right"
                {...register("headingRight", { required: true })}
              />
              {errors?.headingRight && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="firstButton" className="form-label">
                First Button
              </label>
              <FormInput
                type="text"
                name="firstButton"
                placeholder="First Button"
                {...register("firstButton", { required: true })}
              />
              {errors?.firstButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="firstDescripton" className="form-label">
                First Description
              </label>
              <FormInput
                type="text"
                name="firstDescripton"
                placeholder="First Descripton"
                {...register("firstDescripton", { required: true })}
              />
              {errors?.firstDescripton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="secondButton" className="form-label">
                Second Button
              </label>
              <FormInput
                type="text"
                name="secondButton"
                placeholder="Second Button"
                {...register("secondButton", { required: true })}
              />
              {errors?.secondButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="secondDescripton" className="form-label">
                Second Description
              </label>
              <FormInput
                type="text"
                name="secondDescripton"
                placeholder="Second Descripton"
                {...register("secondDescripton", { required: true })}
              />
              {errors?.secondDescripton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="thirdButton" className="form-label">
                Third Button
              </label>
              <FormInput
                type="text"
                name="thirdButton"
                placeholder="Third Button"
                {...register("thirdButton", { required: true })}
              />
              {errors?.thirdButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="thirdDescripton" className="form-label">
                Third Description
              </label>
              <FormInput
                type="text"
                name="thirdDescripton"
                placeholder="Third Descripton"
                {...register("thirdDescripton", { required: true })}
              />
              {errors?.thirdDescripton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="fourthButton" className="form-label">
                Fourth Button
              </label>
              <FormInput
                type="text"
                name="fourthButton"
                placeholder="Fourth Button"
                {...register("fourthButton", { required: true })}
              />
              {errors?.fourthButton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="fourthDescripton" className="form-label">
                Fourth Description
              </label>
              <FormInput
                type="text"
                name="fourthDescripton"
                placeholder="Fourth Descripton"
                {...register("fourthDescripton", { required: true })}
              />
              {errors?.fourthDescripton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-12">
              <label htmlFor="bottomDescripton" className="form-label">
                Bottom Description
              </label>
              <TextEditor
                control={control}
                name="bottomDescripton"
                placeholder="Bottom Descripton"
                defaultValue={getAdc?.data?.data?.bottomDescription}
                {...register("bottomDescripton", { required: true })}
              />
              {errors?.bottomDescripton && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>

            <div className="mb-3 col-md-6">
              <label htmlFor="image1" className="form-label">
                Image 1 (410px * 100px)
              </label>
              <div className="main_icons">
                <FormInput
                  type="file"
                  name="image1"
                  placeholder="image1"
                  {...register("image1", {
                    required: !filePreviews?.image1Preview && !images?.image1,
                    onChange: (e) => handleFileChange(e, "image1"),
                  })}
                />
                {errors?.image1 && (
                  <p className="errorMessage">Icon is required</p>
                )}
                <div className="icon__preview">
                  {filePreviews?.image1Preview && (
                    <img
                      src={filePreviews.image1Preview}
                      alt="Featured Image Preview"
                      style={{ maxWidth: "300px" }}
                    />
                  )}
                  {!filePreviews.image1Preview && images?.image1 && (
                    <img
                      src={images?.image1}
                      alt="Featured Image Preview"
                      style={{ maxWidth: "300px" }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="image2" className="form-label">
                Image 2 (840px * 310px)
              </label>
              <div className="main_icons">
                <FormInput
                  type="file"
                  name="image2"
                  placeholder="image2"
                  {...register("image2", {
                    required: !filePreviews?.image2Preview && !images?.image2,
                    onChange: (e) => handleFileChange(e, "image2"),
                  })}
                />
                {errors?.image2 && (
                  <p className="errorMessage">Icon is required</p>
                )}
                <div className="icon__preview">
                  {filePreviews?.image2Preview && (
                    <img
                      src={filePreviews.image2Preview}
                      alt="Featured Image Preview"
                      style={{ maxWidth: "300px" }}
                    />
                  )}
                  {!filePreviews.image2Preview && images?.image2 && (
                    <img
                      src={images?.image2}
                      alt="Featured Image Preview"
                      style={{ maxWidth: "300px" }}
                    />
                  )}
                </div>
              </div>
            </div>

            {editAdc?.isPending ? (
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
