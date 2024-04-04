import React from "react";
import { useNavigate } from "react-router-dom";
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";

import "styles/main.css";
import { PageWrapper } from "components/ui/PageWrapper";
import { tableCustomStyles } from "app/mock/catalog";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";
import { Edit2 } from "lucide-react";
import { GetAllResourcesTabs } from "rest/resources";

export default function ResourcesTabs() {
  const navigate = useNavigate();

  const allTabs = GetAllResourcesTabs();

  const resourcesTabs = [
    {
      name: "Heading",
      selector: (row) => row.tabHeading,
    },
    {
      name: "Image",
      cell: (row) => (
        <img src={row?.image} alt="client" style={{ maxWidth: "100px" }} />
      ),
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-resources-tabs/${row?.id}`)}
        >
          <Edit2 row={row} />
        </span>
      ),
      button: true.toString(),
    },
  ];

  return (
    <div className="resources_page">
      <PageWrapper slug="resources-tabs" name="Resources Tabs" />
      {2 < 1 ? <InfoComponent message={"Please Add Data to Display"} /> : null}
      {allTabs?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {allTabs?.isPending ? (
        <ComponentLoader />
      ) : (
        <DataTableExtensions
          columns={resourcesTabs}
          data={allTabs?.data?.data}
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
