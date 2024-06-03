import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";

import { Edit2, Trash } from "lucide-react";
import { PageWrapper } from "components/ui/PageWrapper";
import { tableCustomStyles } from "app/mock/catalog";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";
import { Button } from "components/ui/Button";
import { ButtonLoader } from "components/Loader/ButtonLoader";

import {
  DeleteProcessTabsMutation,
  GetProcessTabsMutation,
} from "rest/ProcessResearchAndDevelopment";

export default function ProcessBottomSection() {
  const navigate = useNavigate();
  const allTabs = GetProcessTabsMutation();
  const deleteTabs = DeleteProcessTabsMutation();

  const [id, setId] = useState(-1);

  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append("id", id);
    deleteTabs.mutate(formData);
  };

  const sectionTabs = [
    {
      name: "Heading",
      selector: (row) => row.heading,
    },
    {
      name: "Description",
      cell: (row) => (
        <div
          className="timeline_desc"
          dangerouslySetInnerHTML={{
            __html: row?.description,
          }}
        />
      ),
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-process-tab/${row?.id}`)}
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
        deleteTabs.isPending && row.id === id ? (
          <ButtonLoader />
        ) : (
          <span
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

  return (
    <>
      <PageWrapper
        slug="process-bottom-section"
        name="Process Bottom Section"
      />
      <div className="d-flex justify-content-end mb-4 add_catalog_btn">
        <Button onClick={() => navigate("/add-process-tab")}>
          Add Product
        </Button>
      </div>
      {allTabs?.data?.data?.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      {allTabs?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {allTabs?.isPending ? (
        <ComponentLoader />
      ) : (
        <DataTableExtensions
          columns={sectionTabs}
          data={allTabs?.data?.data}
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
  );
}
