import React from 'react';

const NoStress = () => {
    const data = [
        {
            id: 1,
            title: "Select specialists based on their skills rather than titles",
            text: "Not all projects require a senior engineer. For your project we will select developers with relevant skills based on our Developer Roadmap. Your can involve your specialists to participate in technical interviews."
        },
        {
            id: 2,
            title: "Experience in web projects since 2016",
            text: "Working together with us, you involve a highly experienced team in project development. Our projects vary from simple marketplaces to high-load fintech startups"
        },
        {
            id: 3,
            title: "We act predictably",
            text: "We understand the importance of transparency. Sometimes you have to know: what functionality you are expecting in the output; timelines when the result will be delivered; what is the next step when the project is over. We help to cover all these issues at the very beginning."
        },
    ]
    
    const marginLeftClasses = ['ml-0 md:ml-[100px]', 'ml-0 md:ml-[200px]', 'ml-0 md:ml-[300px]'];
    
    return (
        <div className="relative">
              <div className="bg-[#1caf83] opacity-40 md:opacity-20 blur-[100px] absolute right-0 top-[70%] w-[182px] max-w-full h-[133.35px] z-[1]"></div>
                <div className="bg-[#1caf83] opacity-40 md:opacity-20 blur-[100px] absolute left-0 top-[70%] w-[182px] max-w-full h-[133.35px] z-[1]"></div>
            <div className='container p-5'>
                <div>
                    <h1 className="font-teko font-normal text-[32px] md:text-[64px] leading-[40px] md:leading-[63px] text-[#222429] mb-5 md:mb-[60px]">No Stress From Us</h1>
                </div>
                <div>
                    {
                        data.map((item, i) => (
                            <div key={item.id} className={`flex ${marginLeftClasses[i]}`}>
                                <div>
                                    <div className="bg-[#1caf83] w-4 h-4 rounded-full mr-5 mt-2.5"></div>
                                </div>
                                <div>
                                    <h1 className="font-teko font-normal text-[32px] leading-[40px] text-[#222429] mb-4">{item.title}</h1>
                                    <p className="font-rubik font-normal text-base leading-7 text-[#383a3e] mb-6">{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="ml-0 md:ml-[335px] mb-5">
                    <p>We help you figure it out at every milestone
                    </p>
                    

                </div>
                <div className="ml-0 md:ml-[335px]">
                    <li className="mb-2.5">We draft a work plan for a week or two, so that our expectations could meet.</li>
                    <li className="mb-2.5">At the end of each iteration we send a report, so you can see the actual status of work process.</li>
                    <li className="mb-2.5">We demonstrate the completed parts of the project, discuss, plan and make adjustments.</li>
                    <li className="mb-2.5">After project finish we deliver the code to you and it becomes your intellectual property. Now the project is ready to run on the server.</li>
                    {/* <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion> */}

                </div>
            </div>

        </div>
    );
};

export default NoStress;