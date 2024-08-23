import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Edit2, Trash2 } from "lucide-react";
import DataTable from "react-data-table-component";

import { PageWrapper } from "components/ui/PageWrapper";
import { SubCatalogL2 } from "app/common/catalog/SubCatalogL2";
import { FetchAllCatalogsL2 } from "rest/catalog";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { tableCustomStyles } from "app/mock/catalog";
import { DeleteCatalogL2 } from "rest/catalog";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

export const CatalogSubMenu = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const fetchSubCatalogs = FetchAllCatalogsL2();

  const deleteCatalogL2 = DeleteCatalogL2();

  const handleDelete = (id) => {
    deleteCatalogL2.mutate(id);
  };

  const catalogColumns = [
    {
      name: "Sort No",
      selector: (row) => row.sortNo,
    },
    {
      name: "Level 1",
      selector: (row) => row.categoryName,
    },
    {
      name: "Level 2",
      selector: (row) => row.heading,
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/sub-category/${row?.id}`)}
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
        row?.id === id && deleteCatalogL2?.isPending ? (
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
      <PageWrapper slug="catalogL2" name="Catalog Sub Menu" />
      {fetchSubCatalogs?.isError ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : null}
      {fetchSubCatalogs?.data?.data.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      <SubCatalogL2 />
      <hr className="my-5" />
      <hr className="my-5" />

      {fetchSubCatalogs?.isPending ? (
        <div className="d-flex justify-content-center">
          <ComponentLoader />
        </div>
      ) : (
        <DataTableExtensions
          columns={catalogColumns}
          data={fetchSubCatalogs?.data?.data?.sort((a, b) => b?.id - a?.id)}
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
