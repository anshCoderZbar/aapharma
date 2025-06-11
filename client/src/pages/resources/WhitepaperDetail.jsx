import React, { useEffect } from "react";

import "styles/Resources.css";
import { Banner } from "app/components/Ui/Banner";
import { useParams } from "react-router-dom";
import { GetSingleWhitePapers } from "rest/resources";

export default function WhitepaperDetail() {
  const { id } = useParams();

  const formData = new FormData();
  formData.append("id", id);
  const singleWhitepaper = GetSingleWhitePapers(formData);

  return (
    <div className="whitepaper_page">
      <Banner
        heading={
          singleWhitepaper?.data?.data?.heading &&
          singleWhitepaper?.data?.data?.heading
        }
        background={`linear-gradient(90deg, rgba(48, 48, 114, 1) 100%, rgba(48, 48, 114, 0) 100%)`}
        breadCrum={"White Paper"}
        extra="white_head white_paper_single"
      />
      <div className="container-fluid">
        <div className="max-container">
          <div
            className="whitepaper_single_content"
            dangerouslySetInnerHTML={{
              __html:
                singleWhitepaper?.data?.data?.description &&
                singleWhitepaper?.data?.data?.description,
            }}
          />
        </div>
      </div>
    </div>
  );
}
