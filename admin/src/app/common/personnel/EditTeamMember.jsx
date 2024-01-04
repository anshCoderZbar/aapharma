import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PageWrapper } from "components/ui/PageWrapper";
import { useForm } from "react-hook-form";
import { TeamMemberForm } from "./TeamMemberForm";
import { GetSingleTeamMemberMutation } from "rest/personnel";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { EditTeamMemberMutation } from "rest/personnel";

export default function EditTeamMember() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [memberImage, setMemberImage] = useState("");

  const formData = new FormData();
  formData?.append("teamId", id);
  const singleMember = GetSingleTeamMemberMutation(formData);

  useEffect(() => {
    const defaultValues = {};
    defaultValues.sortNo = singleMember?.data?.data?.sortNo;
    defaultValues.name = singleMember?.data?.data?.name;
    defaultValues.designation = singleMember?.data?.data?.designation;
    defaultValues.education = singleMember?.data?.data?.study;
    defaultValues.skill = singleMember?.data?.data?.skill;
    defaultValues.contactNo = singleMember?.data?.data?.contact;
    setMemberImage(singleMember?.data?.data?.image);
    reset(defaultValues);
  }, [singleMember?.data?.data]);

  const editTeamMember = EditTeamMemberMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("teamId", id);
    formData.append("sortNo", data?.sortNo);
    formData.append("name", data?.name);
    formData.append("designation", data?.designation);
    formData.append("study", data?.education);
    formData.append("skill", data?.skill);
    formData.append("contact", data?.contactNo);
    formData.append("image", data?.memberImage[0]);
    editTeamMember.mutate(formData);
  };
  return (
    <>
      <PageWrapper slug="our-team" name="Our Team" />
      {singleMember?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {singleMember?.isPending ? (
        <ComponentLoader />
      ) : (
        <TeamMemberForm
          register={register}
          onSubmit={handleSubmit(onSubmit)}
          errors={errors}
          memberImage={memberImage}
          isLoading={editTeamMember?.isPending}
        />
      )}
    </>
  );
}
