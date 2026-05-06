import React from "react";

const NftDevelopmentService = () => {
  const headerData = {
    title: "Our NFT development services",
    text: "We adopt the power of our world-class talents and profound knowledge of blockchain and NFTs to deliver tailored solutions of any type, from designing an asset for the token to developing a unique NFT marketplace. NFTs can be filled with anything, from digital art and music to virtual real estate and real-life experiences. This feature makes NFTs a unique and versatile tool for brand promotion.",
  };
  const cardData = [
    {
      icon: "/images/Service Page/image 487.svg",
      title: "NFT asset design",
      text: "Our designers will create assets into 2 or 4 dimensions and will mint into tokens bringing life to its digital form. Then that asset can be listed into any NFT Marketplace of your desired choice.",
    },
    {
      icon: "/images/Service Page/image 486.svg",
      title: "Intellectual property tokenization",
      text: "Our team of specialists will assist you in creating your own intellectual property of NFT. It can be anything such as an image, video, painting etc. ",
    },
    {
      icon: "/images/Service Page/image 488.svg",
      title: "NFT minting",
      text: "Minting an NFT is, uniquely publishing your token on the blockchain to make it purchasable. A simple step-by-step for starting this involves creating a digital wallet, specifically one that securely stores Cryptocurrency. ",
    },
    {
      icon: "/images/Service Page/image 490.svg",
      title: "Smart contract development",
      text: "Revolutionize your business with our smart contract development services for private, public and hybrid blockchains. With deep expertise in various smart contract programming languages, we help enterprises automate their operations, streamline workflow, and reduce the cost of key processes.",
    },
    {
      icon: "/images/Service Page/image 491.svg",
      title: "Migrating NFTs",
      text: "For seamless migration between blockchains, our blockchain specialists will create cross chain bridges to transfer tokens from one block chain to another.",
    },
    {
      icon: "/images/Service Page/image 489.svg",
      title: "Cross-chain NFT platform development",
      text: "At ApexDv, we build NFT platforms and marketplaces equipped with cross-chain capabilities such as blockchain networks interoperability, cross-chain transactions, and multi-token wallet systems. They ensure efficient, secure, and seamless NFT exchange in different networks.",
    },
  ];
  return (
    <>
      <div className="relative my-[60px] mb-[60px]">
        <div className="container p-5">
          <div className="absolute right-0 top-[400px] w-[182px] max-w-full h-[133.35px] bg-[#1caf83] opacity-40 blur-[100px] z-1 max-lg:opacity-20"></div>
          <div className="absolute left-0 top-[200px] w-[182px] max-w-full h-[133.35px] bg-[#1caf83] opacity-40 blur-[100px] z-1 max-lg:opacity-20"></div>
          <h1 className="font-teko font-normal text-[64px] leading-[63px] text-[#222429] mb-5 max-sm:text-[32px] max-sm:leading-[40px]">
            {headerData.title}
          </h1>
          <p className="font-rubik font-normal text-base leading-7 text-[#383a3e]">
            {headerData.text}
          </p>

          <div className="grid grid-cols-3 gap-[30px] mt-[60px] max-sm:grid-cols-1 sm:max-md:grid-cols-1 md:max-lg:grid-cols-2">
            {cardData.map((item, i) => (
              <div
                key={i}
                className="border border-[#1caf83] p-5 rounded-[11px] shadow-[-8px_-8px_0px_#1caf83] z-[100] bg-white">
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
    </>
  );
};

export default NftDevelopmentService;
