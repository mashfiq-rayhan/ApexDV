import React from "react";

const ConsiderNftService = () => {
  const data = {
    title: "Who should consider NFT development services?",
    text: "Diving into the world of NFTs unveils a lot of opportunities being most beneficial for",
  };
  const cardData = [
    {
      text: "Exchange and DeFi platform owners;",
    },
    {
      text: "Museums, art galleries, and auction houses;",
    },
    {
      text: "Independent artists and photographers;",
    },
    {
      text: " Custom brand owners;",
    },
    {
      text: "Musicians, record labels and filmmakers;",
    },
    {
      text: "Content creators and influencers.",
    },
  ];
  return (
    <>
      <div className="relative">
        <div className="container p-5">
          <div className="my-20 flex items-center max-sm:my-5 max-sm:flex-col sm:max-md:my-5 sm:max-md:flex-col">
            <div className="absolute right-0 top-[150px] w-[182px] max-w-full h-[133.35px] bg-[#1caf83] opacity-40 blur-[100px] z-1 max-sm:top-[200px] max-sm:w-[92px] sm:max-md:top-[170px] lg:opacity-20 max-lg:opacity-20"></div>
            <div className="absolute left-0 top-[150px] w-[182px] max-w-full h-[133.35px] bg-[#1caf83] opacity-40 blur-[100px] z-1 max-sm:w-[140px] lg:opacity-20 max-lg:opacity-20"></div>
            <div className="w-full">
              <h1 className="font-teko font-normal text-[56px] leading-[60px] text-[#222429] mb-4 max-sm:text-[32px] max-sm:leading-10 sm:max-md:text-[40px] sm:max-md:leading-[43px]">
                {data.title}
              </h1>
              <p className="font-rubik font-normal text-base leading-7 text-[#222429]">
                {data.text}
              </p>
            </div>
            <div className="w-full bg-white border border-[#1caf83] shadow-[-8px_-8px_0px_#1caf83] rounded-[9px] p-5 ml-[30px] z-[100] max-sm:ml-0 max-sm:mt-[15px] sm:max-md:ml-0 sm:max-md:mt-[15px]">
              {cardData.map((item, i) => (
                <li
                  key={i}
                  className="mb-[2px] font-rubik font-normal text-base leading-7 text-[#383a3e]">
                  {item.text}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsiderNftService;
