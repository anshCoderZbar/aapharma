import React, { useState } from "react";

import { FormInput } from "components/ui/FormInput";
import { PageWrapper } from "components/ui/PageWrapper";
import { useForm } from "react-hook-form";
import { CreateClientMutation } from "rest/home";
import DataTable from "react-data-table-component";
import { tableCustomStyles } from "app/mock/catalog";
import { AllClientMutation } from "rest/home";
import { useNavigate } from "react-router-dom";
import { Edit2, Trash2 } from "lucide-react";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { DeleteClientMutation } from "rest/home";
import { ComponentLoader } from "components/Loader/ComponentLoader";

export default function HomeClient() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const clientMutation = CreateClientMutation(reset);
  const allClients = AllClientMutation();
  const deleteClient = DeleteClientMutation();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data?.image[0]);
    clientMutation.mutate(formData);
  };

  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append("clientId", id);
    deleteClient.mutate(formData);
  };

  const clientColumns = [
    {
      name: "Sr No",
      selector: (_, i) => i + 1,
    },
    {
      name: "clients",
      cell: (row) => (
        <img src={row?.image} alt="client" style={{ maxWidth: "50px" }} />
      ),
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-home-clients/${row?.id}`)}
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
      <PageWrapper slug="home-client" name="Home Client" />
      <div className="home_banner_input mb-3">
        <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
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
