import React, { useState } from "react";
import DataTable from "react-data-table-component";

import { PageWrapper } from "components/ui/PageWrapper";

import { tableCustomStyles } from "app/mock/catalog";

import { useNavigate } from "react-router-dom";

import { Copy, Edit2, Link, Trash2 } from "lucide-react";

import "styles/catalog.css";
import { Button } from "components/ui/Button";
import { FetchAllChemical } from "rest/chemical";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";
import { DeleteChemical } from "rest/chemical";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { GetChemicalStock } from "rest/chemical";
import { DublicateChemicalMutation } from "rest/chemical";
import { FeaturedStatus } from "rest/chemical";

export default function ChemicalPage() {
  const navigate = useNavigate();

  const [id, setId] = useState("");

  const fetchChemical = FetchAllChemical();

  const deleteChemical = DeleteChemical();
  const getStock = GetChemicalStock();
  const createDublicateChemical = DublicateChemicalMutation();
  const featured = FeaturedStatus();

  const handleDelete = (id) => {
    deleteChemical.mutate(id);
  };

  const handleStockCheck = (e, id) => {
    const { checked } = e?.target;
    const formData = new FormData();
    formData.append("id", id);
    formData.append("inStock", checked);
    getStock.mutate(formData);
  };

  const handleFeaturedCheck = (e, id) => {
    const { checked } = e?.target;
    const formData = new FormData();
    formData.append("id", id);
    formData.append("featured", checked ? 1 : 0);
    featured.mutate(formData);
  };

  const dublicateChemical = (id) => {
    const formData = new FormData();
    formData.append("id", id);
    createDublicateChemical.mutate(formData);
  };

  const chemicalColumns = [
    {
      name: "heading",
      selector: (row) => row?.heading,
    },

    {
      name: "Level 1",
      selector: (row) => row?.categoryName,
    },
    {
      name: "Level 2",
      selector: (row) => row?.subcategoryName,
    },
    {
      name: "Level 3",
      selector: (row) => row?.supsubcategoryName,
    },
    {
      name: "In Stock",
      cell: (row) => (
        <div className="form-check form-switch">
          <input
            className="form-check-input inp_swip"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={(e) => handleStockCheck(e, row?.id)}
            defaultChecked={row?.inStock === "true"}
          />
        </div>
      ),
    },
    {
      name: "Featured",
      cell: (row) => (
        <div className="form-check form-switch">
          <input
            className="form-check-input inp_swip"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={(e) => handleFeaturedCheck(e, row?.id)}
            defaultChecked={row?.featured === 1}
          />
        </div>
      ),
    },
    {
      name: "Dublicate",
      cell: (row) => (
        <div
          onClick={() => {
            dublicateChemical(row?.id);
            setId(row?.id);
          }}
          className="cursor_pointer"
        >
          {createDublicateChemical?.isPending && row?.id === id ? (
            <ButtonLoader />
          ) : (
            <Copy />
          )}
        </div>
      ),
    },

    {
      name: "Additional Info",
      cell: (row) => (
        <a href={`/add-utils?id=${row?.id}`} className="utils_btn">
          Additional Info
        </a>
      ),
    },

    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() =>
            navigate({
              pathname: `/edit-chemical/${row?.id}`,
            })
          }
        >
          <Edit2 row={row} />
        </span>
      ),
      button: "true",
      style: {},
    },
    {
      name: "Delete",
      cell: (row) =>
        row?.id === id && deleteChemical?.isPending ? (
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
    <div className="child">
      <PageWrapper slug="product-management" name="Product Management" />
      <div className="d-flex justify-content-end mb-4 add_catalog_btn">
        <Button onClick={() => navigate("/chemical-editor")}>
          Add Product
        </Button>
      </div>
      {fetchChemical?.isError ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : (
        ""
      )}
      {fetchChemical?.data?.data.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      {fetchChemical?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="table-responsive">
          <DataTableExtensions
            columns={chemicalColumns}
            data={fetchChemical?.data?.data?.sort((a, b) => b?.id - a?.id)}
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
      )}
    </div>
  );
}
