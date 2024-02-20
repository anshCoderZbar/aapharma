import React, { useState } from "react";

import { PageWrapper } from "components/ui/PageWrapper";
import { useNavigate } from "react-router-dom";
import { Edit2Icon, Trash2 } from "lucide-react";

import { ComponentLoader } from "components/Loader/ComponentLoader";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { InfoComponent } from "components/Alerts/Info";
import { ErrorComponent } from "components/Alerts/Error";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import DataTable from "react-data-table-component";
import { tableCustomStyles } from "app/mock/catalog";
import { Button } from "components/ui/Button";
import { AllTestimonialMutation2 } from "rest/testimonial";
import { DeleteTestimonial2 } from "rest/testimonial";

export default function AllTestimonial() {
  const navigate = useNavigate();

  const [id, setId] = useState("");

  const allTestimonail = AllTestimonialMutation2();
  const deleteTestimonial = DeleteTestimonial2();

  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append("testimonialId", id);
    deleteTestimonial.mutate(formData);
  };

  const testimonialColumns = [
    {
      name: "Author Name",
      selector: (row) =>
        row.testimonials.map((elm, i) => i === 0 && elm?.authorName),
    },
    {
      name: "Author Postiton",
      selector: (row) =>
        row.testimonials.map((elm, i) => i === 0 && elm?.authorPosition),
    },
    {
      name: "Clients Logo",
      cell: (row) => (
        <img src={row?.clientImage} alt="client" style={{ maxWidth: "50px" }} />
      ),
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-testimonials/${row?.id}`)}
        >
          <Edit2Icon row={row} />
        </span>
      ),
      button: true.toString(),
    },
    {
      name: "Delete",
      cell: (row) =>
        row?.id === id && deleteTestimonial?.isPending ? (
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
    <>
      <PageWrapper slug="all-testimonial" name="All Testimonial" />
      {allTestimonail?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {allTestimonail?.data?.data?.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      {allTestimonail?.isPending ? (
        <ComponentLoader />
      ) : (
        <>
          <div className="d-flex justify-content-end mb-4 add_catalog_btn ">
            <Button onClick={() => navigate("/create-testimonials")}>
              Add Testimonial
            </Button>
          </div>
          <DataTableExtensions
            columns={testimonialColumns}
            data={allTestimonail?.data?.data?.sort((a, b) => b?.id - a?.id)}
            filterPlaceholder="Search"
          >
            <DataTable
              pagination
              paginationPerPage={10}
              striped
              customStyles={tableCustomStyles}
            />
          </DataTableExtensions>
        </>
      )}
    </>
  );
}
