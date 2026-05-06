import React from 'react';

const BenefitsOfNft = () => {
    const headerData = {
        title: "Benefits of NFTs",
        text: "Apart from being one of the most booming technologies at the moment, non-fungible tokens offer an array of opportunities for individuals and businesses that were not available earlier. Innowise Group’s broad expertise in the field gives a chance to secure a formidable position in this market."
    };
    const cardData = [
        {
            icon: "/images/Service Page/image 498.svg",
            title: "Security",
            text: "Non-fungible tokens are a blockchain-based technology. Each token is a unique record in a blockchain of your choice, which functions as an immutable digital signature and guarantees uniqueness and ownership. It leads to impenetrable security of the asset put into the token since any blockchain is virtually unhackable nowadays.",
        },
        {
            icon: "/images/Service Page/image 499.svg",
            title: "Versatility",
            text: "NFTs have a wide range of use cases. You can put digital art, music, GIFs, collectibles, etc. into a token and spread it to any relevant audience. Moreover, they can be used not only as a proof of authenticity, but also as a certificate of ownership of any physical or digital item. Potentially, we can utilize this technology to create digital IDs that will be impossible to forge.",
        },
        {
            icon: "/images/Service Page/image 500.svg",
            title: "Market efficiency",
            text: "Combining all the features above, we get a significant increase in market efficiency established by NFTs. Utilizing NFTs doesn’t just bring the creators and consumers closer to each other, while simultaneously solidly impacting the market. NFTs can streamline and secure buy/sell operations and enable easier monetization.",
        },
        
    ];
    return (
        <>
        <div className="relative">
            <div className="container p-5">
            <div className="relative">
                <div className="absolute right-0 top-[400px] w-[182px] max-w-full h-[133.35px] bg-[#1caf83] opacity-40 blur-[100px] z-1 max-sm:top-[1050px] max-sm:w-[136px] sm:max-md:top-[800px] sm:max-md:w-[136px] md:max-lg:top-[600px] md:max-lg:w-[136px] lg:opacity-20 max-lg:opacity-20"></div>
                <div className="absolute left-0 top-[200px] w-[182px] max-w-full h-[133.35px] bg-[#1caf83] opacity-40 blur-[100px] z-1 max-sm:top-[600px] max-sm:w-[136px] sm:max-md:top-[400px] sm:max-md:w-[136px] md:max-lg:top-[200px] md:max-lg:w-[136px] lg:opacity-20 max-lg:opacity-20"></div>
                <h1 className="font-teko font-normal text-[64px] leading-[63px] text-[#222429] mb-5 max-sm:text-[32px] max-sm:leading-[40px] sm:max-md:text-[40px] sm:max-md:leading-[43px]">{headerData.title}</h1>
               <p className="font-rubik font-normal text-base leading-7 text-[#383a3e]">{headerData.text}</p>

                <div className="grid grid-cols-3 gap-[30px] mt-[60px] relative max-sm:grid-cols-1 max-sm:px-2.5 max-sm:mt-5 sm:max-md:grid-cols-1">
                    {cardData.map((item, i) => (
                        <div key={i} className="border border-[#200e32] p-5 rounded-[11px] shadow-[-8px_-8px_0px_#200e32] z-[100] bg-white">
                            <div className="mb-4">
                                <img className="" src={item.icon} alt="" />
                            </div>
                            <div className="">
                                <h1 className="font-teko font-normal text-[32px] leading-10 text-[#222429] mb-2.5">{item.title}</h1>
                                <p className="font-rubik font-normal text-base leading-7 text-[#383a3e]">{item.text}</p>
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

export default BenefitsOfNft;