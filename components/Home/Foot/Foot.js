import React from "react";

const Foot = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mt-5">
        <div className="flex flex-col justify-between">
          <p className="text-[#49BF9C] text-base">Like what you see?</p>
          <h2 className="text-[#1CAF83] font-teko text-5xl md:text-6xl font-normal">
            Say Hello
          </h2>
          <hr className="my-5 bg-[#49BF9C] border-[3px] lg:border-[5px] border-[#49BF9C] w-full md:w-[300px] lg:w-[400px]" />
        </div>
        <div className="flex flex-row justify-center items-center gap-0 lg:pr-2.5">
          <a
            href="https://www.facebook.com/apexdvltd"
            className="m-4 hover:opacity-75 transition-opacity">
            <img
              className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]"
              alt="facebook"
              src="/images/LandingPage/Foot/facebook.svg"
            />
          </a>
          <a
            href="https://twitter.com/apexdv_nft"
            className="m-4 hover:opacity-75 transition-opacity">
            <img
              className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]"
              alt="twitter"
              src="/images/LandingPage/Foot/twitter.svg"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/apexdv/"
            className="m-4 hover:opacity-75 transition-opacity">
            <img
              className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]"
              alt="linkedin"
              src="/images/LandingPage/Foot/linkedin.svg"
            />
          </a>
          <a
            href="https://www.instagram.com/apexdv.nft/"
            className="m-4 hover:opacity-75 transition-opacity">
            <img
              className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]"
              alt="instagram"
              src="/images/LandingPage/Foot/instagram.svg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Foot;
