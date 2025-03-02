import React, { useEffect, useRef, useState } from "react";

import "styles/Services.css";
import { Timeline } from "app/components/Timeline";
import { GetCarbohydrateBanner, GetCarbohydrateDiagram } from "rest/service";
import { ComplexShape1 } from "app/common/services/Icons";
import { useOutsideClick } from "lib/hooks/useOutsideClick";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Carbohydrates() {
  const diagramRef = useRef();
  const getBanner = GetCarbohydrateBanner();
  const getDiagram = GetCarbohydrateDiagram();
  const [id, setId] = useState(null);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    if (getDiagram?.data?.data) {
      setId(getDiagram?.data?.data[0]?.id);
      setImgUrl(getDiagram?.data?.data[0]?.image);
    }
  }, [getDiagram?.data?.data]);

  useOutsideClick(diagramRef, id, () => {
    setId(getDiagram?.data?.data[0]?.id);
  });

  return (
    <div className="carbohydrates_page">
      <div className="main_banner">
        <div className="container-fluid">
          <div className="bread_crup">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <ChevronRight />
              </li>
              <li>Research Tools</li>
              <li>
                <ChevronRight />
              </li>
              <li>
                <Link className="bread_active" to="/carbohydrates">
                  carbohydrates
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="banner_head carbohydrate_banner"
            style={{
              backgroundImage: `url(${
                getBanner?.data?.data?.image && getBanner?.data?.data?.image
              })`,
            }}
          >
            <div className="img1">
              <img src={require("assets/scientist_1.png")} alt="scientist" />
            </div>
            <h1>
              {getBanner?.data?.data?.heading && getBanner?.data?.data?.heading}
            </h1>
            <div className="img2">
              <img src={require("assets/scientist_2.png")} alt="scientist" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div
          dangerouslySetInnerHTML={{
            __html:
              getBanner?.data?.data?.description &&
              getBanner?.data?.data?.description,
          }}
          className="carbohydrates_details_sec"
        />
      </div>
      <div className="container-fluid">
        <div className="max-container">
          <Timeline />
        </div>
      </div>
      {/* <div className="container-fluid">
          <div
            dangerouslySetInnerHTML={{
              __html:
                getBanner?.data?.data?.description &&
                getBanner?.data?.data?.description,
            }}
            className="carbohydrates_details_sec"
          />
        </div> */}
      <div className="max-container">
        <div className="container-fluid">
          <div className="carbohydrates_details_sec kjsjIuy">
            <p>
              Development of Sialic Acid Mimetics as High-Affinity Ligands for
              Sialic Acid Binding Immunoglobulin-Like Lectin 2
            </p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="carbohydrates_diagram_outer">
            <div ref={diagramRef} className="carbohydrates_diagram_inner">
              {getDiagram?.data?.data?.map((elm, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      setId(elm?.id);
                      setImgUrl(elm?.image);
                    }}
                    className="carbo_diagram"
                  >
                    <button
                      style={{
                        backgroundColor: elm?.id === id ? "#34caff" : "#2a3072",
                      }}
                    >
                      {elm?.year}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          {getDiagram?.data?.data?.map((elm, i) => {
            return (
              elm?.id === id && (
                <div key={i} className="row carbs_diagaram">
                  <div className="col-lg-5 ">
                    <div className="carb_imgs_sec">
                      {/* <div className="carb_inner_content">
                        <h4 className="text-capitalize">{elm?.heading}:</h4>
                      </div> */}
                      <div className="carb_img_chem">
                        <img src={imgUrl} alt="chemical" className={``} />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="card_chem_details">
                      <div className="carbo_inner_circle">
                        <div className="carb_inner_content">
                          <h4 className="text-capitalize">
                            Natural-Sialoside:
                          </h4>
                          <ul>
                            <li>H2: Galactose-glycan </li>
                            <li>R3: H </li>
                            <li>R4: OH </li>
                            <li>R5: AC </li>
                            <li>R6: OH </li>
                          </ul>
                        </div>
                      </div>
                      <div className="carb_second_img">
                        <img
                          src={require("assets/carb_second_img.png")}
                          alt="carbohydrate"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}
