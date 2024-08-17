import { Banner } from "app/components/Ui/Banner";

import "styles/Services2.css";
import conical from "assets/conical.svg";

import circleShape from "assets/resource_circle2.svg";

import cursiveLine from "assets/resource_cursive_line.svg";

export default function ResearchCollaboration() {
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
            <button>Academia</button>
            <button>Private / Public Company</button>
          </div>
          <Acadmia />
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
            <div className="top_line_progress" />
            <div className="bottom_line_progress" />
            <div className="resource_cursive_line">
              <img src={cursiveLine} alt="cursive-line" />
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
