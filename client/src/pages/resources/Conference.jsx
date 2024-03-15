import React from "react";

import { Banner } from "app/components/Ui/Banner";

import "styles/Resources.css";

export default function Conference() {
  return (
    <div className="conference_page">
      <Banner
        heading={"Conferences"}
        background={`linear-gradient(90deg, rgba(48, 48, 114, 1) 0%, rgba(48, 48, 114, 0) 100%), url(${require("assets/page-banners/confrense.png")})`}
        extra="single_whitepaper_banner"
      />
      <div className="confrences_content">
        <div className="container-fluid">
          <div className="confrence_head">
            <h2 className="main_top_heading">Conferences</h2>
            <p className="confrence_top_content">
              We find it critically important to consistently stay engaged
              within chemical and pharmaceutical sectcrs ecosystem. To that end
              aim to attend and often exhibit at conferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
