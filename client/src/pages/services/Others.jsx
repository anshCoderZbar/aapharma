import React from "react";

import { Banner } from "app/components/Ui/Banner";

import "styles/Services.css";
import conical from "assets/conical.svg";

export default function Others() {
  return (
    <div className="others_page">
      <Banner
        heading={"Others"}
        background={`linear-gradient(90deg, rgba(48, 48, 114, 1) 100%, rgba(48, 48, 114, 0) 100%)`}
        subMenu={"Research Tools"}
        extra="white_head process_top_banner"
      />
      <div className="container-fluid">
        <div className="project_mgt_content large_contdw">
          <p className="fw-semibold text-center">
            AAPharmaSyn also provides a variety of ancillary chemistry services
            that may be one off or occur on a recurring basis. 
          </p>
        </div>
        <div className="icons_card_outer">
          <div className="icon_card_body">
            {new Array(9).fill(true).map((_, i) => {
              return (
                <div key={i} className="icons_card_inner">
                  <img src={conical} alt="icon" />
                  <h3>Specialty Chemicals Sourcing</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
