import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.jpg";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR1} alt="avatar1" />
          </div>
          <h5 className="client_name">Jerry Achiever</h5>
          <small className="client_review">
            I get a good impression, I carry out my project with all the
            possible quality and attention and support 24 hours a day
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR2} alt="avatar1" />
          </div>
          <h5 className="client_name">Tom Achiever</h5>
          <small className="client_review">
            I get a good impression, I carry out my project with all the
            possible quality and attention and support 24 hours a day
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR3} alt="avatar1" />
          </div>
          <h5 className="client_name">Ernest Achiever </h5>
          <small className="client_review">
            I get a good impression, I carry out my project with all the
            possible quality and attention and support 24 hours a day
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={AVATAR4} alt="avatar1" />
          </div>
          <h5 className="client_name">Logan Achiever</h5>
          <small className="client_review">
            I get a good impression, I carry out my project with all the
            possible quality and attention and support 24 hours a day
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default testimonials;
