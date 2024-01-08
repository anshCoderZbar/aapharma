import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PageWrapper } from "components/ui/PageWrapper";

import "styles/main.css";

import { ButtonLoader } from "components/Loader/ButtonLoader";

import { Button } from "components/ui/Button";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { tableCustomStyles } from "app/mock/catalog";
import { GetHomeAddServices } from "rest/home";
import { Edit2, Trash2 } from "lucide-react";
import { DeleteService } from "rest/home";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";

export default function HomeService() {
  const navigate = useNavigate();

  const allServices = GetHomeAddServices();
  const [id, setId] = useState();

  const deleteServices = DeleteService();
  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append("serviceId", id);
    deleteServices.mutate(formData);
  };

  // useEffect(() => {
  //   const input = document.querySelector(".data-table-extensions-filter input");
  //   if (input) {
  //     input.placeholder = "Search";
  //   }
  // }, []);

  const serviceColumns = [
    {
      name: "heading",
      selector: (row) => row.heading,
    },
    {
      name: "Icon",
      cell: (row) => (
        <img
          src={`${allServices?.data?.baseUrl}/${row?.icon}`}
          style={{ maxWidth: "50px" }}
        />
      ),
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-home-service/${row?.id}`)}
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
        row?.id === id && deleteServices?.isPending ? (
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
    <div className="home_service">
      <PageWrapper slug="home-services" name="Home Services" />

      {allServices?.isError && (
        <ErrorComponent message="OOPS! some error occured" />
      )}
      {allServices?.data?.data?.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      {allServices?.isPending ? (
        <ComponentLoader />
      ) : (
        <>
          <div className="d-flex justify-content-end mb-4 add_catalog_btn mt-4">
            <Button onClick={() => navigate("/home-add-services")}>
              Add Services
            </Button>
          </div>
          <DataTableExtensions
            columns={serviceColumns}
            data={allServices?.data?.data?.sort((a, b) => b?.id - a?.id)}
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
