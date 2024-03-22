import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DataTable from "react-data-table-component";
import "styles/main.css";

import { tableCustomStyles } from "app/mock/catalog";
import { PageWrapper } from "components/ui/PageWrapper";
import { FormInput } from "components/ui/FormInput";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";
import { Trash } from "lucide-react";
import { GetAllPartnerLogo } from "rest/partner";
import { CreatePartnerLogoMutation } from "rest/partner";
import { DeletePartnerLogoMutation } from "rest/partner";

export default function PartnerLogos() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState("");
  const [id, setId] = useState(0);

  const getPartnerLogos = GetAllPartnerLogo();
  const createLogo = CreatePartnerLogoMutation(setPreviewImages);
  const deleteLogo = DeletePartnerLogoMutation();

  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append("id", id);
    deleteLogo.mutate(formData);
  };

  const logoData = [
    {
      name: "Sr.No",
      selector: (_, i) => i + 1,
    },
    {
      name: "Image",
      cell: (row) => (
        <img src={row?.image} alt="image" style={{ maxWidth: "100px" }} />
      ),
    },
    {
      name: "Delete",
      cell: (row) =>
        row?.id === id && deleteLogo?.isPending ? (
          <ButtonLoader />
        ) : (
          <span
            style={{ cursor: "pointer" }}
            className="deletebtn"
            onClick={() => {
              handleDelete(row?.id);
              setId(row?.id);
            }}
          >
            <Trash row={row} />
          </span>
        ),
      button: true.toString(),
      style: {},
    },
  ];

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data?.logo[0]);
    createLogo?.mutate(formData);
  };

  return (
    <>
      <PageWrapper slug="partner-banner" name="Partner Banner" />
      <div className="home_banner_input">
        <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
          <div className="mb-3 col-md-6">
            <label htmlFor="logo" className="form-label">
              Logo
            </label>
            <FormInput
              type="file"
              name="logo"
              placeholder="logo"
              {...register("logo", {
                required: !perviewImages,
                onChange: (e) => handleChange(e),
              })}
            />
            {errors?.logo && <p className="errorMessage">Field is required</p>}
            {perviewImages && (
              <img
                src={perviewImages}
                alt="logo Preview"
                style={{ maxWidth: "300px", marginTop: "10px" }}
              />
            )}
          </div>

          {createLogo?.isPending ? (
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
      <br />
      {getPartnerLogos?.isError ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : null}

      {getPartnerLogos?.isPending ? (
        <ComponentLoader />
      ) : getPartnerLogos?.data?.data?.length >= 1 >= 1 ? (
        <DataTable
          columns={logoData}
          data={getPartnerLogos?.data?.data}
          pagination
          paginationPerPage={10}
          striped
          customStyles={tableCustomStyles}
        />
      ) : (
        <InfoComponent message={"Please add data to display"} />
      )}
    </>
  );
}
