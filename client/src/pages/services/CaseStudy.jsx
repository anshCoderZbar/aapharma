import React, { useEffect, useState } from "react";
import {
  GetCaseStudyDiagramMutation,
  GetCaseStudyGraphContentMutation,
  GetCaseStudyTabsMutation,
  GetSingleCaseStudyTabsMutation,
} from "rest/caseStudy";

import "styles/Services.css";

export default function CaseStudy() {
  const allCaseTabs = GetCaseStudyTabsMutation();
  const getSingleCaseStudyTabs = GetSingleCaseStudyTabsMutation();
  const caseStudyGraphData = GetCaseStudyGraphContentMutation();
  const getCaseStudyDiagram = GetCaseStudyDiagramMutation();

  const [caseTabsId, setCaseTabsId] = useState("");
  const [iconActive, setIconActive] = useState(-1);

  useEffect(() => {
    if (allCaseTabs?.data?.data) {
      setCaseTabsId(allCaseTabs?.data?.data[0]?.id);
    }
  }, [allCaseTabs?.data?.data]);

  const handleClick = (id) => {
    setCaseTabsId(id);
    const formData = new FormData();
    formData?.append("casestudymainId", id);
    getSingleCaseStudyTabs.mutate(formData);
  };

  return (
    <div className="case_study_page">
      <div className="container-fluid">
        <div className="case_study_head">
          <h1 className="main_top_heading text-center">Case Study</h1>
        </div>
        <div className="case_tabs_button">
          {allCaseTabs?.data?.data?.map((elm) => {
            return (
              <button
                key={elm?.id}
                className={`${elm?.id === caseTabsId ? "case_btn_active" : ""}`}
                onClick={() => handleClick(elm?.id)}
              >
                {elm.title}
              </button>
            );
          })}
        </div>

        <div className="tabs_content_case">
          {getSingleCaseStudyTabs?.isPending ||
          allCaseTabs?.isPending ? null : (
            <div className="row tab_flex_row">
              <div className="col-md-4">
                <div className="case_tab_img">
                  <img
                    src={
                      getSingleCaseStudyTabs?.data?.data?.image
                        ? getSingleCaseStudyTabs?.data?.data?.image
                        : allCaseTabs?.data?.data[0]?.image
                    }
                    alt="tabs"
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="case_tab_content">
                  <h5>
                    {getSingleCaseStudyTabs?.data?.data?.heading
                      ? getSingleCaseStudyTabs?.data?.data?.heading
                      : allCaseTabs?.data?.data[0]?.heading}
                  </h5>
                  <p>
                    {getSingleCaseStudyTabs?.data?.data?.description
                      ? getSingleCaseStudyTabs?.data?.data?.description
                      : allCaseTabs?.data?.data[0]?.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="case_bottom_banner">
          <div className="case_study_diagram">
            <div className="outer_diagram_case">
              {getCaseStudyDiagram?.data?.data?.length >= 1 &&
                getCaseStudyDiagram?.data?.data?.map((elm, i) => {
                  return (
                    <div
                      key={i}
                      className={`case_diagram_icons icons_circle_${i + 1}`}
                    >
                      <div
                        onMouseEnter={() => setIconActive(elm?.id)}
                        onMouseLeave={() => setIconActive(-1)}
                        className="case_icon_inner"
                      >
                        <img src={elm?.image} alt="case_icon" />
                      </div>
                      <div
                        onMouseEnter={() => setIconActive(elm?.id)}
                        onMouseLeave={() => setIconActive(-1)}
                        className={`vss_cxx ${
                          iconActive !== -1 && iconActive === i + 1
                            ? `vss_cxx_bg bg-white open-transition`
                            : ""
                        } icon_content_${i + 1}`}
                      >
                        <h4>{elm?.title}</h4>
                        <p
                          className={`paragraph-transition ${
                            iconActive !== -1 && iconActive === i + 1
                              ? "vss_cxx_bg"
                              : ""
                          }`}
                        >
                          {elm?.description}
                        </p>
                      </div>
                    </div>
                  );
                })}

              <div className="inner_case_circle">
                <div className="inner_case_content">
                  <h3>
                    {caseStudyGraphData?.data?.data?.heading &&
                      caseStudyGraphData?.data?.data?.heading}
                  </h3>
                  <p>
                    {caseStudyGraphData?.data?.data?.subheading &&
                      caseStudyGraphData?.data?.data?.subheading}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
