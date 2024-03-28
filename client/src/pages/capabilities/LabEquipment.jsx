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
        background={`url(${
          getBanner?.data?.data?.image && getBanner?.data?.data?.image
        })`}
        heading={
          getBanner?.data?.data?.heading && getBanner?.data?.data?.heading
        }
        extra="lab_equipment_banner"
        b
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
