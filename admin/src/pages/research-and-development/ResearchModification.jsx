import React from "react";
import DataTable from "react-data-table-component";
import { PageWrapper } from "components/ui/PageWrapper";
import { Edit2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { tableCustomStyles } from "app/mock/catalog";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { GetResearchDevelopmentTabs } from "rest/researchDevelopement.js";

export default function ResearchModification() {
  const navigate = useNavigate();
  const getTabs = GetResearchDevelopmentTabs();
  console.log(getTabs?.data?.data);
  const researchTabs = [
    {
      name: "S.NO",
      selector: (_, i) => i + 1,
    },
    {
      name: "heading",
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
          className="editbtn"
          onClick={() => navigate(`/research-modification-form/${row?.id}`)}
        >
          <Edit2 row={row} />
        </span>
      ),
      button: true.toString(),
      style: {},
    },
  ];

  return (
    <>
      <PageWrapper slug="research-modification" name="Research Modification" />
      {getTabs?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getTabs?.isPending ? (
        <ComponentLoader />
      ) : (
        <DataTableExtensions
          columns={researchTabs}
          data={getTabs?.data?.data}
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
    </>
  );
}
