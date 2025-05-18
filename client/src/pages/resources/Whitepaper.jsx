import React, { useState } from "react";

import "styles/Resources.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FilterWhitepaperMutation,
  GetAllWhitePapers,
  GetWhitePaperBanner,
} from "rest/resources";
import { Loader } from "app/components/Ui/Loader";
import { ChevronRight } from "lucide-react";

export default function Whitepaper() {
  const navigate = useNavigate();
  const getBanner = GetWhitePaperBanner();
  const getWhitepaper = GetAllWhitePapers();

  const [formData, setFormData] = useState({ year: "", month: "" });

  const filterResources = FilterWhitepaperMutation();
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    filterResources.mutate(newFormData);
  };

  return (
    <div className="whitepaper_page">
      <div className="whitepaper_banner_section">
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
                <Link className="bread_active" to="/whitepapers">
                  White Papers
                </Link>
              </li>
            </ul>
          </div>
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
          <select name="year" onChange={handleChange}>
            <option disabled>Select Year</option>
            <option value="">All Years</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
          <select name="month" onChange={handleChange}>
            <option value="">Month</option>
            {months?.map((month) => (
              <option key={month?.id} value={month?.name?.toLowerCase()}>
                {month?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="whitepaper_card_section">
          {formData?.month || formData?.year
            ? filterResources?.data?.data?.length < 1 && (
                <h2 className="empty_head">
                  Sorry, but nothing matched your search terms. Please try again
                  with some different keywords.
                </h2>
              )
            : ""}
          {formData?.month || formData?.year
            ? filterResources?.isPending && (
                <div className="d-flex justify-content-center align-items-center w-100">
                  <Loader />
                </div>
              )
            : ""}
          {formData?.month || formData?.year
            ? filterResources?.data?.data?.length >= 1 &&
              filterResources?.data?.data?.map((elm, i) => {
                return (
                  <div key={i} className="whitepaper_card">
                    <div className="card_details">
                      <p className="whitepaper_year">{elm?.date}</p>
                      <h2 className="whitepaper_data">{elm?.heading}</h2>
                      <div className="d-flex justify-content-center whitepaper_btn">
                        <button
                          onClick={() => navigate(`/whitepaper/${elm?.id}`)}
                          className="primary_btn_outline"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            : getWhitepaper?.data?.data?.map((elm, i) => {
                return (
                  <div key={i} className="whitepaper_card">
                    <div className="card_details">
                      <p className="whitepaper_year">{elm?.date}</p>
                      <h2 className="whitepaper_data">{elm?.heading}</h2>
                      <div className="d-flex justify-content-center whitepaper_btn">
                        <button
                          onClick={() => navigate(`/whitepaper/${elm?.id}`)}
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

const months = [
  {
    id: 1,
    name: "January",
  },
  {
    id: 2,
    name: "February",
  },
  {
    id: 3,
    name: "March",
  },
  {
    id: 4,
    name: "April",
  },
  {
    id: 5,
    name: "May",
  },
  {
    id: 6,
    name: "June",
  },
  {
    id: 7,
    name: "July",
  },
  {
    id: 8,
    name: "August",
  },
  {
    id: 9,
    name: "September",
  },
  {
    id: 10,
    name: "October",
  },
  {
    id: 11,
    name: "November",
  },
  {
    id: 12,
    name: "December",
  },
];
