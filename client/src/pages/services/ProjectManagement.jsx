import React from "react";
import { Banner } from "app/components/Ui/Banner";

import "styles/Services.css";
import {
  GetProjectManagementBanner,
  GetProjectManagementDescription,
  GetProjectManagementLists,
} from "rest/service";

export default function ProjectManagement() {
  const getBanner = GetProjectManagementBanner();
  const getBottomDesc = GetProjectManagementDescription();
  const getLists = GetProjectManagementLists();

  return (
    <div className="project_management_page">
      <Banner
        heading={getBanner?.data?.data && getBanner?.data?.data?.heading}
        // background={`linear-gradient( rgba(48, 48, 114, 0.85), rgba(48, 48, 114, 0.85)),url(${
        //   getBanner?.data?.data && getBanner?.data?.data?.image
        // })`}
        background={`linear-gradient(90deg, rgba(48, 48, 114, 1) 100%, rgba(48, 48, 114, 0) 100%)`}
        extra="white_head process_top_banner"
      />
      <div className="container-fluid">
        <div className="project_mgt_content large_contdw">
          <p className="fw-semibold ">
            {getBanner?.data?.data && getBanner?.data?.data?.description}
          </p>
        </div>
        <div className="max-container">
          <div className="project_management_lists">
            {getLists?.data?.data?.length >= 1 &&
              getLists?.data?.data?.map((details, i) => {
                return (
                  <div key={i} className="list_inner_cards">
                    <div
                      className={`row project_list_layout ${
                        i % 2 === 0 && "project_list_reverse"
                      }`}
                    >
                      <div className="col-lg-7 col-xl-9">
                        <div className="project_card_details">
                          <h3>
                            {i + 1}. {details?.heading}
                          </h3>
                          {details?.arrayOfObject?.map((elm, i) => {
                            return (
                              <div key={i} className="project_card_content">
                                <h4>{elm?.headings}</h4>
                                <p>{elm?.descriptions}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="col-lg-5 col-xl-3">
                        <div className="project_card_image1">
                          <img src={details?.image} alt="featured" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div
          className="project_mgt_content"
          dangerouslySetInnerHTML={{
            __html:
              getBottomDesc?.data?.data &&
              getBottomDesc?.data?.data?.description,
          }}
        />
        <div className="bottom_mgt_content">
          <p>
            {getBottomDesc?.data?.data && getBottomDesc?.data?.data?.heading}
          </p>
        </div>
      </div>
    </div>
  );
}
