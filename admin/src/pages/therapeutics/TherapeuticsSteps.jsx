import React, { useEffect, useState } from "react";
import { PageWrapper } from "components/ui/PageWrapper";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { tableCustomStyles } from "app/mock/catalog";
import { Edit2 } from "lucide-react";
import { GetAllTherapeuticsSteps } from "rest/therapeutics";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { FormInput } from "components/ui/FormInput";
import { GetServiceImage } from "rest/therapeutics";
import { EditServiceImage } from "rest/therapeutics";

export default function TherapeuticsSteps() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [perviewImages, setPreviewImages] = useState("");
  const [defaultImg, setDefaultImg] = useState("");

  const getServiceImage = GetServiceImage();
  const editServiceImage = EditServiceImage();

  useEffect(() => {
    setDefaultImg(getServiceImage?.data?.data?.featuredImage);
  }, [getServiceImage?.data?.data]);

  const getAllSteps = GetAllTherapeuticsSteps();

  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      const imageUrl = URL.createObjectURL(files);
      setPreviewImages(imageUrl);
    }
  };

  const stepsColumns = [
    {
      name: "heading",
      selector: (row) => row.title,
    },
    {
      name: "Step",
      selector: (row) => row.buttonText,
    },
    {
      name: "Icon",
      cell: (row) =>
        row?.icon && <img src={row?.icon} style={{ maxWidth: "50px" }} />,
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-therapeutics-steps/${row?.id}`)}
        >
          <Edit2 row={row} />
        </span>
      ),
      button: true.toString(),
      style: {},
    },
  ];

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("featuredImage", data?.featuredImage[0]);
    editServiceImage.mutate(formData);
  };

  return (
    <div className="therapeutics_page">
      <PageWrapper slug="therapeutics-steps" name="Steps" />

      <div className="input_banners  mb-3">
        <form onSubmit={handleSubmit(onSubmit)} className="row mt-4 mb-3">
          <div className="mb-3 col-md-6">
            <label htmlFor="featuredImage" className="form-label">
              Featured Image (600px * 600px)
            </label>
            <FormInput
              type="file"
              name="featuredImage"
              placeholder="featuredImage"
              {...register("featuredImage", {
                required: !perviewImages && !defaultImg,
                onChange: (e) => handleChange(e),
              })}
            />
            {errors?.featuredImage && (
              <p className="errorMessage">Field is required</p>
            )}
            {perviewImages && (
              <img
                src={perviewImages}
                alt="therapeutics banner Preview"
                style={{ maxWidth: "200px", marginTop: "10px" }}
              />
            )}
            {!perviewImages && defaultImg && (
              <img
                src={defaultImg}
                alt="therapeutics banner Preview"
                style={{ maxWidth: "200px", marginTop: "10px" }}
              />
            )}
          </div>
          {editServiceImage?.isPending ? (
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
      {getAllSteps?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getAllSteps?.isPending ? (
        <ComponentLoader />
      ) : (
        <DataTableExtensions
          columns={stepsColumns}
          data={getAllSteps?.data?.data?.sort((a, b) => b?.id - a?.id)}
          filterPlaceholder="Search"
        >
          <DataTable
            pagination
            paginationPerPage={10}
            striped
            customStyles={tableCustomStyles}
          />
        </DataTableExtensions>
      )}
    </div>
  );
}
