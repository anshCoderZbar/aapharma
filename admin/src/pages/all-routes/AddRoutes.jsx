import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { PageWrapper } from "components/ui/PageWrapper";
import { ButtonLoader } from "components/Loader/ButtonLoader";

import { Plus, X } from "lucide-react";
import { CreateRoutesMutation } from "rest/allRoutes";

export default function AddRoutes() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  const createRoutes = CreateRoutesMutation();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");
  const [inputs, setInputs] = useState([
    {
      subMenu: "",
      slug: "",
    },
  ]);

  const handleChange = (e) => {
    const files = e?.target?.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  const handleAddInputs = () => {
    setInputs([...inputs, { subMenu: "", slug: "" }]);
  };

  const handleDeleteInput = (index) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
    const subMenuKey = `subMenu_${index + 1}`;
    const slugKey = `slug_${index + 1}`;
    const newFormData = { ...getValues() };
    delete newFormData[subMenuKey];
    delete newFormData[slugKey];
    reset(newFormData);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("sortNo", data?.sortNo);
    formData.append("Name", data?.name);
    formData.append("Icon", data?.image[0]);
    inputs.forEach((_, index) => {
      const subMenuKey = `subMenu_${index + 1}`;
      const slugKey = `slug_${index + 1}`;
      formData.append("SubMenuArray[]", data[subMenuKey]);
      formData.append("SubMenuSlug[]", data[slugKey]);
    });
    createRoutes.mutate(formData);
  };

  return (
    <div className="resources_page">
      <PageWrapper slug="all-routes" name="All Routes" />

      <div className="home_banner_input">
        <form onSubmit={handleSubmit(onSubmit)} className=" mt-4 mb-3">
          <div className="row">
            <div className="mb-3 col-md-6">
              <label htmlFor="sortNo" className="form-label">
                Sort No
              </label>
              <FormInput
                type="number"
                name="sortNo"
                placeholder="Sort No"
                {...register("sortNo", { required: true })}
              />
              {errors?.sortNo && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <FormInput
                type="text"
                name="name"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors?.name && (
                <p className="errorMessage">Field is required</p>
              )}
            </div>
            <div className="mb-3 col-md-12">
              <label htmlFor="image" className="form-label">
                Icon
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

            {inputs?.length >= 1 &&
              inputs?.map((_, index) => {
                return (
                  <div key={index} className="row">
                    <div className="mb-3 col-md-5">
                      <label
                        htmlFor={`subMenu_${index + 1}`}
                        className="form-label"
                      >
                        Sub Menu
                      </label>
                      <FormInput
                        type="text"
                        name={`subMenu_${index + 1}`}
                        placeholder="Sub Menu"
                        {...register(`subMenu_${index + 1}`, {
                          required: true,
                        })}
                      />
                      {errors[`subMenu_${index + 1}`] && (
                        <p className="errorMessage">field is required</p>
                      )}
                    </div>
                    <div className="mb-3 col-md-5">
                      <label
                        htmlFor={`slug_${index + 1}`}
                        className="form-label"
                      >
                        Slug
                      </label>
                      <FormInput
                        type="text"
                        placeholder="slug"
                        name={`slug_${index + 1}`}
                        {...register(`slug_${index + 1}`, {
                          required: true,
                        })}
                      />
                      {errors[`slug_${index + 1}`] && (
                        <p className="errorMessage">field is required</p>
                      )}
                    </div>
                    <div className="col-md-2 d-flex align-items-end">
                      {inputs?.length > 1 ? (
                        <div>
                          <span
                            onClick={() => handleDeleteInput(index)}
                            className="btn btn-danger btn_cross_vv"
                          >
                            <X />
                          </span>
                        </div>
                      ) : null}
                      <div className="add_btn">
                        <span
                          onClick={handleAddInputs}
                          className="btn btn-success btn_cross_vv2"
                        >
                          <Plus />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="row">
            <div className="col-6">
              {createRoutes?.isPending ? (
                <ButtonLoader />
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
          </div>
        </form>
      </div>
    </div>
  );
}
