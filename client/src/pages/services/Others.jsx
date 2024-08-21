import React from "react";

import { Banner } from "app/components/Ui/Banner";

import "styles/Services.css";
import conical from "assets/conical.svg";
import { GetOthersBannerMutation, GetOthersListMutation } from "rest/service";

export default function Others() {
  const getBanner = GetOthersBannerMutation();
  const getList = GetOthersListMutation();
  return (
    <div className="others_page">
      <Banner
        heading={getBanner?.data?.data && getBanner?.data?.data?.heading}
        background={`linear-gradient(90deg, rgba(48, 48, 114, 1) 100%, rgba(48, 48, 114, 0) 100%)`}
        subMenu={"Research Tools"}
        extra="white_head process_top_banner"
      />
      <div className="container-fluid">
        <div className="project_mgt_content large_contdw">
          <p
            className="fw-semibold text-center"
            dangerouslySetInnerHTML={{
              __html:
                getBanner?.data?.data && getBanner?.data?.data?.description,
            }}
          />
        </div>
        <div className="icons_card_outer">
          <div className="icon_card_body">
            {getList?.data?.data?.length >= 1 &&
              getList?.data?.data?.map((list, i) => {
                return (
                  <div key={i} className="icons_card_inner">
                    <img src={list.image} alt="icon" />
                    <h3>{list.heading}</h3>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
