import React from "react";

const FeaturedOn = () => {
  const featuredData = [
    { id: 1, img: "/images/LandingPage/FeaturedOn/Paritex.svg" },
    { id: 2, img: "/images/LandingPage/FeaturedOn/Aota.svg" },
    { id: 3, img: "/images/LandingPage/FeaturedOn/CoinZoom.svg" },
    { id: 4, img: "/images/LandingPage/FeaturedOn/Luna.svg" },
    { id: 5, img: "/images/LandingPage/FeaturedOn/Blocknative.svg" },
    { id: 6, img: "/images/LandingPage/FeaturedOn/Enjin.svg" },
  ];

  return (
    <div className="bg-[#f1f1f1] py-[50px]px-0">
      <h3 className="text-[32px] sm:text-[64px] leading-10 sm:leading-[63px] font-teko font-normal text-center text-[#222429] mb-0">
        Our work is featured on
      </h3>
      <div className="container mx-auto p-5">
        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredData.map((details) => (
            <div key={details.id} className="">
              <img
                src={details.img}
                alt=""
                className="opacity-60 w-full cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* Mobile View - Simple scrollable */}
        <div className="md:hidden overflow-x-auto">
          <div className="flex gap-4 pb-4">
            {featuredData.map((details) => (
              <div key={details.id} className="flex-shrink-0">
                <img
                  src={details.img}
                  alt=""
                  className="h-16 opacity-60 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOn;
