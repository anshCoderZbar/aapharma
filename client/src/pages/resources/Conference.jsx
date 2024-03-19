import React from "react";

import { Banner } from "app/components/Ui/Banner";

import "styles/Resources.css";
import { ChevronRight } from "lucide-react";

export default function Conference() {
  return (
    <div className="conference_page">
      <Banner
        heading={"Conferences"}
        background={`linear-gradient(90deg, rgba(48, 48, 114, 1) 0%, rgba(48, 48, 114, 0) 100%), url(${require("assets/page-banners/confrense.png")})`}
        extra="white_head"
      />
      <div className="confrences_content">
        <div className="container-fluid">
          <div className="confrence_head">
            <h2 className="main_top_heading">Conferences</h2>
            <p className="confrence_top_content">
              We find it critically important to consistently stay engaged
              within chemical and pharmaceutical sectcrs ecosystem. To that end
              aim to attend and often exhibit at conferences.
            </p>
          </div>
          <div className="confrenct_btm_section">
            <div className="row ">
              <div className="col-lg-6">
                <div className="confrence_card">
                  <div className="confrence_card_img">
                    <div className="top_blue_line">
                      <h2>Annually</h2>
                    </div>
                    <img
                      src={require("assets/confrence.png")}
                      alt="conference"
                    />
                  </div>
                  <div className="confrence_card_body">
                    <div className="confrence_card_logo">
                      <img
                        src={require("assets/confrence_logo.png")}
                        alt="logo"
                      />
                    </div>
                    <h3 className="card_body_head">
                      American Association for the Advancement of Science
                    </h3>
                    <div className="confrence_card_content">
                      <p>http://www.aaas.org/events/2021-aaas-annual-meeting</p>
                    </div>
                    <p className="confrence_loacation">
                      <span>Location:</span> American Association for the
                      Advancement of Science
                    </p>
                  </div>
                  <div className="navigate_link">
                    <a href="#" target="_blank">
                      <ChevronRight />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6  kuj_ihy">
                <div className="confrence_card">
                  <div className="confrence_card_img">
                    <div className="top_blue_line">
                      <h2>Annually</h2>
                    </div>
                    <img
                      src={require("assets/confrence.png")}
                      alt="conference"
                    />
                  </div>
                  <div className="confrence_card_body">
                    <div className="confrence_card_logo">
                      <img
                        src={require("assets/confrence_logo.png")}
                        alt="logo"
                      />
                    </div>
                    <h3 className="card_body_head">ChemOutsourcing</h3>
                    <div className="confrence_card_content">
                      <p>
                        ChemOutsourcing is the largest USA-based API and
                        Pharmaceutical Ingredients Sept show attracting annually
                        700-800 custorners, project and executive management and
                        business development personnel from the pharmaceutical,
                        biotech, chemical. and chemistry services industries
                        from 30 countries.
                      </p>
                    </div>
                    <p className="confrence_loacation">
                      <span>Location:</span> ChemOutsourcing
                    </p>
                  </div>
                  <div className="navigate_link">
                    <a href="#" target="_blank">
                      <ChevronRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
