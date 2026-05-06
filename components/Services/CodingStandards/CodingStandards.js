import React from "react";

const CodingStandards = () => {
  const data = [
    {
      id: 1,
      title: "Smart",
      text: "Smart coding is to avoid all the technical risk right away while writing the code and make it fault resistant. We plan the actions and how users could react before writing the code.",
    },
    {
      id: 2,
      title: "Stable",
      text: "We take utter care of code stability before releasing any of the products. We use various testing tools to check the stability of code as well as products.",
    },
    {
      id: 3,
      title: "Reusable",
      text: "The reusability of code reduces redundancy and development time. The optimization of code is very important and we do it by having reusability of the code.",
    },
    {
      id: 4,
      title: "Beautiful",
      text: "Beautiful Code is the code that seems professional and understandable. It is written as per the widely accepted coding standard.",
    },
  ];
  return (
    <>
      <div className="relative">
        <div className="container p-5">
          <div className="absolute left-0 top-[420px] w-[182px] max-w-full h-[133.35px] bg-[#1caf83] opacity-40 blur-[100px] z-1 max-lg:opacity-20"></div>
          <div className="grid grid-cols-2 gap-[30px] items-center mb-[60px] max-sm:grid-cols-1 sm:max-md:grid-cols-1">
            <div>
              <h1 className="font-teko font-normal text-[56px] leading-[60px] text-[#222429] mb-[60px] max-sm:text-[32px] max-sm:leading-5 max-sm:mb-5 sm:max-md:text-[40px] sm:max-md:leading-5 sm:max-md:mb-5 md:max-lg:mb-[30px]">
                CODING STANDARDS
              </h1>
              <div className="grid grid-cols-2 gap-[30px] max-sm:grid-cols-1 max-sm:gap-[15px] sm:max-md:grid-cols-1 sm:max-md:gap-[15px] md:max-lg:gap-[15px]">
                {data.map((item) => (
                  <div key={item.id}>
                    <h1 className="font-teko font-normal text-[32px] leading-10 text-[#222429] mb-4 max-sm:text-2xl max-sm:mb-0 sm:max-md:text-2xl sm:max-md:mb-0">
                      {item.title}
                    </h1>
                    <p className="font-rubik font-normal text-base leading-7 text-[#383a3e]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                className="w-full"
                src="images/Service Page/Frame 13814 1.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodingStandards;
