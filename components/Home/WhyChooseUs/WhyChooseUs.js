import React from 'react'

const WhyChooseUs = () => {
    const dataRow1 = [
        {
            alpha: "A",
            num: "Strength 01",
            details: "ApexDv is committed to helping its clients reach their goals, to customizing as per their needs, to providing an innovative environment, and to making a difference."
        },
        {
            alpha: "B",
            num: "Strength 02",
            details: "Our strong sense of identification with client projects means that we are constantly striving to provide solutions, even for issues they aren't yet aware of."
        },
    ]
    const dataRow2 = [
        {
            alpha: "C",
            num: "Strength 03",
            details: "Our approach is distinctly innovative. We constantly seek new ways to increase client visibility and brand value. We also look to get the most out of advances in digitalisation, and embrace client technology platforms."
        },
        {
            alpha: "D",
            num: "Strength 04",
            details: "We specially select teams for every project, to ensure each project gets the attention of the people who have the most relevant technical skills, languages and knowledge."
        },
    ]
    
    return (
        <div 
            className="mt-[60px] h-[1200px] lg:h-[649px] bg-cover bg-no-repeat" 
            style={{backgroundImage: "url('/images/LandingPage/WhyChooseUs/background.png')"}}>
            <h2 className="py-[60px] px-[50px] text-white text-center font-teko font-normal text-[32px] sm:text-[64px] leading-[40px] sm:leading-[64px]">
                Why Choose Us?
            </h2>
            
            <div className="flex flex-col md:flex-row justify-evenly items-center mb-2.5">
                {dataRow1.map((dataObj, index) =>(
                    <div key={index} className="flex flex-col lg:flex-row justify-center items-center">
                        <div className="h-[188px] w-[159px] bg-white rounded-[10px] mb-2.5 lg:mb-10 flex flex-col items-center justify-between overflow-hidden">
                            <img className="m-4" alt="Trophy" src="/images/LandingPage/WhyChooseUs/trophy.svg" />
                            <div className="h-16 w-[137px] bg-[#1CAF83] flex items-center justify-center">
                                <h4 className="text-white text-3xl">30%</h4>
                            </div>
                        </div>
                        <div className="m-2.5 md:m-5 w-[300px] flex flex-col justify-center lg:justify-evenly items-center lg:items-start">
                            <div className="h-[60px] w-[60px] border-2 border-[#1CAF83] flex justify-center items-center">
                                <h5 className="text-white font-teko font-normal text-[32px] leading-[40px]">{dataObj.alpha}</h5>
                            </div>
                            <h4 className="text-white font-teko font-normal text-[32px] leading-[40px] my-1.5 md:my-[17px]">{dataObj.num}</h4>
                            <p className="text-white font-rubik font-normal text-center lg:text-left">{dataObj.details}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="flex flex-col md:flex-row justify-evenly items-center mb-5 lg:mb-10">
                {dataRow2.map((dataObj, index) =>(
                    <div key={index} className="flex flex-col lg:flex-row justify-center items-center">
                        <div className="h-[188px] w-[159px] bg-white rounded-[10px] mb-2.5 lg:mb-10 flex flex-col items-center justify-between overflow-hidden">
                            <img className="m-4" alt="Trophy" src="/images/LandingPage/WhyChooseUs/trophy.svg" />
                            <div className="h-16 w-[137px] bg-[#1CAF83] flex items-center justify-center">
                                <h4 className="text-white text-3xl">30%</h4>
                            </div>
                        </div>
                        <div className="m-2.5 md:m-5 w-[300px] flex flex-col justify-center lg:justify-evenly items-center lg:items-start">
                            <div className="h-[60px] w-[60px] border-2 border-[#1CAF83] flex justify-center items-center">
                                <h5 className="text-white font-teko font-normal text-[32px] leading-[40px]">{dataObj.alpha}</h5>
                            </div>
                            <h4 className="text-white font-teko font-normal text-[32px] leading-[40px] my-1.5 md:my-[17px]">{dataObj.num}</h4>
                            <p className="text-white font-rubik font-normal text-center lg:text-left">{dataObj.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyChooseUs;
