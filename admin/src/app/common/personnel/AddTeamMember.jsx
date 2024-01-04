import React from "react";

import { PageWrapper } from "components/ui/PageWrapper";
import { useForm } from "react-hook-form";
import { TeamMemberForm } from "./TeamMemberForm";
import { AddTeamMemberMutation } from "rest/personnel";

export default function AddTeamMember() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addTeamMember = AddTeamMemberMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("sortNo", data?.sortNo);
    formData.append("name", data?.name);
    formData.append("designation", data?.designation);
    formData.append("study", data?.education);
    formData.append("skill", data?.skill);
    formData.append("contact", data?.contactNo);
    formData.append("image", data?.memberImage[0]);
    addTeamMember.mutate(formData);
  };
  return (
    <>
      <PageWrapper slug="our-team" name="Our Team" />
      <TeamMemberForm
        register={register}
        onSubmit={handleSubmit(onSubmit)}
        errors={errors}
        isLoading={addTeamMember?.isPending}
      />
    </>
  );
}
