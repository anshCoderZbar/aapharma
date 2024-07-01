import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";

import "react-data-table-component-extensions/dist/index.css";
import { Edit2Icon, Trash2 } from "lucide-react";
import { tableCustomStyles } from "app/mock/catalog";
import { PageWrapper } from "components/ui/PageWrapper";
import { Button } from "components/ui/Button";
import { InfoComponent } from "components/Alerts/Info";
import { ErrorComponent } from "components/Alerts/Error";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { GetAllWhitePapers } from "rest/whitepaper";
import { DeleteWhitePaperMutation } from "rest/whitepaper";

export const AllWhitepapers = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const whitepaper = GetAllWhitePapers();
  const deleteWhitePaper = DeleteWhitePaperMutation();

  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append("id", id);
    deleteWhitePaper?.mutate(formData);
  };

  const allWhitepaper = [
    {
      name: "Heading",
      selector: (row) => row.heading,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    // {
    //   name: "Description",
    //   selector: (row) => (
    //     <div
    //       className="des_igfg"
    //       dangerouslySetInnerHTML={{
    //         __html: row.description?.substring(0, 50),
    //       }}
    //     />
    //   ),
    // },
    // {
    //   name: "Banner",
    //   cell: (row) => (
    //     <img src={row?.image} alt="client" style={{ maxWidth: "150px" }} />
    //   ),
    // },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-whitepapers/${row?.id}`)}
        >
          <Edit2Icon row={row} />
        </span>
      ),
      button: true.toString(),
    },
    {
      name: "Delete",
      cell: (row) =>
        row?.id === id && deleteWhitePaper?.isPending ? (
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
    <div>
      <PageWrapper slug="all-whitepapers" name="Whitepaper" />
      {whitepaper?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}

      {whitepaper?.data?.data?.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      {whitepaper?.isPending ? (
        <ComponentLoader />
      ) : (
        <>
          <div className="d-flex justify-content-end mb-4 add_catalog_btn ">
            <Button onClick={() => navigate("/add-whitepapers")}>
              Add Whitepapers
            </Button>
          </div>
          <DataTableExtensions
            columns={allWhitepaper}
            data={whitepaper?.data?.data?.sort((a, b) => b?.id - a?.id)}
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
};
