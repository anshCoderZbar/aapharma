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

  useEffect(() => {
    if (getDiagram?.data?.data) {
      setId(getDiagram?.data?.data[0]?.id);
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
        <Timeline />
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
      </div>

      <div className="container-fluid">
        <div className="carbohydrates_diagram_outer">
          <div ref={diagramRef} className="carbohydrates_diagram_inner">
            {getDiagram?.data?.data?.map((elm, i) => {
              return (
                <div key={i} className="carbo_diagram">
                  <div
                    onClick={() => setId(elm?.id)}
                    className={`carbo_digram_circle carb_circle_${i + 1}`}
                  >
                    <ComplexShape1 color={elm?.id === id && "#34caff"} />
                    <div className="complex_year">
                      <span className={`complex_year_${i + 1}`}>
                        {elm?.year}
                      </span>
                    </div>
                    {elm?.id === id && (
                      <div className={`complex_img carbo_img_${i + 1}`}>
                        <img
                          src={elm?.image}
                          alt="chemical"
                          className={`complex_year_${i + 1}`}
                        />
                      </div>
                    )}
                  </div>

                  {elm?.id === id && (
                    <div className="carbo_inner_circle">
                      <div className="carb_inner_content">
                        <h4 className="text-capitalize">{elm?.heading}</h4>
                        <ul>
                          {elm?.list?.map((data, i) => {
                            return <li key={i}>{data}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
