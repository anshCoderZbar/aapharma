import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { Plus, X } from "lucide-react";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { GetAnalyticalInstrumentationMutation } from "rest/capabilities";
import { EditAnalyticalInstrumentationMutation } from "rest/capabilities";
import { TextEditor } from "components/ui/TextEditor";

export default function AnalyticalInstrumentation() {
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

  const getAnalyticalInstruments = GetAnalyticalInstrumentationMutation();
  const editAnalyticalInstruments = EditAnalyticalInstrumentationMutation();

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getAnalyticalInstruments?.data?.data?.heading;
    const defaultInputs =
      getAnalyticalInstruments?.data?.data?.list?.map((elm) => ({
        list: elm || "",
      })) || [];
    defaultInputs.length >= 1 && setList(defaultInputs);
    defaultInputs?.map((elm, i) => {
      defaultValues[`list_${i + 1}`] = elm.list;
    });

    setDefaultImg(getAnalyticalInstruments?.data?.data?.image);
    reset(defaultValues);
  }, [getAnalyticalInstruments?.data?.data]);

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
    formData.append("image", data?.image[0]);
    list.forEach((_, index) => {
      const listKey = `list_${index + 1}`;
      formData.append("list[]", data[listKey]);
    });
    editAnalyticalInstruments.mutate(formData);
  };
  return (
    <>
      <PageWrapper
        slug="analytical-instrumentation-description"
        name="Analytical Instrumentation Description"
      />
      {getAnalyticalInstruments?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getAnalyticalInstruments?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className=" mt-4 mb-3">
            <div className="row">
              <div className="mb-3 col-12">
                <label htmlFor="heading" className="form-label">
                  Description
                </label>
                <TextEditor
                  type="text"
                  name="heading"
                  placeholder="Heading "
                  control={control}
                  {...register("heading", {
                    required: true,
                  })}
                />
                {errors?.heading && (
                  <p className="errorMessage">Field is required</p>
                )}
              </div>
              <div className="mb-3 col-md-6 d-none">
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
              <div className="mb-3 col-md-6 d-none">
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
              {editAnalyticalInstruments?.isPending ? (
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
