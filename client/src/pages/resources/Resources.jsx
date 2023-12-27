import React from "react";

import "styles/Resources.css";

export default function Resources() {
  return (
    <div className="resources_page">
      <div className="container-fluid">
        <h1 className="main_top_heading text-center">Resources</h1>
        <p className="resources_desc">
          We frequently have to use various sources of information and thought
          if may be helpful to consolidate most of them in one place as they may
          be helpful to our existing and potential clients and partners.
        </p>
        <div className="resources_btns">
          <button>Publicly Available Information</button>
          <button>Government</button>
          <button>Patents</button>
          <button>Chemistry</button>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="resources_img">
              <img src={require("assets/resources_img.png")} alt="resources" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="resource_card_details">
              {data?.map((elm) => {
                return (
                  <div className="resources_cards">
                    <div className="row">
                      <div className="col-8">
                        <div className="resource_left_content">
                          <h3>American Chemical Society</h3>
                          <p>
                            ACS is one of the world’s largest scientific
                            organizations with more than 150,000 members in 140+
                            countries.
                          </p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="resource_right_content">
                          <p>Visit</p>
                          <a href="#" target="_blank" rel="noreferrer">
                            acs.org
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="resource_bottom_section">
          <h2 className="main_top_heading text-center">Useful Guides</h2>
        </div>
        <div className="resources_btns resources_btn_sec">
          <button>ESI Spectra Elucidation</button>
          <button>NMR Shifts for Residual Solvent Impurities</button>
          <button>Rotovap Guidance</button>
        </div>
      </div>
    </div>
  );
}

const data = [1, 2, 3, 4, 5, 6];
