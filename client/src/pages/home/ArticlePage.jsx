import React from "react";

import "styles/Resources.css";
import { Banner } from "app/components/Ui/Banner";
import { useParams } from "react-router-dom";
import { AllArticlesMutation } from "rest/home";

export default function ArticlePage() {
  const { id } = useParams();
  const allArticles = AllArticlesMutation();
  const filteredArticle =
    allArticles?.data?.data?.length >= 1 &&
    allArticles?.data?.data?.filter((elm) => elm.id === Number.parseInt(id));

  return (
    <div>
      {filteredArticle?.length >= 1 && (
        <div className="whitepaper_page">
          <Banner
            heading={filteredArticle && filteredArticle[0]?.heading}
            background={`linear-gradient(90deg, rgba(48, 48, 114, 1) 100%, rgba(48, 48, 114, 0) 100%)`}
            breadCrum={"whitepaper"}
            extra="white_head white_paper_single"
          />
          <div className="container-fluid">
            <div className="max-container arti_img">
              <img
                src={filteredArticle && filteredArticle[0]?.featuredImage}
                alt="image"
              />
              <div
                className="whitepaper_single_content"
                dangerouslySetInnerHTML={{
                  __html: filteredArticle && filteredArticle[0]?.description,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
