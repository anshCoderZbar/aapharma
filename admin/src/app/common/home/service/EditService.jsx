import React, { useEffect, useState } from "react";

import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ServiceForm } from "components/Service-form";
import { PageWrapper } from "components/ui/PageWrapper";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { GetSingleAddedServices } from "rest/home";
import { UpdateSingleServices } from "rest/home";

export default function EditService() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const getSingleService = GetSingleAddedServices(id);
  const [images, setImages] = useState({ defaultImage: "", defaultIcon: "" });

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getSingleService?.data?.data[0]?.heading;
    defaultValues.url = getSingleService?.data?.data[0]?.url;
    defaultValues.icon = getSingleService?.data?.data[0]?.icon;
    defaultValues.featuredImage =
      getSingleService?.data?.data[0]?.featuredImage;
    getSingleService?.data?.data[0]?.featuredImage &&
      setImages({
        defaultImage: `${getSingleService?.data?.baseUrl}/${getSingleService?.data?.data[0]?.featuredImage}`,
        defaultIcon: `${getSingleService?.data?.baseUrl}/${getSingleService?.data?.data[0]?.icon}`,
      });
    reset(defaultValues);
  }, [getSingleService?.data?.data]);

  const updateService = UpdateSingleServices();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("serviceId", id);
    formData.append("heading", data?.heading);
    formData.append("url", data?.url);
    // formData.append("icon", data?.icon[0]);
    formData.append("featuredImage", data?.featuredImage[0]);
    updateService.mutate(formData);
  };

  return (
    <div className="single_edit_apge">
      <PageWrapper slug="home-services" name="Home Services" />
      {getSingleService?.isPending ? (
        <ComponentLoader />
      ) : (
        <ServiceForm
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          errors={errors}
          images={images}
          isLoading={updateService?.isPending}
        />
      )}
    </div>
  );
}
