import React, { useState } from "react";

import { Banner } from "app/components/Ui/Banner";

import "styles/About.css";
// import bgBanner from "assets/page-banners/operating_philosophy_banner.jpg";
import {
  GetOperatingPhilosophyDiagram,
  GetOperatingPhilosophyMutation,
} from "rest/about";

export default function OperatingPhilosophy() {
  const getOperatingPhilosophy = GetOperatingPhilosophyMutation();
  const diagramData = GetOperatingPhilosophyDiagram();
  const [id, setId] = useState(null);
  console.log(id);
  return (
    <div className="operating_philosophy_page">
      <Banner
        heading={
          getOperatingPhilosophy?.data?.data?.heading &&
          getOperatingPhilosophy?.data?.data?.heading
        }
        description={
          getOperatingPhilosophy?.data?.data?.description &&
          getOperatingPhilosophy?.data?.data?.description
        }
        background={`linear-gradient(rgba(52, 202, 255, 0.85), rgba(52, 202, 255, 0.85)),url(${
          getOperatingPhilosophy?.data?.data?.image &&
          getOperatingPhilosophy?.data?.data?.image
        })`}
        extra="operat_banner"
      />
      <div className="operating_content">
        <div className="container-fluid">
          <p>
            {getOperatingPhilosophy?.data?.data?.diagramHeading &&
              getOperatingPhilosophy?.data?.data?.diagramHeading}
          </p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="operating_diagram">
          <div className="outer_diagram">
            {diagramData?.data?.data?.map((elm, i) => {
              return (
                <React.Fragment key={i}>
                  <div
                    onMouseEnter={() => setId(elm?.id)}
                    onMouseLeave={() => setId(null)}
                    className={`outer__circle circle_${i + 1}`}
                  >
                    <img src={elm?.image} alt="icon" />
                  </div>
                  {elm?.id === id ? (
                    <div className="inner_circle">
                      <div className="inner_hover_content">
                        <h3>{elm?.title}</h3>
                        <p>{elm?.description && elm?.description}</p>
                      </div>
                    </div>
                  ) : null}
                </React.Fragment>
              );
            })}
            {!id && (
              <div className="inner_circle">
                <p>
                  {getOperatingPhilosophy?.data?.data?.diagramDescription &&
                    getOperatingPhilosophy?.data?.data?.diagramDescription}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="operating_diagram">
<div className="outer_diagram">
  <div className="outer__circle circle_1">
    <img src={require("assets/operation_icon_1.png")} alt="icon" />
  </div>
  <div className="outer__circle circle_2">
    <img src={require("assets/operation_icon_2.png")} alt="icon" />
  </div>
  <div className="outer__circle circle_3">
    <img src={require("assets/operation_icon_3.png")} alt="icon" />
  </div>
  <div className="outer__circle circle_4">
    <img src={require("assets/operation_icon_4.png")} alt="icon" />
  </div>
  <div className="outer__circle circle_5">
    <img src={require("assets/operation_icon_5.png")} alt="icon" />
  </div>
  <div className="outer__circle circle_6">
    <img src={require("assets/operation_icon_6.png")} alt="icon" />
  </div>
  <div className="outer__circle circle_7">
    <img src={require("assets/operation_icon_7.png")} alt="icon" />
  </div>
  <div className="inner_circle">
    <p>
      {getOperatingPhilosophy?.data?.data?.diagramDescription &&
        getOperatingPhilosophy?.data?.data?.diagramDescription}
    </p>
  </div>
</div>
</div> */
}
