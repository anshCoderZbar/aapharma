import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";

import { tableCustomStyles } from "app/mock/catalog";

import "styles/main.css";
import "react-data-table-component-extensions/dist/index.css";
import { PageWrapper } from "components/ui/PageWrapper";
import { Edit2, Trash2 } from "lucide-react";
import { Button } from "components/ui/Button";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";
import { GetOthersListMutation } from "rest/others";
import { DeleteOthersListMutation } from "rest/others";

export default function OtherBannerList() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const allList = GetOthersListMutation();
  const deleteList = DeleteOthersListMutation();

  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append("id", id);
    deleteList.mutate(formData);
  };

  const otherData = [
    {
      name: "S.No",
      selector: (_, i) => i + 1,
    },
    {
      name: "Name",
      selector: (row) => row.heading,
    },

    {
      name: "Image",
      cell: (row) => (
        <img
          src={row?.image}
          alt="lab equipment"
          style={{ maxWidth: "100px" }}
        />
      ),
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-other-list/${row?.id}`)}
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
        row?.id === id && deleteList?.isPending ? (
          <ButtonLoader />
        ) : (
          <span
            className="deletebtn"
            onClick={() => {
              handleDelete(row?.id);
              setId(row?.id);
            }}
          >
            <Trash2 row={row} />
          </span>
        ),
      button: true.toString(),
      style: {},
    },
  ];
  return (
    <>
      <PageWrapper slug="others-list" name="Others List" />
      {allList?.isError ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : null}

      {allList?.isPending ? (
        <ComponentLoader />
      ) : (
        <>
          <div className="d-flex justify-content-end mb-4 add_catalog_btn mt-4">
            <Button onClick={() => navigate("/add-other-list")}>
              Add List
            </Button>
          </div>
          {allList?.data?.data?.length >= 1 ? (
            <DataTableExtensions
              columns={otherData}
              data={allList?.data?.data}
              filterPlaceholder="Search"
            >
              <DataTable
                pagination
                paginationPerPage={10}
                striped
                customStyles={tableCustomStyles}
              />
            </DataTableExtensions>
          ) : (
            <InfoComponent message={"Please Add Data to Display"} />
          )}
        </>
      )}
    </>
  );
}
