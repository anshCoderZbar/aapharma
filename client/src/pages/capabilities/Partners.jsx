import React, { useEffect, useRef, useState } from "react";
import { Banner } from "app/components/Ui/Banner";

import "styles/Capabilities.css";

import {
  GetAllPartnerCardMutation,
  GetAllPartnerLogo,
  GetPartnerBannerMutation,
  GetPartnerBottomMutation,
  // GetPartnerFifthCard,
} from "rest/capabilities";
import { useOutsideClick } from "lib/hooks/useOutsideClick";

export default function Partners() {
  const cardRed = useRef(null);
  const [isShow, setIsShow] = useState(-1);
  const [partnerData, setPartnerData] = useState({});

  const getBanner = GetPartnerBannerMutation();
  const getAllCards = GetAllPartnerCardMutation();
  const getBottom = GetPartnerBottomMutation();
  const getPartnerLogos = GetAllPartnerLogo();
  // const getFifthCard = GetPartnerFifthCard();

  useEffect(() => {
    if (getAllCards?.data?.data) {
      setPartnerData(getAllCards?.data?.data[0]);
    }
  }, [getAllCards?.data?.data]);

  useOutsideClick(cardRed, isShow, () => {
    setIsShow(-1);
  });

  return (
    <div className="partners_page">
      <Banner
        heading={
          getBanner?.data?.data?.heading && getBanner?.data?.data?.heading
        }
        background={`linear-gradient(90deg, rgba(48, 48, 114, 1) 0%, rgba(48, 48, 114, 0) 100%), url(${
          getBanner?.data?.data?.image && getBanner?.data?.data?.image
        })`}
        description={
          getBanner?.data?.data?.description &&
          getBanner?.data?.data?.description
        }
        extra="white_head"
      />
      <div className="partners_content">
        <div className="container-fluid">
          <div className="partners_btm_section">
            <div ref={cardRed} className="partner_col_grid ff-fill ">
              <div className="gle_ky">
                {getAllCards?.data?.data?.length >= 1 &&
                  getAllCards?.data?.data?.map((elm) => {
                    return (
                      <div
                        onClick={() => {
                          setIsShow(elm?.id);
                          setPartnerData(elm);
                        }}
                        key={elm?.id}
                        className={`partners_card  ${
                          isShow === elm?.id ? "partner_card_active" : ""
                        }`}
                      >
                        <h3 className="partner_card_vht">
                          {elm?.heading && elm?.heading}
                        </h3>
                        <div className="partner_top_img">
                          <img
                            src={elm?.thumbnail && elm?.thumbnail}
                            alt="partners"
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="partner_bottom_card">
                <div className="partner_card_inner">
                  <div className="partner_card_body">
                    <h3 className="partner_card_heading">
                      {partnerData?.heading && partnerData?.heading}
                    </h3>
                    <ul>
                      {partnerData?.list?.length >= 1 &&
                        partnerData?.list?.map((elm, i) => {
                          return <li key={i}>{elm}</li>;
                        })}
                    </ul>
                    <div className="partner_btm_img">
                      <img
                        src={partnerData?.image && partnerData?.image}
                        alt="bottom"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div
            className="partner_fix_bg"
            style={{
              backgroundImage: `url(${
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
        </div>
        <div className="container">
          <div className="partner_top_head">
            <h2 className="main_top_heading text-center">Partners Logos</h2>
          </div>
          <div className="partners_logos_slider">
            {getPartnerLogos?.data?.data?.length >= 1 &&
              getPartnerLogos?.data?.data?.map((elm) => {
                return (
                  <div key={elm?.id} className="partner_img_logo">
                    <img src={elm?.image} alt="partner_logo" />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
