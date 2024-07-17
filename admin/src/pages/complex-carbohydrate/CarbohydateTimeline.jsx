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
import { AllCarbohydrateTimeline } from "rest/complexCarbohydrate";
import { DeleteCarbohydrateTimeline } from "rest/complexCarbohydrate";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";

export default function CarbohydateTimeline() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const allTimelines = AllCarbohydrateTimeline();
  const deleteTimeline = DeleteCarbohydrateTimeline();

  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append("id", id);
    deleteTimeline.mutate(formData);
  };

  const timelineData = [
    {
      name: "Sort No",
      selector: (row) => row.sortNo,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },

    {
      name: "Image",
      cell: (row) =>
        (row?.image || row?.image2) && (
          <img
            src={row?.image ? row?.image : row?.image2}
            alt="client"
            style={{ maxWidth: "100px" }}
          />
        ),
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-carbohydrate-timeline/${row?.id}`)}
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
        row?.id === id && deleteTimeline?.isPending ? (
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
      <PageWrapper slug="carbohydrate-timeline" name="Carbohydrate Timeline" />
      {allTimelines?.error ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : null}

      {allTimelines?.isPending ? (
        <ComponentLoader />
      ) : (
        <>
          <div className="d-flex justify-content-end mb-4 add_catalog_btn mt-4">
            <Button onClick={() => navigate("/add-carbohydrate-timeline")}>
              Add Timeline
            </Button>
          </div>
          {allTimelines?.data?.data.length >= 1 ? (
            <DataTableExtensions
              columns={timelineData}
              data={allTimelines?.data?.data}
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
