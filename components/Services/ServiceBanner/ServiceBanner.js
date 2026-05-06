import React from "react";

const ServiceBanner = () => {
  const data = {
    title: "NFT Marketplace Development Company",
    text1:
      "NFT is everywhere! Undeniably, the popularity of non-fungible tokens is soaring day by day. Yes, it has gained new heights during the past few years, even though it has been around us for more than five to six years. This has significantly impacted many sectors in a positive way.",
    text2:
      "Mapping the NFT revolution, contemplating this, it would be great to develop & launch an NFT marketplace. Would you wish to be part of the NFT journey? Are you up with the thought of launching the NFT trading platform instantly?",
    text3:
      "ApexDv provides top-tier NFT marketplace development services. The solution we offer is customizable for Individual expectations. So the choice of the blockchain network is yours, and the features to be infused could be based on how you want the platform to function.",
    text4:
      "Connect with us, get the NFT marketplace development solution, and join the NFT revolution within the shortest possible time. Thereby providing a stage for traders to buy and sell digital assets and collectibles in a safe and secure way.",
    btnText: "Contact Us",
    img: "/images/Service Page/image 484.svg",
  };

  return (
    <>
      <div className="container p-5">
        <div className="grid grid-cols-2 gap-[60px] mt-20 max-sm:grid-cols-1 sm:max-md:grid-cols-1">
          <div>
            <h1 className="font-teko font-normal text-[64px] leading-[63px] text-[#222429] max-sm:text-[32px] max-sm:leading-10 sm:max-md:text-[40px]">
              {data.title}
            </h1>
            <p className="font-rubik font-normal text-base leading-7 text-[#222429] mb-5">
              {data.text1}
            </p>
            <p className="font-rubik font-normal text-base leading-7 text-[#222429] mb-5">
              {data.text2}
            </p>
            <p className="font-rubik font-normal text-base leading-7 text-[#222429] mb-5">
              {data.text3}
            </p>
            <p className="font-rubik font-normal text-base leading-7 text-[#222429] mb-5">
              {data.text4}
            </p>
            <button
              className="w-[232px] h-14 text-base bg-transparent border-none relative text-[#f0f0f0] cursor-pointer z-1 flex items-center justify-center whitespace-nowrap select-none before:content-[''] before:absolute before:bottom-0 before:right-0 before:z-[-99999] before:transition-all before:duration-400 before:transform before:translate-x-0 before:translate-y-0 before:w-full before:h-full before:bg-[#1caf83] before:border before:border-[#1caf83] before:rounded-full after:content-[''] after:absolute after:bottom-0 after:right-0 after:z-[-99999] after:transition-all after:duration-400 after:transform after:translate-x-[10px] after:translate-y-[10px] after:w-[35px] after:h-[35px] after:bg-[linear-gradient(180deg,rgba(26,26,26,0.4)_0%,rgba(26,26,26,0.4)_100%)] after:backdrop-blur-[3px] after:rounded-full hover:before:transform hover:before:translate-x-[5%] hover:before:translate-y-[20%] hover:before:w-[110%] hover:before:h-[110%] hover:before:bg-[#1caf83] hover:after:transform hover:after:translate-x-0 hover:after:translate-y-0 hover:after:w-full hover:after:h-full hover:after:rounded-full hover:after:backdrop-blur-[6px] active:after:transition-none active:after:transform active:after:translate-y-[5%]"
              href="#contactUs">
              <a
                role="button"
                href="#contactUs"
                className="text-white font-rubik hover:text-white">
                {data.btnText}
              </a>
            </button>
          </div>
          <div className="relative">
            <div className="absolute right-0 top-[-150px] w-[182px] max-w-full h-[133.35px] bg-[#1caf83] opacity-40 blur-[100px] z-1"></div>

            <img src={data.img} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceBanner;
