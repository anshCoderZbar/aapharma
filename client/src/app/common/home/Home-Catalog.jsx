import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { CatalogHomeCard } from "app/components/CatalogCard/CatalogHomeCard";

import "swiper/css/navigation";
import { AllChemical } from "rest/catalog";

export const HomeCatalog = () => {
  const swiperRef = useRef();
  const navigate = useNavigate();

  const allChemicals = AllChemical();
  return (
    <div className="catalog">
      <div className="d-flex justify-content-between">
        <h2>Catalog</h2>
        <div className="catalog_nav_arows">
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
      </div>
      <Swiper
        slidesPerView={1}
        modules={[Navigation]}
        spaceBetween={30}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          470: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 2.5,
          },
          1199: {
            slidesPerView: 3,
          },
          1300: {
            slidesPerView: 3.5,
          },
          1500: {
            slidesPerView: 4,
          },
        }}
      >
        {allChemicals?.data?.data?.map((items) => {
          return (
            items?.featured === 1 && (
              <SwiperSlide key={items?.id}>
                <CatalogHomeCard
                  items={items}
                  baseUrl={allChemicals?.data?.baseUrl}
                />
              </SwiperSlide>
            )
          );
        })}
      </Swiper>
      <div className="d-flex justify-content-center mt-5">
        <button
          onClick={() => navigate("/research-tools-catalog")}
          className="primary_buttton"
        >
          View All
        </button>
      </div>
    </div>
  );
};
