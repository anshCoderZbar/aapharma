import React, { useRef, useState } from "react";
import {
  GetAboutBannerMutation,
  GetAboutCardMutation,
  GetAboutTimelineMutation,
} from "rest/about";

import { Swiper, SwiperSlide } from "swiper/react";
import "styles/About.css";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  const getBanner = GetAboutBannerMutation();
  const getAboutCard = GetAboutCardMutation();
  const getTimeLine = GetAboutTimelineMutation();

  const swiperRef = useRef(null);
  const [swipeIndex, setSwipeIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    if (swiperRef && swiperRef?.current && swiperRef?.current?.swiper) {
      swiperRef?.current?.swiper?.slideTo(slideIndex);
    }
  };

  const handleSlideChange = () => {
    setSwipeIndex(swiperRef.current.swiper?.activeIndex);
  };
  return (
    <div className="about_us_page">
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
              <Link className="bread_active" to="/about-AAPharmaSyn">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="about_banner"
          style={{
            background: `linear-gradient(90deg, #52bbe8 0%, rgba(255, 255, 255, 0) 53%), url(${getBanner?.data?.data.image})`,
          }}
        >
          <h1 className="main_top_heading">
            {getBanner?.data?.data?.heading
              ? getBanner?.data?.data?.heading
                  ?.split(" ")
                  ?.map((word, index) => (
                    <span key={index}>
                      {word}
                      <br />
                    </span>
                  ))
              : "About AAPharmaSyn"}
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html:
                getBanner?.data?.data?.description &&
                getBanner?.data?.data?.description,
            }}
          />
          <div className="about_icons">
            <span>
              <img
                src={getBanner?.data?.data.icon1 && getBanner?.data?.data.icon1}
                alt="banner_icons"
              />
            </span>
            <span>
              <img
                src={getBanner?.data?.data.icon2 && getBanner?.data?.data.icon2}
                alt="banner_icons"
              />
            </span>
            <span>
              <img
                src={getBanner?.data?.data.icon3 && getBanner?.data?.data.icon3}
                alt="banner_icons"
              />
            </span>
            <span>
              <img
                src={getBanner?.data?.data.icon4 && getBanner?.data?.data.icon4}
                alt="banner_icons"
              />
            </span>
          </div>
        </div>
        <div className="about_us_content">
          <p
            dangerouslySetInnerHTML={{
              __html:
                getBanner?.data?.data?.description2 &&
                getBanner?.data?.data?.description2,
            }}
          />
        </div>
      </div>
      <div className="container-fluid">
        <div className="abt_card_bg_image">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 ">
              <div className={`about_details_card_1`}>
                <div className="card_body">
                  <img
                    src={
                      getAboutCard?.data?.data?.icon1 &&
                      getAboutCard?.data?.data?.icon1
                    }
                    alt="card_icons"
                  />
                  <h4>
                    {getAboutCard?.data?.data?.title1 &&
                      getAboutCard?.data?.data?.title1}
                  </h4>
                  <ul className="card_list">
                    {getAboutCard?.data?.data?.list1?.map((elm, i) => (
                      <li key={i}>{elm}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 ">
              <div className={`about_details_card_2`}>
                <div className="card_body">
                  <img
                    src={
                      getAboutCard?.data?.data?.icon2 &&
                      getAboutCard?.data?.data?.icon2
                    }
                    alt="card_icons"
                  />
                  <h4>
                    {getAboutCard?.data?.data?.title2 &&
                      getAboutCard?.data?.data?.title2}
                  </h4>
                  <ul className="card_list">
                    {getAboutCard?.data?.data?.list2?.map((elm, i) => (
                      <li key={i}>{elm}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 ">
              <div className={`about_details_card_3`}>
                <div className="card_body">
                  <img
                    src={
                      getAboutCard?.data?.data?.icon3 &&
                      getAboutCard?.data?.data?.icon3
                    }
                    alt="card_icons"
                  />
                  <h4>
                    {getAboutCard?.data?.data?.title3 &&
                      getAboutCard?.data?.data?.title3}
                  </h4>
                  <ul className="card_list">
                    {getAboutCard?.data?.data?.list3?.map((elm, i) => (
                      <li key={i}>{elm}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="about_timeling">
          <h3>Company Timeline</h3>
          <div className="abt_swiper_btns">
            {getTimeLine?.data?.data?.length >= 1 &&
              getTimeLine?.data?.data?.map((data, i) => {
                return (
                  <button
                    key={i}
                    className={swipeIndex === i ? "btn_active" : ""}
                    onClick={() => {
                      goToSlide(i);
                      setSwipeIndex(i);
                    }}
                  >
                    {data?.heading}
                  </button>
                );
              })}
          </div>
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            onSlideChange={handleSlideChange}
            slidesPerView={1}
            breakpoints={{
              470: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 2.2,
              },
              1199: {
                slidesPerView: 3.5,
              },
            }}
          >
            {getTimeLine?.data?.data?.length >= 1 &&
              getTimeLine?.data?.data?.map((data, i) => {
                return (
                  <SwiperSlide key={i} className="timeline_swiper">
                    <div className="timeline_card">
                      <div
                        style={{ marginBottom: "3rem" }}
                        dangerouslySetInnerHTML={{ __html: data?.description }}
                      />
                      <div className="year">
                        <span>{data?.heading}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
