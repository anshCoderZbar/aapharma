import React, { useState } from "react";
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
import { GetProjectManagementLists } from "rest/projectManagement";
import { DeleteProjectManagementList } from "rest/projectManagement";
import { ButtonLoader } from "components/Loader/ButtonLoader";

export default function ProjectManagementTabsDetails() {
  const navigate = useNavigate();

  const [id, setId] = useState("");

  const getProjectList = GetProjectManagementLists();
  const deleteList = DeleteProjectManagementList();

  const handleListDelete = (id) => {
    const formData = new FormData();
    formData.append("id", id);
    deleteList.mutate(formData);
  };

  const projectTabs = [
    {
      name: "Heading",
      selector: (row) => row.heading,
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
      cell: (row) =>
        deleteList.isPending && id === row?.id ? (
          <ButtonLoader />
        ) : (
          <span
            onClick={() => {
              handleListDelete(row?.id);
              setId(row?.id);
            }}
            className="deletebtn"
          >
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
      {getProjectList?.data?.data?.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      {getProjectList?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getProjectList?.isPending ? (
        <ComponentLoader />
      ) : (
        <DataTableExtensions
          columns={projectTabs}
          data={getProjectList?.data?.data}
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
