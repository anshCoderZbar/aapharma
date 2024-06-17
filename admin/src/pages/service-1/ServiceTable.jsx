import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PageWrapper } from "components/ui/PageWrapper";
import { Button } from "components/ui/Button";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import DataTable from "react-data-table-component";

import "styles/main.css";
import { tableCustomStyles } from "app/mock/catalog";
import { Edit2, Trash2 } from "lucide-react";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";

export default function ServiceTable() {
  const navigate = useNavigate();
  //   const getChemicalSynthesis = GetCustomChemicalSynthesisMutation();
  //   const deleteChemicalSynthesis = DeleteChemicalSynthesisMutation();
  const [id, setId] = useState("");

  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append("id", id);
    // deleteChemicalSynthesis.mutate(formData);
  };

  const tableColumns = [
    {
      name: "Element",
      selector: (row) => row.element,
    },
    {
      name: "Parent Atom",
      selector: (row) => row.parentAtom,
    },
    {
      name: "Stable Isotope",
      selector: (row) => row.stableIsotope,
    },
    {
      name: "Abundance",
      selector: (row) => row.abundance,
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-element/${row?.id}`)}
        >
          <Edit2 row={row} />
        </span>
      ),
      button: true.toString(),
    },
    {
      name: "Delete",
      cell: (row) =>
        row?.id === id && false ? (
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
    <>
      <PageWrapper slug="services-table" name="Services Table" />
      {false < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      {false && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {false ? (
        <ComponentLoader />
      ) : (
        <>
          <div className="d-flex justify-content-end mb-4 add_catalog_btn mt-4">
            <Button onClick={() => navigate("/add-element")}>
              Add Element
            </Button>
          </div>
          <DataTableExtensions
            columns={tableColumns}
            data={[]}
            filterPlaceholder="Search"
          >
            <DataTable
              pagination
              paginationPerPage={10}
              striped
              customStyles={tableCustomStyles}
            />
          </DataTableExtensions>
        </>
      )}
    </>
  );
}
