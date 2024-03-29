import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { TextEditor } from "components/ui/TextEditor";
import { Plus, X } from "lucide-react";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { GetCapabilitiesOverviewMutation } from "rest/capabilities";
import { EditCapabilitiesOverviewMutation } from "rest/capabilities";

export default function CapabilitiesOverview() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    control,
  } = useForm();

  const [list, setList] = useState([{ list: "" }]);
  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const getCapabilities = GetCapabilitiesOverviewMutation();
  const editCapabilities = EditCapabilitiesOverviewMutation();

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getCapabilities?.data?.data?.heading;
    defaultValues.subHeading = getCapabilities?.data?.data?.subheading;
    defaultValues.description = getCapabilities?.data?.data?.description;
    const defaultInputs =
      getCapabilities?.data?.data?.list?.map((elm) => ({
        list: elm || "",
      })) || [];

    defaultInputs.length >= 1 && setList(defaultInputs);
    defaultInputs?.map((elm, i) => {
      defaultValues[`list_${i + 1}`] = elm.list;
    });

    setDefaultImg(getCapabilities?.data?.data?.image);

    reset(defaultValues);
  }, [getCapabilities?.data?.data]);

  const handleDeleteInput = (index) => {
    const newArray = [...list];
    newArray.splice(index, 1);
    setList(newArray);
    const listKey = `list_${index + 1}`;
    const newFormData = { ...getValues() };
    delete newFormData[listKey];
    reset(newFormData);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("subheading", data?.subHeading);
    formData.append("image", data?.image[0]);
    formData.append("description", data?.bottomDescription);
    list.forEach((_, index) => {
      const listKey = `list_${index + 1}`;
      formData.append("list[]", data[listKey]);
    });
    editCapabilities.mutate(formData);
  };
  return (
    <>
      <PageWrapper slug="capabilities-overview" name="Capabilities Overview" />
      {getCapabilities?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getCapabilities?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className=" mt-4 mb-3">
            <div className="row">
              <div className="mb-3 col-md-6">
                <label htmlFor="heading" className="form-label">
                  Heading
                </label>
                <FormInput
                  type="text"
                  name="heading"
                  placeholder="Heading "
                  {...register("heading", {
                    required: true,
                  })}
                />
                {errors?.heading && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="subHeading" className="form-label">
                  Sub Heading
                </label>
                <FormInput
                  type="text"
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
              <div className="mb-3 col-md-12">
                <label htmlFor="image" className="form-label">
                  Image (840px * 470px)
                </label>
                <FormInput
                  type="file"
                  name="image"
                  placeholder="image"
                  {...register("image", {
                    required: !perviewImages && !defaultImg,
                    onChange: (e) => handleChange(e),
                  })}
                />
                {errors?.image && (
                  <p className="errorMessage">Field is required</p>
                )}
                {perviewImages && (
                  <img
                    src={perviewImages}
                    alt="image Preview"
                    style={{ maxWidth: "300px", marginTop: "10px" }}
                  />
                )}
                {!perviewImages && defaultImg && (
                  <img
                    src={defaultImg}
                    alt="image Preview"
                    style={{ maxWidth: "300px", marginTop: "10px" }}
                  />
                )}
              </div>
              <div className="mb-3 col-md-6">
                <label htmlFor="list" className="form-label">
                  List
                </label>
                {list.map((item, index) => (
                  <div key={index} className="row">
                    <div key={index} className="col-10">
                      <FormInput
                        type="text"
                        name={`list_${index + 1}`}
                        extraClass="mt-2"
                        placeholder="List"
                        {...register(`list_${index + 1}`, {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="col-md-2 d-flex align-items-end">
                      {list?.length > 1 ? (
                        <div onClick={() => handleDeleteInput(index)}>
                          <span className="btn btn-danger btn_cross_vv bottom-0">
                            <X />
                          </span>
                        </div>
                      ) : null}
                      <div className="add_btn">
                        <span
                          onClick={() => setList([...list, { list: "" }])}
                          className="btn btn-success btn_cross_vv2 bottom-0"
                        >
                          <Plus />
                        </span>
                      </div>
                    </div>
                    {errors?.[`list_${index + 1}`] && (
                      <p className="errorMessage">Field is required</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="mb-3 col-12">
                <label htmlFor="bottomDescription" className="form-label">
                  Bottom Description
                </label>
                <TextEditor
                  control={control}
                  name={`bottomDescription`}
                  defaultValue={getCapabilities?.data?.data?.description}
                  {...register(`bottomDescription`, {
                    required: true,
                  })}
                />
                {errors?.bottomDescription && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
              {editCapabilities?.isPending ? (
                <div>
                  <ButtonLoader />
                </div>
              ) : (
                <div className="mb-3 col-12">
                  <input
                    type="submit"
                    value="submit"
                    className="input_submit"
                  />
                </div>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
}
