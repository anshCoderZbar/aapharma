import React, { useEffect, useState } from "react";

import "styles/Services.css";
import { Timeline } from "app/components/Timeline";
import { GetCarbohydrateBanner, GetCarbohydrateDiagram } from "rest/service";
import { ComplexShape1 } from "app/common/services/Icons";

export default function Carbohydrates() {
  const getBanner = GetCarbohydrateBanner();
  const getDiagram = GetCarbohydrateDiagram();
  const [id, setId] = useState(null);

  useEffect(() => {
    if (getDiagram?.data?.data) {
      setId(getDiagram?.data?.data[0]?.id);
    }
  }, [getDiagram?.data?.data]);

  return (
    <div className="carbohydrates_page">
      <div className="main_banner">
        <div className="container-fluid">
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
      </div>

      <div className="container-fluid">
        <div className="carbohydrates_diagram_outer">
          <div className="carbohydrates_diagram_inner">
            {getDiagram?.data?.data?.map((elm, i) => {
              return (
                <div className="carbo_diagram">
                  <div
                    onMouseEnter={() => setId(elm?.id)}
                    onMouseLeave={() => setId(getDiagram?.data?.data[0]?.id)}
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
                          {elm?.list?.map((data) => {
                            return <li>{data}</li>;
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
