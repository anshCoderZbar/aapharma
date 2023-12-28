import React from "react";

import { Banner } from "app/components/Ui/Banner";

import "styles/Capabilities.css";

export default function LabEquipment() {
  return (
    <div className="lab_equipments">
      <Banner
        background={`url(${require("assets/page-banners/lab_equipments_banner.jpg")})`}
        heading="Lab Equipment"
        extra="lab_equipment_banner"
      />
      <div className="container-fluid">
        <div className="row equipments">
          {cardData?.map((data) => {
            return (
              <div className="col-sm-6 col-lg-4 equipment_card">
                <div className="equipments_img">
                  <img src={data?.img} alt="equipment" />
                </div>
                <p>{data?.heading}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const cardData = [
  {
    img: require("assets/equ1.png"),
    heading: "Large walk-in fume hoods for process development",
  },
  {
    img: require("assets/equ2.png"),
    heading: "Large rotary evaporators for scale up synthesis",
  },
  {
    img: require("assets/equ3.png"),
    heading: "Microwave capability",
  },
  {
    img: require("assets/equ4.png"),
    heading: "50L reactors for multi kg synthesis",
  },
  {
    img: require("assets/equ5.png"),
    heading: "Medium pressure hydrogenators (Parr Shaker)",
  },
  {
    img: require("assets/equ6.png"),
    heading: "Ozone Generator",
  },
];
