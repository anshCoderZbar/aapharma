import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FormInput } from "components/ui/FormInput";
import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";
import { TextEditor } from "components/ui/TextEditor";
import { HomeServicesHeadings } from "rest/home";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { GetHomeServicesHeadings } from "rest/home";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { Button } from "components/ui/Button";
import DataTable from "react-data-table-component";
import { tableCustomStyles } from "app/mock/catalog";
import { GetHomeAddServices } from "rest/home";
import { Edit2, Trash2 } from "lucide-react";
import { DeleteService } from "rest/home";

export default function HomeService() {
  const navigate = useNavigate();
  const homeServicesHeadings = HomeServicesHeadings();
  const getHomeServicesHeadings = GetHomeServicesHeadings();
  const allServices = GetHomeAddServices();
  const [id, setId] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  useEffect(() => {
    const defaultValues = {};
    defaultValues.heading = getHomeServicesHeadings?.data?.data?.heading;
    defaultValues.description =
      getHomeServicesHeadings?.data?.data?.description;
    reset(defaultValues);
  }, [getHomeServicesHeadings?.data?.data]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("heading", data?.heading);
    formData.append("description", data?.description);
    homeServicesHeadings.mutate(formData);
  };

  const deleteServices = DeleteService();
  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append("serviceId", id);
    deleteServices.mutate(formData);
  };

  const serviceColumns = [
    {
      name: "Sr No",
      selector: (row, i) => i + 1,
    },
    {
      name: "heading",
      selector: (row) => row.heading,
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-home-service/${row?.id}`)}
        >
          <Edit2 row={row} />
        </span>
      ),
      button: true.toString(),
      style: {},
    },
    {
      name: "Delete",
      cell: (row) =>
        row?.id === id && deleteServices?.isPending ? (
          <ButtonLoader />
        ) : (
          <span
            onClick={() => {
              handleDelete(row?.id);
              setId(row?.id);
            }}
            className="deletebtn"
          >
            <Trash2 row={row} />
          </span>
        ),
      button: "true",
    },
  ];

  return (
    <div className="home_service">
      <PageWrapper slug="home-services" name="Home Services" />
      {getHomeServicesHeadings?.isError && (
        <ErrorComponent message="OOPS! some error occured" />
      )}
      {getHomeServicesHeadings?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="home_banner_input">
          <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
            <div className="mb-3 col-md-6">
              <label htmlFor="mainHeading" className="form-label">
                Heading
              </label>
              <FormInput
                type="text"
                name="heading"
                placeholder="heading"
                {...register("heading", { required: true })}
              />
              {errors?.heading && (
                <p className="errorMessage"> Heading is required</p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor={`description`} className="form-label">
                Description
              </label>
              <TextEditor
                control={control}
                name={`description`}
                {...register(`description`, {
                  required: true,
                })}
              />
              {errors.description && (
                <p className="errorMessage">Description is required</p>
              )}
            </div>
            {homeServicesHeadings?.isPending ? (
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

      <div className="d-flex justify-content-end mb-4 add_catalog_btn mt-4">
        <Button onClick={() => navigate("/home-add-services")}>
          Add Services
        </Button>
      </div>
      <DataTable
        columns={serviceColumns}
        data={allServices?.data?.data?.sort((a, b) => b?.id - a?.id)}
        pagination
        paginationPerPage={5}
        striped
        customStyles={tableCustomStyles}
      />
    </div>
  );
}
