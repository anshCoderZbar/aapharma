import React from "react";

import { Banner } from "app/components/Ui/Banner";

import "styles/Services.css";
import banner from "assets/page-banners/research_and_development_banner.png";

export default function ResearchAndDevelopement() {
  return (
    <div className="research_and_development_page">
      <Banner
        background={`url(${banner})`}
        extra="research_banner"
        heading="Enabling Lipid Research and Development"
        description="AAPharmaSyn is a recognized leader in the development of custom proprietary lipids. Over the years we generated thousands of unique lipids with a wide range of biological 
        activity and applications. Our proprietary methodology allows synthesis of lipids previously considered time and effort prohibitive. We specialize in the synthesis of:"
      />
      <div className="container-fluid">
        <div className="research_btn_section">
          <button>Dendrimers</button>
          <button>Anionic lipids</button>
          <button>Neutral phospholipids</button>
          <button>Neutral aminolipids</button>
          <button>PEGylated lipids</button>
          <button>Glycerolipids</button>
          <button>Sphingolipids</button>
          <button>Sterol lipids</button>
        </div>
      </div>
      <div className="research_details_sec">
        <div className="container-fluid">
          <div className="row res_sec">
            <div className="col-xl-6">
              <div className="research_content">
                <h2>
                  Tuning lipids to enhanceselective organ targeting (SORT).
                </h2>
                <p>
                  The mechanistic study discovered that the biophysical class of
                  SORT molecule generates a distinct protein corona when
                  incorporated into the LNP. This corona plays a crucial role in
                  determining the site of mRNA delivery within the body.Upon
                  entering the systemic circulation, a majority of the
                  nanoparticles accumulate in the liver. However, targeting
                  organs other than the liver has remained an unresolved issue
                  for a significant period. By incorporating an auxiliary
                  component called selective organ targeting molecules into
                  lipid nanoparticles, it is possible to target selectively the
                  liver, spleen, lungs, and other organs
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="research_img">
                <img
                  src={require("assets/research_sec_banner.png")}
                  alt="research_banner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="research_tabs">
          <h2 className="main_top_heading">Possible modification include:</h2>
          <div className="research_btn_section research_tabs_btn">
            <button>Introduction of hydrolysable moieties</button>
            <button>Wide selective of R groups on the nitrogen</button>
            <button>Large variety of linkers</button>
            <button>Deuteration at any position</button>
          </div>
          <div className="tabs_imgs">
            <img src={require("assets/research_tab_1.png")} alt="tabs" />
          </div>
          <div className="bottom_res">
            <p>
              AAPharmaSyn has copious demonstrated experience to both design and
              execute synthesis of a complex lipid or a library of lipids. For
              more information, please contact us.
            </p>
            <button className="primary_buttton">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}
