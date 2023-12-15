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
      name: "SR.NO",
      selector: (row, i) => i + 1,
    },
    {
      name: "Sort No",
      selector: (row) => row.sortNo,
    },
    {
      name: "main category",
      selector: (row) => row.categoryName,
    },
    {
      name: "heading",
      selector: (row) => row.heading,
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/catalogL2/${row?.id}`)}
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

      <SubCatalogL2 />

      <hr className="my-5" />
      <hr className="my-5" />
      {fetchSubCatalogs?.error ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : (
        ""
      )}
      {fetchSubCatalogs?.data?.data.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      {fetchSubCatalogs?.isPending ? (
        <div className="d-flex justify-content-center">
          <ComponentLoader />
        </div>
      ) : (
        <DataTable
          columns={catalogColumns}
          data={fetchSubCatalogs?.data?.data?.sort((a, b) => b?.id - a?.id)}
          pagination
          paginationPerPage={5}
          striped
          customStyles={tableCustomStyles}
        />
      )}
    </div>
  );
};
