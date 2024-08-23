import React, { useState } from "react";

import { PageWrapper } from "components/ui/PageWrapper";
import { SuperSubCatalogL3 } from "app/common/catalog/SuperSubCatalogL3";
import { FetchAllCatalogsL3 } from "rest/catalog";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import DataTable from "react-data-table-component";
import { tableCustomStyles } from "app/mock/catalog";
import { Edit2, Trash2 } from "lucide-react";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { useNavigate } from "react-router-dom";
import { DeleteCatalogL3 } from "rest/catalog";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

export default function CatalogSuperSubMenu() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const fetchSuperSubCatalog = FetchAllCatalogsL3();

  const deleteCatalogL3 = DeleteCatalogL3();
  const handleDelete = (id) => {
    deleteCatalogL3.mutate(id);
  };

  const catalogColumns = [
    {
      name: "sort no",
      selector: (row) => row.sortNo,
    },
    {
      name: "Level 1",
      selector: (row) => row.categoryName,
    },
    {
      name: "Level 2",
      selector: (row) => row.subcategoryName,
    },
    {
      name: "Level 3",
      selector: (row) => row.heading,
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() =>
            navigate({
              pathname: `/sub-child-category/${row?.id}`,
              search: `?catalogId=${row?.catalog}`,
            })
          }
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
        row?.id === id && deleteCatalogL3?.isPending ? (
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
      <PageWrapper slug="catalogL2" name="Catalog Super Sub Menu" />
      {fetchSuperSubCatalog?.isError ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : null}
      {fetchSuperSubCatalog?.data?.data.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      <SuperSubCatalogL3 />

      <hr className="my-5" />
      <hr className="my-5" />

      {fetchSuperSubCatalog?.isPending ? (
        <div className="d-flex justify-content-center">
          <ComponentLoader />
        </div>
      ) : (
        <DataTableExtensions
          columns={catalogColumns}
          data={fetchSuperSubCatalog?.data?.data?.sort((a, b) => b?.id - a?.id)}
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
