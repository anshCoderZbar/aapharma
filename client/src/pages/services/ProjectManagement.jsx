import React from "react";
import { Banner } from "app/components/Ui/Banner";

import "styles/Services.css";
import {
  GetProjectManagementBanner,
  GetProjectManagementDescription,
  GetProjectManagementLists,
} from "rest/service";

export default function ProjectManagement() {
  const getBanner = GetProjectManagementBanner();
  const getBottomDesc = GetProjectManagementDescription();
  const getLists = GetProjectManagementLists();

  return (
    <div className="project_management_page">
      <Banner
        heading={getBanner?.data?.data && getBanner?.data?.data?.heading}
        background={`linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),url(${
          getBanner?.data?.data && getBanner?.data?.data?.image
        })`}
        extra="white_head process_top_banner"
      />
      <div className="container-fluid">
        <div className="project_mgt_content">
          <p>{getBanner?.data?.data && getBanner?.data?.data?.description}</p>
        </div>
        <div className="project_management_lists">
          {getLists?.data?.data?.length >= 1 &&
            getLists?.data?.data?.map((details, i) => {
              return (
                <div key={i} className="list_inner_cards">
                  <div
                    className={`row project_list_layout ${
                      i % 2 === 0 && "project_list_reverse"
                    }`}
                  >
                    <div className="col-lg-7 col-xl-9">
                      <div className="project_card_details">
                        <h3>
                          {i + 1}. {details?.heading}
                        </h3>
                        <div className="project_card_content">
                          <div className="proj_flex">
                            {details?.headings?.map((elm) => (
                              <h4>{elm}</h4>
                            ))}
                          </div>
                          <div className="proj_flex">
                            {details?.descriptions?.map((elm) => (
                              <p>{elm}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-xl-3">
                      <div className="project_card_image1">
                        <img src={details?.image} alt="featured" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div
          className="project_mgt_content"
          dangerouslySetInnerHTML={{
            __html:
              getBottomDesc?.data?.data &&
              getBottomDesc?.data?.data?.description,
          }}
        />
        <div className="bottom_mgt_content">
          <p>
            {getBottomDesc?.data?.data && getBottomDesc?.data?.data?.heading}
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
