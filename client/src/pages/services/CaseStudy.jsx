import { Banner } from "app/components/Ui/Banner";
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
  const [isEven, setIsEven] = useState(false);

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
      <Banner
        // background={`url(${
        //   getBanner?.data?.data?.image && getBanner?.data?.data?.image
        // })`}
        background={`linear-gradient(90deg, rgba(48, 48, 114, 1) 100%, rgba(48, 48, 114, 0) 100%)`}
        heading={"Storage Inventory Management"}
        // extra="lab_equipment_banner"
        extra=" white_head process_top_banner"
      />
      <div className="container-fluid">
        {/* <div className="case_study_head">
          <h1 className="main_top_heading text-center">Case Study</h1>
        </div> */}
        <div className="case_tabs_button">
          {allCaseTabs?.data?.data?.map((elm, i) => {
            return (
              <button
                key={elm?.id}
                className={`${elm?.id === caseTabsId ? "case_btn_active" : ""}`}
                onClick={() => {
                  handleClick(elm?.id);
                  (i + 1) % 2 === 0 ? setIsEven(true) : setIsEven(false);
                }}
              >
                {elm.title}
              </button>
            );
          })}
        </div>

        <div className="tabs_content_case">
          {getSingleCaseStudyTabs?.isPending ||
          allCaseTabs?.isPending ? null : (
            <div
              className={`row tab_flex_row ${
                isEven === true ? "tab_rev_row" : ""
              }`}
            >
              {/* <div className="col-md-4"> */}
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
              {/* </div>
              <div className="col-md-8"> */}
              <div className="case_tab_content">
                <h5>
                  {getSingleCaseStudyTabs?.data?.data?.heading
                    ? getSingleCaseStudyTabs?.data?.data?.heading
                    : allCaseTabs?.data?.data[0]?.heading}
                </h5>
                <div
                  dangerouslySetInnerHTML={{
                    __html: getSingleCaseStudyTabs?.data?.data?.description
                      ? getSingleCaseStudyTabs?.data?.data?.description
                      : allCaseTabs?.data?.data[0]?.description,
                  }}
                />
              </div>
              {/* </div> */}
            </div>
          )}
        </div>

        {/* <div className="case_bottom_banner">
          <div className="case_study_diagram">
            <div className="outer_diagram_case">
              {getCaseStudyDiagram?.data?.data?.length >= 1 &&
                getCaseStudyDiagram?.data?.data?.map((elm, i) => {
                  return (
                    <div
                      key={i}
                      className={`case_diagram_icons case_circle case_circle_${
                        i + 1
                      } icons_circle_${i + 1}`}
                    >
                      <span className="index_number">{i + 1}</span>
                      <div
                        onMouseEnter={() => setIconActive(elm?.id)}
                        onMouseLeave={() => setIconActive(-1)}
                        className="case_icon_inner"
                      >
                        <div className="case_inner_border">
                          <img src={elm?.image} alt="case_icon" />
                          <h4>{elm?.title}</h4>
                        </div>
                      </div>
                      <div className={`arrow ${`arrow_${i + 1}`} `}></div>
                    </div>
                  );
                })}

              <div className="inner_case_circle">
                {iconActive === -1 ? (
                  <div className="inner_case_content">
                    <h3>
                      {caseStudyGraphData?.data?.data?.heading &&
                        caseStudyGraphData?.data?.data?.heading}
                    </h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          caseStudyGraphData?.data?.data?.subheading &&
                          caseStudyGraphData?.data?.data?.subheading,
                      }}
                    />
                  </div>
                ) : (
                  <div className="inner_case_content">
                    {getCaseStudyDiagram?.data?.data &&
                      getCaseStudyDiagram?.data?.data?.map(
                        (elm) =>
                          elm?.id === iconActive && (
                            <React.Fragment key={elm?.title}>
                              <h3>{elm?.title}</h3>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: elm?.description,
                                }}
                              />
                            </React.Fragment>
                          )
                      )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="inner_show_l ">
            <div className="inner_case_low">
              {getCaseStudyDiagram?.data?.data?.length >= 1 &&
                getCaseStudyDiagram?.data?.data?.map((elm, i) => {
                  return (
                    <div key={i} className={``}>
                      <div
                        onClick={() => setIconActive(elm?.id)}
                        className="case_icon_inner"
                      >
                        <div className="inner_mob_circ">
                          <img src={elm?.image} alt="case_icon" />
                          <h4>{elm?.title}</h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="inner_case_circle">
              {iconActive === -1 ? (
                <div className="inner_case_content">
                  <h3>
                    {caseStudyGraphData?.data?.data?.heading &&
                      caseStudyGraphData?.data?.data?.heading}
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        caseStudyGraphData?.data?.data?.subheading &&
                        caseStudyGraphData?.data?.data?.subheading,
                    }}
                  />
                </div>
              ) : (
                <div className="inner_case_content">
                  {getCaseStudyDiagram?.data?.data &&
                    getCaseStudyDiagram?.data?.data?.map(
                      (elm) =>
                        elm?.id === iconActive && (
                          <React.Fragment key={elm?.title}>
                            <h3>{elm?.title}</h3>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: elm?.description,
                              }}
                            />
                          </React.Fragment>
                        )
                    )}
                </div>
              )}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
