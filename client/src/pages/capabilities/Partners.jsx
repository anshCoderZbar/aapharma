import React from "react";
import { Banner } from "app/components/Ui/Banner";
import { Swiper, SwiperSlide } from "swiper/react";

import "styles/Capabilities.css";
import { Pagination } from "swiper/modules";

export default function Partners() {
  return (
    <div className="partners_page">
      <Banner
        heading={"Capabilities"}
        background={`linear-gradient(90deg, rgba(48, 48, 114, 1) 0%, rgba(48, 48, 114, 0) 100%), url(${require("assets/page-banners/partners.png")})`}
        extra="white_head"
      />
      <div className="partners_content">
        <div className="container-fluid">
          <div className="partners_head">
            <h2 className="main_top_heading">Patrners</h2>
            <p className="partners_top_content">
              AAPharmaSyn is cornmitted to providing solutions and is
              collaborating with a wide range of com.panies that provide
              com.plementary services. Through its network. AAPharmaSyn is able
              to in managirv custorner projects from inception to market
            </p>
          </div>
          <div className="partners_btm_section">
            <h2 className="part_card_head">Case Study</h2>
            <div className="row ff-fill">
              <div className="col-md-6">
                <div className="partners_card">
                  <div className="partners_blue_heading">
                    <p>
                      An Agrochemical Company Is Looking For Chemistry Service
                      Provider That Can Supply A Library Of Novel AIs
                    </p>
                  </div>
                  <div className="partner_top_img">
                    <img
                      src={require("assets/partners_img.png")}
                      alt="partners"
                    />
                  </div>
                  <div className="partners_card_data">
                    <h3>AAPharmaSyn Can Assist With:</h3>
                    <div className="partner_list">
                      <ul>
                        <li>Target identification and selection</li>
                        <li>Cumulative and aggregate risk assessment</li>
                        <li>Consumer and Environmental safety studies</li>
                        <li>Formulation development</li>
                        <li>Product registration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="partners_card">
                  <div className="partners_blue_heading">
                    <p>
                      An Agrochemical Company Is Looking For Chemistry Service
                      Provider That Can Supply A Library Of Novel AIs
                    </p>
                  </div>
                  <div className="partner_top_img">
                    <img
                      src={require("assets/partners_img.png")}
                      alt="partners"
                    />
                  </div>
                  <div className="partners_card_data">
                    <h3>AAPharmaSyn Can Assist With:</h3>
                    <div className="partner_list">
                      <ul>
                        <li>Target identification and selection</li>
                        <li>Cumulative and aggregate risk assessment</li>
                        <li>Consumer and Environmental safety studies</li>
                        <li>Formulation development</li>
                        <li>Product registration</li>
                        <li>Target identification and selection</li>
                        <li>Cumulative and aggregate risk assessment</li>
                        <li>Consumer and Environmental safety studies</li>
                        <li>Formulation development</li>
                        <li>Product registration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="partners_card">
                  <div className="partners_blue_heading">
                    <p>
                      An Agrochemical Company Is Looking For Chemistry Service
                      Provider That Can Supply A Library Of Novel AIs
                    </p>
                  </div>
                  <div className="partner_top_img">
                    <img
                      src={require("assets/partners_img.png")}
                      alt="partners"
                    />
                  </div>
                  <div className="partners_card_data">
                    <h3>AAPharmaSyn Can Assist With:</h3>
                    <div className="partner_list">
                      <ul>
                        <li>Target identification and selection</li>
                        <li>Cumulative and aggregate risk assessment</li>
                        <li>Consumer and Environmental safety studies</li>
                        <li>Formulation development</li>
                        <li>Product registration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="partners_card">
                  <div className="partners_blue_heading">
                    <p>
                      An Agrochemical Company Is Looking For Chemistry Service
                      Provider That Can Supply A Library Of Novel AIs
                    </p>
                  </div>
                  <div className="partner_top_img">
                    <img
                      src={require("assets/partners_img.png")}
                      alt="partners"
                    />
                  </div>
                  <div className="partners_card_data">
                    <h3>AAPharmaSyn Can Assist With:</h3>
                    <div className="partner_list">
                      <ul>
                        <li>Target identification and selection</li>
                        <li>Cumulative and aggregate risk assessment</li>
                        <li>Consumer and Environmental safety studies</li>
                        <li>Formulation development</li>
                        <li>Product registration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="partner_fix_bg"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 100%),url(${require("assets/partner_dark_bg.png")})`,
          }}
        >
          <div className="container-fluid">
            <div className="partner_fix_content">
              <p>
                Our partners range from academic institutions to publicly traded
                companies in the financial sector. We invest our time and
                resources to develop deep and meaningful relationships and we
                value and cherish bonds that are established as a function of
                multiyear productive collaborations that span a wide gamut of
                emotions from constructive disagreements to cheerful bliss.
              </p>
            </div>
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
            // modules={[Pagination, Autoplay]}
            pagination={{ pagination: true, clickable: true }}
            className="partner_swip"
            // autoplay={true}
            breakpoints={{
              600: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              991: {
                slidesPerView: 4,
                slidesPerGroup: 4,
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
            <SwiperSlide>
              <div className="partner_img_logo">
                <img
                  src={require("assets/partner_logos_1.png")}
                  alt="partner_logo"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner_img_logo">
                <img
                  src={require("assets/partner_logos_2.png")}
                  alt="partner_logo"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner_img_logo">
                <img
                  src={require("assets/partner_logos_3.png")}
                  alt="partner_logo"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner_img_logo">
                <img
                  src={require("assets/partner_logos_4.png")}
                  alt="partner_logo"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner_img_logo">
                <img
                  src={require("assets/partner_logos_5.png")}
                  alt="partner_logo"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner_img_logo">
                <img
                  src={require("assets/partner_logos_6.png")}
                  alt="partner_logo"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner_img_logo">
                <img
                  src={require("assets/partner_logos_7.png")}
                  alt="partner_logo"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner_img_logo">
                <img
                  src={require("assets/partner_logos_1.png")}
                  alt="partner_logo"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
