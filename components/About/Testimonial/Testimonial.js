import Image from "next/image";
import React, { useState } from "react";

function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "They care about their customers and deliver the top notch services out there in the market.",
      name: "Garett Johnson",
      role: "CEO of ApexDv",
      image: "/images/AboutUs/image 344.svg",
    },
    {
      quote:
        "Their developers are the most professional developers I have ever known and they always deliver on time.",
      name: "Garcia Lopez",
      role: "CEO of ApexDv",
      image: "/images/AboutUs/image 344.svg",
    },
    {
      quote:
        "Trust me these guys are really apex in their developments. They are really fast and deliver projects within the committed timeline.",
      name: "Harman Aribas",
      role: "CEO of ApexDv",
      image: "/images/AboutUs/image 344.svg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="h-[700px] bg-[url('/images/AboutUs/Reviews.svg')] bg-center bg-no-repeat bg-cover pt-[220px] sm:pt-[350px]">
      <div className="container">
        <div className="testimonialSlider">
          <div>
            <div className="max-w-[1000px] mx-auto px-0 sm:px-[30px]">
              <h3 className="font-teko font-normal text-[38px] leading-9 text-[#222429]">
                "{testimonials[currentSlide].quote}
              </h3>
              <div className="flex flex-row mt-5">
                <Image
                  src={testimonials[currentSlide].image}
                  width={50}
                  height={50}
                />
                <div className="pl-3">
                  <h2 className="font-rubik font-normal text-2xl leading-[125%] text-[#222429]">
                    {testimonials[currentSlide].name}
                  </h2>
                  <h3 className="font-rubik font-light text-xl leading-[125%] text-[#4e5054]">
                    {testimonials[currentSlide].role}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-[#1CAF83]" : "bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
