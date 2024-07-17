import React from "react";
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";

import { Edit2 } from "lucide-react";
import { tableCustomStyles } from "app/mock/catalog";
import { useNavigate } from "react-router-dom";
import "styles/main.css";
import "react-data-table-component-extensions/dist/index.css";
import { GetOperatingPhilosophyDiagram } from "rest/personnel";

export default function OperatingDiagram() {
  const navigate = useNavigate();

  const operatingDiagramMutation = GetOperatingPhilosophyDiagram();

  const operatingDiagram = [
    {
      name: "Sort No",
      selector: (row) => row.sortNo,
    },
    {
      name: "Heading",
      selector: (row) => row.title,
    },
    {
      name: "description",
      cell: (row) => (
        <div
          className="timeline_desc"
          dangerouslySetInnerHTML={{
            __html:
              row?.description.length >= 70
                ? row?.description.slice(0, 70) + "..."
                : row?.description,
          }}
        />
      ),
    },
    {
      name: "Icons",
      cell: (row) => (
        <img
          src={row?.image}
          alt="client"
          style={{ maxWidth: "50px", backgroundColor: "#2a3071" }}
        />
      ),
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-operating-diagram/${row?.id}`)}
        >
          <Edit2 row={row} />
        </span>
      ),
      button: true.toString(),
      style: {},
    },
  ];

  return (
    <DataTableExtensions
      columns={operatingDiagram}
      data={operatingDiagramMutation?.data?.data}
      filterPlaceholder="Search"
    >
      <DataTable
        pagination
        paginationPerPage={10}
        striped
        customStyles={tableCustomStyles}
      />
    </DataTableExtensions>
  );
}
