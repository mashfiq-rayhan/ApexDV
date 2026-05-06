import React from "react";

const PlatformsNft = () => {
  const headerData = {
    title: "Platforms we develop NFTs on",
  };
  const cardData = [
    {
      icon: "/images/Service Page/image 492.svg",
      title: "Ethereum-based NFT development",
      text: "We will leverage our expertise for your NFT development to create outstanding products as per the leading NFT blockchain platform Ethereum.",
    },
    {
      icon: "/images/Service Page/image 493.svg",
      title: "Development on Binance Smart Chain",
      text: "We will  build you NFT solutions based on Binance Smart Chain to forge the product keeping up with the high industry standards.",
    },
    {
      icon: "/images/Service Page/image 494.svg",
      title: "Utilizing Tezos for NFT development",
      text: "We always develop securely, with energy efficiency, and easily scalable NFT products based on Tezos blockchain technology.",
    },
    {
      icon: "/images/Service Page/image 495.svg",
      title: "Cardano-based NFT development",
      text: "Our team of specialists will create securely, transparently, and with sustainable products based on Cardano blockchain.",
    },
    {
      icon: "/images/Service Page/image 496.svg",
      title: "NFT development on Solana",
      text: "Our blockchain & NFT specialists utilize Solana blockchain to tailor products showing swift transactions and low gas fees.",
    },
    {
      icon: "/images/Service Page/image 497.svg",
      title: "Polkadot-based NFT development",
      text: "Our specialists utilize Polkadot blockchain to develop highly secure and easily scalable cross-blockchain solutions.",
    },
  ];
  return (
    <>
      <div className="relative">
        <div className="container p-5">
          <div className="relative mt-[60px] mb-[60px]">
            <div className="absolute right-0 top-[400px] w-[182px] max-w-full h-[133.35px] bg-[#1caf83] opacity-40 blur-[100px] z-1 max-lg:opacity-20"></div>
            <div className="absolute left-0 top-[200px] w-[182px] max-w-full h-[133.35px] bg-[#1caf83] opacity-40 blur-[100px] z-1 max-lg:opacity-20"></div>
            <h1 className="font-teko font-normal text-[64px] leading-[63px] text-[#222429] mb-5 max-sm:text-[32px] max-sm:leading-[40px]">
              {headerData.title}
            </h1>

            <div className="grid grid-cols-3 gap-[30px] mt-[60px] max-sm:grid-cols-1 sm:max-md:grid-cols-1 md:max-lg:grid-cols-2">
              {cardData.map((item, i) => (
                <div
                  key={i}
                  className="p-5 shadow-[inset_0_0_0_1px_#1caf83] rounded-[11px] max-sm:bg-white sm:max-md:bg-white"
                  style={{
                    boxShadow:
                      "rgb(255, 255, 255) -8px -8px 0px -1px, #8d8d8d -8px -8px",
                  }}>
                  <div className="mb-4">
                    <img className="" src={item.icon} alt="" />
                  </div>
                  <div className="">
                    <h1 className="font-teko font-normal text-[32px] leading-10 text-[#222429] mb-2.5">
                      {item.title}
                    </h1>
                    <p className="font-rubik font-normal text-base leading-7 text-[#383a3e]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformsNft;
