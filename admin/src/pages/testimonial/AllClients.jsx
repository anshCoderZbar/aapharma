import React, { useState } from "react";

import { FormInput } from "components/ui/FormInput";
import { PageWrapper } from "components/ui/PageWrapper";
import { useForm } from "react-hook-form";
import DataTable from "react-data-table-component";
import { tableCustomStyles } from "app/mock/catalog";
import { useNavigate } from "react-router-dom";
import { Edit2, Trash2 } from "lucide-react";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { DeleteClientMutation } from "rest/home";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";
import { CreateTestimonialClientMutation } from "rest/testimonial";
import { AllTestimonialClientMutation } from "rest/testimonial";
import { DeleteTestimonialClientMutation } from "rest/testimonial";

export default function AllClient() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const clientMutation = CreateTestimonialClientMutation(reset);
  const allClients = AllTestimonialClientMutation();
  console.log("🚀 ~ AllClient ~ allClients:", allClients);
  const deleteClient = DeleteTestimonialClientMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("test_logo", data?.image[0]);
    clientMutation.mutate(formData);
  };

  const handleDelete = (id) => {
    deleteClient.mutate(id);
  };

  const clientColumns = [
    {
      name: "Sr No",
      selector: (_, i) => i + 1,
    },
    {
      name: "clients",
      cell: (row) => (
        <img
          src={"https://coderzbar.net/pharmacy_dev" + "/" + row?.test_logo}
          alt="client"
          style={{ maxWidth: "50px" }}
        />
      ),
    },
    {
      name: "Delete",
      cell: (row) =>
        row?.id === id && deleteClient?.isPending ? (
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
    <div className="client_page">
      <PageWrapper slug="home-client" name="All Client" />
      {allClients?.data?.data?.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      {allClients?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      <div className="home_banner_input mb-3">
        <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
          <h2 className="heading_main">Add Clients</h2>
          <div className="mb-3 col-md-6">
            <label htmlFor="mainHeading" className="form-label">
              Image (150px * 100px)
            </label>
            <FormInput
              type="file"
              name="image"
              placeholder="image"
              {...register("image", { required: true })}
            />
            {errors?.image && (
              <p className="errorMessage"> Image is required</p>
            )}
          </div>
          {clientMutation?.isPending ? (
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

      {allClients?.isPending ? (
        <ComponentLoader />
      ) : (
        <DataTable
          columns={clientColumns}
          data={allClients?.data?.data?.sort((a, b) => b?.id - a?.id)}
          pagination
          paginationPerPage={10}
          striped
          customStyles={tableCustomStyles}
        />
      )}
    </div>
  );
}
