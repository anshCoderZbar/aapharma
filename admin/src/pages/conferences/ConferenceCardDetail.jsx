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
import { AllLabEquipmentMutation } from "rest/capabilities";
import { DeleteLabEquipmentMutation } from "rest/capabilities";
import { GetConferenceCardsMutation } from "rest/conferences";
import { DeleteConferenceCardsMutation } from "rest/conferences";

export default function ConferenceCardDetails() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const allCard = GetConferenceCardsMutation();
  const deleteCard = DeleteConferenceCardsMutation();

  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append("id", id);
    deleteCard.mutate(formData);
  };

  const timelineData = [
    {
      name: "Heading",
      selector: (row) => row.heading,
    },

    {
      name: "Image",
      cell: (row) => (
        <img src={row?.image} alt="row image" style={{ maxWidth: "100px" }} />
      ),
    },
    {
      name: "Logo",
      cell: (row) => (
        <img src={row?.logo} alt="logo" style={{ maxWidth: "100px" }} />
      ),
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-conference-cards/${row?.id}`)}
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
        row?.id === id && deleteCard?.isPending ? (
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
      <PageWrapper slug="conference-cards" name="Conference Cards" />
      {allCard?.isError ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : null}

      {allCard?.isPending ? (
        <ComponentLoader />
      ) : (
        <>
          <div className="d-flex justify-content-end mb-4 add_catalog_btn mt-4">
            <Button onClick={() => navigate("/add-conference-cards")}>
              Add Card
            </Button>
          </div>
          {allCard?.data?.data?.length >= 1 ? (
            <DataTableExtensions
              columns={timelineData}
              data={allCard?.data?.data}
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
