import React from "react";

import "styles/Capabilities.css";
export default function Capabilities() {
  return (
    <div className="capabilities_page">
      <div className="container-fluid">
        <div className="capabilities_section">
          <div className="row capability_inner_page">
            <div className="col-lg-6">
              <div className="capabilities_content">
                <h1 className="main_top_heading">Capabilities</h1>
                <p>AAPharmaSyn capabilities are underpinned by</p>
                <ul>
                  <li>
                    Extensive experience in operating within contract research
                    framework
                  </li>
                  <li>
                    Evergreen reinvestment in new instrumentation and technology
                  </li>
                  <li>
                    Expertise in solving challenging and nuanced chemistry
                    problems
                  </li>
                  <li>
                    Focus on hiring, developing and retaining great employees
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="capabilities_img">
                <img
                  src={require("assets/capabilities_img.png")}
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="capabilities_bottom_content">
          <p>
            We invite you to discover our chemistry expertise and contact and
            challenge us to propose solutions to your most demanding chemistry
            needs.
          </p>
        </div>
      </div>
    </div>
  );
}
