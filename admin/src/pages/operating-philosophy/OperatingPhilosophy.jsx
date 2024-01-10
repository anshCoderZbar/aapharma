import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { OperatingPhilosophyMutation } from "rest/personnel";
import { GetOperatingPhilosophyMutation } from "rest/personnel";
import OperatingDiagram from "app/common/operating-philosophy/OperatingDiagram";

export default function OperatingPhilosophy() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const operatingPhilosophyMutation = OperatingPhilosophyMutation();
  const getOperatingPhilosophy = GetOperatingPhilosophyMutation();

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getOperatingPhilosophy?.data?.data?.heading;
    defaultValues.description = getOperatingPhilosophy?.data?.data?.description;
    defaultValues.diagramHeading =
      getOperatingPhilosophy?.data?.data?.diagramHeading;
    defaultValues.diagramDescription =
      getOperatingPhilosophy?.data?.data?.diagramDescription;
    defaultValues.operatingBanner = getOperatingPhilosophy?.data?.data?.image;
    setDefaultImg(getOperatingPhilosophy?.data?.data?.image);
    reset(defaultValues);
  }, [getOperatingPhilosophy?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("image", data?.operatingBanner[0]);
    formData.append("description", data?.description);
    formData.append("diagramHeading", data?.diagramHeading);
    formData.append("diagramDescription", data?.diagramDescription);
    operatingPhilosophyMutation.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="operating-philosophy" name="Operating Philosophy" />
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
              <p className="errorMessage">Heading is required</p>
            )}
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="operatingBanner" className="form-label">
              Operating Banner (1540px * 305px)
            </label>
            <FormInput
              type="file"
              name="operatingBanner"
              placeholder="operatingBanner"
              {...register("operatingBanner", {
                required: !perviewImages && !defaultImg,
                onChange: (e) => handleChange(e),
              })}
            />
            {errors?.operatingBanner && (
              <p className="errorMessage">Field is required</p>
            )}
            {perviewImages && (
              <img
                src={perviewImages}
                alt="operating banner Preview"
                style={{ maxWidth: "300px", marginTop: "10px" }}
              />
            )}
            {!perviewImages && defaultImg && (
              <img
                src={defaultImg}
                alt="operating banner Preview"
                style={{ maxWidth: "300px", marginTop: "10px" }}
              />
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
              <p className="errorMessage">Description is required</p>
            )}
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="diagramHeading" className="form-label">
              Diagram Heading
            </label>
            <textarea
              type="text"
              name="diagramHeading"
              rows={5}
              className="form-control form_input"
              placeholder="Diagram Heading"
              {...register("diagramHeading", { required: true })}
            />
            {errors?.diagramHeading && (
              <p className="errorMessage">Diagram Heading is required</p>
            )}
          </div>
          <div className="page_head">
            <h2>Diagram</h2>
          </div>
          <div className="mb-3 col-12">
            <label htmlFor="diagramDescription" className="form-label">
              Diagram Description
            </label>
            <FormInput
              type="text"
              name="diagramDescription"
              rows={5}
              className="form-control form_input"
              placeholder="Diagram Description"
              {...register("diagramDescription", { required: true })}
            />
            {errors?.diagramDescription && (
              <p className="errorMessage">Diagram Description is required</p>
            )}
          </div>

          {operatingPhilosophyMutation?.isPending ? (
            <div>
              <ButtonLoader />
            </div>
          ) : (
            <div className="mb-3 col-12">
              <input type="submit" value="submit" className="input_submit" />
            </div>
          )}
        </form>
        <OperatingDiagram />
      </div>
    </>
  );
}
