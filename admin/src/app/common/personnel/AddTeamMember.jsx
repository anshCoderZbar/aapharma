import React, { useState } from "react";

import { PageWrapper } from "components/ui/PageWrapper";
import { useForm } from "react-hook-form";
import { TeamMemberForm } from "./TeamMemberForm";
import { AddTeamMemberMutation } from "rest/personnel";

export default function AddTeamMember() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const addTeamMember = AddTeamMemberMutation();
  const [list1, setList1] = useState([{ list: "" }]);
  const [list2, setList2] = useState([{ list: "" }]);
  const [list3, setList3] = useState([{ list: "" }]);

  const onSubmit = (data) => {
    const { sortNo, name, designation, memberImage, ...rest } = data;
    const formData = new FormData();
    formData.append("sortNo", sortNo);
    formData.append("name", name);
    formData.append("designation", designation);

    formData.append("image", memberImage[0]);
    const listData = {
      list1: [],
      list2: [],
      list3: [],
    };

    // Extract list items for list1
    Object.keys(rest).forEach((key) => {
      if (key.startsWith("list1")) {
        listData.list1.push(rest[key]);
        delete rest[key];
      }
    });

    Object.keys(rest).forEach((key) => {
      if (key.startsWith("list2")) {
        listData.list2.push(rest[key]);
        delete rest[key];
      }
    });

    Object.keys(rest).forEach((key) => {
      if (key.startsWith("list3")) {
        listData.list3.push(rest[key]);
        delete rest[key];
      }
    });
    listData?.list1?.map((data) => {
      formData.append("skillList[]", data);
    });
    listData?.list2?.map((data) => {
      formData.append("studyList[]", data);
    });
    listData?.list3?.map((data) => {
      formData.append("contactList[]", data);
    });

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
        getValues={getValues}
        reset={reset}
        list1={list1}
        setList1={setList1}
        list2={list2}
        setList2={setList2}
        list3={list3}
        setList3={setList3}
      />
    </>
  );
}
