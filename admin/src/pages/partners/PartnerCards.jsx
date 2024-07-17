import React from "react";
import { PageWrapper } from "components/ui/PageWrapper";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import "styles/main.css";

import { tableCustomStyles } from "app/mock/catalog";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";
import { useNavigate } from "react-router-dom";
import { Edit } from "lucide-react";
import { GetAllPartnerCardMutation } from "rest/partner";

export default function PartnerCards() {
  const navigate = useNavigate();

  const getAllCard = GetAllPartnerCardMutation();

  const cardData = [
    {
      name: "Heading",
      selector: (row) => row.heading,
    },

    {
      name: "Image",
      cell: (row) => (
        <img src={row?.image} alt="image" style={{ maxWidth: "200px" }} />
      ),
    },

    {
      name: "edit",
      cell: (row) => (
        <span
          style={{ cursor: "pointer" }}
          className="editbtn"
          onClick={() => navigate(`/partner-cards/${row?.id}`)}
        >
          <Edit row={row} />
        </span>
      ),
      button: true.toString(),
      style: {},
    },
  ];

  return (
    <>
      <PageWrapper slug="partner-cards" name="Partner Case Study" />
      {getAllCard?.isError ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : null}

      {getAllCard?.isPending ? (
        <ComponentLoader />
      ) : getAllCard?.isSuccess && getAllCard?.data?.data?.length >= 1 ? (
        <DataTableExtensions
          columns={cardData}
          data={getAllCard?.data?.data}
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
        <InfoComponent message={"Please add data to display"} />
      )}
    </>
  );
}
