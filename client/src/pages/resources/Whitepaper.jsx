import React from "react";

import "styles/Resources.css";
import banner from "assets/page-banners/whitepaper_banner.jpg";

export default function Whitepaper() {
  return (
    <div className="whitepaper_page">
      <div className="whitepaper_banner_section">
        <div className="container-fluid">
          <div
            className="whitepaper_banner"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(48, 48, 114, 1) 0%, rgba(48, 48, 114, 0) 100%), url(${banner})`,
            }}
          >
            <span>Resources</span>
            <h1>Whitepaper</h1>
            <p>
              As we continue to involve as individuals and as a Company, we find
              it necessary to challenge our thinking and how we do things. We
              operate in a dynamic environment where the only constant is
              change. We believe that failure to test whether routinized and
              streamlined system is adequate will invariably lead to sub
              optimized performance.
            </p>
            <p>
              On the flip side when the system in place is not afforded enough
              time to be fully integrated and is continuously restructured very
              little can learned aboutcausality within domain containing a large
              of independent variables.
            </p>
            <p>
              Thus, it is a tightrope walk between doing too much and not doing
              enough. Herein we share our thoughts regarding many subject areas
              that affect how we work as we pursue our goal of achieving and
              maintaining the highest level of performance for our clients. o
            </p>
            <div className="banner_img">
              <img
                src={require("assets/whitepaper_banner_overlay.png")}
                alt="banner_icons"
              />
            </div>
          </div>
        </div>
        <div className="whitepaper_bottom_section">
          <p>
            “Everyone thinks of changing the world, but no one thinks of
            changing himself.” <span>-Leo Tolstoy</span>
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="paper_page_filter">
          <select>
            <option value="">Select Year</option>
            <option value="1">2023</option>
            <option value="2">2022</option>
            <option value="3">2021</option>
          </select>
          <select>
            <option value="">Month</option>
            <option value="1">January</option>
            <option value="2">Feburary</option>
            <option value="3">March</option>
            <option value="4">April</option>
          </select>
        </div>
        <div className="whitepaper_card_section">
          {data?.map((elm, i) => {
            return (
              <div key={i} className="whitepaper_card">
                <div className="card_details">
                  <p className="whitepaper_year">{elm?.date}</p>
                  <h2 className="whitepaper_data">{elm?.heading}</h2>
                  <div className="d-flex justify-content-center whitepaper_btn">
                    <button className="primary_btn_outline">Read More</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    date: "October 3, 2022",
    heading: "Proteolysis-Targeting Chimeras (PROTACs) in Cancer Therapy",
  },
  {
    date: "February 22, 2021",
    heading: "The Importance of Synthetic Organic Chemistry in Drug Discovery",
  },
  {
    date: "October 3, 2022",
    heading: "Proteolysis-Targeting Chimeras (PROTACs) in Cancer Therapy",
  },
  {
    date: "February 22, 2021",
    heading: "The Importance of Synthetic Organic Chemistry in Drug Discovery",
  },
  {
    date: "October 3, 2022",
    heading: "Proteolysis-Targeting Chimeras (PROTACs) in Cancer Therapy",
  },
  {
    date: "February 22, 2021",
    heading: "The Importance of Synthetic Organic Chemistry in Drug Discovery",
  },
  {
    date: "October 3, 2022",
    heading: "Proteolysis-Targeting Chimeras (PROTACs) in Cancer Therapy",
  },
  {
    date: "February 22, 2021",
    heading: "The Importance of Synthetic Organic Chemistry in Drug Discovery",
  },
];
