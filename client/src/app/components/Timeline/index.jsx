// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "./timeline.css";

// export const Timeline = () => {
//   return (
//     <section class="timeline">
//       <Swiper slidesPerView={9} loop={false} className="time_vv">
//         {data?.map((elm, i) => {
//           const classIndex = i % 10;

//           return (
//             <SwiperSlide key={i}>
//               <div className={`shape-chat _${classIndex}`}>
//                 {elm?.heading?.length <= 1 ? (
//                   <>
//                     <p>{elm?.heading[0]}</p>
//                     <time>{elm?.time}</time>
//                   </>
//                 ) : (
//                   <>
//                     <div className="top-div">
//                       <p>{elm?.heading[0]}</p>
//                       <time>{elm?.time}</time>
//                     </div>
//                     <div className="bottom-div bn-xs">
//                       <time>{elm?.time}</time>
//                       <p>{elm?.heading[1]}</p>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </SwiperSlide>
//           );
//         })}
//         <SwiperSlide></SwiperSlide>
//       </Swiper>
//     </section>
//   );
// };

// const data = [
//   {
//     heading: ["Discovery of Oligosaccharide as Anti- infective Agents"],
//     time: "1934",
//   },
//   {
//     heading: [
//       "Streptozocin Containing Glucosamine we Approvedfor the treatment iofpancreatic Tumors",
//       "Nucleoside Analogues were Approved for the Treatment of Anti-viral and Anti-tumors",
//     ],
//     time: "1934",
//   },
//   {
//     heading: ["Discovery of Oligosaccharide as Anti- infective Agents"],
//     time: "1976",
//   },
//   {
//     heading: [
//       "Fondaparinux was Approved for the prevention of Throm- boembolic Events",
//     ],
//     time: "2001",
//   },
//   {
//     heading: ["Nelarabine was Approved for The Treatment of Leukemia"],
//     time: "2005",
//   },
//   {
//     heading: [
//       "Sugammadex was Approvedfor the Treatment of Nervous System Diseases",
//     ],
//     time: "2008",
//   },
//   {
//     heading: [
//       "Dapagliflozin Was Approvedas the First SGLT2 Inhibitorfor the Treatment Of T2DM",
//     ],
//     time: "2012",
//   },
//   {
//     heading: [
//       "Plazomicin was Approved asAminoglycoside for the Treatmentof serious bacterial infections",
//     ],
//     time: "2012",
//   },
//   {
//     heading: ["Remdesivir was Approved for treatment of COVID-19"],
//     time: "2020",
//   },
// ];

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./timeline.css";

export const Timeline = () => {
  return (
    <section class="timeline">
      <Swiper slidesPerView={9} loop={false} className="time_vv">
        <SwiperSlide>
          <div className="shape-chat">
            <p>Discovery of Oligosaccharide as Anti- infective Agents</p>
            <time>1934</time>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shape-chat _1">
            <div className="top-div">
              <p>
                Streptozocin Containing Glucosamine we Approvedfor the treatment
                iofpancreatic Tumors
              </p>
              <time>1982</time>
            </div>
            <div className="bottom-div bn-xs">
              <time>1982</time>
              <p>
                Nucleoside Analogues were Approved for the Treatment of
                Anti-viral and Anti-tumors
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shape-chat _2">
            <p>Discovery of Oligosaccharide as Anti- infective Agents</p>
            <time>1976</time>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shape-chat _3">
            <time>2001</time>
            <p>
              Fondaparinux was Approved for the prevention of Throm- boembolic
              Events
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shape-chat _4">
            <p>Nelarabine was Approved for The Treatment of Leukemia</p>
            <time>2005</time>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shape-chat _5">
            <time>2008</time>
            <p>
              Sugammadex was Approvedfor the Treatment of Nervous System
              Diseases
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shape-chat _6">
            <p>
              Dapagliflozin Was Approvedas the First SGLT2 Inhibitorfor the
              Treatment Of T2DM
            </p>
            <time>2012</time>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shape-chat _7">
            <time>2018</time>
            <p>
              Plazomicin was Approved asAminoglycoside for the Treatmentof
              serious bacterial infections
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shape-chat _8">
            <p>Remdesivir was Approved for treatment of COVID-19</p>
            <time>2012</time>
          </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </section>
  );
};
