import React from "react";
import { useNavigate } from "react-router-dom";
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";
import { tableCustomStyles } from "app/mock/catalog";

import "styles/main.css";
import "react-data-table-component-extensions/dist/index.css";
import { ErrorComponent } from "components/Alerts/Error";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { PageWrapper } from "components/ui/PageWrapper";
import { GetCarbohydrateDiagram } from "rest/complexCarbohydrate";
import { InfoComponent } from "components/Alerts/Info";
import { Edit2 } from "lucide-react";

export default function CarbohydrateDiagram() {
  const navigate = useNavigate();
  const getDiagram = GetCarbohydrateDiagram();

  const diagramData = [
    {
      name: "Sort No",
      selector: (row) => row.sortNo,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
    {
      name: "Heading",
      selector: (row) => row.heading,
    },
    {
      name: "Image",
      cell: (row) => (
        <img src={row?.image} alt="compount" style={{ maxWidth: "100px" }} />
      ),
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-carbohydrate-diagram/${row?.id}`)}
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
      <PageWrapper slug="carbohydrate-diagram" name="Carbohydrate Diagram" />
      {getDiagram?.isError ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : null}
      {getDiagram?.isPending ? (
        <ComponentLoader />
      ) : getDiagram?.data?.data.length >= 1 ? (
        <DataTableExtensions
          columns={diagramData}
          data={getDiagram?.data?.data}
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
  );
}
