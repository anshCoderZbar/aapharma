import React, { useRef, useState } from "react";

import "styles/Services.css";
import banner from "assets/page-banners/custom_chemical_synthesis_banner.jpg";
import {
  GetCustomChemicalSynthesisMutation,
  GetExpertiesIncludesMutation,
  GetSingleChemicalSynthesisMutation,
} from "rest/service";

export default function CustomChemicalSynthesis() {
  const myRef = useRef(null);
  const [active, setActive] = useState(0);
  const getChemicalSynthesisMutation = GetCustomChemicalSynthesisMutation();
  const getSingleChemicalSynthesis = GetSingleChemicalSynthesisMutation();
  const getExpertiesIncludes = GetExpertiesIncludesMutation();

  const handleCardClick = (id) => {
    setActive(id);
    const formData = new FormData();
    formData.append("customchemicalsynthesisId", id);
    getSingleChemicalSynthesis?.mutate(formData);
    if (myRef.current) {
      const element = myRef.current;
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log();
  return (
    <div className="custom_chemical_synthesis_page">
      <div className="container-fluid">
        <div className="chemical_top_sec">
          <h1 className="main_top_heading text-center">
            Custom Chemical Synthesis
          </h1>
          <div className="chemical_synthesis_card">
            {getChemicalSynthesisMutation?.data?.data?.map((elm) => {
              return (
                <div
                  onClick={() => handleCardClick(elm?.id)}
                  key={elm?.id}
                  className={`card_outer ${
                    active === elm?.id ? "chemical_card_active" : ""
                  }`}
                >
                  <div className="card_inner_body">
                    <img src={elm?.image} alt="icon" />
                    <p>{elm?.heading}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {getSingleChemicalSynthesis?.data?.data && (
            <div
              ref={myRef}
              key={getSingleChemicalSynthesis?.data?.data?.id}
              className={`${
                active === getSingleChemicalSynthesis?.data?.data?.id
                  ? "openAnimation"
                  : ""
              } service_description chem_desc`}
            >
              <p>{getSingleChemicalSynthesis?.data?.data?.description}</p>
            </div>
          )}
        </div>
        <div
          className="custom_page_banner"
          style={{
            backgroundImage: `linear-gradient(rgba(42, 48, 114, 0.85), rgba(42, 48, 114, 0.85)),url(${banner})`,
          }}
        >
          <h2 className="main_top_heading text-white">
            {getExpertiesIncludes?.data?.data?.heading &&
              getExpertiesIncludes?.data?.data?.heading}
          </h2>
          <div className="lists_chemical">
            {getExpertiesIncludes?.data?.data?.expertiseList &&
              getExpertiesIncludes?.data?.data?.expertiseList
                ?.split("@@")
                ?.map((elm, i) => {
                  return (
                    <div key={i} className="chem_1">
                      <span>{elm}</span>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

const cardData = [
  {
    id: 1,
    img: require("assets/chemical_icon_1.png"),
    heading: "Lead generation / Lead optimization",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,1",
  },
  {
    id: 2,
    img: require("assets/chemical_icon_2.png"),
    heading:
      "New chemical entities including libraries for structure activity relationship (SAR) analysis",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,2",
  },
  {
    id: 3,
    img: require("assets/chemical_icon_3.png"),
    heading: "Reference compounds",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,3",
  },
  {
    id: 4,
    img: require("assets/chemical_icon_4.png"),
    heading: "API impurities",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,4",
  },
  {
    id: 5,
    img: require("assets/chemical_icon_5.png"),
    heading: "Reagents for R&D projects (e.g. from patents or publications)",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,5",
  },
  {
    id: 6,
    img: require("assets/chemical_icon_6.png"),
    heading: "Stable isotope labeled compounds ( e.g. D, 13C, 15N)",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,6",
  },
  {
    id: 7,
    img: require("assets/chemical_icon_7.png"),
    heading: "Route scouting",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,7",
  },
  {
    id: 8,
    img: require("assets/chemical_icon_8.png"),
    heading: "Synthetic methodology development",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,8",
  },
  {
    id: 9,
    img: require("assets/chemical_icon_9.png"),
    heading: "Scaffold and building block design",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,9    ",
  },
];

const listsData = [
  {
    heading:
      "Synthesis, purification, and characterization of organic molecules",
  },
  {
    heading: "Photochemistry",
  },
  {
    heading:
      "Suzuki, Stille, Sonogashire, Buchwald-Hartwig and other coupling reactions",
  },
  {
    heading: "Chiral synthesis and separations",
  },
  {
    heading: "Catalytic hydrogenations",
  },
  {
    heading: "Heterocyclic chemistry",
  },
  {
    heading: "Multi-step synthesis",
  },
  {
    heading: "Fluorescent dye design, development, and synthesis",
  },
  {
    heading: "Pressure reactions",
  },
  {
    heading: "Targeted stable isotopic labeling",
  },
  {
    heading: "Organometallic chemistry",
  },
  {
    heading: "Distillations",
  },
  {
    heading: "Sulfonations",
  },
];
