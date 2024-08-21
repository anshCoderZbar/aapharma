import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";

import { tableCustomStyles } from "app/mock/catalog";

import "styles/main.css";
import "react-data-table-component-extensions/dist/index.css";
import { PageWrapper } from "components/ui/PageWrapper";
import { Edit2, Trash2 } from "lucide-react";
import { Button } from "components/ui/Button";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";
import { AllOverviewTabsMutation } from "rest/overview";
import { DeleteOverviewTabsMutation } from "rest/overview";

export default function OverviewTabs() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const allTabs = AllOverviewTabsMutation();
  const deleteTabs = DeleteOverviewTabsMutation();

  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append("id", id);
    deleteTabs.mutate(formData);
  };

  const overviewTabsData = [
    {
      name: "S.No",
      selector: (_, i) => i + 1,
    },
    {
      name: "Heading",
      selector: (row) => row.heading,
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-overview-tabs/${row?.id}`)}
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
            className="deletebtn"
            onClick={() => {
              handleDelete(row?.id);
              setId(row?.id);
            }}
          >
            <Trash2 row={row} />
          </span>
        ),
      button: true.toString(),
      style: {},
    },
  ];
  return (
    <>
      <PageWrapper slug="overview-tabs" name="Overview Tabs" />
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
