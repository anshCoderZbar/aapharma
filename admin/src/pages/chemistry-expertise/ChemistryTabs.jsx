import React, { useState } from "react";

import { PageWrapper } from "components/ui/PageWrapper";
import { Button } from "components/ui/Button";

import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";

import { Edit2, Trash } from "lucide-react";
import { tableCustomStyles } from "app/mock/catalog";
import { useNavigate } from "react-router-dom";
import "styles/main.css";
import "react-data-table-component-extensions/dist/index.css";

import { GetChemistryTabsMutation } from "rest/chemicalExperties";
import { DeleteChemistryTabsMutation } from "rest/chemicalExperties";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { InfoComponent } from "components/Alerts/Info";
import { ErrorComponent } from "components/Alerts/Error";

export default function ChemistryTabs() {
  const navigate = useNavigate();

  const getAllTabs = GetChemistryTabsMutation();
  const deleteTabs = DeleteChemistryTabsMutation();
  const [id, setId] = useState("");

  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append("id", id);
    deleteTabs.mutate(formData);
  };

  const chemistryTab = [
    {
      name: "Sort No",
      selector: (row) => row.sortNo,
    },
    {
      name: "Heading",
      selector: (row) => row.heading,
    },
    {
      name: "description",
      cell: (row) => (
        <div
          className="timeline_desc"
          dangerouslySetInnerHTML={{
            __html:
              row?.description.length >= 70
                ? row?.description.slice(0, 70) + "..."
                : row?.description,
          }}
        />
      ),
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-chemistry-tabs/${row?.id}`)}
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
        row?.id === id && deleteTabs?.isPending ? (
          <ButtonLoader />
        ) : (
          <span
            onClick={() => {
              handleDelete(row?.id);
              setId(row?.id);
            }}
            className="deletebtn"
          >
            <Trash row={row} />
          </span>
        ),
      button: true.toString(),
      style: {},
    },
  ];

  return (
    <div className="chemistry_page">
      <PageWrapper slug="chemistry-tabs" name="Chemistry Tabs" />

      {getAllTabs?.isPending ? (
        <ComponentLoader />
      ) : (
        <>
          <div className="d-flex justify-content-end mb-4 add_catalog_btn ">
            <Button onClick={() => navigate("/add-chemistry-tabs")}>
              Add Tabs
            </Button>
          </div>

          {getAllTabs?.data?.data?.length >= 1 && (
            <DataTableExtensions
              columns={chemistryTab}
              data={getAllTabs?.data?.data}
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
        </>
      )}
      {getAllTabs?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getAllTabs?.data?.data?.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
    </div>
  );
}
