// import React from "react";
// import { Link } from "react-router-dom";

// import { ChevronRight } from "lucide-react";
// import { GetAnalyticalInstrumentationMutation } from "rest/capabilities";

// import "styles/Capabilities.css";

// export default function AnalyticalInstrumentation() {
//   const getAnalyticalInstrument = GetAnalyticalInstrumentationMutation();
//   return (
//     <div className="analytical_instrumentation_page">
//       <div className="container-fluid">
//         <div className="row analytical_content">
//           <div className="bread_crup">
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <ChevronRight />
//               </li>
//               <li>Equipment</li>
//               <li>
//                 <ChevronRight />
//               </li>
//               <li>
//                 <Link className="bread_active" to="/analytical-instrumentation">
//                   analytical instrumentation
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="col-md-6">
//             <div className="analytical_img">
//               <img
//                 src={
//                   getAnalyticalInstrument?.data?.data?.image &&
//                   getAnalyticalInstrument?.data?.data?.image
//                 }
//                 alt="analytical"
//               />
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="analytical_main_content">
//               <h1 className="main_top_heading analytical_head">
//                 {getAnalyticalInstrument?.data?.data?.heading &&
//                   getAnalyticalInstrument?.data?.data?.heading}
//               </h1>
//               <ul>
//                 {getAnalyticalInstrument?.data?.data?.list?.map((elm) => (
//                   <li>{elm}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

import { Banner } from "app/components/Ui/Banner";

import "styles/Capabilities.css";
import {
  AllLabEquipmentMutation,
  GetLabEquipmentBannerMutation,
} from "rest/capabilities";

export default function AnalyticalInstrumentation() {
  const getBanner = GetLabEquipmentBannerMutation();
  const getEquipments = AllLabEquipmentMutation();

  return (
    <div className="lab_equipments">
      <Banner
        background={`url(${
          getBanner?.data?.data?.image && getBanner?.data?.data?.image
        })`}
        subMenu="Equipment"
        heading={"Analytical Instrumentation"}
        extra="lab_equipment_banner"
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
