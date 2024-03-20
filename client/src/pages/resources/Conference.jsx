import React from "react";

import { Banner } from "app/components/Ui/Banner";

import "styles/Resources.css";
import { ChevronRight } from "lucide-react";
import {
  GetConferenceBannerMutation,
  GetConferenceCardsMutation,
} from "rest/resources";

export default function Conference() {
  const getBanner = GetConferenceBannerMutation();
  const getCards = GetConferenceCardsMutation();

  return (
    <div className="conference_page">
      <Banner
        heading={
          getBanner?.data?.data?.heading && getBanner?.data?.data?.heading
        }
        background={`linear-gradient(90deg, rgba(48, 48, 114, 1) 0%, rgba(48, 48, 114, 0) 100%), url(${
          getBanner?.data?.data?.image && getBanner?.data?.data?.image
        })`}
        extra="white_head"
      />
      <div className="confrences_content">
        <div className="container-fluid">
          <div className="confrence_head">
            <h2 className="main_top_heading">
              {getBanner?.data?.data?.subheading &&
                getBanner?.data?.data?.subheading}
            </h2>

            <p
              className="confrence_top_content"
              dangerouslySetInnerHTML={{
                __html:
                  getBanner?.data?.data?.description &&
                  getBanner?.data?.data?.description,
              }}
            />
          </div>
          <div className="confrenct_btm_section">
            <div className="row ">
              <div className="col-lg-6">
                <div className="confrence_card">
                  <div className="confrence_card_img">
                    <div className="top_blue_line">
                      <h2>
                        {getCards?.data?.data?.card1heading &&
                          getCards?.data?.data?.card1heading}
                      </h2>
                    </div>
                    <img
                      src={
                        getCards?.data?.data?.card1image &&
                        getCards?.data?.data?.card1image
                      }
                      alt="conference"
                    />
                  </div>
                  <div className="confrence_card_body">
                    <div className="confrence_card_logo">
                      <img
                        src={
                          getCards?.data?.data?.card1logo &&
                          getCards?.data?.data?.card1logo
                        }
                        alt="logo"
                      />
                    </div>
                    <h3 className="card_body_head">
                      {getCards?.data?.data?.card1subheading &&
                        getCards?.data?.data?.card1subheading}
                    </h3>
                    <div
                      className="confrence_card_content"
                      dangerouslySetInnerHTML={{
                        __html:
                          getCards?.data?.data?.card1description &&
                          getCards?.data?.data?.card1description,
                      }}
                    />
                    <p className="confrence_loacation">
                      <span>Location:</span>
                      {getCards?.data?.data?.card1location &&
                        getCards?.data?.data?.card1location}
                    </p>
                  </div>
                  <div className="navigate_link">
                    <a
                      href={
                        getCards?.data?.data?.card1link &&
                        getCards?.data?.data?.card1link
                      }
                      target="_blank"
                    >
                      <ChevronRight />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6  kuj_ihy">
                <div className="confrence_card">
                  <div className="confrence_card_img">
                    <div className="top_blue_line">
                      <h2>
                        {getCards?.data?.data?.card2heading &&
                          getCards?.data?.data?.card2heading}
                      </h2>
                    </div>
                    <img
                      src={
                        getCards?.data?.data?.card2image &&
                        getCards?.data?.data?.card2image
                      }
                      alt="conference"
                    />
                  </div>
                  <div className="confrence_card_body">
                    <div className="confrence_card_logo">
                      <img
                        src={
                          getCards?.data?.data?.card2logo &&
                          getCards?.data?.data?.card2logo
                        }
                        alt="logo"
                      />
                    </div>
                    <h3 className="card_body_head">
                      {getCards?.data?.data?.card2subheading &&
                        getCards?.data?.data?.card2subheading}
                    </h3>
                    <div
                      className="confrence_card_content"
                      dangerouslySetInnerHTML={{
                        __html:
                          getCards?.data?.data?.card2description &&
                          getCards?.data?.data?.card2description,
                      }}
                    />
                    <p className="confrence_loacation">
                      <span>Location:</span>
                      {getCards?.data?.data?.card2location &&
                        getCards?.data?.data?.card2location}
                    </p>
                  </div>
                  <div className="navigate_link">
                    <a
                      href={
                        getCards?.data?.data?.card2link &&
                        getCards?.data?.data?.card2link
                      }
                      target="_blank"
                    >
                      <ChevronRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
