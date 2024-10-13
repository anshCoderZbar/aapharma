import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./timeline.css";
import "swiper/css/scrollbar";
import { AllCarbohydrateTimeline } from "rest/service";
import { Navigation, Scrollbar } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Timeline = () => {
  const swiperRef = useRef();
  const allTimelines = AllCarbohydrateTimeline();
  const [id, setId] = useState(null);

  useEffect(() => {
    if (allTimelines?.data?.data) {
      setId(allTimelines?.data?.data[0]?.id);
    }
  }, [allTimelines?.data?.data]);

  return (
    <section className="timeline">
      <div className="timeline_arrow catalog_nav_arows">
        <span
          onClick={() => swiperRef.current?.slidePrev()}
          className="left_arrow"
        >
          <ChevronLeft />
        </span>
        <span
          onClick={() => swiperRef.current?.slideNext()}
          className="right_arrow"
        >
          <ChevronRight />
        </span>
      </div>
      <Swiper
        slidesPerView={1}
        scrollbar
        loop={false}
        modules={[Scrollbar, Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          470: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          991: {
            slidesPerView: 4,
          },
          1199: {
            slidesPerView: 5,
          },
          1300: {
            slidesPerView: 6,
          },
          1800: {
            slidesPerView: 7,
          },
        }}
        className="time_vv"
      >
        {allTimelines?.data?.data?.length >= 1 &&
          allTimelines?.data?.data?.map((elm, i) => {
            const classIndex = i % 10;
            return (
              <SwiperSlide key={i}>
                <span
                  onClick={() => setId(elm?.id)}
                  className={`ccrical-a  ccir_${classIndex} ${
                    id === elm?.id ? "timeBtnActive" : ""
                  }`}
                >
                  <time>{elm?.year}</time>
                </span>
                <div className={`shape-chat _${classIndex}`}>
                  {elm?.description2 && !elm?.description && (
                    <time>{elm?.year}</time>
                  )}

                  {elm?.description && !elm?.description2 && (
                    <p>{elm?.description}</p>
                  )}
                  {elm?.description2 && !elm?.description && (
                    <p>{elm?.description2}</p>
                  )}

                  {elm?.description && !elm?.description2 && (
                    <time>{elm?.year}</time>
                  )}

                  {elm?.description && elm?.description2 && (
                    <>
                      <div className="top-div">
                        <p>{elm?.description}</p>
                        <time>{elm?.year}</time>
                      </div>
                      <div className="bottom-div bn-xs">
                        <time>{elm?.year}</time>
                        <p>{elm?.description2}</p>
                      </div>
                    </>
                  )}
                </div>
                {elm?.id === id && (
                  <picture
                    className={`comp_img ${
                      classIndex % 2 === 0 ? "even_class" : "odd_class"
                    }  comp_${classIndex}`}
                  >
                    <img src={elm?.image ? elm?.image : elm?.image2} />
                  </picture>
                )}
                {/* {elm?.image && (
                  <picture
                    className={`comp_img comp_${
                      classIndex % 2 === 0 ? classIndex : ""
                    }`}
                  >
                    <img src={elm?.image} />
                  </picture>
                )} */}

                {/* {elm?.image2 && (
                  <picture
                    className={`comp_img comp_${
                      classIndex % 2 !== 0 ? classIndex : ""
                    }`}
                  >
                    <img src={elm?.image2} />
                  </picture>
                )} */}
              </SwiperSlide>
            );
          })}
        <SwiperSlide></SwiperSlide>
        <h2 className="mai"></h2>
      </Swiper>
    </section>
  );
};
