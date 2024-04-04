import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { TestimonialCard } from "app/components/Ui/TestimonialCard";
import { AllTestimonialMutation } from "rest/home";

export const Testimonials = () => {
  const allTestimonail = AllTestimonialMutation();

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      loop={true}
      breakpoints={{
        470: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 2.2,
        },
        1199: {
          slidesPerView: 2.5,
        },
      }}
    >
      {allTestimonail?.data?.data?.length >= 1 &&
        allTestimonail?.data?.data?.map((testimonials, i) => {
          return (
            <SwiperSlide key={i}>
              <TestimonialCard testimonials={testimonials} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};
