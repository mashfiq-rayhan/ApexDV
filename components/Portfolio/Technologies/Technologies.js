import React from "react";
import Tech from "./Tech";

const tech = [
  {
    img: "/images/Portfolio/Portfolio/web3.svg",
    name: "Web3.js",
  },
  {
    img: "/images/Portfolio/Portfolio/haskell.svg",
    name: "Haskell",
  },
  {
    img: "/images/Portfolio/Portfolio/metamask.svg",
    name: "Metamask",
  },
  {
    img: "/images/Portfolio/Portfolio/nodejs.svg",
    name: "Node.js",
  },
  {
    img: "/images/Portfolio/Portfolio/python.svg",
    name: "Python",
  },
  {
    img: "/images/Portfolio/Portfolio/React.js.svg",
    name: "React.js",
  },
  {
    img: "/images/Portfolio/Portfolio/react_native.svg",
    name: "React Native",
  },
  {
    img: "/images/Portfolio/Portfolio/flutter.svg",
    name: "Flutter",
  },
  {
    img: "/images/Portfolio/Portfolio/typescript.svg",
    name: "Typescript",
  },
  {
    img: "/images/Portfolio/Portfolio/Solidity.svg",
    name: "Solidity",
  },
];

export default function Technology() {
  return (
    <div className="relative">
       <div className="bg-[#1caf83] opacity-40 md:opacity-20 blur-[100px] absolute right-0 top-[43%] w-[182px] max-w-full h-[133.35px] z-[1]"></div>
                <div className="bg-[#1caf83] opacity-40 md:opacity-20 blur-[100px] absolute left-0 top-[43%] w-[182px] max-w-full h-[133.35px] z-[1]"></div>
       <div className="container p-5 mt-[30px] md:mt-[120px]">
      <div className="pb-[30px] md:pb-[60px] flex flex-row justify-center items-center font-teko font-normal text-[32px] md:text-[64px] leading-[40px] md:leading-[63px] text-center text-[#222429]">
        <p>
          Technologies we use for building this foundation
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-[30px]">
        {tech.map((t) => (
          <div key={t.name}>
            <Tech source={t.img} desc={t.name}/>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
}
