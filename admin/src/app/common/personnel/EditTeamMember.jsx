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
    getValues,
  } = useForm();

  const [memberImage, setMemberImage] = useState("");
  const [list1, setList1] = useState([{ list: "" }]);
  const [list2, setList2] = useState([{ list: "" }]);
  const [list3, setList3] = useState([{ list: "" }]);

  const formData = new FormData();
  formData?.append("teamId", id);
  const singleMember = GetSingleTeamMemberMutation(formData);

  useEffect(() => {
    const defaultValues = {};
    defaultValues.sortNo = singleMember?.data?.data?.sortNo;
    defaultValues.name = singleMember?.data?.data?.name;
    defaultValues.designation = singleMember?.data?.data?.designation;
    setList1(
      singleMember?.data?.data?.skillList
        ? singleMember.data.data.skillList
            ?.split("@@")
            ?.map((item) => ({ list: item }))
        : [{ list: "" }]
    );

    setList2(
      singleMember?.data?.data?.studyList
        ? singleMember.data.data.studyList
            ?.split("@@")
            ?.map((item) => ({ list: item }))
        : [{ list: "" }]
    );

    setList3(
      singleMember?.data?.data?.contactList
        ? singleMember.data.data.contactList
            ?.split("@@")
            ?.map((item) => ({ list: item }))
        : [{ list: "" }]
    );

    singleMember?.data?.data?.skillList?.split("@@")?.map((item, index) => {
      defaultValues[`list1_${index + 1}`] = item;
    });
    singleMember?.data?.data?.studyList?.split("@@")?.map((item, index) => {
      defaultValues[`list2_${index + 1}`] = item;
    });
    singleMember?.data?.data?.contactList?.split("@@")?.map((item, index) => {
      defaultValues[`list3_${index + 1}`] = item;
    });

    setMemberImage(singleMember?.data?.data?.image);
    reset(defaultValues);
  }, [singleMember?.data?.data]);
  const editTeamMember = EditTeamMemberMutation();

  const onSubmit = (data) => {
    const { sortNo, name, designation, memberImage, ...rest } = data;
    const formData = new FormData();
    formData.append("teamId", id);
    formData.append("sortNo", sortNo);
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("image", memberImage[0]);
    const listData = {
      list1: [],
      list2: [],
      list3: [],
    };

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
          getValues={getValues}
          reset={reset}
          list1={list1}
          setList1={setList1}
          list2={list2}
          setList2={setList2}
          list3={list3}
          setList3={setList3}
        />
      )}
    </>
  );
}
