import React, { useState } from "react";

import { PageWrapper } from "components/ui/PageWrapper";

import DataTable from "react-data-table-component";
import { tableCustomStyles } from "app/mock/catalog";
import { Trash2 } from "lucide-react";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { GetResumes, DeleteResumes } from "rest/employment";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { InfoComponent } from "components/Alerts/Info";
import { ErrorComponent } from "components/Alerts/Error";

export default function EmploymentApplicants() {
  const [id, setId] = useState("");
  const getAllApplicants = GetResumes();

  const deleteApplicant = DeleteResumes();

  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append("id", id);
    deleteApplicant.mutate(formData);
  };

  const applicantsColumns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Resume",
      cell: (row) => (
        <a
          href={row?.resumefile}
          target="_blank"
          className="text-decoration-underline"
        >
          View
        </a>
      ),
    },
    {
      name: "Delete",
      cell: (row) =>
        row?.id === id && deleteApplicant?.isPending ? (
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
      <PageWrapper slug="employment-applicants" name="Applicants" />
      {getAllApplicants?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getAllApplicants?.data?.data?.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      {getAllApplicants?.isPending ? (
        <ComponentLoader />
      ) : (
        getAllApplicants?.data?.data?.length >= 1 && (
          <DataTableExtensions
            columns={applicantsColumns}
            data={getAllApplicants?.data?.data?.sort((a, b) => b?.id - a?.id)}
            filterPlaceholder="Search"
          >
            <DataTable
              pagination
              paginationPerPage={10}
              striped
              customStyles={tableCustomStyles}
            />
          </DataTableExtensions>
        )
      )}
    </>
  );
}
