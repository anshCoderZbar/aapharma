import React, { useState } from "react";

import "styles/Services.css";

export default function CaseStudy() {
  const [caseTabs, setCaseTabs] = useState({
    refrence: true,
    process: false,
    highValue: false,
    storage: false,
  });

  return (
    <div className="case_study_page">
      <div className="container-fluid">
        <div className="case_study_head">
          <h1 className="main_top_heading text-center">Case Study</h1>
        </div>
        <div className="case_tabs_button">
          <button
            className={`${caseTabs.refrence ? "case_btn_active" : ""}`}
            onClick={() =>
              setCaseTabs({
                refrence: true,
                process: false,
                highValue: false,
                storage: false,
              })
            }
          >
            Reference Standards
          </button>
          <button
            className={`${caseTabs.process ? "case_btn_active" : ""}`}
            onClick={() =>
              setCaseTabs({
                refrence: false,
                process: true,
                highValue: false,
                storage: false,
              })
            }
          >
            Process Impurities
          </button>
          <button
            className={`${caseTabs.highValue ? "case_btn_active" : ""}`}
            onClick={() =>
              setCaseTabs({
                refrence: false,
                process: false,
                highValue: true,
                storage: false,
              })
            }
          >
            High Value Reagents
          </button>
          <button
            className={`${caseTabs.storage ? "case_btn_active" : ""}`}
            onClick={() =>
              setCaseTabs({
                refrence: false,
                process: false,
                highValue: false,
                storage: true,
              })
            }
          >
            Dedicated Storage and inventory management infrastructure
          </button>
        </div>

        <div className="tabs_content_case">
          <div className="row tab_flex_row">
            <div className="col-md-4">
              <div className="case_tab_img">
                <img src={require("assets/case_tab_1.png")} alt="tabs" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="case_tab_content">
                <h5>
                  Analycital testing clients is interested in single source
                  supply of high value reference standards.
                </h5>
                <p>
                  AAPharmSyn reference is readily available to supply all
                  required refrence standards and create custom customers portal
                  that allows seamless integration with customer process and JIT
                  supply capability.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="case_bottom_banner">
          <img src={require("assets/case_banner.png")} alt="casebanner" />
        </div>
      </div>
    </div>
  );
}
