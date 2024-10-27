import { PageWrapper } from "components/ui/PageWrapper";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, X } from "lucide-react";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ErrorComponent } from "components/Alerts/Error";

import { ComponentLoader } from "components/Loader/ComponentLoader";
import {
  GetIsotopeAssessmentMutation,
  EditIsotopeAssessmentMutation,
} from "rest/isotope";
import { TextEditor } from "components/ui/TextEditor";

export default function ServiceAssessment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    control,
  } = useForm();

  const [list1, setList1] = useState([{ list: "" }]);
  const [list2, setList2] = useState([{ list: "" }]);
  const [list3, setList3] = useState([{ list: "" }]);

  const handleDelete = (index, listType) => {
    if (listType === "list1") {
      const newList = [...list1];
      newList.splice(index, 1);
      setList1(newList);
    } else if (listType === "list2") {
      const newList = [...list2];
      newList.splice(index, 1);
      setList2(newList);
    } else if (listType === "list3") {
      const newList = [...list3];
      newList.splice(index, 1);
      setList3(newList);
    }

    const newFormData = { ...getValues() };
    const updatedFormData = {};

    Object.keys(newFormData).forEach((key) => {
      if (key.startsWith(listType)) {
        const keyIndex = parseInt(key.split("_")[1]);
        if (keyIndex !== index + 1) {
          const updatedKey =
            keyIndex > index + 1 ? `${listType}_${keyIndex - 1}` : key;
          updatedFormData[updatedKey] = newFormData[key];
        }
      } else {
        updatedFormData[key] = newFormData[key];
      }
    });

    reset(updatedFormData);
  };

  const handleAdd = (listType) => {
    if (listType === "list1") {
      setList1([...list1, { list: "" }]);
    } else if (listType === "list2") {
      setList2([...list2, { list: "" }]);
    } else if (listType === "list3") {
      setList3([...list3, { list: "" }]);
    }
  };

  const getAssessment = GetIsotopeAssessmentMutation();
  const editAssessment = EditIsotopeAssessmentMutation();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.subHeading = getAssessment?.data?.data?.subheading;
    defaultValues.heading1 = getAssessment?.data?.data?.heading1;
    defaultValues.heading2 = getAssessment?.data?.data?.heading2;
    defaultValues.heading3 = getAssessment?.data?.data?.heading3;
    setList1(
      getAssessment?.data?.data?.list1
        ? getAssessment.data.data.list1.map((item) => ({ list: item }))
        : [{ list: "" }]
    );

    // Update list2 state
    setList2(
      getAssessment?.data?.data?.list2
        ? getAssessment.data.data.list2.map((item) => ({ list: item }))
        : [{ list: "" }]
    );

    // Update list3 state
    setList3(
      getAssessment?.data?.data?.list3
        ? getAssessment.data.data.list3.map((item) => ({ list: item }))
        : [{ list: "" }]
    );

    ["list1", "list2", "list3"].forEach((listType) => {
      getAssessment?.data?.data?.[listType]?.forEach((item, index) => {
        defaultValues[`${listType}_${index + 1}`] = item || "";
      });
    });
    reset(defaultValues);
  }, [getAssessment?.data?.data]);

  const onSubmit = (data) => {
    const { subHeading, heading1, heading2, heading3, ...rest } = data;

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

    // Extract list items for list2
    Object.keys(rest).forEach((key) => {
      if (key.startsWith("list2")) {
        listData.list2.push(rest[key]);
        delete rest[key];
      }
    });

    // Extract list items for list3
    Object.keys(rest).forEach((key) => {
      if (key.startsWith("list3")) {
        listData.list3.push(rest[key]);
        delete rest[key];
      }
    });

    const formData = new FormData();
    formData.append("subheading", subHeading);
    formData.append("heading1", heading1);
    formData.append("heading2", heading2);
    formData.append("heading3", heading3);
    listData?.list1?.map((data) => {
      formData.append("list1[]", data);
    });
    listData?.list2?.map((data) => {
      formData.append("list2[]", data);
    });
    listData?.list3?.map((data) => {
      formData.append("list3[]", data);
    });

    editAssessment.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="services-assessment" name="Services Assessment" />
      {getAssessment?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getAssessment?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="input_banners  mb-3">
          <form onSubmit={handleSubmit(onSubmit)} className=" mt-4 mb-3">
            <div className="row">
              <div className="mb-3 col-md-12">
                <label htmlFor="subHeading" className="form-label">
                  Sub Heading
                </label>
                <TextEditor
                  control={control}
                  defaultValue={getAssessment?.data?.data?.subheading}
                  name="subHeading"
                  placeholder="Sub Heading"
                  {...register("subHeading", {
                    required: true,
                  })}
                />
                {errors?.subHeading && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="heading1" className="form-label">
                  Heading 1
                </label>
                <TextEditor
                  control={control}
                  defaultValue={getAssessment?.data?.data?.heading1}
                  name="heading1"
                  placeholder="Heading 1"
                  {...register("heading1", {
                    required: true,
                  })}
                />
                {errors?.heading1 && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
              <div className="col-12">
                <div className="mb-3 col-md-6">
                  <label htmlFor="list" className="form-label">
                    List 1
                  </label>
                  {list1.map((item, index) => (
                    <div className="mt-2" key={index}>
                      <div key={index} className="d-flex align-items-center">
                        <TextEditor
                          control={control}
                          name={`list1_${index + 1}`}
                          defaultValue={getAssessment.data.data.list1[index]}
                          placeholder="List"
                          {...register(`list1_${index + 1}`, {
                            required: true,
                          })}
                        />
                        <span
                          onClick={() => handleAdd("list1")}
                          style={{ cursor: "pointer" }}
                          className="btn btn-success ms-2"
                        >
                          <Plus />
                        </span>
                        {list1?.length > 1 && (
                          <span
                            className="btn btn-danger ms-2"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleDelete(index, "list1")}
                          >
                            <X />
                          </span>
                        )}
                      </div>
                      {errors?.[`list1_${index + 1}`] && (
                        <p className="errorMessage">Field is required</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="mb-3 col-md-6">
                <label htmlFor="heading2" className="form-label">
                  Heading 2
                </label>
                <TextEditor
                  control={control}
                  defaultValue={getAssessment?.data?.data?.heading2}
                  placeholder="Heading 2"
                  {...register("heading2", {
                    required: true,
                  })}
                />
                {errors?.heading2 && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
              <div className="col-12">
                <div className="mb-3 col-md-6">
                  <label htmlFor="list2" className="form-label">
                    list 2
                  </label>

                  {list2.map((item, index) => (
                    <div className="mt-2" key={index}>
                      <div className="d-flex align-items-center">
                        <TextEditor
                          control={control}
                          name={`list2_${index + 1}`}
                          defaultValue={getAssessment.data.data.list2[index]}
                          placeholder="List"
                          {...register(`list2_${index + 1}`, {
                            required: true,
                          })}
                        />
                        <span
                          onClick={() => handleAdd("list2")}
                          style={{ cursor: "pointer" }}
                          className="btn btn-success ms-2"
                        >
                          <Plus />
                        </span>
                        {list2?.length > 1 && (
                          <span
                            className="btn btn-danger ms-2"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleDelete(index, "list2")}
                          >
                            <X />
                          </span>
                        )}
                      </div>
                      {errors?.[`list2_${index + 1}`] && (
                        <p className="errorMessage">Field is required</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="mb-3 col-md-6">
                <label htmlFor="heading3" className="form-label">
                  Heading 3
                </label>
                <TextEditor
                  control={control}
                  defaultValue={getAssessment?.data?.data?.heading3}
                  placeholder="Heading 3"
                  {...register("heading3", {
                    required: true,
                  })}
                />
                {errors?.heading3 && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
              <div className="col-12">
                <div className="mb-3 col-md-6">
                  <label htmlFor="list3" className="form-label">
                    list 3
                  </label>

                  {list3.map((item, index) => (
                    <div className="mt-2" key={index}>
                      <div key={index} className="d-flex align-items-center">
                        <TextEditor
                          control={control}
                          name={`list3_${index + 1}`}
                          defaultValue={getAssessment.data.data.list3[index]}
                          placeholder="List"
                          {...register(`list3_${index + 1}`, {
                            required: true,
                          })}
                        />
                        <span
                          onClick={() => handleAdd("list3")}
                          style={{ cursor: "pointer" }}
                          className="btn btn-success ms-2"
                        >
                          <Plus />
                        </span>
                        {list3?.length > 1 && (
                          <span
                            className="btn btn-danger ms-2"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleDelete(index, "list3")}
                          >
                            <X />
                          </span>
                        )}
                      </div>
                      {errors?.[`list3_${index + 1}`] && (
                        <p className="errorMessage">Field is required</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {editAssessment?.isPending ? (
              <div>
                <ButtonLoader />
              </div>
            ) : (
              <div className="my-3 col-12">
                <input type="submit" value="submit" className="input_submit" />
              </div>
            )}
          </form>
        </div>
      )}
    </>
  );
}
