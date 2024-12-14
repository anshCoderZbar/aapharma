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
import { GetUsefullLinksMutation } from "rest/footer";
import { DeleteUsefullLinksMutation } from "rest/footer";

export default function AllUsefullLink() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const allRoutes = GetUsefullLinksMutation();
  const deleteRoutes = DeleteUsefullLinksMutation();

  const handleDelete = (id) => {
    deleteRoutes.mutate(id);
  };

  const routesData = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-usefull-links/${row?.id}`)}
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
        row?.id === id && deleteRoutes?.isPending ? (
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
      <PageWrapper slug="all-usefull-links" name="Useful Links" />
      {allRoutes?.isError ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : null}

      {allRoutes?.isPending ? (
        <ComponentLoader />
      ) : (
        <>
          <div className="d-flex justify-content-end mb-4 add_catalog_btn mt-4">
            <Button onClick={() => navigate("/add-usefull-links")}>
              Add Routes
            </Button>
          </div>
          {allRoutes?.data?.data?.length >= 1 ? (
            <DataTableExtensions
              columns={routesData}
              data={allRoutes?.data?.data}
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
