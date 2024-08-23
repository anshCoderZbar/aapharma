import React, { useState } from "react";
import DataTable from "react-data-table-component";

import { PageWrapper } from "components/ui/PageWrapper";

import { tableCustomStyles } from "app/mock/catalog";
import { useNavigate } from "react-router-dom";

import { Edit2, Trash2 } from "lucide-react";

import "styles/catalog.css";
import { AddCatalogL1 } from "app/common/catalog/AddCatalogL1";
import { FetchAllCatalogsL1 } from "rest/catalog";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { DeleteCatalogL1 } from "rest/catalog";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

export const Catalog = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");

  const fetchCatalogs = FetchAllCatalogsL1();
  const deleteCatalog = DeleteCatalogL1();

  const handleDelete = (id) => {
    deleteCatalog.mutate(id);
  };

  const catalogColumns = [
    {
      name: "Sort No",
      selector: (row) => row?.sortNo,
    },
    {
      name: "Level 1",
      selector: (row) => row.heading,
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/master-category/${row?.id}`)}
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
        row?.id === id && deleteCatalog?.isPending ? (
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
    <div className="catalog_page">
      <PageWrapper slug="catalogL1" name="Catalog" />
      {fetchCatalogs?.isError ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : null}
      {fetchCatalogs?.data?.data.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      <AddCatalogL1 />
      <hr className="my-5" />
      <hr className="my-5" />

      {fetchCatalogs?.isPending ? (
        <div className="d-flex justify-content-center">
          <ComponentLoader />
        </div>
      ) : (
        <DataTableExtensions
          columns={catalogColumns}
          data={fetchCatalogs?.data?.data}
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
};
