import React from "react";
import Expertise from "./Expertise";

export default function OurExpertise() {
  return (
    <div className="relative">
      <div className="bg-[#1caf83] opacity-40 md:opacity-20 blur-[100px] absolute right-0 top-[17%] w-[182px] max-w-full h-[133.35px] z-[1]"></div>
      <div className="bg-[#1caf83] opacity-40 md:opacity-20 blur-[100px] absolute left-0 top-[17%] w-[182px] max-w-full h-[133.35px] z-[1]"></div>
      <div className="container p-5 mt-[30px] md:mt-[120px] justify-end">
        <div className="h-[63px]">
          <p className="font-teko font-normal text-[32px] md:text-[64px] leading-[40px] md:leading-[63px] text-[#222429] text-center">Our Expertise</p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center pt-5 md:pt-[50px]">
          <div>
            <Expertise
              details={{
                title: "Solidity",
                description:
                  "First Cardano projects endorsed our interest in blockchain, so we fostered our expertise in a main decentralized technology - Ethereum.",
              }}
            />
          </div>
          <div>
            <Expertise
              details={{
                title: "Plutus",
                description:
                  "Our functional programming approach expressed in working with Haskell led us to Cardano infrastructure and Plutus smart contract ecosystem. Partnership with IOGS makes us one of the Plutus commercial use pioneers.",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
