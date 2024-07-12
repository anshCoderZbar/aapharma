import React from "react";
import { Banner } from "app/components/Ui/Banner";

import "styles/Services.css";

export default function ProjectManagement() {
  return (
    <div className="project_management_page">
      <Banner
        heading={"Project Management"}
        background={`linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),url(${require("assets/project_management_banner.png")})`}
        extra="white_head process_top_banner"
      />
      <div className="container-fluid">
        <div className="project_mgt_content">
          <p>
            AAPharmaSyn had a broad network of strategic alliances designed to
            solve the most demanding drug development challenges.  Our extended
            team consists of recognized experts in:
          </p>
        </div>
        <div className="project_management_lists">
          {data?.map((details, i) => {
            return (
              <div key={i} className="list_inner_cards">
                <div
                  className={`row project_list_layout ${
                    i % 2 === 0 && "project_list_reverse"
                  }`}
                >
                  <div className="col-lg-9">
                    <div className="project_card_details">
                      <h3>
                        {i + 1}. {details?.heading}
                      </h3>
                      <div className="project_card_content">
                        <h4>Chemical Synthesis </h4>
                        <p>
                          Assisting in the development of scalable and
                          reproducible chemical synthesis routes for the active
                          pharmaceutical ingredient (API).
                        </p>
                      </div>
                      <div className="project_card_content">
                        <h4>Characterization </h4>
                        <p>
                          Determining the physical and chemical properties of
                          the API, including solubility, stability, and purity
                        </p>
                      </div>
                      <div className="project_card_content">
                        <h4>Analytical Methods Development </h4>
                        <p>
                          Developing and validating analytical methods for the
                          identification, quantification, and purity assessment
                          of the API.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="project_card_image1">
                      <img
                        src={require("assets/project_card_image1.png")}
                        alt="featured"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="project_mgt_content">
          <p>
            Bringing new therapeutic solutions to the patient requires
            coordination between multiple stakeholders with a wide range of
            short-term objectives. This process is underpinned by a skillful and
            nuanced choreography. It is far too often that the process breaks
            down due to the lack of team cohesion and nonconstructive abrasion.
            We observe that project management is often downplayed as a skill
            inferior to subject matter expertise. In reality, there is ample
            evidence to show that poor proactive communication and subpar
            methodical disciplined execution in the face of impinging
            “emergencies” are key determinants in the downfall many early-stage
            drug discovery programs.
          </p>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    heading: "Pre-Clinical Development",
    image: require("assets/project_card_image1.png"),
    content: [
      {
        contentHead: "Chemical Synthesis",
        contentDetail:
          "Assisting in the development of scalable and reproducible chemical synthesis routes for the active pharmaceutical ingredient (API).",
      },
      {
        contentHead: "Characterization",
        contentDetail:
          "Determining the physical and chemical properties of the API, including solubility, stability, and purity.",
      },
      {
        contentHead: "Analytical Methods Development",
        contentDetail:
          "Developing and validating analytical methods for the identification, quantification, and purity assessment of the API.",
      },
    ],
  },
  {
    heading: "Pre-Clinical Development",
    image: require("assets/project_card_image1.png"),
    content: [
      {
        contentHead: "Chemical Synthesis",
        contentDetail:
          "Assisting in the development of scalable and reproducible chemical synthesis routes for the active pharmaceutical ingredient (API).",
      },
      {
        contentHead: "Characterization",
        contentDetail:
          "Determining the physical and chemical properties of the API, including solubility, stability, and purity.",
      },
      {
        contentHead: "Analytical Methods Development",
        contentDetail:
          "Developing and validating analytical methods for the identification, quantification, and purity assessment of the API.",
      },
    ],
  },
  {
    heading: "Pre-Clinical Development",
    image: require("assets/project_card_image1.png"),
    content: [
      {
        contentHead: "Chemical Synthesis",
        contentDetail:
          "Assisting in the development of scalable and reproducible chemical synthesis routes for the active pharmaceutical ingredient (API).",
      },
      {
        contentHead: "Characterization",
        contentDetail:
          "Determining the physical and chemical properties of the API, including solubility, stability, and purity.",
      },
      {
        contentHead: "Analytical Methods Development",
        contentDetail:
          "Developing and validating analytical methods for the identification, quantification, and purity assessment of the API.",
      },
    ],
  },
  {
    heading: "Pre-Clinical Development",
    image: require("assets/project_card_image1.png"),
    content: [
      {
        contentHead: "Chemical Synthesis",
        contentDetail:
          "Assisting in the development of scalable and reproducible chemical synthesis routes for the active pharmaceutical ingredient (API).",
      },
      {
        contentHead: "Characterization",
        contentDetail:
          "Determining the physical and chemical properties of the API, including solubility, stability, and purity.",
      },
      {
        contentHead: "Analytical Methods Development",
        contentDetail:
          "Developing and validating analytical methods for the identification, quantification, and purity assessment of the API.",
      },
    ],
  },
  {
    heading: "Pre-Clinical Development",
    image: require("assets/project_card_image1.png"),
    content: [
      {
        contentHead: "Chemical Synthesis",
        contentDetail:
          "Assisting in the development of scalable and reproducible chemical synthesis routes for the active pharmaceutical ingredient (API).",
      },
      {
        contentHead: "Characterization",
        contentDetail:
          "Determining the physical and chemical properties of the API, including solubility, stability, and purity.",
      },
      {
        contentHead: "Analytical Methods Development",
        contentDetail:
          "Developing and validating analytical methods for the identification, quantification, and purity assessment of the API.",
      },
    ],
  },
  {
    heading: "Pre-Clinical Development",
    image: require("assets/project_card_image1.png"),
    content: [
      {
        contentHead: "Chemical Synthesis",
        contentDetail:
          "Assisting in the development of scalable and reproducible chemical synthesis routes for the active pharmaceutical ingredient (API).",
      },
      {
        contentHead: "Characterization",
        contentDetail:
          "Determining the physical and chemical properties of the API, including solubility, stability, and purity.",
      },
      {
        contentHead: "Analytical Methods Development",
        contentDetail:
          "Developing and validating analytical methods for the identification, quantification, and purity assessment of the API.",
      },
    ],
  },
  {
    heading: "Pre-Clinical Development",
    image: require("assets/project_card_image1.png"),
    content: [
      {
        contentHead: "Chemical Synthesis",
        contentDetail:
          "Assisting in the development of scalable and reproducible chemical synthesis routes for the active pharmaceutical ingredient (API).",
      },
      {
        contentHead: "Characterization",
        contentDetail:
          "Determining the physical and chemical properties of the API, including solubility, stability, and purity.",
      },
      {
        contentHead: "Analytical Methods Development",
        contentDetail:
          "Developing and validating analytical methods for the identification, quantification, and purity assessment of the API.",
      },
    ],
  },
  {
    heading: "Pre-Clinical Development",
    image: require("assets/project_card_image1.png"),
    content: [
      {
        contentHead: "Chemical Synthesis",
        contentDetail:
          "Assisting in the development of scalable and reproducible chemical synthesis routes for the active pharmaceutical ingredient (API).",
      },
      {
        contentHead: "Characterization",
        contentDetail:
          "Determining the physical and chemical properties of the API, including solubility, stability, and purity.",
      },
      {
        contentHead: "Analytical Methods Development",
        contentDetail:
          "Developing and validating analytical methods for the identification, quantification, and purity assessment of the API.",
      },
    ],
  },
  {
    heading: "Pre-Clinical Development",
    image: require("assets/project_card_image1.png"),
    content: [
      {
        contentHead: "Chemical Synthesis",
        contentDetail:
          "Assisting in the development of scalable and reproducible chemical synthesis routes for the active pharmaceutical ingredient (API).",
      },
      {
        contentHead: "Characterization",
        contentDetail:
          "Determining the physical and chemical properties of the API, including solubility, stability, and purity.",
      },
      {
        contentHead: "Analytical Methods Development",
        contentDetail:
          "Developing and validating analytical methods for the identification, quantification, and purity assessment of the API.",
      },
    ],
  },
  {
    heading: "Pre-Clinical Development",
    image: require("assets/project_card_image1.png"),
    content: [
      {
        contentHead: "Chemical Synthesis",
        contentDetail:
          "Assisting in the development of scalable and reproducible chemical synthesis routes for the active pharmaceutical ingredient (API).",
      },
      {
        contentHead: "Characterization",
        contentDetail:
          "Determining the physical and chemical properties of the API, including solubility, stability, and purity.",
      },
      {
        contentHead: "Analytical Methods Development",
        contentDetail:
          "Developing and validating analytical methods for the identification, quantification, and purity assessment of the API.",
      },
    ],
  },
];
