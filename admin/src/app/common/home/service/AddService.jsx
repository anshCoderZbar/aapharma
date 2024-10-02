import React from "react";

import { PageWrapper } from "components/ui/PageWrapper";
import "styles/main.css";
import { ServiceForm } from "components/Service-form";
import { useForm } from "react-hook-form";
import { HomeAddServices } from "rest/home";

export default function AddService() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addServiceMutation = HomeAddServices();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    // formData.append("icon", data?.icon[0]);
    formData.append("featuredImage", data?.featuredImage[0]);
    addServiceMutation.mutate(formData);
  };
  return (
    <div className="service-page">
      <PageWrapper slug="home-services" name="Home Services" />
      <ServiceForm
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
        isLoading={addServiceMutation?.isPending}
      />
    </div>
  );
}
