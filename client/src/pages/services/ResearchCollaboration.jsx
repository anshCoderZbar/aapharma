import { Banner } from "app/components/Ui/Banner";

import "styles/Services2.css";
import conical from "assets/conical.svg";

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
      <div className="container-fluid">
        <div className="collaboration_tabs">
          <div className="reserach_collab_tab_btn">
            <button>Academia</button>
            <button>Private / Public Company</button>
          </div>
          <Acadmia />
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
        <div className="collab_diagram_box">
          <div className="inner_box_cont">
            <img src={conical} alt="academia" />
            <p>RO1, R03, R021 / STTR / Other Grant</p>
          </div>
        </div>
      </div>
    </div>
  );
};
