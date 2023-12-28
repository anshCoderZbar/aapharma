import React from "react";

import "styles/Capabilities.css";

export default function Accreditations() {
  return (
    <div className="accreditations_page">
      <div className="container-fluid">
        <div className="row accreditations_content">
          <div className="col-md-6">
            <div className="accreditations_img">
              <img
                src={require("assets/accreditations_img.png")}
                alt="accreditations"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="accreditations_main_content">
              <h1 className="main_top_heading">Accreditations</h1>
              <p>
                State of Michigan registration for Controlled Substances
                Schedule 2-5 Research Laboratory License
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
