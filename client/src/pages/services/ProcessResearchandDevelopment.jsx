import React, { useState } from "react";

import { ChevronRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import "styles/Services.css";
import {
  GetProcessBannerMutation,
  GetProcessMidSectionMutation,
  GetProcessTabsMutation,
} from "rest/service";

export default function ProcessResearchandDevelopment() {
  const [tabs, setTabs] = useState(false);
  const [tabId, setTabId] = useState(-1);
  const getProcessBanner = GetProcessBannerMutation();
  const getMidSection = GetProcessMidSectionMutation();
  const getTabs = GetProcessTabsMutation();

  return (
    <div className="Process_research_page">
      <div className="main_banner">
        <div className="container-fluid">
          <div className="bread_crup">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <ChevronRight />
              </li>
              <li>
                <Link
                  className="bread_active"
                  to="/process-research-and-development"
                >
                  Process Research and Development
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="proces_section">
        <div className="container-fluid">
          <div className="row process_top_section">
            <div className="col-lg-6">
              <div className="process_head_content">
                <h1 className="main_top_heading">
                  {getProcessBanner?.data?.data &&
                    getProcessBanner?.data?.data?.heading}
                </h1>
                <p
                  className="process_desc"
                  dangerouslySetInnerHTML={{
                    __html:
                      getProcessBanner?.data?.data &&
                      getProcessBanner?.data?.data?.description,
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="process_featured_img">
                <img
                  src={
                    getProcessBanner?.data?.data &&
                    getProcessBanner?.data?.data?.image
                  }
                  alt="process-featured"
                />
              </div>
            </div>
          </div>
          <div className="process_box">
            <div className="process_inner_box">
              <p>
                {getProcessBanner?.data?.data &&
                  getProcessBanner?.data?.data?.subheading}
              </p>
            </div>
          </div>
          <div className="process_diagram">
            <div className="process_diagram_top_content">
              <p>
                {getMidSection?.data?.data &&
                  getMidSection?.data?.data?.upperheading}
              </p>
            </div>
            <div className="diagram_image">
              <img
                src={
                  getMidSection?.data?.data && getMidSection?.data?.data?.image
                }
                alt="process diagram"
              />
            </div>
            <div className="process_diagram_bottom_content">
              <p>
                {getMidSection?.data?.data &&
                  getMidSection?.data?.data?.lowerHeading}
              </p>
            </div>
          </div>
          <div className="process_accordion">
            {getTabs?.data?.data?.length >= 1 &&
              getTabs?.data?.data?.map((elm) => {
                return (
                  <div
                    key={elm?.id}
                    className={`process_acc_card ${
                      tabs && tabId === elm?.id ? "process_acc_card_active" : ""
                    } `}
                  >
                    <div className="d-flex justify-content-between align-items-center head_top_card">
                      <h2>{elm?.heading}</h2>
                      <span
                        onClick={() => {
                          setTabId(elm?.id);
                          setTabs(tabId === elm?.id ? !tabs : true);
                        }}
                        className="text-white"
                      >
                        <Plus />
                      </span>
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: elm?.description }} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
