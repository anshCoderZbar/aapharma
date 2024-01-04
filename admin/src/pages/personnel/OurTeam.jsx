import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { PageWrapper } from "components/ui/PageWrapper";
import { Edit2, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { Button } from "components/ui/Button";
import { tableCustomStyles } from "app/mock/catalog";
import { GetTeamMemberMutation } from "rest/personnel";
import { DeleteTeamMemberMutation } from "rest/personnel";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";

export default function OurTeam() {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const getAllTeamMember = GetTeamMemberMutation();
  const deleteTeamMember = DeleteTeamMemberMutation();

  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append("teamId", id);
    deleteTeamMember.mutate(formData);
  };

  const teamMembersColumns = [
    {
      name: "Sort No",
      selector: (row) => row?.sortNo,
    },
    {
      name: "name",
      selector: (row) => row.name,
    },
    {
      name: "designation",
      selector: (row) => row.designation,
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/edit-team-members/${row?.id}`)}
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
        row?.id === id && deleteTeamMember?.isPending ? (
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
    <div className="personnel_page">
      <PageWrapper slug="our-team" name="Our Team" />
      <div className="d-flex justify-content-end mb-4 add_catalog_btn ">
        <Button onClick={() => navigate("/add-team-members")}>
          Add Members
        </Button>
      </div>
      {getAllTeamMember?.isError && (
        <ErrorComponent message="OOPS ! something went wrong please try again later" />
      )}
      {getAllTeamMember?.isPending ? (
        <ComponentLoader />
      ) : (
        <DataTable
          columns={teamMembersColumns}
          data={getAllTeamMember?.data?.data?.sort((a, b) => b?.id - a?.id)}
          pagination
          paginationPerPage={5}
          striped
          customStyles={tableCustomStyles}
        />
      )}
    </div>
  );
}
