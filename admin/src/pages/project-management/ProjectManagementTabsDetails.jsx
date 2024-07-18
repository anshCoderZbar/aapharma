import React from "react";
import { useNavigate } from "react-router-dom";
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";

import "styles/main.css";
import { PageWrapper } from "components/ui/PageWrapper";
import { Button } from "components/ui/Button";
import { tableCustomStyles } from "app/mock/catalog";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";
import { Edit2, Trash } from "lucide-react";

export default function ProjectManagementTabsDetails() {
  const navigate = useNavigate();

  const projectTabs = [
    {
      name: "Heading",
      selector: (row) => row.tabHeading,
    },
    {
      name: "Image",
      cell: (row) => (
        <img src={row?.image} alt="client" style={{ maxWidth: "100px" }} />
      ),
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-project-list/${row?.id}`)}
        >
          <Edit2 row={row} />
        </span>
      ),
      button: true.toString(),
    },

    {
      name: "edit",
      cell: (row) => (
        <span className="deleteBtn">
          <Trash row={row} />
        </span>
      ),
      button: true.toString(),
    },
  ];
  return (
    <>
      <PageWrapper
        slug="project-management-Lists"
        name="Project Management List"
      />
      <div className="d-flex justify-content-end mb-4 add_catalog_btn">
        <Button onClick={() => navigate("/add-lists")}>Add Product</Button>
      </div>
      {2 < 1 ? <InfoComponent message={"Please Add Data to Display"} /> : null}
      {false && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {false ? (
        <ComponentLoader />
      ) : (
        <DataTableExtensions
          columns={projectTabs}
          data={[]}
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
