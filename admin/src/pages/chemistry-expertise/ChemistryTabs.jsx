import React from "react";

import { PageWrapper } from "components/ui/PageWrapper";

import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";

import { Edit2, Trash } from "lucide-react";
import { tableCustomStyles } from "app/mock/catalog";
import { useNavigate } from "react-router-dom";
import "styles/main.css";
import "react-data-table-component-extensions/dist/index.css";

import { GetChemistryTabsMutation } from "rest/chemicalExperties";

export default function ChemistryTabs() {
  const navigate = useNavigate();

  const getAllTabs = GetChemistryTabsMutation();
  console.log(getAllTabs?.data?.data);

  const chemistryTab = [
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
    {
      name: "Delete",
      cell: (row) => (
        <span className="deletebtn">
          <Trash row={row} />
        </span>
      ),
      button: true.toString(),
      style: {},
    },
  ];

  return (
    <div className="chemistry_page">
      <PageWrapper slug="chemistry-tabs" name="Chemistry Tabs" />
      <div className="d-flex justify-content-end mb-4 add_catalog_btn ">
        <Button onClick={() => navigate("/home-add-article")}>Add Tabs</Button>
      </div>
      <DataTableExtensions
        columns={chemistryTab}
        data={getAllTabs?.data?.data}
        filterPlaceholder="Search"
      >
        <DataTable
          pagination
          paginationPerPage={10}
          striped
          customStyles={tableCustomStyles}
        />
      </DataTableExtensions>
    </div>
  );
}
