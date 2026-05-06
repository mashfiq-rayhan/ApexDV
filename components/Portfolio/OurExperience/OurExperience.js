import React from "react";

export default function OurExperience() {
  return (
    <div className="relative">
      <div className="bg-[#1caf83] opacity-40 md:opacity-20 blur-[100px] absolute right-0 top-[152%] w-[182px] max-w-full h-[133.35px] z-[1]"></div>
                <div className="bg-[#1caf83] opacity-40 md:opacity-20 blur-[100px] absolute left-0 top-[152%] w-[182px] max-w-full h-[133.35px] z-[1]"></div>
      <div className="container p-5">
       
      <div className="mt-5 md:mt-[60px]">
      <div className="pt-0 md:pt-[60px] flex flex-col justify-center">
        <p className="font-teko font-normal text-[32px] md:text-[64px] leading-[40px] md:leading-[63px] text-[#222429]">We are experienced in...</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 justify-between">
        <div>
          <img src="/images/Portfolio/HeroSection/smilingguy.svg" />
        </div>
        <div className="pt-0 md:pt-[30px]">
          <ol className="font-teko font-normal text-[32px] leading-[40px] text-[#222429] flex flex-col">
            <li className="pb-[30px] text-2xl md:text-[32px] leading-6 md:leading-[40px]">1.  NFT platforms</li>
            <li className="pb-[30px] text-2xl md:text-[32px] leading-6 md:leading-[40px]">2.  DeFi applications</li>
            <li className="pb-[30px] text-2xl md:text-[32px] leading-6 md:leading-[40px]">3.  Cloud storages based on blockchain</li>
            <li className="pb-[30px] text-2xl md:text-[32px] leading-6 md:leading-[40px]">4.  Data analytics services</li>
            <li className="pb-[30px] text-2xl md:text-[32px] leading-6 md:leading-[40px]">5.  Blockchain solutions for GameDev</li>
          </ol>
        </div>
        <div className="pt-0 md:pt-[0px]">
          <div className="flex flex-row justify-center items-center pt-2.5 font-rubik font-normal text-[17px] leading-7">
            <p className="text-center">
              We are sure that blockchain is an essential part of our world now.
              Making blockchain solutions we contribute to a secure and easy WEB
              3.0 access.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
