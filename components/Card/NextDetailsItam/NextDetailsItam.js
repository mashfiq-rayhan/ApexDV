import Link from 'next/link';
import React from 'react';

const NextDetailsItam = ({ title, subtitle, img, href, cardIndex = 1 }) => {
    const cardStyles = {
        1: "text-center p-[35px] px-5 bg-[#11ce7a] rounded-b-[20px] max-md:p-5",
        2: "text-center p-[35px] px-5 bg-[#0c2113] rounded-bl-[20px] max-md:p-5",
        3: "text-center p-[35px] px-5 bg-[#61a23b] rounded-b-[20px] max-md:p-5"
    };
    
    const titleColors = {
        1: "text-[#222429]",
        2: "text-white",
        3: "text-white"
    };
    
    return (
       <Link href={href} passHref={true}>
        <div className={cardStyles[cardIndex] || cardStyles[1]}>
         <h2 className={`font-teko text-[56px] font-normal leading-[60px] text-center cursor-pointer ${titleColors[cardIndex] || titleColors[1]}`}>{title}</h2>
            <p className="font-rubik text-lg font-normal leading-7 text-center text-[#e9e9ea]">{subtitle}</p>
           <img src={img} alt="" className="w-full cursor-pointer mt-[50px] md:mt-[30px] max-md:mt-[30px]" />
        </div>
        </Link>
        
    );
};

export default NextDetailsItam;