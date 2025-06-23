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
import { GetAllAdminMutation } from "rest/admin";
import { DeleteAdminMutation } from "rest/admin";

export default function AllAdmin() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const allAdmin = GetAllAdminMutation();
  const deleteAdmin = DeleteAdminMutation();

  const handleDelete = (id) => {
    deleteAdmin.mutate(id);
  };

  const routesData = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "email",
      selector: (row) => row.email,
    },
    // {
    //   name: "edit",
    //   cell: (row) => (
    //     <span
    //       className="editbtn"
    //       onClick={() => navigate(`/edit-routes/${row?.id}`)}
    //     >
    //       <Edit2 row={row} />
    //     </span>
    //   ),
    //   button: true.toString(),
    //   style: {},
    // },
    {
      name: "Delete",
      cell: (row) =>
        row?.id === id && deleteAdmin?.isPending ? (
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
      <PageWrapper slug="all-admin" name="All Admin" />
      {allAdmin?.isError ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : null}

      {allAdmin?.isPending ? (
        <ComponentLoader />
      ) : (
        <>
          <div className="d-flex justify-content-end mb-4 add_catalog_btn mt-4">
            <Button onClick={() => navigate("/add-admin")}>Add Admin</Button>
          </div>
          {allAdmin?.data?.data?.length >= 1 ? (
            <DataTableExtensions
              columns={routesData}
              data={allAdmin?.data?.data}
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
