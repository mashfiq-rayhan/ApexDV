import Image from "next/image";
import React, { useState } from "react";

function Awards() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { img: "/images/AboutUs/image 343.svg" },
    { img: "/images/AboutUs/image 343.svg" },
    { img: "/images/AboutUs/image 343.svg" },
    { img: "/images/AboutUs/image 343.svg" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative">
      <div className="awardSlider">
        <img
          src={slides[currentSlide].img}
          className="w-full h-[300px]"
          alt="award"
        />
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-[#1CAF83]" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      <div className="md:text-end sm:text-center p-10 sm:text-xl ">
        <h1 className="font-teko text-6xl">Awards</h1>
      </div>
      <div className="container p-5">
        {/* Green abstract decorations */}
        <div className="absolute right-[0.62%] top-[69%] bg-[#1caf83] opacity-35 lg:opacity-20 blur-[100px] w-[182px] max-w-full h-[133.35px] z-[1]"></div>
        <div className="absolute left-[0.14%] top-[44.33%] bg-[#1caf83] opacity-35 lg:opacity-20 blur-[100px] w-[182px] max-w-full h-[133.35px] z-[1]"></div>

        {/* one year award */}
        <div className="md:text-end sm:text-center pl-10 pr-10 w-full">
          <h1 className="font-teko font-normal text-[64px] leading-[63px] text-[#909194] relative before:absolute before:content-[''] before:w-[300px] before:h-[2px] before:bg-[#e9e9ea] before:bottom-[15px] before:right-[105px]">
            2021
          </h1>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
          {/* award year */}
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 w-full">
            <div className="group relative h-[215px] pl-2.5 hover:bg-black transition-colors">
              <div className="flex flex-col">
                <div>
                  <Image
                    src={"/images/AboutUs/image 344.svg"}
                    width={100}
                    height={100}
                  />
                </div>
                <h6 className="font-rubik font-normal text-lg leading-7 text-[#222429] group-hover:text-white w-[189px]">
                  Deloitte Fast 500
                </h6>
                <p className="font-rubik font-normal text-sm leading-8 text-[#4e5054] group-hover:text-white">
                  Worldwide
                </p>
              </div>
              <div className="p-5 absolute top-0 left-[200px] w-[396px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:animate-[leftToRight_0.5s] bg-black h-[215px] text-white z-[1] hidden sm:block">
                <h2 className="mb-3 text-2xl">Clutch</h2>
                <p className="text-2xl">
                  Cheesecake Labs: Top 7 mobile app development company
                  worldwide
                </p>
              </div>
            </div>
            {/* another one */}
            <div className="group relative h-[215px] pl-2.5 hover:bg-black transition-colors">
              <div className="flex flex-col">
                <div>
                  <Image
                    src={"/images/AboutUs/image 344.svg"}
                    width={100}
                    height={100}
                  />
                </div>
                <h6 className="font-rubik font-normal text-lg leading-7 text-[#222429] group-hover:text-white w-[189px]">
                  CODiE Awards
                </h6>
                <p className="font-rubik font-normal text-sm leading-8 text-[#4e5054] group-hover:text-white">
                  Worldwide
                </p>
              </div>
              <div className="p-5 absolute top-0 right-[366px] w-[396px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:animate-[rightToLeft_0.5s] bg-black h-[215px] text-white z-[1] hidden sm:block">
                <h2 className="mb-3 text-2xl">Clutch</h2>
                <p className="text-2xl">
                  Cheesecake Labs: Top 7 mobile app development company
                  worldwide
                </p>
              </div>
            </div>
            {/* another one */}
          </div>
        </div>
        {/* One year award end */}
        {/* one year award */}
        <div className="md:text-end sm:text-center pl-10 pr-10 w-full">
          <h1 className="font-teko font-normal text-[64px] leading-[63px] text-[#909194] relative before:absolute before:content-[''] before:w-[300px] before:h-[2px] before:bg-[#e9e9ea] before:bottom-[15px] before:right-[105px]">
            2020
          </h1>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
          {/* award year */}
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 w-full">
            <div className="group relative h-[215px] pl-2.5 hover:bg-black transition-colors">
              <div className="flex flex-col">
                <div>
                  <Image
                    src={"/images/AboutUs/image 344.svg"}
                    width={100}
                    height={100}
                  />
                </div>
                <h6 className="font-rubik font-normal text-lg leading-7 text-[#222429] group-hover:text-white w-[189px]">
                  FSF Free Software Awards
                </h6>
                <p className="font-rubik font-normal text-sm leading-8 text-[#4e5054] group-hover:text-white">
                  Worldwide
                </p>
              </div>
              <div className="p-5 absolute top-0 left-[200px] w-[396px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:animate-[leftToRight_0.5s] bg-black h-[215px] text-white z-[1] hidden sm:block">
                <h2 className="mb-3 text-2xl">Clutch</h2>
                <p className="text-2xl">
                  Cheesecake Labs: Top 7 mobile app development company
                  worldwide
                </p>
              </div>
            </div>
            {/* another one */}
            <div className="group relative h-[215px] pl-2.5 hover:bg-black transition-colors">
              <div className="flex flex-col">
                <div>
                  <Image
                    src={"/images/AboutUs/image 344.svg"}
                    width={100}
                    height={100}
                  />
                </div>
                <h6 className="font-rubik font-normal text-lg leading-7 text-[#222429] group-hover:text-white w-[189px]">
                  Microsoft Most Valuable Professional
                </h6>
                <p className="font-rubik font-normal text-sm leading-8 text-[#4e5054] group-hover:text-white">
                  Worldwide
                </p>
              </div>
              <div className="p-5 absolute top-0 right-[366px] w-[396px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:animate-[rightToLeft_0.5s] bg-black h-[215px] text-white z-[1] hidden sm:block">
                <h2 className="mb-3 text-2xl">Clutch</h2>
                <p className="text-2xl">
                  Cheesecake Labs: Top 7 mobile app development company
                  worldwide
                </p>
              </div>
            </div>
            {/* another one */}
          </div>
        </div>
        {/* One year award end */}
        {/* one year award */}
        <div className="md:text-end sm:text-center pl-10 pr-10 w-full">
          <h1 className="font-teko font-normal text-[64px] leading-[63px] text-[#909194] relative before:absolute before:content-[''] before:w-[300px] before:h-[2px] before:bg-[#e9e9ea] before:bottom-[15px] before:right-[105px]">
            2019
          </h1>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
          {/* award year */}
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 w-full">
            <div className="group relative h-[215px] pl-2.5 hover:bg-black transition-colors">
              <div className="flex flex-col">
                <div>
                  <Image
                    src={"/images/AboutUs/image 344.svg"}
                    width={100}
                    height={100}
                  />
                </div>
                <h6 className="font-rubik font-normal text-lg leading-7 text-[#222429] group-hover:text-white w-[189px]">
                  Nasscom Emerge 50
                </h6>
                <p className="font-rubik font-normal text-sm leading-8 text-[#4e5054] group-hover:text-white">
                  Worldwide
                </p>
              </div>
              <div className="p-5 absolute top-0 left-[200px] w-[396px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:animate-[leftToRight_0.5s] bg-black h-[215px] text-white z-[1] hidden sm:block">
                <h2 className="mb-3 text-2xl">Clutch</h2>
                <p className="text-2xl">
                  Cheesecake Labs: Top 7 mobile app development company
                  worldwide
                </p>
              </div>
            </div>
            {/* another one */}
            <div className="group relative h-[215px] pl-2.5 hover:bg-black transition-colors">
              <div className="flex flex-col">
                <div>
                  <Image
                    src={"/images/AboutUs/image 344.svg"}
                    width={100}
                    height={100}
                  />
                </div>
                <h6 className="font-rubik font-normal text-lg leading-7 text-[#222429] group-hover:text-white w-[189px]">
                  Webby Awards
                </h6>
                <p className="font-rubik font-normal text-sm leading-8 text-[#4e5054] group-hover:text-white">
                  Worldwide
                </p>
              </div>
              <div className="p-5 absolute top-0 right-[366px] w-[396px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:animate-[rightToLeft_0.5s] bg-black h-[215px] text-white z-[1] hidden sm:block">
                <h2 className="mb-3 text-2xl">Clutch</h2>
                <p className="text-2xl">
                  Cheesecake Labs: Top 7 mobile app development company
                  worldwide
                </p>
              </div>
            </div>
            {/* another one */}
          </div>
        </div>
        {/* One year award end */}
      </div>
    </div>
  );
}

export default Awards;
