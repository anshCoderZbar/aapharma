import React from "react";
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";

import { PageWrapper } from "components/ui/PageWrapper";
import { Edit2 } from "lucide-react";
import { tableCustomStyles } from "app/mock/catalog";
import { useNavigate } from "react-router-dom";
import { GetCaseStudyTabsMutation } from "rest/caseStudy";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";

export default function CaseStudyTabs() {
  const navigate = useNavigate();
  const allCaseTabs = GetCaseStudyTabsMutation();

  const caseStudyTabs = [
    {
      name: "Button Title",
      selector: (row) => row.title,
    },
    {
      name: "Heading",
      selector: (row) => row.heading,
    },
    {
      name: "Sub Description",
      cell: (row) => (
        <div
          className="timeline_desc"
          dangerouslySetInnerHTML={{
            __html:
              row?.description.length >= 70
                ? row?.description.slice(0, 70) + "..."
                : row?.description,
          }}
        />
      ),
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
          onClick={() => navigate(`/edit-case-tabs/${row?.id}`)}
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
      <PageWrapper slug="case-study-tabs" name="Case Study Tabs" />
      {allCaseTabs?.data?.data?.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      {allCaseTabs?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {allCaseTabs?.isPending ? (
        <ComponentLoader />
      ) : (
        <DataTableExtensions
          columns={caseStudyTabs}
          data={allCaseTabs?.data?.data}
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
