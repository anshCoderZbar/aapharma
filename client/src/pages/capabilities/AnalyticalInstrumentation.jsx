import React from "react";

import "styles/Capabilities.css";

export default function AnalyticalInstrumentation() {
  return (
    <div className="analytical_instrumentation_page">
      <div className="container-fluid">
        <div className="row analytical_content">
          <div className="col-md-6">
            <div className="analytical_img">
              <img
                src={require("assets/analytical_img.png")}
                alt="analytical"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="analytical_main_content">
              <h1 className="main_top_heading analytical_head">
                Analytical Instrumentation
              </h1>
              <ul>
                <li>
                  500 MHz NMR at UM Equipped with Multiple Nuclei Probe H, F, C,
                  N, P, etc. (Univ. of Michigan, 24 Hour Access)
                </li>
                <li>Walk-up Waters MicroMass LCMS Spectrometer</li>
                <li>Agilent 1200 HPLC with DAD and LSMS Detectors</li>
                <li>Multiple HPLC & MPLC Set-Ups</li>
                <li>CHN, KF, Exact Mass (1 Day Turn Around)</li>
                <li>Polarimetry</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
