import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import client from "assets/client_img.png";

import "styles/Pages.css";
import { AllClientMutation, AllTestimonialMutation } from "rest/home";

export const TestimonialsPage = () => {
  const allClients = AllClientMutation();
  const allTestimonial = AllTestimonialMutation();

  return (
    <div className="testimonial_page">
      <h1 className="main_top_heading">Testimonials</h1>
      <h3>Current and legacy clients</h3>
      <div className="clients_details">
        {allClients?.data?.data?.length >= 1 &&
          allClients?.data?.data?.map((clients, i) => {
            return (
              <div key={i} className="clients_logos">
                <img src={clients?.image} alt="clients logos" />
              </div>
            );
          })}
      </div>
      <div className="container-fluid">
        <div className="client_reviews">
          <Swiper slidesPerView={1} spaceBetween={30} loop={true}>
            {allTestimonial?.data?.data?.length >= 1 &&
              allTestimonial?.data?.data?.map((data, i) => {
                console.log(data);
                return (
                  <SwiperSlide key={i}>
                    <div className="client_details">
                      <div
                        dangerouslySetInnerHTML={{ __html: data?.description }}
                      />
                      <div className="client_profile">
                        <img src={data?.authorImage} alt="client profile" />
                        <span className="client_name">{data?.authorName}</span>
                        <span className="client_designation">
                          {data?.authorPosition}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
