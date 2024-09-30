import React, { useState } from "react";

import { Minus, Plus } from "lucide-react";
import "styles/Services.css";
import "styles/ProcessDiagram.css";
import diagramOutline from "assets/process_diagram.svg";
import {
  GetProcessBannerMutation,
  GetProcessDiagramMutation,
  GetProcessMidSectionMutation,
  GetProcessTabsMutation,
} from "rest/service";
import { Banner } from "app/components/Ui/Banner";

export default function ProcessResearchandDevelopment() {
  const getProcessBanner = GetProcessBannerMutation();
  const getMidSection = GetProcessMidSectionMutation();
  const getTabs = GetProcessTabsMutation();
  const getDiagram = GetProcessDiagramMutation();

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
              <img src={diagramOutline} alt="process diagram" />
              <p className="process_heading_1">
                {getDiagram?.data?.data && getDiagram?.data?.data?.heading1}
              </p>
              <p className="process_heading_2">
                {getDiagram?.data?.data && getDiagram?.data?.data?.heading2}
              </p>
              <p className="process_heading_3">
                {getDiagram?.data?.data && getDiagram?.data?.data?.heading3}
              </p>
              <p className="process_heading_4">
                {getDiagram?.data?.data && getDiagram?.data?.data?.heading4}
              </p>
              <p className="process_heading_5">
                {getDiagram?.data?.data && getDiagram?.data?.data?.heading5}
              </p>
              <p className="process_heading_6">
                {getDiagram?.data?.data && getDiagram?.data?.data?.heading6}
              </p>
              <p className="process_heading_7">
                {getDiagram?.data?.data && getDiagram?.data?.data?.heading7}
              </p>
              <p className="process_heading_8">
                {getDiagram?.data?.data && getDiagram?.data?.data?.heading8}
              </p>
            </div>
            <div className="mobile_diagram_box">
              <h2>AAPharmaSyn</h2>
              <p className="mobile_process_heading_1">
                {getDiagram?.data?.data && getDiagram?.data?.data?.heading1}
              </p>
              <p className="mobile_process_heading_2">
                {getDiagram?.data?.data && getDiagram?.data?.data?.heading2}
              </p>
              <p className="mobile_process_heading_3">
                {getDiagram?.data?.data && getDiagram?.data?.data?.heading3}
              </p>
              <p className="mobile_process_heading_4">
                {getDiagram?.data?.data && getDiagram?.data?.data?.heading4}
              </p>
              <p className="mobile_process_heading_5">
                {getDiagram?.data?.data && getDiagram?.data?.data?.heading5}
              </p>
              <p className="mobile_process_heading_6">
                {getDiagram?.data?.data && getDiagram?.data?.data?.heading6}
              </p>
              <p className="mobile_process_heading_7">
                {getDiagram?.data?.data && getDiagram?.data?.data?.heading7}
              </p>
              <p className="mobile_process_heading_8">
                {getDiagram?.data?.data && getDiagram?.data?.data?.heading8}
              </p>
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
                return <ResearchCard elm={elm} key={elm?.id} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

const ResearchCard = ({ elm }) => {
  const [tabs, setTabs] = useState(false);

  return (
    <div className={`process_acc_card ${tabs && "process_acc_card_active"} `}>
      <div className="d-flex justify-content-between align-items-center head_top_card">
        <h2>{elm?.heading}</h2>
        <span
          onClick={() => {
            setTabs(!tabs);
          }}
          className="text-white"
        >
          {tabs ? <Minus /> : <Plus />}
        </span>
      </div>
      <p
        dangerouslySetInnerHTML={{ __html: elm?.description }}
        className="process_tabs_det"
      />
    </div>
  );
};
