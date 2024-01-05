import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "components/ui/Button";
import { PageWrapper } from "components/ui/PageWrapper";
import { AllArticlesMutation } from "rest/home";
import DataTable from "react-data-table-component";
import { tableCustomStyles } from "app/mock/catalog";
import { Edit2, Trash2 } from "lucide-react";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import { DeleteArticle } from "rest/home";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { ComponentLoader } from "components/Loader/ComponentLoader";

export default function HomeArticle() {
  const navigate = useNavigate();
  const allArticles = AllArticlesMutation();

  const [id, setId] = useState("");

  const deleteArticle = DeleteArticle();

  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append("articalId", id);
    deleteArticle.mutate(formData);
  };

  const articleColumns = [
    {
      name: "Heading",
      selector: (row) => row.heading,
    },
    {
      name: "Image",
      cell: (row) => (
        <img
          src={row?.featuredImage}
          alt="client"
          style={{ maxWidth: "50px" }}
        />
      ),
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() => navigate(`/home-edit-article/${row?.id}`)}
        >
          <Edit2 row={row} />
        </span>
      ),
      button: true.toString(),
    },
    {
      name: "Delete",
      cell: (row) =>
        row?.id === id && deleteArticle?.isPending ? (
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
    <div className="home_page_article">
      <PageWrapper slug="home-article" name="Home article" />

      {allArticles?.isPending ? (
        <ComponentLoader />
      ) : (
        <>
          <div className="d-flex justify-content-end mb-4 add_catalog_btn ">
            <Button onClick={() => navigate("/home-add-article")}>
              Add Articles
            </Button>
          </div>
          <DataTableExtensions
            columns={articleColumns}
            data={allArticles?.data?.data?.sort((a, b) => b?.id - a?.id)}
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
