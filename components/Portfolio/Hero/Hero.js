import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="relative">
        <div className="bg-[#1caf83] opacity-40 blur-[100px] absolute right-0 top-[38%] w-[182px] max-w-full h-[133.35px] z-[1]"></div>
                
      <div className="container p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-[60px]">
      <div>
        <div className="pt-[60px] flex flex-row justify-start">
          <img
            src="/images/Portfolio/HeroSection/blockchain.svg"
          />
        </div>
      </div>
      <div>
        <div className="pt-[60px] flex flex-row justify-start">
          <div>
            <div className="flex flex-col items-start p-0 gap-5 ml-0 md:ml-[60px] mt-0 md:mt-[73.5px]">
              <p className="font-teko font-normal text-[32px] md:text-[64px] leading-[40px] md:leading-[63px] flex-none order-0 self-stretch flex-grow-0">
                Custom Blockchain and smart contract development
              </p>
              <p className="font-rubik font-normal text-base leading-7 flex-none order-0 self-stretch flex-grow-0">
                Building decentralized services that will change tomorrows
                reality
              </p>
              <button className="w-[100px] h-[30px] text-base bg-transparent border-none relative text-[#f0f0f0] cursor-pointer z-[1] py-2.5 px-5 flex items-center justify-center whitespace-nowrap select-none touch-manipulation
                before:content-[''] before:absolute before:bottom-0 before:right-0 before:z-[-99999] before:transition-all before:duration-[0.4s] before:translate-x-0 before:translate-y-0 before:w-full before:h-full before:bg-transparent before:border before:border-[#1caf83] before:rounded-[50px]
                after:content-[''] after:absolute after:bottom-0 after:right-0 after:z-[-99999] after:transition-all after:duration-[0.4s] after:translate-x-[10px] after:translate-y-[10px] after:w-[35px] after:h-[35px] after:rounded-[50px] after:bg-[#ffffff15] after:backdrop-blur-[3px] after:bg-gradient-to-br after:from-[rgba(28,175,131,0.5)] after:to-[rgba(28,175,131,0)]
                hover:before:translate-x-[5%] hover:before:translate-y-[20%] hover:before:w-[110%] hover:before:h-[110%] hover:before:bg-[#1caf83]
                hover:after:translate-x-0 hover:after:translate-y-0 hover:after:w-full hover:after:h-full hover:after:backdrop-blur-[6px] hover:after:bg-gradient-to-br hover:after:from-[rgba(28,175,131,0.8)] hover:after:to-[rgba(28,175,131,0)]
                active:after:transition-none active:after:translate-y-[5%]" href="#contactUs">
            <Link className="text-[#1caf83] font-rubik hover:text-white" href="#contactUs">
              <a role="button" href="#contactUs">Contact Us</a>
            </Link>
          </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
