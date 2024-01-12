import React, { useState } from "react";

import { PageWrapper } from "components/ui/PageWrapper";
import { useNavigate } from "react-router-dom";
import { Button } from "components/ui/Button";
import { Edit2, Trash2 } from "lucide-react";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { tableCustomStyles } from "app/mock/catalog";
import DataTable from "react-data-table-component";
import { GetAboutTimelineMutation } from "rest/about";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { DeleteTimelineMutation } from "rest/about";
import { InfoComponent } from "components/Alerts/Info";
import { ErrorComponent } from "components/Alerts/Error";
import DataTableExtensions from "react-data-table-component-extensions";
import "styles/main.css";
import "react-data-table-component-extensions/dist/index.css";

export default function AboutTimeline() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const getTimeline = GetAboutTimelineMutation();
  const deleteTimeline = DeleteTimelineMutation();

  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append("timelineId", id);
    deleteTimeline.mutate(formData);
  };

  const aboutTimeline = [
    {
      name: "Timeline",
      selector: (row) => row.heading,
    },
    {
      name: "description",
      cell: (row) => (
        <div
          className="timeline_desc"
          dangerouslySetInnerHTML={{ __html: row?.description }}
        />
      ),
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-about-timeline/${row?.id}`)}
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
            onClick={() => {
              handleDelete(row?.id);
              setId(row?.id);
            }}
            className="deletebtn"
          >
            <Trash2 row={row} />
          </span>
        ),
      button: "true",
    },
  ];
  return (
    <div className="timeline_page">
      <PageWrapper slug="about-timeline" name="About Timeline" />

      <div className="d-flex justify-content-end mb-4 add_catalog_btn mt-4">
        <Button onClick={() => navigate("/about-add-timeline")}>
          Add Timeline
        </Button>
      </div>
      {getTimeline?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getTimeline?.data?.data?.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      {getTimeline?.isPending ? (
        <ComponentLoader />
      ) : (
        <DataTableExtensions
          columns={aboutTimeline}
          data={getTimeline?.data?.data?.sort((a, b) => b?.id - a?.id)}
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
    </div>
  );
}
