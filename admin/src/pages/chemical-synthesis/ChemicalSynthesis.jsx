import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PageWrapper } from "components/ui/PageWrapper";
import { Button } from "components/ui/Button";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import DataTable from "react-data-table-component";

import "styles/main.css";
import { GetCustomChemicalSynthesisMutation } from "rest/chemicalSynthesis";
import { tableCustomStyles } from "app/mock/catalog";
import { Edit2, Trash2 } from "lucide-react";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";
import { DeleteChemicalSynthesisMutation } from "rest/chemicalSynthesis";

export default function ChemicalSynthesis() {
  const navigate = useNavigate();
  const getChemicalSynthesis = GetCustomChemicalSynthesisMutation();
  const deleteChemicalSynthesis = DeleteChemicalSynthesisMutation();
  const [id, setId] = useState("");

  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append("customchemicalsynthesisId", id);
    deleteChemicalSynthesis.mutate(formData);
  };

  const chemicalSynthesisColumns = [
    {
      name: "Heading",
      selector: (row) => row.heading,
    },
    {
      name: "Image",
      cell: (row) => (
        <img src={row?.image} alt="image" style={{ maxWidth: "50px" }} />
      ),
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-chemical-synthesis/${row?.id}`)}
        >
          <Edit2 row={row} />
        </span>
      ),
      button: true.toString(),
    },
    {
      name: "Delete",
      cell: (row) =>
        row?.id === id && deleteChemicalSynthesis?.isPending ? (
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
    <div className="chemical_synthesis_page">
      <PageWrapper slug="chemical-synthesis" name="Chemical Synthesis" />
      {getChemicalSynthesis?.data?.data?.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      {getChemicalSynthesis?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getChemicalSynthesis?.isPending ? (
        <ComponentLoader />
      ) : (
        <>
          <div className="d-flex justify-content-end mb-4 add_catalog_btn mt-4">
            <Button onClick={() => navigate("/add-chemical-synthesis")}>
              Add Synthesis
            </Button>
          </div>
          <DataTableExtensions
            columns={chemicalSynthesisColumns}
            data={getChemicalSynthesis?.data?.data?.sort(
              (a, b) => b?.id - a?.id
            )}
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
    </div>
  );
}
