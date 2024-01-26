import React, { useRef, useState } from "react";

import { Banner } from "app/components/Ui/Banner";
import {
  Shape1,
  Shape2,
  Shape3,
  Shape4,
  Shape5,
  Shape6,
  Shape7,
} from "./Shapes";

import "styles/About.css";

import {
  GetOperatingPhilosophyDiagram,
  GetOperatingPhilosophyMutation,
} from "rest/about";
import { useOutsideClick } from "lib/hooks/useOutsideClick";

export default function OperatingPhilosophy() {
  const diagramRef = useRef();
  const getOperatingPhilosophy = GetOperatingPhilosophyMutation();
  const diagramData = GetOperatingPhilosophyDiagram();
  const [id, setId] = useState(null);
  const [color, setColor] = useState("#2A3072");

  useOutsideClick(diagramRef, id, () => {
    setId(null);
  });

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
          <div ref={diagramRef} className="outer_diagram">
            <div
              onClick={() => {
                setId(diagramData?.data?.data[0]?.id);
                setColor("#34caff");
              }}
              className="outer__circle circle_1"
            >
              <Shape1
                color={diagramData?.data?.data[0]?.id === id && color}
                image={diagramData?.data?.data[0]?.image}
              />
            </div>
            <div
              onClick={() => {
                setId(diagramData?.data?.data[1]?.id);
                setColor("#34caff");
              }}
              className="outer__circle circle_2"
            >
              <Shape2
                color={diagramData?.data?.data[1]?.id === id && color}
                image={diagramData?.data?.data[1]?.image}
              />
            </div>
            <div
              onClick={() => {
                setId(diagramData?.data?.data[2]?.id);
                setColor("#34caff");
              }}
              className="outer__circle circle_3"
            >
              <Shape3
                color={diagramData?.data?.data[2]?.id === id && color}
                image={diagramData?.data?.data[2]?.image}
              />
            </div>
            <div
              onClick={() => {
                setId(diagramData?.data?.data[3]?.id);
                setColor("#34caff");
              }}
              className="outer__circle circle_4"
            >
              <Shape4
                color={diagramData?.data?.data[3]?.id === id && color}
                image={diagramData?.data?.data[3]?.image}
              />
            </div>
            <div
              onClick={() => {
                setId(diagramData?.data?.data[4]?.id);
                setColor("#34caff");
              }}
              className="outer__circle circle_5"
            >
              <Shape5
                color={diagramData?.data?.data[4]?.id === id && color}
                image={diagramData?.data?.data[4]?.image}
              />
            </div>
            <div
              onClick={() => {
                setId(diagramData?.data?.data[5]?.id);
                setColor("#34caff");
              }}
              className="outer__circle circle_6"
            >
              <Shape6
                color={diagramData?.data?.data[5]?.id === id && color}
                image={diagramData?.data?.data[5]?.image}
              />
            </div>
            <div
              onClick={() => {
                setId(diagramData?.data?.data[6]?.id);
                setColor("#34caff");
              }}
              className="outer__circle circle_7"
            >
              <Shape7
                color={diagramData?.data?.data[6]?.id === id && color}
                image={diagramData?.data?.data[6]?.image}
              />
            </div>
            <div className="inner_circle">
              {diagramData?.data?.data?.map((elm, i) => {
                return (
                  <React.Fragment key={i}>
                    {elm?.id === id ? (
                      <p>{elm?.description && elm?.description}</p>
                    ) : null}
                  </React.Fragment>
                );
              })}
              {!id && (
                <p>
                  {getOperatingPhilosophy?.data?.data?.diagramDescription &&
                    getOperatingPhilosophy?.data?.data?.diagramDescription}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
