import React from 'react';

export default function Expertise({details}) {
    return (
        <div className="flex flex-col items-start p-5 bg-[#fefefe] border border-[#1caf83] shadow-[-8px_-8px_0px_#1caf83] rounded-[11px] h-[207px] md:h-[207px] w-full">
            <p className="font-teko font-normal text-[32px] leading-[40px]">{details.title}</p>
            <p className="font-rubik font-normal text-base leading-7">{details.description}</p>
        </div>
      );
}
