import React from "react";

import { Banner } from "app/components/Ui/Banner";

import banner from "assets/page-banners/employment_banner.jpg";
import "styles/Pages.css";

export default function Employement() {
  return (
    <div className="employement_page">
      <Banner
        heading="Employment at AAPharmaSyn"
        background={`url(${banner})`}
        extra="employement_banner"
      />
      <div className="employment_content">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="employement_details">
                <p>
                  AAPharmaSyn maintains an evergreen hiring policy and is always
                  looking to partner with talented scientists. We have a
                  comprehensive interview process to ensure a great fit. Here
                  are several attributes of individuals that most enjoy the
                  AAPharmaSyn culture and work environment:
                </p>
                <ul>
                  <li>Deep and broad knowledge of chemistry fundamentals</li>
                  <li>Extensive hands-on organic chemistry experience</li>
                  <li>High motivation and persistence</li>
                  <li>
                    Contagious value-adding curiosity about solving hard
                    customer problems
                  </li>
                  <li>Ability to effectively work in team environment</li>
                  <li>Well-developed communication skills</li>
                  <li>Prudent balance between humility and assertiveness</li>
                  <li>
                    Methodical and structured approach to objective setting and
                    execution
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="apply_box">
                <div className="apply_box_content">
                  <p>
                    We encourage you to let us know if you feel we are a good
                    fit for your vocational aspirations and your personal
                    principles and experiences fit well with AAPharmaSyn culture
                    and vision.
                  </p>
                  <button>Submit your Resume</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
