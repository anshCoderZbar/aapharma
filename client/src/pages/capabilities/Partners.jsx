import React from "react";
import { Banner } from "app/components/Ui/Banner";
import { Swiper, SwiperSlide } from "swiper/react";

import "styles/Capabilities.css";
import { Pagination } from "swiper/modules";
import {
  GetAllPartnerCardMutation,
  GetAllPartnerLogo,
  GetPartnerBannerMutation,
  GetPartnerBottomMutation,
} from "rest/capabilities";

export default function Partners() {
  const getBanner = GetPartnerBannerMutation();
  const getAllCards = GetAllPartnerCardMutation();
  const getBottom = GetPartnerBottomMutation();
  const getPartnerLogos = GetAllPartnerLogo();
  return (
    <div className="partners_page">
      <Banner
        heading={
          getBanner?.data?.data?.heading && getBanner?.data?.data?.heading
        }
        background={`linear-gradient(90deg, rgba(48, 48, 114, 1) 0%, rgba(48, 48, 114, 0) 100%), url(${
          getBanner?.data?.data?.image && getBanner?.data?.data?.image
        })`}
        extra="white_head"
      />
      <div className="partners_content">
        <div className="container-fluid">
          <div className="partners_head">
            <h2 className="main_top_heading">
              {getBanner?.data?.data?.subheading &&
                getBanner?.data?.data?.subheading}
            </h2>
            <p
              className="partners_top_content"
              dangerouslySetInnerHTML={{
                __html:
                  getBanner?.data?.data?.description &&
                  getBanner?.data?.data?.description,
              }}
            />
          </div>
          <div className="partners_btm_section">
            <h2 className="part_card_head">Case Study</h2>
            <div className="row ff-fill">
              {getAllCards?.data?.data?.length >= 1 &&
                getAllCards?.data?.data?.map((elm) => {
                  return (
                    <div className="col-md-6">
                      <div className="partners_card">
                        <div className="partners_blue_heading">
                          <p>{elm?.heading && elm?.heading}</p>
                        </div>
                        <div className="partner_top_img">
                          <img src={elm?.image && elm?.image} alt="partners" />
                        </div>
                        <div className="partners_card_data">
                          <h3>{elm?.subheading && elm?.subheading}</h3>
                          <div className="partner_list">
                            <ul>
                              {elm?.list?.map((data) => (
                                <li>{data}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div
          className="partner_fix_bg"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 100%),url(${
              getBottom?.data?.data?.image && getBottom?.data?.data?.image
            })`,
          }}
        >
          <div className="container-fluid">
            <div
              className="partner_fix_content"
              dangerouslySetInnerHTML={{
                __html:
                  getBottom?.data?.data?.description &&
                  getBottom?.data?.data?.description,
              }}
            />
          </div>
        </div>
        <div className="partner_top_head">
          <h2 className="main_top_heading text-center">PARTNERS LOGOS</h2>
        </div>
        <div className="partners_logos_slider">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            slidesPerGroup={1}
            modules={[Pagination]}
            pagination={{ pagination: true, clickable: true }}
            className="partner_swip"
            breakpoints={{
              600: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              991: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1400: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
              1600: {
                slidesPerView: 6,
                slidesPerGroup: 6,
              },
            }}
          >
            {getPartnerLogos?.data?.data?.length >= 1 &&
              getPartnerLogos?.data?.data?.map((elm) => {
                return (
                  <SwiperSlide>
                    <div className="partner_img_logo">
                      <img src={elm?.image} alt="partner_logo" />
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
