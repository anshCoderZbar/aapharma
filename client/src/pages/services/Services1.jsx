import React from "react";

import { Banner } from "app/components/Ui/Banner";
import bgBanner from "assets/page-banners/services_banner.png";

import "styles/Services.css";

export default function Services1() {
  return (
    <div className="services_1_page">
      <div className="service_top_sec">
        <Banner heading="services" background={`url(${bgBanner})`} />
        <div className="container-fluid">
          <div className="service_desc">
            <h3>
              AAPharmaSyn is an undisputed leader in the synthesis of complex
              Stable Isotope labeled compounds
            </h3>
            <p>
              Utilization of stable isotopes such as deuterium (2Hydrogen),
              18Oxygen, 13Carbon and 15Nitrogen is commonplace in a wide range
              of fields spanning from environmental analysis to clinical
              diagnosis and research to pharmacology. They constitute a power
              tracer tool commonly deployed to answer specific research
              questions.
            </p>
          </div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th className="service_table">Element</th>
                <th className="service_table">Atomic Number</th>
                <th className="service_table">Parent Atom</th>
                <th className="service_table">Stable Isotope</th>
                <th className="service_table">
                  <div className="table_head">
                    <p className="mb-0 d-block w-100">Abundance</p>
                    <p className="mb-0 d-block w-100">(In Nature)</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="service_table_body">
                <td>Hydrogen</td>
                <td>1</td>
                <td>1H</td>
                <td>2H</td>
                <td>0.015%</td>
              </tr>
              <tr className="service_table_body">
                <td>Nitrogen</td>
                <td>6</td>
                <td>12C</td>
                <td>13C</td>
                <td>1.1%</td>
              </tr>
              <tr className="service_table_body">
                <td>Carbon</td>
                <td>7</td>
                <td>14N</td>
                <td>15N</td>
                <td>0.4%</td>
              </tr>
              <tr className="service_table_body">
                <td>Oxygen</td>
                <td>8</td>
                <td>16O</td>
                <td>17O</td>
                <td>0.04%</td>
              </tr>
              <tr className="service_table_body">
                <td></td>
                <td></td>
                <td></td>
                <td>18O</td>
                <td>0.20%</td>
              </tr>
            </tbody>
          </table>
          <p className="table_desc">
            Over the years pharmacological uses have been expanding to include:
          </p>
        </div>
      </div>
      <div className="sevice_detail">
        <div className="container-fluid">
          <div className="row detail_b">
            <div className="col-sm-6 col-xl-4">
              <div className="service_list_card">
                <div className="service_list_card_body">
                  <h3>Assessment of drug pharamacology</h3>
                  <ul>
                    <li>Pharamacokinetics</li>
                    <li>Pharamacokinetics</li>
                    <li>Pharamacokinetics</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4">
              <div className="service_list_card">
                <div className="service_list_card_body">
                  <h3>Assessment of drug pharamacology</h3>
                  <ul>
                    <li>Pharamacokinetics</li>
                    <li>Pharamacokinetics</li>
                    <li>Pharamacokinetics</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4">
              <div className="service_list_card">
                <div className="service_list_card_body">
                  <h3>Assessment of drug pharamacology</h3>
                  <ul>
                    <li>Pharamacokinetics</li>
                    <li>Pharamacokinetics</li>
                    <li>Pharamacokinetics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service_mid_sec"></div>
    </div>
  );
}
