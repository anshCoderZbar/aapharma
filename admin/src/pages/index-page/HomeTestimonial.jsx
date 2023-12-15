import React, { useState } from "react";
import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";
import { Button } from "components/ui/Button";
import { useNavigate } from "react-router-dom";
import { AllTestimonialMutation } from "rest/home";
import DataTable from "react-data-table-component";
import { tableCustomStyles } from "app/mock/catalog";
import { Edit2, Trash2 } from "lucide-react";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { DeleteTestimonial } from "rest/home";

export default function HomeTestimonial() {
  const navigate = useNavigate();

  const [id, setId] = useState("");

  const allTestimonail = AllTestimonialMutation();

  const deleteClient = DeleteTestimonial();
  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append("testimonialId", id);
    deleteClient.mutate(formData);
  };

  const testimonialColumns = [
    {
      name: "Author Name",
      selector: (row) => row.authorName,
    },
    {
      name: "Author Postiton",
      selector: (row) => row.authorPosition,
    },
    {
      name: "Clients Image",
      cell: (row) => (
        <img src={row?.clientImage} alt="client" style={{ maxWidth: "50px" }} />
      ),
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/home-edit-testimonial/${row?.id}`)}
        >
          <Edit2 row={row} />
        </span>
      ),
      button: true.toString(),
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
    <div className="home_page_testimonial">
      <PageWrapper slug="home-testimonial" name="Home Testimonial" />
      <div className="d-flex justify-content-end mb-4 add_catalog_btn ">
        <Button onClick={() => navigate("/home-add-testimonial")}>
          Add Testimonial
        </Button>
      </div>
      <DataTable
        columns={testimonialColumns}
        data={allTestimonail?.data?.data?.sort((a, b) => b?.id - a?.id)}
        pagination
        paginationPerPage={5}
        striped
        customStyles={tableCustomStyles}
      />
    </div>
  );
}
