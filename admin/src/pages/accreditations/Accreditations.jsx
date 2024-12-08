import React, { useState } from "react";
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";

import { PageWrapper } from "components/ui/PageWrapper";
import { Edit2, Trash } from "lucide-react";
import { tableCustomStyles } from "app/mock/catalog";
import { useNavigate } from "react-router-dom";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";
import { Button } from "components/ui/Button";
import { GetAllAccreditationMutation } from "rest/accreditation";
import { DeleteAccreditationMutation } from "rest/accreditation";
import { ButtonLoader } from "components/Loader/ButtonLoader";

export default function Accreditations() {
  const navigate = useNavigate();
  const getAccreditations = GetAllAccreditationMutation();
  const [id, setId] = useState("");
  const deleteAcceditations = DeleteAccreditationMutation();

  const accreditationTabs = [
    {
      name: "Description",
      selector: (row) => (
        <div
          dangerouslySetInnerHTML={{
            __html:
              row.description?.length >= 100
                ? row.description.slice(0, 100) + "..."
                : row.description,
          }}
        />
      ),
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
          onClick={() => navigate(`/edit-accreditations/${row?.id}`)}
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
        row?.id === id && deleteAcceditations?.isPending ? (
          <ButtonLoader />
        ) : (
          <span
            className="deletebtn"
            onClick={() => {
              deleteAcceditations.mutate(row?.id);
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
      <PageWrapper slug="accreditations" name="Accreditations" />
      <div className="d-flex justify-content-end mb-4 add_catalog_btn mt-4">
        <Button onClick={() => navigate("/add-accreditations")}>
          Add Accreditations
        </Button>
      </div>
      {getAccreditations?.data?.data?.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      {getAccreditations?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getAccreditations?.isPending ? (
        <ComponentLoader />
      ) : (
        <DataTableExtensions
          columns={accreditationTabs}
          data={getAccreditations?.data?.data}
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
