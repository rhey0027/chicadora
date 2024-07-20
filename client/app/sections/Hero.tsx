"use client";
import React, { useEffect } from "react";
import { imageSlides } from "@/data/data";
import Carousel from "../components/carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./hero.css";
import AOS from "aos";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);
  return (
    <div className="hero-slider" id="hero-slider">
      <div className="container-md" data-aos="fade-in">
        <div className="row">
          <div className="col-12">
            <Swiper
              slidesPerView={"auto"}
              speed={500}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
              }}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              className="sliderFeaturedPost"
            >
              {imageSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <Carousel slide={slide} />
                </SwiperSlide>
              ))}
              <div className="custom-swiper-button-prev bg-green-200 bg-opacity-40 rounded-full w-10 flex justify-center">
                <span className="bi bi-chevron-left"></span>
              </div>
              <div className="custom-swiper-button-next bg-green-200 bg-opacity-40 rounded-full w-10 flex justify-center">
                <span className="bi bi-chevron-right"></span>
              </div>
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
