import Link from "next/link";
import React from "react";

const YourOptForNftDev = () => {
  return (
    <>
      <div className="relative">
        <div className="flex justify-evenly items-center gap-[60px] mt-[60px] mb-[60px] max-sm:flex-col max-sm:gap-5 max-sm:my-0 sm:max-md:gap-0 container p-5">
          <div className="absolute right-0 top-[100px] w-[182px] max-w-full h-[133.35px] bg-[#1caf83] opacity-40 blur-[100px] z-1"></div>
          <div>
            <img
              src="images/Service Page/call-to-action-3.gif"
              alt=""
              className="max-sm:w-20"
            />
          </div>
          <div>
            <h1 className="font-teko font-normal text-[56px] leading-[60px] text-[#222429] max-sm:text-[32px] max-sm:leading-10 sm:max-md:text-[40px]">
              Not sure whether to opt in for NFT development?
            </h1>
            <p className="font-rubik font-normal text-base leading-7 text-[#222429] mb-[25px]">
              Share your project idea with Innowise Group's professionals
            </p>
            <button
              className="w-[232px] h-14 text-base bg-transparent border-none relative text-[#f0f0f0] cursor-pointer z-1 flex items-center justify-center whitespace-nowrap select-none before:content-[''] before:absolute before:bottom-0 before:right-0 before:z-[-99999] before:transition-all before:duration-400 before:transform before:translate-x-0 before:translate-y-0 before:w-full before:h-full before:bg-transparent before:border before:border-[#1caf83] before:rounded-full after:content-[''] after:absolute after:bottom-0 after:right-0 after:z-[-99999] after:transition-all after:duration-400 after:transform after:translate-x-[10px] after:translate-y-[10px] after:w-[35px] after:h-[35px] after:bg-[linear-gradient(180deg,rgba(26,26,26,0.4)_0%,rgba(26,26,26,0.4)_100%)] after:backdrop-blur-[3px] after:rounded-full hover:before:transform hover:before:translate-x-[5%] hover:before:translate-y-[20%] hover:before:w-[110%] hover:before:h-[110%] hover:before:bg-[#1caf83] hover:after:transform hover:after:translate-x-0 hover:after:translate-y-0 hover:after:w-full hover:after:h-full hover:after:rounded-full hover:after:backdrop-blur-[6px] active:after:transition-none active:after:transform active:after:translate-y-[5%]"
              href="#contactUs">
              <Link href="#contactUs">
                <a
                  role="button"
                  href="#contactUs"
                  className="text-[#1caf83] font-rubik hover:text-white">
                  Contact Us
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourOptForNftDev;
