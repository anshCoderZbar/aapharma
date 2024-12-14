import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import "styles/main.css";
import { FormInput } from "components/ui/FormInput";
import { PageWrapper } from "components/ui/PageWrapper";
import { ButtonLoader } from "components/Loader/ButtonLoader";

import { GetUsefullLinksMutation } from "rest/footer";
import { GetSingleMenuItemsMutation } from "rest/footer";
import { EditMenuItemsMutation } from "rest/footer";

export default function EditLinksMenuItems() {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const editRoutes = EditMenuItemsMutation(id);
  const allRoutes = GetUsefullLinksMutation();

  const singleMenu = GetSingleMenuItemsMutation(id);

  useEffect(() => {
    const defaultValues = {};
    defaultValues.menuTitleId = singleMenu?.data?.data?.menu_title_id;
    defaultValues.name = singleMenu?.data?.data?.label;
    defaultValues.url = singleMenu?.data?.data?.url;
    reset(defaultValues);
  }, [singleMenu?.data?.data]);

  const onSubmit = (data) => {
    const query = `menu_title_id=${data.menuTitleId}&label=${data.name}&url=${data.url}`;
    editRoutes.mutate(query);
  };

  return (
    <div className="resources_page">
      <PageWrapper slug="all-menu-items" name="Menu Items" />
      <div className="home_banner_input">
        <form onSubmit={handleSubmit(onSubmit)} className=" mt-4 mb-3">
          <div className="row">
            <div className="mb-3 col-md-6">
              <label htmlFor="name" className="form-label">
                Title
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
            <div className="mb-3 col-md-6">
              <label htmlFor="menuTitleId" className="form-label">
                Select Title
              </label>
              <select
                className="form-select text-capitalize"
                name="menuTitleId"
                aria-label="Default select example"
                {...register("menuTitleId")}
              >
                <option disabled value={""}>
                  Select Title
                </option>
                {allRoutes?.data?.data?.map((category, i) => {
                  return (
                    <option key={i} value={category?.id}>
                      {category?.title}
                    </option>
                  );
                })}
              </select>
              {errors?.subCategory && (
                <p className="errorMessage">{errors?.subCategory?.message}</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="url" className="form-label">
                URL
              </label>
              <FormInput
                type="text"
                name="url"
                placeholder="url"
                {...register("url", { required: true })}
              />
              {errors?.url && <p className="errorMessage">Field is required</p>}
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              {editRoutes?.isPending ? (
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