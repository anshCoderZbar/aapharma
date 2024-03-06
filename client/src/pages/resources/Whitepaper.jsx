import React from "react";

import "styles/Resources.css";
import banner from "assets/page-banners/whitepaper_banner.jpg";
import { useNavigate } from "react-router-dom";
import { GetWhitePaperBanner } from "rest/resources";

export default function Whitepaper() {
  const navigate = useNavigate();
  const getBanner = GetWhitePaperBanner();
  return (
    <div className="whitepaper_page">
      <div className="whitepaper_banner_section">
        <div className="container-fluid">
          <div
            className="whitepaper_banner"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(48, 48, 114, 1) 0%, rgba(48, 48, 114, 0) 100%), url(${
                getBanner?.data?.data?.image && getBanner?.data?.data?.image
              })`,
            }}
          >
            <span>
              {getBanner?.data?.data?.heading && getBanner?.data?.data?.heading}
            </span>
            <h1>
              {getBanner?.data?.data?.subheading &&
                getBanner?.data?.data?.subheading}
            </h1>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  getBanner?.data?.data?.description &&
                  getBanner?.data?.data?.description,
              }}
            />
            <div className="banner_img">
              <img
                src={require("assets/whitepaper_banner_overlay.png")}
                alt="banner_icons"
              />
            </div>
          </div>
        </div>
        <div className="whitepaper_bottom_section">
          <p>
            {getBanner?.data?.data?.slogan && getBanner?.data?.data?.slogan}
            <span>
              -
              {getBanner?.data?.data?.sloganBy &&
                getBanner?.data?.data?.sloganBy}
            </span>
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="paper_page_filter">
          <select>
            <option value="">Select Year</option>
            <option value="1">2023</option>
            <option value="2">2022</option>
            <option value="3">2021</option>
          </select>
          <select>
            <option value="">Month</option>
            <option value="1">January</option>
            <option value="2">Feburary</option>
            <option value="3">March</option>
            <option value="4">April</option>
          </select>
        </div>
        <div className="whitepaper_card_section">
          {data?.map((elm, i) => {
            return (
              <div key={i} className="whitepaper_card">
                <div className="card_details">
                  <p className="whitepaper_year">{elm?.date}</p>
                  <h2 className="whitepaper_data">{elm?.heading}</h2>
                  <div className="d-flex justify-content-center whitepaper_btn">
                    <button
                      onClick={() => navigate(`/whitepaper/${i + 1}`)}
                      className="primary_btn_outline"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    date: "October 3, 2022",
    heading: "Proteolysis-Targeting Chimeras (PROTACs) in Cancer Therapy",
  },
  {
    date: "February 22, 2021",
    heading: "The Importance of Synthetic Organic Chemistry in Drug Discovery",
  },
  {
    date: "October 3, 2022",
    heading: "Proteolysis-Targeting Chimeras (PROTACs) in Cancer Therapy",
  },
  {
    date: "February 22, 2021",
    heading: "The Importance of Synthetic Organic Chemistry in Drug Discovery",
  },
  {
    date: "October 3, 2022",
    heading: "Proteolysis-Targeting Chimeras (PROTACs) in Cancer Therapy",
  },
  {
    date: "February 22, 2021",
    heading: "The Importance of Synthetic Organic Chemistry in Drug Discovery",
  },
  {
    date: "October 3, 2022",
    heading: "Proteolysis-Targeting Chimeras (PROTACs) in Cancer Therapy",
  },
  {
    date: "February 22, 2021",
    heading: "The Importance of Synthetic Organic Chemistry in Drug Discovery",
  },
];
