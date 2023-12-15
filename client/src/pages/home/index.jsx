import React, { useEffect } from "react";
import { Linkedin, MoveRightIcon, Twitter, Youtube } from "lucide-react";

import { Services } from "app/common/home/Services";
import { Testimonials } from "app/common/home/Testimonial";
import { Articles } from "app/common/home/Articles";
import { HomeCatalog } from "app/common/home/Home-Catalog";
import {
  AllClientMutation,
  GetBannerApi,
  GetHomeCompanyMission,
  GetHomeServicesHeadings,
  GetVisionMutation,
} from "rest/home";

import "styles/Home.css";
import { useAtom } from "jotai";
import { allSettings } from "store/SettingsStore";

export const Home = () => {
  const [allDetails] = useAtom(allSettings);

  const bannerData = GetBannerApi();
  const getHomeCompanyMission = GetHomeCompanyMission();
  const getServiceHeading = GetHomeServicesHeadings();
  const getVisionData = GetVisionMutation();
  const allClients = AllClientMutation();

  return (
    <div className="home_page">
      <div
        className="home_banner"
        style={{
          backgroundImage: `url(${bannerData?.data?.baseUrl}/${bannerData?.data?.data?.image})`,
        }}
      >
        <div className="container-fluid">
          <div className="banner_content">
            <p>
              {bannerData?.data?.data?.heading
                ? bannerData?.data?.data?.heading
                : "WELCOME TO AAPHARMASYN"}
            </p>
            <h1>
              {bannerData?.data?.data?.description
                ? bannerData?.data?.data?.description
                : "Superior Chemistry Services"}
            </h1>
            <button className="primary_buttton">Get a Quote</button>
          </div>
          <div className="home_banner_social">
            <ul>
              <li>
                <a href={allDetails?.twitter}>
                  <Twitter />
                </a>
              </li>
              <li>
                <a href={allDetails?.youtube}>
                  <Youtube />
                </a>
              </li>
              <li>
                <a href={allDetails?.linkedin}>
                  <Linkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="company_misson">
        <div className="container-fluid">
          <div className="row  align-items-center">
            <div className="col-lg-6 col-xl-6">
              <img
                src={`${getHomeCompanyMission?.data?.baseUrl}/${getHomeCompanyMission?.data?.data?.featuredImage}`}
                alt="our-mission"
                className="mission_img"
              />
            </div>
            <div className="col-lg-6  col-xl-6">
              <div className="mission_content">
                <h2>
                  {getHomeCompanyMission?.data?.data?.heading
                    ? getHomeCompanyMission?.data?.data?.heading
                    : "Company Mission"}
                </h2>
                <div
                  className="mission_content"
                  dangerouslySetInnerHTML={{
                    __html: getHomeCompanyMission?.data?.data?.description,
                  }}
                />
              </div>
              <div className="misson_icon">
                <div className="mission_icon_box">
                  <img
                    src={`${getHomeCompanyMission?.data?.baseUrl}/${getHomeCompanyMission?.data?.data?.icon1}`}
                    alt="icon1"
                  />
                  <p>{getHomeCompanyMission?.data?.data?.heading1}</p>
                </div>
                <div className="mission_icon_box">
                  <img
                    src={`${getHomeCompanyMission?.data?.baseUrl}/${getHomeCompanyMission?.data?.data?.icon2}`}
                    alt="icon1"
                  />
                  <p>{getHomeCompanyMission?.data?.data?.heading2}</p>
                </div>
                <div className="mission_icon_box">
                  <img
                    src={`${getHomeCompanyMission?.data?.baseUrl}/${getHomeCompanyMission?.data?.data?.icon3}`}
                    alt="icon1"
                  />
                  <p>{getHomeCompanyMission?.data?.data?.heading3}</p>
                </div>
              </div>
              <button className="primary_buttton btn_mrg">
                Company Mission
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="our_services">
        <div className="sevices_bg">
          <div className="container-fluid">
            <div className="services_content">
              <h2>
                {getServiceHeading?.data?.data?.heading
                  ? getServiceHeading?.data?.data?.heading
                  : "Our Services"}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: getServiceHeading?.data?.data?.description,
                }}
              />
              <Services />
              <div className="service_btn">
                <button className="primary_btn_outline d-flex align-items-center">
                  View All
                  <span>
                    <MoveRightIcon />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <HomeCatalog />
      </div>
      <div className="our_vision">
        <div
          className="vision_banner"
          style={{
            backgroundImage: `url(${getVisionData?.data?.baseUrl}/${getVisionData?.data?.data?.image})`,
          }}
        >
          <div className="container">
            <div className="vision_content">
              <h2>
                {getVisionData?.data?.data?.heading
                  ? getVisionData?.data?.data?.heading
                  : "Our Vision"}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: getVisionData?.data?.data?.description,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="latest_articles">
        <div className="container">
          <div className="articles_head">
            <h2>Latest Articles</h2>
            <p>
              We consistently challenge our assumptions and beliefs in order to
              foster professional and personal growth. To that end we summarize
              our thinking in the series of white papers designed to inform and
              generate constructive discussions.
            </p>
          </div>
          <Articles />
        </div>
      </div>
      <div className="clients">
        <h2>Current and legacy clients</h2>
        <div className="container">
          <div className="clients_logo">
            {allClients?.data?.data?.length >= 1 &&
              allClients?.data?.data?.map((logo, i) => {
                return <img key={i} src={logo?.image} alt="clients" />;
              })}
          </div>
        </div>
      </div>
      <div className="testimonials_section">
        <Testimonials />
      </div>
    </div>
  );
};
