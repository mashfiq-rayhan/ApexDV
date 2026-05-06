import React, { useEffect, useRef, useState } from "react";
import { RecentWorkStatic } from "../StaticFiles/StaticFile";
import Image from "next/image";
export default function RecentWorks() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [render, setRender] = useState(false);
  const handleHover = (event) => {
    setCount(event.currentTarget.id);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setRender(true);
    }
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  return (
    <>
      <div className="p-0 h-full mx-[100px] hidden md:block">
        <h1 className="h-[63px] font-teko font-normal text-[64px] leading-[63px] text-[#222429] mb-[30px]">Recent Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex flex-col items-start justify-start pl-0 gap-[30px] w-full h-[500px] overflow-y-scroll overflow-x-hidden [scroll-behavior:smooth] [direction:rtl] [&::-webkit-scrollbar-track]:rounded-[10px] [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:bg-white [&::-webkit-scrollbar]:pl-5 [&::-webkit-scrollbar-thumb]:rounded-[10px] [&::-webkit-scrollbar-thumb]:bg-white">
              {RecentWorkStatic.map((rw) => (
                <div
                  key={rw.id}
                  id={rw.id}
                  onMouseOver={handleHover}
                  className="hover:bg-[#e1ebfa]">
                  <a href={`portfolio-${rw.page}`}>
                    <div ref={elementRef} className="flex flex-col items-start ml-[25px] gap-[30px] [direction:ltr]">
                      <p className="h-10 font-teko font-normal text-[32px] leading-[40px] text-[#222429]">
                        {rw.title}
                      </p>
                      <p className="font-rubik font-normal text-base leading-7">{rw.text}</p>
                      <p className="h-7 font-rubik font-normal text-base leading-7 text-[#909194]">
                        {rw.date}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="w-full h-[50vh] bg-[#e7e9e7] rounded-[5px] flex flex-col justify-between items-center gap-[30px]">
              <Image
                className="w-full h-full"
                src={`${RecentWorkStatic[count].link}`}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-0 h-full mx-[100px] block md:hidden">
        <div className="grid grid-cols-1">
          <div>
            <div className="flex flex-col items-start justify-start p-0 gap-[30px]">
              {RecentWorkStatic.map((rw) => (
                <a key={rw.id} href={`portfolio-${rw.page}`}>
                  <div className="flex flex-col items-start p-0 gap-[30px] transition-transform duration-200 hover:scale-[1.09]">
                    <div className="w-full bg-[#e7e9e7] rounded-[5px] flex flex-col justify-between items-center gap-[30px]">
                      <Image
                        className="w-full h-full"
                        src={rw.link}
                        width={500}
                        height={500}
                      />
                    </div>
                    <p className="w-full h-full font-teko font-normal text-[32px] leading-[40px] text-[#222429]">
                      {rw.title}
                    </p>
                    <p className="w-full font-rubik font-normal text-base leading-7">
                      {rw.text}
                    </p>
                    <p className="w-full h-full font-rubik font-normal text-base leading-7 text-[#909194]">
                      {rw.date}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
