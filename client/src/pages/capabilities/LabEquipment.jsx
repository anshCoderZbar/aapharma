import React from "react";

import { Banner } from "app/components/Ui/Banner";

import "styles/Capabilities.css";
import {
  AllLabEquipmentMutation,
  GetLabEquipmentBannerMutation,
} from "rest/capabilities";

export default function LabEquipment() {
  const getBanner = GetLabEquipmentBannerMutation();
  const getEquipments = AllLabEquipmentMutation();

  return (
    <div className="lab_equipments">
      <Banner
        // background={`url(${
        //   getBanner?.data?.data?.image && getBanner?.data?.data?.image
        // })`}
        background={`linear-gradient(90deg, rgba(48, 48, 114, 1) 100%, rgba(48, 48, 114, 0) 100%)`}
        subMenu="Equipment"
        heading={"Synthesis"}
        // extra="lab_equipment_banner"
        extra=" white_head process_top_banner"
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
