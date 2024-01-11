import React from "react";
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";

import { PageWrapper } from "components/ui/PageWrapper";
import { Edit2 } from "lucide-react";
import { tableCustomStyles } from "app/mock/catalog";
import { useNavigate } from "react-router-dom";
import { GetCaseStudyDiagramMutation } from "rest/caseStudy";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";

export default function CaseStudyDiagram() {
  const navigate = useNavigate();
  const getCaseStudyDiagram = GetCaseStudyDiagramMutation();

  const caseDiagram = [
    {
      name: "Sort No",
      selector: (row) => row.sortNo,
    },
    {
      name: "Heading",
      selector: (row) => row.title,
    },
    {
      name: "Description",
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
      name: "Icon",
      cell: (row) => (
        <img
          src={row?.image}
          alt="case-study"
          style={{ maxWidth: "50px", backgroundColor: "#2a3071" }}
        />
      ),
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-case-diagram/${row?.id}`)}
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
      <PageWrapper slug="case-study-diagram" name="Case Study Diargam" />
      {getCaseStudyDiagram?.data?.data?.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      {getCaseStudyDiagram?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getCaseStudyDiagram?.isPending ? (
        <ComponentLoader />
      ) : (
        <DataTableExtensions
          columns={caseDiagram}
          data={getCaseStudyDiagram?.data?.data}
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
