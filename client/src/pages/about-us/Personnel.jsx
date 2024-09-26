import React, { useState } from "react";
import {
  BriefcaseIcon,
  ChevronRight,
  GraduationCap,
  Phone,
  X,
} from "lucide-react";

import { Banner } from "app/components/Ui/Banner";

import "styles/About.css";
import banner from "assets/page-banners/personnel_banner.jpg";
import {
  GetPeronnelBanner,
  GetPersonnelCharacterized,
  GetTeamMemberMutation,
} from "rest/about";

export default function Personnel() {
  const [activePopup, setActivePopup] = useState({
    relevant: false,
    study: false,
    contact: false,
  });
  const [memId, setMemId] = useState(null);
  const getPersonnelBanner = GetPeronnelBanner();
  const getPersonnelCharacterizedData = GetPersonnelCharacterized();
  const getTeamMembers = GetTeamMemberMutation();

  return (
    <div className="personnel_page">
      <Banner
        heading={
          getPersonnelBanner?.data?.data?.heading
            ? getPersonnelBanner?.data?.data?.heading
            : ""
        }
        description={
          getPersonnelBanner?.data?.data?.description
            ? getPersonnelBanner?.data?.data?.description
            : ""
        }
        background={`url(${
          getPersonnelBanner?.data?.data?.image
            ? getPersonnelBanner?.data?.data?.image
            : banner
        })`}
      />
      <div className="about_us_content">
        <p>
          {getPersonnelCharacterizedData?.data?.data?.heading
            ? getPersonnelCharacterizedData?.data?.data?.heading
            : ""}
        </p>
      </div>
      <div className="culture_chracter">
        <div className="container-fluid">
          <div className="row row-gp">
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="personel_card">
                <img
                  src={getPersonnelCharacterizedData?.data?.data?.icon1}
                  alt="personel icons"
                />
                <div className="personel_card_body">
                  <h4>{getPersonnelCharacterizedData?.data?.data?.title1}</h4>
                  <p>
                    {getPersonnelCharacterizedData?.data?.data?.description1}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="personel_card">
                <img
                  src={getPersonnelCharacterizedData?.data?.data?.icon2}
                  alt="personel icons"
                />
                <div className="personel_card_body">
                  <h4>{getPersonnelCharacterizedData?.data?.data?.title2}</h4>
                  <p>
                    {getPersonnelCharacterizedData?.data?.data?.description2}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="personel_card">
                <img
                  src={getPersonnelCharacterizedData?.data?.data?.icon3}
                  alt="personel icons"
                />
                <div className="personel_card_body">
                  <h4>{getPersonnelCharacterizedData?.data?.data?.title3}</h4>
                  <p>
                    {getPersonnelCharacterizedData?.data?.data?.description3}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team_section">
        <div className="container-fluid">
          <h2 className="main_top_heading text-center">Our Management Team</h2>
          <div className="team_details">
            {getTeamMembers?.data?.data?.map((data) => {
              return (
                <div key={data?.id} className="team_card">
                  <div className="team_card_body">
                    <div className="over_hid">
                      <img src={data.image} alt="team member" />
                    </div>
                    <div className="member_details">
                      <h3>{data.name}</h3>
                      <p>{data.designation}</p>
                      <ul>
                        <li
                          onClick={() => {
                            setMemId(data?.id);
                            setActivePopup({
                              relevant: true,
                              study: false,
                              contact: false,
                            });
                          }}
                        >
                          <span>
                            <BriefcaseIcon />
                          </span>
                        </li>
                        <li
                          onClick={() => {
                            setMemId(data?.id);
                            setActivePopup({
                              relevant: false,
                              study: true,
                              contact: false,
                            });
                          }}
                        >
                          <span>
                            <GraduationCap />
                          </span>
                        </li>
                        <li
                          onClick={() => {
                            setMemId(data?.id);
                            setActivePopup({
                              relevant: false,
                              study: false,
                              contact: true,
                            });
                          }}
                        >
                          <span>
                            <Phone />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={` initial_info ${
                      data?.id === memId && activePopup.relevant
                        ? "active_info"
                        : ""
                    }`}
                  >
                    <h2 className="nmmmi-x">
                      <span className="left-i_c">
                        <BriefcaseIcon />
                      </span>
                      <span className="bnx_con">Relevant Experience</span>
                    </h2>
                    <ul>
                      {data?.skillList?.split("@@")?.map((elm) => {
                        return <li>{elm}</li>;
                      })}
                    </ul>
                  </div>

                  <div
                    className={` initial_info ${
                      data?.id === memId && activePopup.study
                        ? "active_info"
                        : ""
                    }`}
                  >
                    <h2 className="nmmmi-x">
                      <span className="left-i_c">
                        <GraduationCap />
                      </span>
                      <span className="bnx_con"> Education</span>
                    </h2>
                    <ul>
                      {data?.studyList?.split("@@")?.map((elm) => {
                        return <li>{elm}</li>;
                      })}
                    </ul>
                  </div>

                  <div
                    className={` initial_info ${
                      data?.id === memId && activePopup.contact
                        ? "active_info"
                        : ""
                    }`}
                  >
                    <h2 className="nmmmi-x">
                      <span className="left-i_c">
                        <Phone />
                      </span>
                      <span className="bnx_con"> Contact</span>
                    </h2>
                    <ul>
                      {data?.contactList?.split("@@")?.map((elm) => {
                        return <li>{elm}</li>;
                      })}
                    </ul>
                  </div>
                  {data?.id === memId &&
                    (activePopup.relevant ||
                      activePopup.contact ||
                      activePopup.study) && (
                      <span
                        className="close_icon_info"
                        onClick={() =>
                          setActivePopup({
                            relevant: false,
                            study: false,
                            contact: false,
                          })
                        }
                      >
                        <X />
                      </span>
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
