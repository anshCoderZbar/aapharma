import React from "react";

import banner from "assets/page-banners/carbohydrate_banner.png";

import "styles/Services.css";
import { Timeline } from "app/components/Timeline";
import { GetCarbohydrateBanner } from "rest/service";

export default function Carbohydrates() {
  const getBanner = GetCarbohydrateBanner();
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
    </div>
  );
}
