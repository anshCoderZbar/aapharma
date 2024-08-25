import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";

import { tableCustomStyles } from "app/mock/catalog";

import "styles/main.css";
import "react-data-table-component-extensions/dist/index.css";
import { PageWrapper } from "components/ui/PageWrapper";
import { Edit2 } from "lucide-react";
import { Button } from "components/ui/Button";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";
import { GetAllResearchCollaborationAcademia } from "rest/researchCollaboration";

export default function ResearchCollaborationAcademia() {
  const navigate = useNavigate();

  const allTabs = GetAllResearchCollaborationAcademia();

  const overviewTabsData = [
    {
      name: "S.No",
      selector: (_, i) => i + 1,
    },
    {
      name: "description",
      selector: (row) => row.description,
    },
    {
      name: "Image",
      cell: (row) => (
        <img
          src={row?.image}
          alt="lab equipment"
          style={{ maxWidth: "100px" }}
        />
      ),
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() =>
            navigate(`/edit-research-collaboration-academia/${row?.id}`)
          }
        >
          <Edit2 row={row} />
        </span>
      ),
      button: true.toString(),
      style: {},
    },
  ];
  return (
    <>
      <PageWrapper slug="research-collaboration-academia" name="Academia" />
      {allTabs?.isError ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : null}

      {allTabs?.isPending ? (
        <ComponentLoader />
      ) : (
        <>
          <div className="d-flex justify-content-end mb-4 add_catalog_btn mt-4">
            <Button onClick={() => navigate("/add-overview-tabs")}>
              Add Tabs
            </Button>
          </div>
          {allTabs?.data?.data?.length >= 1 ? (
            <DataTableExtensions
              columns={overviewTabsData}
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
          ) : (
            <InfoComponent message={"Please Add Data to Display"} />
          )}
        </>
      )}
    </>
  );
}
