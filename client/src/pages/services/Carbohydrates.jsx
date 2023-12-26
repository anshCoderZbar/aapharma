import React from "react";

import banner from "assets/page-banners/carbohydrate_banner.png";

import "styles/Services.css";

export default function Carbohydrates() {
  return (
    <div className="carbohydrates_page">
      <div className="main_banner">
        <div className="container-fluid">
          <div
            className="banner_head carbohydrate_banner"
            style={{ backgroundImage: `url(${banner})` }}
          >
            <div className="img1">
              <img src={require("assets/scientist_1.png")} alt="scientist" />
            </div>
            <h1>Custom Synthesis of Complex Carbohydrates</h1>
            <div className="img2">
              <img src={require("assets/scientist_2.png")} alt="scientist" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="carbohydrates_details_sec">
          <p>
            AAPharmaSyn has engaged with multiple early-stage project to help
            clients develop novel carbohydrate containing therapeutics. We are
            intimately familiar with the challenges in both synthesis and
            characterization of novel carbohydrates resulting in material
            investment of effort and capital in building a superior competence
            in this field.
          </p>
          <p>
            Carbohydrates are one of the most abundant and ubiquitous class of
            biomolecules found in all known living organisms either free or
            covalently linked to other structures, forming glycoproteins,
            proteoglycans, or glycolipids. Their importance has been widely
            recognized due to their functional roles in metabolism and energy
            storage. The important biological roles carbohydrate-mediated
            processes are currently pursued as targets of drug development by
            both public and private entities.
          </p>
        </div>
      </div>
    </div>
  );
}
