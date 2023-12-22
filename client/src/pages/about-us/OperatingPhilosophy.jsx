import React from "react";

import { Banner } from "app/components/Ui/Banner";

import "styles/About.css";
import bgBanner from "assets/page-banners/operating_philosophy_banner.jpg";

export default function OperatingPhilosophy() {
  return (
    <div className="operating_philosophy_page">
      <Banner
        heading="Operating Philosophy"
        description="We love what we do and would not want to do anything else. If that changes for any of us, we make room for others to come in and replace us."
        background={`linear-gradient(rgba(52, 202, 255, 0.85), rgba(52, 202, 255, 0.85)),url(${bgBanner})`}
        extra="operat_banner"
      />
      <div className="operating_content">
        <div className="container-fluid">
          <p>
            We are convinced that exceptional service comes from people who are
            excited, engaged and personally vested in the outcome. Especially
            poignant in creative endeavors where no “playbook” exists, great
            work comes from an intrinsically generated sense of purpose. To that
            end our operating philosophy is simple:
          </p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="operating_diagram">
          <div className="outer_diagram">
            <div className="outer__circle circle_1">
              <img src={require("assets/operation_icon_1.png")} alt="icon" />
            </div>
            <div className="outer__circle circle_2">
              <img src={require("assets/operation_icon_2.png")} alt="icon" />
            </div>
            <div className="outer__circle circle_3">
              <img src={require("assets/operation_icon_3.png")} alt="icon" />
            </div>
            <div className="outer__circle circle_4">
              <img src={require("assets/operation_icon_4.png")} alt="icon" />
            </div>
            <div className="outer__circle circle_5">
              <img src={require("assets/operation_icon_5.png")} alt="icon" />
            </div>
            <div className="outer__circle circle_6">
              <img src={require("assets/operation_icon_6.png")} alt="icon" />
            </div>
            <div className="outer__circle circle_7">
              <img src={require("assets/operation_icon_7.png")} alt="icon" />
            </div>
            <div className="inner_circle">
              <p>
                Every employee shares and operates by a set of core values which
                are used extensively in making decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
