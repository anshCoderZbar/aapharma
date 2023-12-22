import React from "react";
import { BriefcaseIcon, GraduationCap, Phone } from "lucide-react";

import { Banner } from "app/components/Ui/Banner";

import "styles/About.css";
import banner from "assets/page-banners/personnel_banner.jpg";

export default function Personnel() {
  return (
    <div className="personnel_page">
      <Banner
        heading="Personnel"
        description="AAPharmaSyn owes all success to its employees. Company invests and encourages employee development and is always seeking motivated and talented scientists to join the team."
        background={`url(${banner})`}
      />
      <div className="about_us_content">
        <p>AAPharmaSyn culture is characterized by:</p>
      </div>
      <div className="culture_chracter">
        <div className="container-fluid">
          <div className="row row-gp">
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="personel_card">
                <img
                  src={require("assets/personel_icon1.png")}
                  alt="personel icons"
                />
                <div className="personel_card_body">
                  <h4>Autonomy</h4>
                  <p>Empowerment to make and own decisions</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="personel_card">
                <img
                  src={require("assets/personel_icon2.png")}
                  alt="personel icons"
                />
                <div className="personel_card_body">
                  <h4>Competence Seeking</h4>
                  <p>Evergreen commitment to value adding self-improvement</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="personel_card">
                <img
                  src={require("assets/personel_icon3.png")}
                  alt="personel icons"
                />
                <div className="personel_card_body">
                  <h4>Engagement</h4>
                  <p>Recognition & acknowledgement of contributions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team_section">
        <div className="container-fluid">
          <h2 className="main_top_heading text-center">Our Team</h2>
          <div className="team_details">
            {TeamDetails?.map((data) => {
              return (
                <div key={data?.id} className="team_card">
                  <div className="over_hid">
                    <img src={data.memImg} alt="team member" />
                  </div>
                  <div className="member_details">
                    <h3>{data.name}</h3>
                    <p>{data.designation}</p>
                    <ul>
                      <li>
                        <a href="#">
                          <BriefcaseIcon />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <GraduationCap />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Phone />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const TeamDetails = [
  {
    id: 1,
    memImg: require("assets/team_1.png"),
    name: "Ruslan Pryadun",
    designation: "President",
  },
  {
    id: 2,
    memImg: require("assets/team_2.png"),
    name: "Paul Kim",
    designation: "Director of Medicinal Chemistry",
  },
  {
    id: 3,
    memImg: require("assets/team_3.png"),
    name: "Aristobulo Loaiza",
    designation: "Aristobulo Loaiza",
  },
  {
    id: 4,
    memImg: require("assets/team_4.png"),
    name: "Volker Bornemann",
    designation: "Senior Advisor",
  },
  {
    id: 5,
    memImg: require("assets/team_1.png"),
    name: "Ruslan Pryadun",
    designation: "President",
  },
  {
    id: 6,
    memImg: require("assets/team_2.png"),
    name: "Paul Kim",
    designation: "Director of Medicinal Chemistry",
  },
  {
    id: 7,
    memImg: require("assets/team_3.png"),
    name: "Aristobulo Loaiza",
    designation: "Aristobulo Loaiza",
  },
  {
    id: 8,
    memImg: require("assets/team_4.png"),
    name: "Volker Bornemann",
    designation: "Senior Advisor",
  },
];
