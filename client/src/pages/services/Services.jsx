import React, { useRef, useState } from "react";

import { Banner } from "app/components/Ui/Banner";

import bgBanner from "assets/page-banners/services_banner.png";
import "styles/Services.css";

export default function ServicesPage() {
  const myRef = useRef(null);
  const [active, setActive] = useState(0);

  const handleCardClick = (i) => {
    setActive(i);
    if (myRef.current) {
      const element = myRef.current;
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="services_page">
      <Banner heading="services" background={`url(${bgBanner})`} />
      <div className="service_sec">
        <div className="container-fluid">
          <div className="row serv_sec">
            <div className="col-lg-6">
              <div className="service_sec_img">
                <img
                  src={require("assets/service_sec1.png")}
                  alt="service_img"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service_content">
                <h2 className="main_top_heading">Chemical Manufacturing</h2>
                <ul>
                  <li>Non-GMP custom kg scale synthesis</li>
                  <li>
                    GMP drug substance manufacturing (via partners) for clinical
                    trials
                  </li>
                  <li>Route design and optimization</li>
                  <li>
                    Technical assistance with transferring AAPharmaSyn developed
                    processes to GMP Manufacturers
                  </li>
                  <li>GLP/GMP compliant reference standards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service_sec bg_change">
        <div className="container-fluid">
          <div className="row serv_sec flex-lg-row-reverse">
            <div className="col-lg-6">
              <div className="service_sec_img">
                <img
                  src={require("assets/service_sec2.png")}
                  alt="service_img"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service_content">
                <h2 className="main_top_heading">Medicinal Chemistry</h2>
                <ul>
                  <li>Quality Evaluation of Chemical Matter</li>
                  <li>Hit to Lead and Lead Optimization</li>
                  <li>Route design and optimization</li>
                  <li>SAR Strategy Design and Execution</li>
                  <li>Focused Small Library Design and Synthesis</li>
                  <li>IP Creation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service_sec">
        <div className="container-fluid">
          <div className="row serv_sec">
            <div className="col-lg-6">
              <div className="service_sec_img">
                <img
                  src={require("assets/service_sec3.png")}
                  alt="service_img"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service_content">
                <h2 className="main_top_heading">Process Development</h2>
                <ul>
                  <li>
                    Initial process route evaluation for scalability,
                    robustness, safety, environmental compatibility,
                    cost-effectiveness, optimization, and problematic chemistry
                    with potential solutions
                  </li>
                  <li>
                    Route scouting, design and evaluation of alternative
                    synthetic routes to scalable, robust, and reliable chemical
                    processes for the manufacture of drug substance
                  </li>
                  <li>Identification / synthesis of impurities</li>
                  <li>Fate of “Process Impurities” studies</li>
                  <li>Process optimization by DoE and On / Off Experiments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="consulting_section">
        <div className="container-fluid">
          <h2 className="main_top_heading">Consulting</h2>
          <div className="consulting_card_section">
            {data?.map((data, i) => {
              return (
                <div
                  onClick={() => handleCardClick(i)}
                  key={data?.id}
                  className={`consulting_card ${
                    active === i ? "service_card_active " : ""
                  }`}
                >
                  <div className="card_body">
                    <img src={data?.img} alt="icon" />
                    <h3>{data?.heading}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          {data?.map(
            (data, i) =>
              active === i && (
                <div
                  ref={myRef}
                  key={i}
                  className={`${
                    active === i ? "openAnimation" : ""
                  } service_description`}
                >
                  <p>{data?.desc}</p>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    id: 1,
    img: require("assets/service_icon_1.png"),
    heading: "Structure-activity Relationship",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 1",
  },
  {
    id: 2,
    img: require("assets/service_icon_2.png"),
    heading: "cGMP Manufacturing",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, vero fuga? Quae quod, unde ullam ratione incidunt minus molestiae quas veritatis at, veniam molestias, blanditiis nobis perferendis dolores! Optio, qui.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, vero fuga? Quae quod, unde ullam ratione incidunt minus molestiae quas veritatis at, veniam molestias, blanditiis nobis perferendis dolores! Optio, qui. 2",
  },
  {
    id: 3,
    img: require("assets/service_icon_3.png"),
    heading: "Grant Writing",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 3",
  },
  {
    id: 4,
    img: require("assets/service_icon_4.png"),
    heading: "Pre-clinical study design and partner selection",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, vero fuga? Quae quod, unde ullam ratione incidunt minus molestiae quas veritatis at, veniam molestias, blanditiis nobis perferendis dolores! Optio, qui.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, vero fuga? Quae quod, unde ullam ratione incidunt minus molestiae quas veritatis at, veniam molestias, blanditiis nobis perferendis dolores! Optio, qui. 4",
  },
  {
    id: 5,
    img: require("assets/service_icon_5.png"),
    heading: "FDA submission",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 5",
  },
  {
    id: 6,
    img: require("assets/service_icon_6.png"),
    heading: "Specialty applications (electronics, aviation, etc.)",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, vero fuga? Quae quod, unde ullam ratione incidunt minus molestiae quas veritatis at, veniam molestias, blanditiis nobis perferendis dolores! Optio, qui.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, vero fuga? Quae quod, unde ullam ratione incidunt minus molestiae quas veritatis at, veniam molestias, blanditiis nobis perferendis dolores! Optio, qui. 6",
  },
  {
    id: 7,
    img: require("assets/service_icon_7.png"),
    heading: "EPA registrations",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 7",
  },
];
