import React from "react";

import { Banner } from "app/components/Ui/Banner";

import "styles/Services.css";
import {
  GetResearchDevelopmentBanner,
  GetResearchDevelopmentSort,
} from "rest/service";

export default function ResearchAndDevelopement() {
  const getBanner = GetResearchDevelopmentBanner();
  const getSort = GetResearchDevelopmentSort();
  return (
    <div className="research_and_development_page">
      <Banner
        background={`url(${
          getBanner?.data?.data?.image && getBanner?.data?.data?.image
        })`}
        extra="research_banner"
        heading={
          getBanner?.data?.data?.heading && getBanner?.data?.data?.heading
        }
        description={
          getBanner?.data?.data?.description &&
          getBanner?.data?.data?.description
        }
      />
      <div className="container-fluid">
        <div className="research_btn_section">
          <button>
            {getSort?.data?.data?.button1 && getSort?.data?.data?.button1}
          </button>
          <button>
            {getSort?.data?.data?.button2 && getSort?.data?.data?.button2}
          </button>
          <button>
            {getSort?.data?.data?.button3 && getSort?.data?.data?.button3}
          </button>
          <button>
            {getSort?.data?.data?.button4 && getSort?.data?.data?.button4}
          </button>
          <button>
            {getSort?.data?.data?.button5 && getSort?.data?.data?.button5}
          </button>
          <button>
            {getSort?.data?.data?.button6 && getSort?.data?.data?.button6}
          </button>
          <button>
            {getSort?.data?.data?.button7 && getSort?.data?.data?.button7}
          </button>
          <button>
            {getSort?.data?.data?.button8 && getSort?.data?.data?.button8}
          </button>
        </div>
      </div>
      <div className="research_details_sec">
        <div className="container-fluid">
          <div className="row res_sec">
            <div className="col-xl-6">
              <div className="research_content">
                <h2>
                  {getSort?.data?.data?.heading && getSort?.data?.data?.heading}
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      getSort?.data?.data?.description &&
                      getSort?.data?.data?.description,
                  }}
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="research_img">
                <img
                  src={getSort?.data?.data?.image && getSort?.data?.data?.image}
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
