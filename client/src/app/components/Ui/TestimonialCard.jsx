import React from "react";

export const TestimonialCard = ({ testimonials }) => {
  return (
    <div className="testimonial">
      <div dangerouslySetInnerHTML={{ __html: testimonials?.description }} />
      <div className="test-info">
        {/* <img
          className="test-pic"
          src={testimonials?.authorImage}
          alt="avatar"
        /> */}
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="test-name">
            <span>{testimonials?.authorName}</span>
            {testimonials?.authorPosition}
          </div>
          <div className="client_brand">
            <img src={testimonials?.clientImage} alt="brand" />
          </div>
        </div>
      </div>
    </div>
  );
};
