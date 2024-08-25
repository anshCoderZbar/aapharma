import { Banner } from "app/components/Ui/Banner";

import "styles/Services2.css";
import conical from "assets/conical.svg";

import circleShape from "assets/resource_circle2.svg";

import cursiveLine from "assets/resource_cursive_line.svg";
import { useState } from "react";
import {
  GetAllResearchCollaborationAcademia,
  GetAllResearchCollaborationCompany,
  GetResearchCollaborationBanner,
  GetResearchCollaborationDiagram,
  GetResearchCollaborationMidSection,
} from "rest/service";

export default function ResearchCollaboration() {
  const [tabs, setTabs] = useState({ academia: true, privatePublic: false });
  const getBanner = GetResearchCollaborationBanner();
  const getMidSection = GetResearchCollaborationMidSection();
  const getDiagram = GetResearchCollaborationDiagram();
  return (
    <div className="research_page">
      <Banner
        heading={getBanner?.data?.data && getBanner?.data?.data?.heading}
        background={`linear-gradient(90deg, rgba(48, 48, 114, 1) 100%, rgba(48, 48, 114, 0) 100%)`}
        subMenu={"Research Tools"}
        extra="white_head process_top_banner"
      />
      <div className="container-fluid">
        <div
          className="project_mgt_content"
          dangerouslySetInnerHTML={{
            __html: getBanner?.data?.data && getBanner?.data?.data?.description,
          }}
        />
        <div className="small_page_buttons">
          <button className="primary_buttton">
            {getBanner?.data?.data && getBanner?.data?.data?.FirstButton}
          </button>
          <button className="primary_buttton">
            {getBanner?.data?.data && getBanner?.data?.data?.SecondButton}
          </button>
          <button className="primary_buttton">
            {getBanner?.data?.data && getBanner?.data?.data?.ThirdButton}
          </button>
          <button className="primary_buttton">
            {getBanner?.data?.data && getBanner?.data?.data?.FourthButton}
          </button>
          <button className="primary_buttton">
            {getBanner?.data?.data && getBanner?.data?.data?.FifthButton}
          </button>
        </div>
      </div>
      <div className="research_boxes">
        <div className="container-fluid">
          <h3 className="reserach_head">
            {getMidSection?.data?.data && getMidSection?.data?.data?.heading}
          </h3>
          <div className="research_inner_box">
            <div
              className="box_inner_content"
              style={{ backgroundColor: "#2A3072" }}
            >
              <p>
                1.
                {getMidSection?.data?.data &&
                  getMidSection?.data?.data?.firstAccomplishment}
              </p>
            </div>
            <div
              className="box_inner_content"
              style={{ backgroundColor: "#73C5EF" }}
            >
              <p>
                2.
                {getMidSection?.data?.data &&
                  getMidSection?.data?.data?.secondAccomplishment}
              </p>
            </div>
            <div
              className="box_inner_content"
              style={{ backgroundColor: "#9EC22E" }}
            >
              <p>
                3.
                {getMidSection?.data?.data &&
                  getMidSection?.data?.data?.thirdAccomplishment}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid max-container">
        <div className="collaboration_tabs">
          <div className="reserach_collab_tab_btn">
            <button
              onClick={() => setTabs({ academia: true, privatePublic: false })}
              style={{
                backgroundColor: tabs.academia && "#2a3072",
                color: tabs.academia && "white",
              }}
            >
              Academia
            </button>
            <button
              onClick={() => setTabs({ academia: false, privatePublic: true })}
              style={{
                backgroundColor: tabs.privatePublic && "#2a3072",
                color: tabs.privatePublic && "white",
              }}
            >
              Private / Public Company
            </button>
          </div>
          {tabs.academia && <Acadmia />}
          {tabs.privatePublic && <PrivatePublicCompany />}
        </div>
      </div>
      <div className="container-fluid">
        <div
          className="page_shadow_box"
          dangerouslySetInnerHTML={{
            __html:
              getDiagram?.data?.data && getDiagram?.data?.data?.description,
          }}
        />
      </div>
      <div className="container-fluid max-container">
        <div className="resource_progress">
          <div className="position-relative">
            <h2 className="text_res">
              {getDiagram?.data?.data && getDiagram?.data?.data?.leftHeading}
            </h2>
            <div className=" ms-sm-5">
              <div className="top_line_progress" />
              <div className="bottom_line_progress" />
              <h2 className="time_txt">
                {getDiagram?.data?.data && getDiagram?.data?.data?.rightHeading}
              </h2>
              <div className="resource_cursive_line">
                <h3 className="text_font">
                  {getDiagram?.data?.data && getDiagram?.data?.data?.leftText}
                </h3>
                <button className="btn_center_reasource">
                  {getDiagram?.data?.data && getDiagram?.data?.data?.blueButton}
                </button>
                <img src={cursiveLine} alt="cursive-line" />
                <h3 className="text_font dsk_uh">
                  {getDiagram?.data?.data && getDiagram?.data?.data?.rightText}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="resource_cursive_diagram_btns">
          <button className="primary_buttton">
            {getDiagram?.data?.data && getDiagram?.data?.data?.firstButton}
          </button>
          <button className="primary_buttton">
            {getDiagram?.data?.data && getDiagram?.data?.data?.secondButton}
          </button>
          <button className="primary_buttton">
            {getDiagram?.data?.data && getDiagram?.data?.data?.thirdButton}
          </button>
        </div>
      </div>
    </div>
  );
}

const Acadmia = () => {
  const getAcademia = GetAllResearchCollaborationAcademia();
  return (
    <div className="collab_tab_body">
      <h2>Academia</h2>
      <div className="collab_diagram">
        {getAcademia?.data?.data?.length >= 1 &&
          getAcademia?.data?.data.map((academia, i) => {
            return (
              <>
                <div key={i} className="collab_diagram_box">
                  <img src={circleShape} alt="shape" />
                  <div className="inner_box_cont">
                    <img src={academia?.image} alt="academia" />
                    <p>{academia?.description}</p>
                  </div>
                </div>
                <div
                  className={`arrow_res ${
                    i + 1 === 6 || i + 1 == 3 ? "d-none" : "d-block"
                  }`}
                />
                {i + 1 === 3 && (
                  <div className="funding_mid_sec">
                    <img
                      src={require("assets/funding_gap.png")}
                      alt="funding"
                    />
                    <h3>
                      Funding <br /> Gap
                    </h3>
                  </div>
                )}
              </>
            );
          })}
      </div>
    </div>
  );
};

const PrivatePublicCompany = () => {
  const getCompay = GetAllResearchCollaborationCompany();
  return (
    <div className="collab_tab_body">
      <h2>Private / Public Company</h2>
      <div className="collab_diagram">
        {getCompay?.data?.data?.length >= 1 &&
          getCompay?.data?.data.map((company, i) => {
            return (
              <>
                <div key={i} className="collab_diagram_box">
                  <img src={circleShape} alt="shape" />
                  <div className="inner_box_cont">
                    <img src={company?.image} alt="academia" />
                    <p>{company?.description}</p>
                  </div>
                </div>
                <div
                  className={`arrow_res ${
                    i + 1 === 5 || i + 1 == 2 ? "d-none" : "d-block"
                  }`}
                />
                {i + 1 === 2 && (
                  <div className="funding_mid_sec">
                    <img
                      src={require("assets/funding_gap.png")}
                      alt="funding"
                    />
                    <h3>
                      Funding <br /> Gap
                    </h3>
                  </div>
                )}
              </>
            );
          })}
      </div>
    </div>
  );
};
