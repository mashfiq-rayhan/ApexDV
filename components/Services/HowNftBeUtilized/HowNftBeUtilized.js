import React from "react";

const HowNftBeUtilized = () => {
  const headerData = {
    title: "How can NFTs be utilized?",
    text: "Non-fungible tokens are a versatile tool that can be precisely tailored to particular needs.",
  };
  const cardData = [
    {
      id: 1,
      icon: "images/Service Page/image 48777 (1).svg",
      title: "Managing assets",
      text: "When the asset is converted into an NFT, it can be stored or transferred to another user easily and securely. Users can manage their NFTs via one application and the blockchain will exclude the possibility of fraud",
    },
    {
      id: 2,
      icon: "images/Service Page/image 48777 (2).svg",
      title: "Collectibles",
      text: "Whether it’s a piece of art, an in-game item or a physical asset, an NFT can act as a certificate of ownership or authenticity that can’t be forged.",
    },
    {
      id: 3,
      icon: "images/Service Page/image 48777 (3).svg",
      title: "Software licensing",
      text: "Non-fungible tokens can replace license keys. By putting the license information into an NFT and sending the token to an end-user, developers can automate the process of software distribution and licensing.",
    },
    {
      id: 4,
      icon: "images/Service Page/image 48777 (4).svg",
      title: "Subscription management",
      text: "Just like software licensing, NFTs enable end customers to subscribe to the services or content from the creators.",
    },
  ];
  return (
    <>
      <div className="relative mt-[100px] mb-[60px]">
        <div className="container p-5">
          <div className="absolute right-0 top-[100px] w-[182px] max-w-full h-[133.35px] bg-[#1caf83] opacity-40 blur-[100px] z-1 max-lg:opacity-20"></div>
          <div className="absolute left-0 top-[-50px] w-[182px] max-w-full h-[133.35px] bg-[#1caf83] opacity-40 blur-[100px] z-1 max-lg:opacity-20"></div>
          <div>
            <h1 className="font-teko font-normal text-[64px] leading-[63px] text-center text-[#222429] mb-5 max-sm:text-[32px] max-sm:leading-10">
              {headerData.title}
            </h1>
            <p className="font-rubik font-normal text-base leading-7 text-center text-[#383a3e]">
              {headerData.text}
            </p>

            <div className="grid grid-cols-2 gap-[30px] mt-[60px] px-[150px] max-sm:grid-cols-1 max-sm:px-0 sm:max-md:grid-cols-1 sm:max-md:px-0 md:max-lg:px-0">
              {cardData.map((item, i) => (
                <div
                  key={item.id}
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
      </div>
    </>
  );
};

export default HowNftBeUtilized;
