import { Banner } from "app/components/Ui/Banner";

import "styles/Services2.css";
import conical from "assets/conical.svg";

import circleShape from "assets/resource_circle2.svg";

import cursiveLine from "assets/resource_cursive_line.svg";
import { useState } from "react";

export default function ResearchCollaboration() {
  const [tabs, setTabs] = useState({ academia: true, privatePublic: false });

  return (
    <div className="research_page">
      <Banner
        heading={"Research Collaboration"}
        background={`linear-gradient(90deg, rgba(48, 48, 114, 1) 100%, rgba(48, 48, 114, 0) 100%)`}
        subMenu={"Research Tools"}
        extra="white_head process_top_banner"
      />
      <div className="container-fluid">
        <div className="project_mgt_content">
          <p>
            En route to clinic, chemical matter has to be thoroughly prosecuted
            such that few surprises, if any, appear during IND enabling GLP
            studies. This process involves sound judgement, thoughtful risk
            assessment and continued iteration of the lead and back-up compounds
            to achieve desired drug-like characteristics. Much consideration has
            to be given to:
          </p>
        </div>
        <div className="small_page_buttons">
          <button className="primary_buttton">
            Physicochemical properties
          </button>
          <button className="primary_buttton">Potency</button>
          <button className="primary_buttton">Selectivity</button>
          <button className="primary_buttton">
            Pharmacokinetic Properties
          </button>
          <button className="primary_buttton">Toxicity</button>
        </div>
      </div>
      <div className="research_boxes">
        <div className="container-fluid">
          <h3 className="reserach_head">
            AAPharmaSyn partners with researchers within private and public
            sector to accelerate their programs toward clinical development. We
            accomplish this through:
          </h3>
          <div className="research_inner_box">
            <div
              className="box_inner_content"
              style={{ backgroundColor: "#2A3072" }}
            >
              <p>
                1. Work-in-kind and financial investment via SAFE (simple
                agreement for future equity) or similar instruments.
              </p>
            </div>
            <div
              className="box_inner_content"
              style={{ backgroundColor: "#73C5EF" }}
            >
              <p>2. SBIR/STTR grants and other public and private grants</p>
            </div>
            <div
              className="box_inner_content"
              style={{ backgroundColor: "#9EC22E" }}
            >
              <p>3. Private placements</p>
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
        <div className="page_shadow_box">
          <p>
            The penultimate objective of AAPharmaSyn Research Collaboration is
            to bridge translational research funding gap. We believe that many
            breakthrough therapies never reach the clinic because for reasons
            that have little to do with fundamental science and a lot to do with
            misallocation of scarce resources.
          </p>
        </div>
      </div>
      <div className="container-fluid max-container">
        <div className="resource_progress">
          <div className="position-relative">
            <h2 className="text_res">Resources</h2>
            <div className=" ms-sm-5">
              <div className="top_line_progress" />
              <div className="bottom_line_progress" />
              <h2 className="time_txt">Time</h2>
              <div className="resource_cursive_line">
                <h3 className="text_font">Academia</h3>
                <button className="btn_center_reasource">
                  Valley of Death
                </button>
                <img src={cursiveLine} alt="cursive-line" />
                <h3 className="text_font dsk_uh">Industry</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="resource_cursive_diagram_btns">
          <button className="primary_buttton">Basic Science</button>
          <button className="primary_buttton">Translational Science</button>
          <button className="primary_buttton">Clinical Science</button>
        </div>
      </div>
    </div>
  );
}

const Acadmia = () => {
  return (
    <div className="collab_tab_body">
      <h2>Academia</h2>
      <div className="collab_diagram">
        {new Array(6).fill(true).map((_, i) => {
          return (
            <>
              <div key={i} className="collab_diagram_box">
                <img src={circleShape} alt="shape" />
                <div className="inner_box_cont">
                  <img src={conical} alt="academia" />
                  <p>RO1, R03, R021 / STTR / Other Grant</p>
                </div>
              </div>
              <div
                className={`arrow_res ${
                  i + 1 === 6 || i + 1 == 3 ? "d-none" : "d-block"
                }`}
              />
              {i + 1 === 3 && (
                <div className="funding_mid_sec">
                  <img src={require("assets/funding_gap.png")} alt="funding" />
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
  return (
    <div className="collab_tab_body">
      <h2>Private / Public Company</h2>
      <div className="collab_diagram">
        {new Array(6).fill(true).map((_, i) => {
          return (
            <>
              <div key={i} className="collab_diagram_box">
                <img src={circleShape} alt="shape" />
                <div className="inner_box_cont">
                  <img src={conical} alt="academia" />
                  <p>RO1, R03, R021 / STTR / Other Grant</p>
                </div>
              </div>
              <div
                className={`arrow_res ${
                  i + 1 === 6 || i + 1 == 2 ? "d-none" : "d-block"
                }`}
              />
              {i + 1 === 2 && (
                <div className="funding_mid_sec">
                  <img src={require("assets/funding_gap.png")} alt="funding" />
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
