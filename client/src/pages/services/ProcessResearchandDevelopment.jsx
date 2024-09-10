import React, { useState } from "react";

import { Minus, Plus } from "lucide-react";
import "styles/Services.css";
import {
  GetProcessBannerMutation,
  GetProcessMidSectionMutation,
  GetProcessTabsMutation,
} from "rest/service";
import { Banner } from "app/components/Ui/Banner";

export default function ProcessResearchandDevelopment() {
  const [tabs, setTabs] = useState(false);
  const [tabId, setTabId] = useState(-1);
  const getProcessBanner = GetProcessBannerMutation();
  const getMidSection = GetProcessMidSectionMutation();
  const getTabs = GetProcessTabsMutation();

  return (
    <div className="Process_research_page">
      <Banner
        heading={
          getProcessBanner?.data?.data && getProcessBanner?.data?.data?.heading
        }
        background={`linear-gradient(rgba(52, 202, 255, 0.85), rgba(52, 202, 255, 0.85)),url(${
          getProcessBanner?.data?.data && getProcessBanner?.data?.data?.image
        })`}
        extra="white_head process_top_banner"
      />
      <div className="proces_section">
        <div className="container-fluid">
          <div className="process_head_content">
            <p
              className="process_desc"
              dangerouslySetInnerHTML={{
                __html:
                  getProcessBanner?.data?.data &&
                  getProcessBanner?.data?.data?.description,
              }}
            />
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
                        {tabs && tabId === elm?.id ? <Minus /> : <Plus />}
                      </span>
                    </div>
                    <p
                      dangerouslySetInnerHTML={{ __html: elm?.description }}
                      className="process_tabs_det"
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
