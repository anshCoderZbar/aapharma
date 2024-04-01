import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { Plus, X } from "lucide-react";
import "styles/main.css";
import { GetPartnerFifthCard } from "rest/partner";
import { EditPartnerFifthCard } from "rest/partner";

export default function PartnerFifthCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");
  const [list, setList] = useState([{ list: "" }]);

  const getFifthCard = GetPartnerFifthCard();
  const editPartnerCard = EditPartnerFifthCard();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getFifthCard?.data?.data?.heading;
    const defaultInputs =
      getFifthCard?.data?.data?.list?.map((elm) => ({
        list: elm || "",
      })) || [];

    defaultInputs.length >= 1 && setList(defaultInputs);
    defaultInputs?.map((elm, i) => {
      defaultValues[`list_${i + 1}`] = elm.list;
    });
    setDefaultImg(getFifthCard?.data?.data?.image);
    reset(defaultValues);
  }, [getFifthCard?.data?.data]);

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

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
    editPartnerCard.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="partner-cards" name="Partner Cards" />
      {getFifthCard?.isError && (
        <ErrorComponent message="OOPS ! something went wrong" />
      )}
      {getFifthCard?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-6">
              <label htmlFor="heading" className="form-label">
                Heading
              </label>
              <FormInput
                type="text"
                name="heading"
                placeholder="Heading"
                {...register("heading", { required: true })}
              />
              {errors?.heading && (
                <p className="errorMessage">Heading is required</p>
              )}
            </div>

            <div className="mb-3 col-md-6">
              <label htmlFor="image" className="form-label">
                Image (870px * 330px)
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
            {editPartnerCard?.isPending ? (
              <div>
                <ButtonLoader />
              </div>
            ) : (
              <div className="mb-3 col-12">
                <input type="submit" value="submit" className="input_submit" />
              </div>
            )}
          </form>
        </div>
      )}
    </>
  );
}
