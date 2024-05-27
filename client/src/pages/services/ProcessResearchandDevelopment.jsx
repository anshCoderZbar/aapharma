import React, { useState } from "react";

import { ChevronRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import "styles/Services.css";

export default function ProcessResearchandDevelopment() {
  const [tabs, setTabs] = useState(false);
  const [tabId, setTabId] = useState(-1);
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
                  Process Research and Development
                </h1>
                <p className="process_desc">
                  Within the pharmaceutical industry, Process Research and
                  Development (R&D) traditionally focused on stabilizing
                  chemical processes.Some 40 years ago, there was insufficient
                  emphasis on crucial scale-up considerations such as safety,
                  waste management, and energy efficiency. The industry
                  rationalized its practices by arguing that the life-saving
                  benefits of pharmaceutical products significantly outweighed
                  the environmental impact of the waste produced. Consequently,
                  this pharma emerged as one of the least efficient sectors in
                  terms of waste generation per unit of product manufactured.
                  Moreover, once a less- than-ideal process is scaled to
                  commercial production and embedded in subsequent regulatory
                  filings, opting for an alternative becomes a costly and
                  time-consuming endeavor due to regulatory hurdles.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="process_featured_img">
                <img
                  src={require("assets/processs_featured_image.png")}
                  alt="process-featured"
                />
              </div>
            </div>
          </div>
          <div className="process_box">
            <div className="process_inner_box">
              <p>
                Hence, identifying the most efficient process route during the
                development phase is crucial. Starting in early 2000's there has
                been a paradigm shift within the industry towards recognizing
                and addressing the need for more sustainable and efficient
                process designs.
              </p>
            </div>
          </div>
          <div className="process_diagram">
            <div className="process_diagram_top_content">
              <p>
                AA PharmaSyn has been the pioneer in helping its clients to
                evaluate and preemptively address process hurdle both in
                generics and proprietary APIS. We Offer comprehensive
                pharmaceutical process research and development services for
                drug substance that include
              </p>
            </div>
            <div className="diagram_image">
              <img
                src={require("assets/process_diagram_img.png")}
                alt="process diagram"
              />
            </div>
            <div className="process_diagram_bottom_content">
              <p>
                As we conduct Route scouting activities, we are guided by the
                best industry practices summarized within 13 principles of
                process chemistry.
              </p>
            </div>
          </div>
          <div className="process_accordion">
            {accData?.length >= 1 &&
              accData?.map((elm) => {
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
                    <p>{elm?.description}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

const accData = [
  {
    id: 1,
    heading: "Prevention",
    description:
      "it is better to prevent waste than to treat/clean up after its created.",
  },
  {
    id: 2,
    heading: "Safer Solvents/Auxiliaries",
    description:
      "use of innocuous solvents (e.g. water) minimization Of drying agents, column chromatography, etc.",
  },
  {
    id: 3,
    heading: "Design for Degradation",
    description:
      "ideally, process products and by-products should breakdown into innocuous materials and/or do not persist in the environment",
  },
  {
    id: 4,
    heading: "Atom Economy",
    description:
      "it is better to prevent waste than to treat/clean up after its created.",
  },
  {
    id: 5,
    heading: "Energy Efficiency",
    description:
      "use of innocuous solvents (e.g. water) minimization Of drying agents, column chromatography, etc.",
  },
  {
    id: 6,
    heading: "Real Time Analysis",
    description:
      "ideally, process products and by-products should breakdown into innocuous materials and/or do not persist in the environment",
  },
  {
    id: 7,
    heading: "Minimization Of Hazardous Conditions",
    description:
      "it is better to prevent waste than to treat/clean up after its created.",
  },
  {
    id: 8,
    heading: "Use of Renewable Raw Materials",
    description:
      "use of innocuous solvents (e.g. water) minimization Of drying agents, column chromatography, etc.",
  },
  {
    id: 9,
    heading: "Legal",
    description:
      "ideally, process products and by-products should breakdown into innocuous materials and/or do not persist in the environment",
  },
];
