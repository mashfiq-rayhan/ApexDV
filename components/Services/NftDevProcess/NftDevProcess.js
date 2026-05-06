import React from "react";

const NftDevProcess = () => {
  const data = [
    {
      id: 1,
      icon: "images/Service Page/Icons.svg",
      title: "Prepare",
      text: "Non-fungible tokens are a blockchain-based technology. Each token is a unique record in a blockchain of your choice, which functions as an immutable digital signature and guarantees uniqueness and ownership. It leads to impenetrable security of the asset put into the token since any blockchain is virtually unhackable nowadays.",
    },
    {
      id: 2,
      icon: "images/Service Page/Icons-1.svg",
      title: "Assess",
      text: "Our specialists determine the precise development specs, estimate the cost and time requirements, arrange the launch plan and assign Innowise Group’s NFT experts to the project.",
    },
    {
      id: 3,
      icon: "images/Service Page/Icons-2.svg",
      title: "Design",
      text: "We forge a mock-up of the NFT product representing its presumed look, UI/UX, features, implemented technologies, and discuss the release plan.",
    },
    {
      id: 4,
      icon: "images/Service Page/Icons-3.svg",
      title: "Develop",
      text: "ApexDv’s NFT specialists tailor the project and conduct all the needed quality assurance operations proving its impeccability. During this stage, all the progress and metrics can be tracked via a preferable project management tool.",
    },
    {
      id: 5,
      icon: "images/Service Page/Icons-4.svg",
      title: "Support",
      text: "After a successful project launch, our talents continue working on the project by providing support, rolling out updates containing new features, and scaling it up as the business grows.",
    },
  ];
  return (
    <>
      <div className="relative my-[60px] py-[60px] bg-[#fafafa]">
        <div className="absolute right-0 top-[100px] w-[182px] max-w-full h-[133.35px] bg-[#1caf83] opacity-40 blur-[100px] z-1 max-lg:opacity-20"></div>
        <div className="absolute left-0 top-[150px] w-[182px] max-w-full h-[133.35px] bg-[#1caf83] opacity-40 blur-[100px] z-1 max-lg:opacity-20"></div>
        <div className="container p-5">
          <h1 className="font-teko font-normal text-[64px] leading-[63px] text-center text-[#1a1a1a] mb-[60px] max-sm:text-[32px] max-sm:leading-10 max-sm:mb-5">
            Our NFT development process
          </h1>
          <div className="grid grid-cols-2 gap-[30px] max-sm:grid-cols-1 sm:max-md:grid-cols-2">
            {data.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="border border-[#222429] shadow-[0_4px_0_#200e32] rounded-[10px] p-[30px] bg-white">
                <div className="mb-4">
                  <img className="" src={item.icon} alt="" />
                </div>
                <h2 className="font-teko font-normal text-[32px] leading-10 text-[#222429] mb-2.5">
                  {item.title}
                </h2>
                <p className="font-rubik font-normal text-base leading-7 text-[#383a3e]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center px-[300px] mt-[30px] max-sm:px-0 sm:max-md:px-0 md:max-lg:px-0">
            {data.slice(4).map((item) => (
              <div
                key={item.id}
                className="border border-[#222429] shadow-[0_4px_0_#200e32] rounded-[10px] p-[30px] bg-white">
                <div className="mb-4">
                  <img className="" src={item.icon} alt="" />
                </div>
                <h2 className="font-teko font-normal text-[32px] leading-10 text-[#222429] mb-2.5">
                  {item.title}
                </h2>
                <p className="font-rubik font-normal text-base leading-7 text-[#383a3e]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NftDevProcess;
