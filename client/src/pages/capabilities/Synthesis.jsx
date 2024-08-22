import React from "react";

import { Banner } from "app/components/Ui/Banner";

import "styles/Capabilities.css";
import { AllSynthesisMutation } from "rest/capabilities";

export default function Synthesis() {
  const getEquipments = AllSynthesisMutation();

  return (
    <div className="lab_equipments">
      <Banner
        background={`linear-gradient(90deg, rgba(48, 48, 114, 1) 100%, rgba(48, 48, 114, 0) 100%)`}
        subMenu="Equipment"
        heading={"Synthesis"}
        extra="white_head process_top_banner"
      />
      <div className="container-fluid">
        <div className="row equipments">
          {getEquipments?.data?.data?.length >= 1 &&
            getEquipments?.data?.data?.map((data) => {
              return (
                <div className="col-sm-6 col-lg-4 equipment_card">
                  <div className="equipments_img">
                    <img src={data?.image} alt="equipment" />
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
